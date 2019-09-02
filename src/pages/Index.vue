<template>
  <Layout>
    <h1>Hello</h1>
    <p>Welcome to my little site. There's not too much to look at right now but you're welcome to stay a while.</p>
    <ul>
      <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <router-link :to="node.path">
          <h2 v-html="node.title"/>
        </router-link>
        <div v-html="node.description"/>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {}
</script>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          id
          title
          path
        }
      }
    }
  }
</page-query>

<style lang="scss" scoped>
  li {
    list-style: none;
  }
</style>
