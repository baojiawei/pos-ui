<template>
  <div id="app">
    <pos-input v-model="value" type="text" placeholder="请输入内容" name="username"></pos-input>
    <pos-input v-model="value" type="password" placeholder="请输入内容" name="username"></pos-input>
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss"></style>
