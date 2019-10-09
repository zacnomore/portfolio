<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 680px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-right: 20px;
}
</style>
