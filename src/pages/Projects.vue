<template>
  <Layout>
    <header>
      <h1>Projects</h1>
      <p></p>
    </header>
    <main>
      <Card v-for="{ node } in $page.allBlogPost.edges" :key="node._id"
        :path="path" 
        :id="node.id"
        :title="node.title"
        :timeToRead="node.timeToRead" 
        :description="node.description"
      />
    </main>
  </Layout>
</template>

<script>
export default {}
</script>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page, filter: {
      published: {
        eq: true
      }
    }) {
      edges {
        node {
          id
          title
          description
          path
          timeToRead
          date (format: "MMMM D. YYYY")
          published
        }
      }
    }
  }
</page-query>

<style lang="scss" scoped>
</style>
 