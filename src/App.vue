<template>
  <div id="app">
    <pos-upload
      name="avatar"
      action="http://localhost:3000/upload"
      :file-list="fileList"
      :limit="3"
      accept="image/jpeg"
      :multiple="true"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
    >
      <pos-button icon="shangchuan" type="primary">点击上传</pos-button>
      <div slot="tip">只能上传jpg/png文件，且不能超过500kb</div>
    </pos-upload>
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
    handleExceed(files, fileList) {
      console.log(files, fileList)
      console.log('用户传递的已经超过预期数量了')
    },
    handleChange() {},
    handleSuccess() {},
    handleError() {},
    handleProgress() {}
  }
}
</script>

<style lang="scss"></style>
