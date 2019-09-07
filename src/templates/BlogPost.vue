<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <span>{{ $page.blogPost.description }}</span>
    <div class="codepen" data-prefill>

      <pre data-lang="html"> 
        <span>POC</span>
      </pre>
    </div>
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