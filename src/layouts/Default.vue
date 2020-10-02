<template>
  <div>
    <header class="navigation">
      <nav>
        <g-link class="home" to='/'>Home</g-link>
      </nav>
      <nav>
        <g-link to='/articles/'>Articles</g-link>
        <g-link to='/projects/'>Projects</g-link>
      </nav>
    </header>
    <main>
      <slot/>
    </main>
  </div>
</template>


<script>
</script>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin: 0;
  padding: 0;
  font-size: 1.15rem;
  line-height: 1.5;
  min-height: 100vh;
  background-color: $secondary-background;
  color: $primary-foreground;
  background: $primary-background;

}

a {
  color: $secondary-foreground;
  text-decoration: none;

  &:hover,
  &.active {
    text-decoration: underline;
  }
}

main {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px 100px 20px;
}

header.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 40px;
  background-color: rgba($secondary-background, .85);
  border-bottom: .1px solid $tertiary-background;
  position: sticky;
  top: 0;
  z-index: 999;
  margin-bottom: 20px;
}

nav > * {
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}


.home:not(.active--exact) {
  text-decoration: unset;
}

canvas {
  z-index: -1;
}
</style>
