<template>
    <nav class="pagination">
      <g-link class="previous" v-if="previousPost" :to="previousPost.node.path">&lt; Previous</g-link>
      <g-link class="next" v-if="nextPost" :to="nextPost.node.path">Next &gt;</g-link>
    </nav>
</template>

<script>
export default {
  props: {
    previousPost: Object,
    nextPost: Object
  },
  metaInfo () {
    return {
      title: this.$page.currentPost.title
    }
  }
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: space-between;

  $nav-width: $content-width + 250;
  @media screen and (min-width: $nav-width) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 80%;

    a.previous {
      position: absolute;
      right: calc(50vw + 20px + #{$content-width} / 2);
      bottom: 20px;
    }

    a.next {
      position: absolute;
      left: calc(50vw + 20px + #{$content-width} / 2);
      bottom: 20px; 
    }
  }
}
</style>