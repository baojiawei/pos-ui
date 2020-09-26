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
    />
    <div>
      <slot name="tip"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pos-upload',
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
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
.pos-upload {
  .pos-upload-btn {
    display: inline-block;
  }
}
</style>
