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
      :before-upload="beforeUpload"
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
    handleChange(file) {
      console.log(JSON.stringify(file), '用户触发onChange')
    },
    handleSuccess() {},
    handleError() {},
    handleProgress() {},
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 < 1

      if (!isJPG) {
        console.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        console.error('上传头像图片大小不能超过 500kb!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss"></style>
