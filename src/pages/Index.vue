<template>
  <Layout>
    <canvas id="image-canvas"></canvas>
  </Layout>
</template>

<script>
export default {
  mounted() {
    const image = new Image();
    const canvas = document.getElementById('image-canvas');
    const ctx = canvas.getContext('2d');

    image.onload = () => {
      ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
    };
    image.src = '/images/me.jpg';

  }
}
</script>

<style lang="scss" scoped>
#myImageElementInTheDom {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
