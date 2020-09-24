<template>
  <main class="pos-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'pos-main'
}
</script>

<style lang="scss">
.pos-main {
  flex: 1;
  padding: 20px;
}
</style>
