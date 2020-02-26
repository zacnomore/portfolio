<template>
  <Layout>
    <header>
      <h1>Writing</h1>
    </header>
    <main>
      <Card v-for="{ node } in $page.allBlogPost.edges" :key="node._id"
        :path="node.path" 
        :id="node.id"
        :title="node.title"
        :timeToRead="node.timeToRead" 
        :description="node.description"
        :date="node.date"
      />
    </main>
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue';
export default {
  components: {
    Card
  }
}
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
 