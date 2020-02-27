<template>
  <Layout>
    <div class="profile">
      <g-image class="picture" src="~/assets/me.jpg" width="300" alt="Zac as a child looking out over the Pacific ocean."/>
      <div class="description">
        <p>Hello! I'm Zac Svoboda a software developer with a love for interactive technologies. </p>
        <nav>
          <a href="https://github.com/zacnomore">
            <g-image src="~/assets/icons/github.svg" width="40"/>
          </a>
          <a href="mailto:cczac1@gmail.com">
            <g-image src="~/assets/icons/mail.svg" width="40"/>
          </a>
          <a href="https://www.linkedin.com/in/zacharysvoboda/">
            <g-image src="~/assets/icons/linkedin.svg" width="40"/>
          </a>
           <a href="/resume.pdf" download>
            <g-image src="~/assets/icons/file-text.svg" width="40"/>
           </a>
        </nav>
      </div>
    </div>
    <div class="writing">
      <h2>Recent Articles</h2>
      <Card v-for="{ node } in $page.allBlogPost.edges" :key="node._id"
        :path="node.path" 
        :id="node.id"
        :title="node.title"
        :timeToRead="node.timeToRead" 
        :description="node.description"
        :date="node.date"
      />
    </div>
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
  query Home($page: Int) {
    allBlogPost(
      page: $page, 
      filter: { 
        published: { eq: true } 
      }, 
      limit: 3
    ) {
      edges {
        node {
          id
          title
          description
          path
          timeToRead
          date(format: "MMMM D. YYYY")
          published
        }
      }
    }
  }
</page-query>

<style lang="scss" scoped>
.profile {
  min-height: 40vh;
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  border-bottom: 1px solid $primary-foreground;

  .picture {
    border-radius: 200px;
    height: 200px;
    width: 200px;

    @media screen and (min-width: 800px) {
      width: unset;
      height: unset;
    }
  }

  .description {
    padding: 40px;
    flex: 1;
    min-width: 300px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  nav {
    display: flex;
    justify-content: center;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 10px;
      font-size: 50px;
      line-height: 50px;

      &:hover {
        text-decoration: none;
        transform: scale(1.05);
      }
    }
  }
}

.writing {
  margin-top: 60px;
}
</style>
