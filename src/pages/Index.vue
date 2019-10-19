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
        <div class="meta">
          <span v-if="node.timeToRead">{{node.timeToRead}} minute read</span>
          <span v-if="node.date">Posted on {{node.date}}</span>
        </div>
      </g-link>
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
  $border-size: 1px;
  $border-mask-size: 2px;
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
    position: relative;

    clip-path: polygon( 
      calc(0% + #{$border-mask-size}) calc(0% + #{$border-mask-size}), /* top left */
      calc(100% - #{$border-mask-size}) calc(0% + #{$border-mask-size}), /* top right */
      calc(100% - #{$border-mask-size}) calc(100% - #{$border-mask-size}), /* bottom right */
      calc(0% + #{$border-mask-size}) calc(100% - #{$border-mask-size}) /* bottom left */
    );

    &:hover {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    &::after {
      box-shadow: 0px 5px 10px -2px rgba(0,0,0,0.4);
      // opacity: 0;
      // transition: all .2s ease-in-out;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
      content: '';
      position: absolute;
    }

    &:hover::after {
      opacity: 1;
    }

    h2 {
      margin: 0;
    }

    .meta {
      margin-top: 10px;

      > span {

        &+ span::before {
          content: ', ';
        }
      }
    }
  }
</style>
 