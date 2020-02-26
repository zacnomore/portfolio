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
    padding: 40px 0;
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
