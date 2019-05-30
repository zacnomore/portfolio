<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <span>{{ $page.blogPost.date }}</span>
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

import Vector3 from '../../blog/svg-3d-projection/Vector3';
console.log(new Vector3(1,2,3));

</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
    }
  }
</page-query>