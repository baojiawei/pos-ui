<template>
  <div class="pos-upload">
    <div @click="handleClick" class="pos-upload-btn">
      <slot></slot>
    </div>
    <input
      type="file"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
      :name="name"
      ref="input"
      class="hidden"
    />
    <div>
      <slot name="tip"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pos-upload',
  data() {
    return {
      tempIndex: 1,
      files: []
    }
  },
  props: {
    name: {
      type: String,
      default: 'file'
    },
    action: {
      type: String,
      required: true
    },
    fileList: {
      type: Array,
      default: () => []
    },
    accept: String,
    limit: Number,
    multiple: Boolean,
    onExceed: Function,
    onChange: Function,
    onSuccess: Function,
    onError: Function,
    onProgress: Function
  },
  watch: {
    // 默认将外部传入的fileList添加到组件内的变量files里
    fileList: {
      immediate: true,
      handler(fileList) {
        this.files = fileList.map(item => {
          item.uid = Date.now() + this.tempIndex++
          item.status = 'success'
          return item
        })
      }
    }
  },
  methods: {
    handleClick() {
      this.$refs.input.value = ''
      this.$refs.input.click()
    },
    handleChange(e) {
      const files = e.target.files
      this.uploadFiles(files)
    },
    uploadFiles(files) {
      if (this.limit && this.fileList.length + files.length > this.limit) {
        return this.onExceed && this.onExceed(files, this.fileList)
      }
      const filesArr = [...files]
      filesArr.forEach(rawFile => {
        this.handleStart(rawFile)
        this.upload(rawFile)
      })
    },
    handleStart(rawFile) {
      rawFile.uid = Math.random() + this.tempIndex++
      let file = {
        status: 'ready',
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile
      }
      // 将当前用户上传的文件push到files里
      // files里将会有已上传的和未上传的文件
      this.files.push(file)
    },
    upload() {}
  }
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
.pos-upload {
  .pos-upload-btn {
    display: inline-block;
  }
  .hidden {
    display: none;
  }
}
</style>
