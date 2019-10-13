<template>
  <Layout>
    <header>
      <h1>Writing</h1>
      <p>I have a just a little bit of writing about code for you at the moment.</p>
    </header>
    <main>
      <g-link v-for="{ node } in $page.allBlogPost.edges" :key="node._id" :to="node.path">
        <h2 v-html="node.title"/>
        <div v-html="node.description"/>
      </g-link>
    </main>
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

  $border-size: 1px;
  main a {
    border: $border-size solid $secondary-foreground;
    border-radius: 2px;
    cursor: pointer;
    display: block;
    margin: 20px 0;
    padding: 10px;
    position: relative;
    text-decoration: none;
    transition: all .2s ease-out;

    clip-path: polygon( 
      calc(0% + #{$border-size}) calc(0% + #{$border-size}), /* top left */
      calc(100% - #{$border-size}) calc(0% + #{$border-size}), /* top right */
      calc(100% - #{$border-size}) calc(100% - #{$border-size}), /* bottom right */
      calc(0% + #{$border-size}) calc(100% - #{$border-size}) /* bottom left */
    );

    &:hover {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    h2 {
      margin: 0;
    }
  }
</style>
