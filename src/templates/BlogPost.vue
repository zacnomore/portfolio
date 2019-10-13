<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <div v-html="$page.blogPost.content" />
  </Layout>
</template>

<script>
export default {
    metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
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
</style>