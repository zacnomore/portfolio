<template>
  <g-link :to="path">
    <h2 v-html="title"/>
    <div v-html="description">
    </div>
    <div class="meta">
      <span v-if="timeToRead">{{timeToRead}} minute read</span>
      <span v-if="date">{{date}}</span>
    </div>
  </g-link>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'description', 'timeToRead', 'date', 'path']
}
</script>

<style lang="scss" scoped>
  $border-size: 1px;
  $border-mask-size: 2px;
  main a {
    border: $border-size solid $secondary-foreground;
    border-radius: 2px;
    cursor: pointer;
    display: block;
    margin: 10px 0;
    padding: 10px 20px;
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