<template>
  <svg class="pos-icon" aria-hidden>
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import '../styles/icon'
export default {
  name: 'pos-icon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.pos-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
