<template>
  <div id="app">
    <pos-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-value="100"
      inactive-value="0"
      @change="handleChange"
    >
    </pos-switch>
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: 100
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss"></style>
