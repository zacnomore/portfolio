<template>
  <Layout>
    <h1>Welcome</h1>
    <p>I have a just a little bit of writing about code for you at the moment.</p>
    <ul>
      <li v-for="{ node } in $page.allBlogPost.edges.filter(({ node }) => node.published)" :key="node._id">
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
          description
          path
          published
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
