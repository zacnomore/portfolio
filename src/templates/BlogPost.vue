<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <div v-html="$page.blogPost.content" />
  </Layout>
</template>

<script>
const greet = import("../../node_modules/@zacnomore/wasm-demo/wasm_demo");
greet.then(greet => {
  greet.greet("we finally made it what the heck");
});


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
      published
    }
  }
</page-query>