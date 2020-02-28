<template>
  <canvas class="glitch"/>
</template>

<script>
import glitch from 'glitch-canvas';
export default {
  props: ['imageURL'],
  mounted: function() {
    const canvas = document.querySelector(".glitch");
    const ctx = canvas.getContext("2d");

    function drawNormal() {
      ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
    }

    const glitchTime = 500;
    const waitTime = 5000;
    function draw(startMillis) {
      if(performance.now() > startMillis + glitchTime) {
        drawNormal();
        setTimeout(() => {
          draw(performance.now());
        }, waitTime);
      } else {
        const seed = Math.floor(Math.random() * (99 - 1) + 1);
        glitch({amount: 10, interations: 10, quality: 99, seed})
          .fromImage(image)
          .toImage()
          .then(image => {
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(() => {
              draw(startMillis);
            })
          })
          .catch(e => {
            drawNormal();
          });
      }

    }


    const image = new Image();
    image.src = this.imageURL;
    image.onload = () => {
      drawNormal();
      draw(performance.now());
    }
  }
}
</script>

<style lang="scss" scoped>
  .glitch {
    width: 100%;
    height: 100%;
  }
</style>
