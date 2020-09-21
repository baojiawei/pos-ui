<template>
  <div id="app">
    <!-- 不带icon的button -->
    <pos-button>默认按钮</pos-button>
    <pos-button type="primary">主要按钮</pos-button>
    <pos-button type="warning">警告按钮</pos-button>
    <pos-button type="danger">危险按钮</pos-button>
    <pos-button type="success">成功按钮</pos-button>
    <pos-button type="info">信息按钮</pos-button>
    <br />
    <!-- 带icon的button -->
    <pos-button type="info" icon="sousuo">信息按钮</pos-button>
    <pos-button type="warning" icon="sousuo"></pos-button>
    <pos-button type="primary" icon="sousuo" icon-position="right">主要按钮</pos-button>
    <pos-button type="success" loading>加载中</pos-button>
    <br />
    <!-- 带icon的button -->
    <pos-button type="danger" @click="fn">点击事件</pos-button>
    <br />
    <!-- icon -->
    <pos-icon icon="sousuo"></pos-icon>
    <pos-icon icon="edit"></pos-icon>
    <br />
    <!-- button-group -->
    <pos-button-group>
      <pos-button type="primary" icon="left" icon-position="left">上一页</pos-button>
      <pos-button type="primary" icon="right" icon-position="right">下一页</pos-button>
    </pos-button-group>
    <pos-button-group>
      <pos-button type="primary" icon="sousuo">搜素</pos-button>
      <pos-button type="primary" icon="xiazai">下载</pos-button>
      <pos-button type="primary" icon="edit">编辑</pos-button>
    </pos-button-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn(e) {
      console.log(e)
    },
  },
}
</script>

<style lang="scss"></style>
