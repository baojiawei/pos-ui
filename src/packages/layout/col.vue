<template>
  <div class="pos-col" :class="colClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pos-col',
  props: {
    span: {
      type: Number,
      default: 24
    }
  },
  computed: {
    colClass() {
      let classes = []
      classes.push(`pos-col-${this.span}`)
      return classes
    }
  }
}
</script>

<style lang="scss">
@for $i from 1 through 24 {
  .pos-col-#{$i} {
    width: $i/24 * 100%;
  }
}
</style>
