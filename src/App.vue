<template>
  <div id="app">
    <pos-upload
      name="avatar"
      action="http://localhost:3000/upload"
      :file-list="fileList"
      :limit="3"
      :multiple="true"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
    ></pos-upload>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      fileList: [
        { url: 'xxx', name: 'avatar.png' },
        { url: 'xxx1', name: 'avatar1.png' }
      ]
    }
  },
  methods: {
    handleExceed() {},
    handleChange() {},
    handleSuccess() {},
    handleError() {},
    handleProgress() {}
  }
}
</script>

<style lang="scss"></style>
