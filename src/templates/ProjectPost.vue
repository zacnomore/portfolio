<template>
  <Layout>
    <h1>{{ $page.currentPost.title }}</h1>
    <div class="links">
      <a v-if="$page.currentPost.repository" target="_blank" :href="$page.currentPost.repository">View the Source Code</a>
      <a v-if="$page.currentPost.site" target="_blank" :href="$page.currentPost.site">Visit Live Site</a>
    </div>
    <g-image :src="$page.currentPost.screenshot"></g-image>
    <h2>Technologies Used</h2>
    <ul v-if="technologies">
      <li v-for="tech in technologies" :key="tech">{{tech}}</li>
    </ul>
    <div class="content" v-html="$page.currentPost.content" />
    <PageNavigation :nextPost="nextPost" :previousPost="previousPost"/>
  </Layout>
</template>

<script>
import PageNavigation from '~/components/PageNavigation.vue'

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
    technologies: function () {
      return this.$page.currentPost && this.$page.currentPost.technologies && this.$page.currentPost.technologies.split(', ');
    },
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
  query ProjectPost ($path: String!) {
    currentPost: projectPost (path: $path) {
      title
      content
      repository
      site
      technologies,
      id
    },

    allPosts: allProjectPost {
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
.links a {
  display: block;
}


main {
  max-width: 720px;
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

.content {
  padding-bottom: 100px;
  @media screen and (min-width: 680px) {
    padding-bottom: 200px;
  }
}
</style>