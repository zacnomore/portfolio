<template>
    <div>
      <header>
        <h1>Zachary Svoboda</h1>
        <p>{{subtitle}}</p>
      </header>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      subtitle: this.randomizeText('Test')
    }
  },
  methods: {
    randomizeText(text) {
      return text.split('').map(value => this.randomizeLetter(value)).join('');
    },

    randomizeLetter(letter) {
      return Math.random() > .5 ? letter.toUpperCase() : letter.toLowerCase();
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
