<template>
  <Layout>
    <h1>{{ $page.currentPost.title }}</h1>
    <div v-html="$page.currentPost.content" />
    <PageNavigation :nextPost="nextPost" :previousPost="previousPost"/>
  </Layout>
</template>

<script>
import PageNavigation from '~/components/PageNavigation.vue';
export default {
  components: {
    PageNavigation
  },
  metaInfo () {
    return {
      title: this.$page.currentPost.title
    }
  },
  computed: {
    allPostsEdges: function() {
      return this.$page.allPosts.edges;
    },
    currentPostIndex: function() { 
      return this.allPostsEdges.findIndex(edge => this.$page.currentPost.id === edge.node.id);
    },
    nextPost: function() {
      return this.allPostsEdges[this.currentPostIndex - 1];
    },
    previousPost: function() {
      return this.allPostsEdges[this.currentPostIndex + 1];
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
</style>