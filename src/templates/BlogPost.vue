<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <span>{{ $page.blogPost.description }}</span>
    <div v-html="$page.blogPost.content"></div>
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
      date (format: "D MMMM, YYYY")
      content
      published
    }
  }
</page-query>