<template>
  <Layout>
    <div class="profile">
      <g-image class="picture" src="~/assets/me.jpg" width="300"/>
      <div class="description">
        <p>Hello! I'm Zac Svoboda a software developer with a love for interactive technology. </p>
        <nav>
          <a href="https://github.com/zacnomore">
            <g-image src="~/assets/github-icon.png" width="40"/>
          </a>
          <a href="https://www.linkedin.com/in/zacharysvoboda/">✉</a>
          <a href="https://www.linkedin.com/in/zacharysvoboda/">
            <g-image src="~/assets/linkedin-icon.png" width="40"/>
          </a>

        </nav>
      </div>
    </div>
    <!-- <p>I've been doing a lot of <g-link to="/writing/expanding-types-unobtrusively">Typescript</g-link> this 
      year from working in Angular. I'm currently diving deep into <g-link to="/writing/why-jamstack-is-actually-new">JAMstacks</g-link>, 
      I recently became a maintainer of a JAMstack framework built with Vue named <a href="https://gridsome.org/">Gridsome</a>. 
      I've made a couple websites using it like this portfolio and <g-link to="/project/cilantro">a local resturant's 
      landing page.</g-link></p> -->
  </Layout>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.profile {    
  height: 80vh;
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;

  .picture {
    border-radius: 200px;

  }

  .description {
    margin-left: 40px;
    flex: 1;
    min-width: 300px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  nav {
    display: flex;

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
</style>
