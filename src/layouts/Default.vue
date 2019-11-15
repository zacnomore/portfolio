<template>
  <div>
    <header class="navigation">
      <nav>
        <g-link to='/'>Home</g-link>
        <g-link to='/writing/'>Writing</g-link>
        <g-link to='/projects/'>Projects</g-link>
        <!-- <g-link to='/contact/'>Contact</g-link> -->
      </nav>
      <nav>
        <a href="https://github.com/zacnomore">Github</a>
      </nav>
    </header>
    <main>
      <slot/>
    </main>
  </div>
</template>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  min-height: 100vh;
  background-color: $secondary-background;
  color: $primary-foreground;
}

a {
  color: $secondary-foreground;
  text-decoration: none;

  &:hover,
  &.active--exact {
    text-decoration: underline;
  }
}

main {
  max-width: 680px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
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
</style>
