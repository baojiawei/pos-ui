<template>
  <aside class="pos-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'pos-aside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
}
</script>
