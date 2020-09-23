<template>
  <div class="pos-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pos-row'
}
</script>

<style lang="scss">
.pos-row {
  display: flex;
}
</style>
