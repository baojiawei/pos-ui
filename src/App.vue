<template>
  <div id="app">
    <pos-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"> </pos-switch>
    <pos-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    >
    </pos-switch>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value1: true,
      value2: true
    }
  }
}
</script>

<style lang="scss"></style>
