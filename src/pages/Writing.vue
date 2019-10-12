<template>
  <Layout>
    <h1>Writing</h1>
    <p>I have a just a little bit of writing about code for you at the moment.</p>
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
          description
          path
        }
      }
    }
  }
</page-query>

<style lang="scss" scoped>
  ul {
    padding: 0 10px;
  }

  li {
    list-style: none;
  }
</style>
