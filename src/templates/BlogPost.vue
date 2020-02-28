<template>
  <Layout>
    <h1>{{ $page.currentPost.title }}</h1>
    <div v-html="$page.currentPost.content" />
    <nav class="pagination">
      <g-link class="previous" v-if="previousPost" :to="previousPost.node.path">&lt; Previous</g-link>
      <g-link class="next" v-if="nextPost" :to="nextPost.node.path">Next &gt;</g-link>
    </nav>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.currentPost.title
    }
  },
  computed: {
    allPosts: function() {
      return this.$page.allPosts.edges;
    },
    currentPostIndex: function() { 
      return this.allPosts.findIndex(edge => this.$page.currentPost.id === edge.node.id);
    },
    nextPost: function() {
      return this.allPosts[this.currentPostIndex - 1];
    },
    previousPost: function() {
      return this.allPosts[this.currentPostIndex + 1];
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    currentPost: blogPost (path: $path) {
      title
      content,
      id
    },
    allPosts: allBlogPost {
      edges {
        node {
          title,
          path,
          id
        }
      }
    }
  }
</page-query>

<style lang="scss">
$content-width: 720px;

main {
  max-width: $content-width;
  margin: auto;
}

@media screen and (min-width: 680px) {
  p {
    font-size: 18px; 
  }
}

img {
  width: 100%;
}

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