<template>
  <Layout>
    <h1>{{ $page.projectPost.title }}</h1>
    <div v-html="$page.projectPost.content" />
  </Layout>
</template>

<script>
export default {
    metaInfo () {
    return {
      title: this.$page.projectPost.title
    }
  }
}
</script>

<page-query>
  query ProjectPost ($path: String!) {
    projectPost (path: $path) {
      title
      content
    }
  }
</page-query>

<style lang="scss">
@media screen and (min-width: 680px) {
  p {
    font-size: 18px; 
  }
}

img {
  width: 100%;
}
</style>