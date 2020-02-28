<template>
  <canvas class="waves"/>
</template>

<script>
export default {
  name: 'Waves',
  mounted: function() {
    var canvas = document.querySelector(".waves");
    var ctx = canvas.getContext("2d");
    let resolution = 400;
    let numberOfWaves = 50;
    const setupWaves = (numWaves, numPoints) => Array(numWaves).fill(undefined).map((v, y) => {
      return Array(numPoints).fill(undefined).map((v, x) => {
        return {x, y};
      })
    });
    let waves = setupWaves(numberOfWaves, resolution);

    const resizeCanvas = () => {
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      canvas.width = parseInt(getComputedStyle(canvas).width);
      canvas.height = parseInt(getComputedStyle(canvas).height);
    };
    window.onresize = resizeCanvas
    resizeCanvas();

    let rateDecreased = false;
    const updateFramerate = (frameMillis) => {
      if(frameMillis > 20 && resolution > 50) {
        resolution -= 10
        waves = setupWaves(numberOfWaves, resolution);
        rateDecreased = true;
        console.log("decrease res");
      } else if(frameMillis < 5 && resolution < 600 && !rateDecreased) {
        resolution += 10;
        waves = setupWaves(numberOfWaves, resolution);
        console.log("increase res");
      }
    };

    let lastFrame = performance.now(); 
    function draw() {
      updateFramerate(performance.now() - lastFrame);
      waves.forEach(wave => {
        wave.map(
          // To Canvas space
          ({x, y}) => ({x: (x / resolution) * canvas.width * 1.1, y: (y / numberOfWaves) * canvas.height})
        ).map(
          // Modulation
          ({x, y}) => ({
            x,
            y: y + (5 * Math.sin((x / 100 * y) + y + performance.now() / 200))
          })
        ).forEach(({x, y}, i, arr) => {
          if(i === 0) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(230, 230, 230, 1)';
            ctx.lineWidth = x;
            ctx.moveTo(x, y);
          } else if (i === arr.length - 1) {
            ctx.stroke();
          } else {
            ctx.lineTo(x,  y);
          }
        });
      });

      requestAnimationFrame(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          draw();
      });

      lastFrame = performance.now();
    }
    draw();

  }
}
</script>

<style lang="scss" scoped>
canvas {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>