<template>
  <Layout>
    <div class="profile">
      <g-image class="picture" src="~/assets/me.jpg" width="300" alt="Zac as a child looking out over the Pacific ocean."/>
      <div class="description">
        <p>Hello! I'm Zac Svoboda a software developer with a love for interactive technologies.</p>
        <nav>
          <a href="https://github.com/zacnomore">
            <g-image src="~/assets/icons/github.svg" width="40" alt="GitHub Icon"/>
            GitHub
          </a>
          <a href="mailto:cczac1@gmail.com">
            <g-image src="~/assets/icons/mail.svg" width="40" alt="Email Icon"/>
            Email
          </a>
          <a href="https://www.linkedin.com/in/zacharysvoboda/">
            <g-image src="~/assets/icons/linkedin.svg" width="40" alt="LinkedIn Icon"/>
            LinkedIn
          </a>
           <a href="/resume.pdf" download>
            <g-image src="~/assets/icons/file-text.svg" width="40" alt="Document Icon"/>
            Resume
           </a>
        </nav>
      </div>
    </div>
    <div class="articles">
      <h2>Recent Articles</h2>
      <Card v-for="{ node } in $page.allBlogPost.edges" :key="node._id"
        :path="node.path" 
        :id="node.id"
        :title="node.title"
        :timeToRead="node.timeToRead" 
        :description="node.description"
        :date="node.date"
      />
      <g-link to="/articles">See More</g-link>
    </div>
    <div class="projects">
      <h2>Recent Projects</h2>
      <Card v-for="{ node } in $page.allProjectPost.edges" :key="node._id"
        :path="node.path" 
        :id="node.id"
        :title="node.title"
        :timeToRead="node.timeToRead" 
        :description="node.description"
        :date="node.date"
      />
      <g-link to="/projects">See More</g-link>
    </div>
  </Layout>
</template>

<script>
import Card from '~/components/Card.vue';

export default {
  components: {
    Card
  },
  metaInfo: {
    title: 'Portfolio',
    meta: [
      {

        key: 'description',
        name: 'description',
        content: 'Projects and writing from Zachary Svoboda, Software Developer '
      }
    ]
  }
}
</script>


<page-query>
  query Home {
    allBlogPost(
      limit: 3,
      filter: { 
        published: { eq: true } 
      }
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
    },
    allProjectPost(
      limit: 3,
      filter: { 
        published: { eq: true } 
      }
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
  justify-content: space-around;
  align-content: center;
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
      text-align: center;
      margin-right: 10px;

      img {
        align-self: center;
        height: 25px;
        width: 25px;
      }

      &:hover {
        text-decoration: none;
        transform: scale(1.05);
      }
    }
  }
}

.articles, .projects {
  margin-top: 60px;
}
</style>
