<template>
  <section class="pos-container" :class="{ isVertical }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'pos-container',
  data() {
    return {
      isVertical: true
    }
  },
  mounted() {
    this.isVertical = this.$children.some(child =>
      ['pos-footer', 'pos-header'].includes(child.$options.name)
    )
  }
}
</script>

<style lang="scss">
.pos-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  &.isVertical {
    flex-direction: column;
  }
}
</style>
