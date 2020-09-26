<template>
  <div class="pos-upload">upload</div>
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
    limit: Number,
    multiple: Boolean,
    onExceed: Function,
    onChange: Function,
    onSuccess: Function,
    onError: Function,
    onProgress: Function
  },
  methods: {}
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
</style>
