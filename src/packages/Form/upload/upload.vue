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
    <ul>
      <li v-for="file in files" :key="file.uid">
        <div class="list-item">
          <pos-icon icon="file"></pos-icon>
          {{ file.name }}
          {{ file.status }}
          <pos-icon icon="cha"></pos-icon>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ajax from './ajax'
export default {
  name: 'pos-upload',
  data() {
    return {
      tempIndex: 1,
      files: [],
      reqs: {}
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
    onProgress: Function,
    beforeUpload: Function,
    httpRequest: {
      type: Function,
      default: ajax
    }
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
      // 文件改变触发on-change事件
      this.onChange && this.onChange(file)
    },
    upload(rawFile) {
      // 判断文件是否能够上传
      if (!this.beforeUpload) {
        return this.post(rawFile)
      }
      let flag = this.beforeUpload(rawFile)
      if (flag) {
        return this.post(rawFile)
      }
    },
    post(rawFile) {
      const uid = rawFile.uid
      const options = {
        file: rawFile,
        filename: rawFile.name,
        action: this.action,
        onProgress: ev => {
          this.handleProgress(ev, rawFile)
        },
        onSuccess: res => {
          this.handleSuccess(res, rawFile)
        },
        onError: err => {
          this.handleError(err, rawFile)
        }
      }
      let req = this.httpRequest(options)
      this.reqs[uid] = req
      if (req && req.then) {
        req.then(options.onSuccess, options.onError)
      }
    },
    getFile(rawFile) {
      return this.files.find(file => file.uid === rawFile.uid)
    },
    handleProgress(ev, rawFile) {
      let file = this.getFile(rawFile)
      file.status = 'uploading'
      file.percentage = ev.percent || 0
      this.onProgress(ev, rawFile)
    },
    handleSuccess(res, rawFile) {
      let file = this.getFile(rawFile)
      file.status = 'success'
      this.onSuccess(res, rawFile)
      this.onChange(file)
    },
    handleError(err, rawFile) {
      let file = this.getFile(rawFile)
      file.status = 'fail'
      this.onError(err, rawFile)
      this.onChange(file)
      delete this.reqs[file.uid] // 已经失败的ajax 不需要了
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
  .hidden {
    display: none;
  }
}
</style>
