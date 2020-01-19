<template>
  <Layout>
    <h1>{{ $page.projectPost.title }}</h1>
    <div class="links">
      <a v-if="$page.projectPost.repository" target="_blank" :href="$page.projectPost.repository">See Code</a>
      <a v-if="$page.projectPost.site" target="_blank" :href="$page.projectPost.site">View Site</a>
    </div>
    <g-image :src="$page.projectPost.screenshot"></g-image>
    <h2>Technologies Used</h2>
    <ul v-if="technologies">
      <li v-for="tech in technologies" :key="tech">{{tech}}</li>
    </ul>
    <div v-html="$page.projectPost.content" />
  </Layout>
</template>

<script>
export default {
    metaInfo () {
    return {
      title: this.$page.projectPost.title
    }
  },
  computed: {
    technologies: function () {
      return this.$page.projectPost && this.$page.projectPost.technologies && this.$page.projectPost.technologies.split(', ');
    }
  }
}
</script>

<page-query>
  query ProjectPost ($path: String!) {
    projectPost (path: $path) {
      title
      content
      repository
      site
      technologies
    }
  }
</page-query>

<style lang="scss">
.links a {
  display: block;
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