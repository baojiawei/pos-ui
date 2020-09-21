<template>
  <div id="app">
    <!-- 不带icon的button -->
    <pos-button>默认按钮</pos-button>
    <pos-button type="primary">主要按钮</pos-button>
    <pos-button type="warning">警告按钮</pos-button>
    <pos-button type="danger">危险按钮</pos-button>
    <pos-button type="success">成功按钮</pos-button>
    <pos-button type="info">信息按钮</pos-button>

    <!-- 带icon的button -->
    <pos-button type="info" icon="sousuo">信息按钮</pos-button>
    <pos-button type="warning" icon="sousuo"></pos-button>
    <pos-button type="primary" icon="sousuo" icon-position="right">主要按钮</pos-button>

    <!-- icon -->
    <pos-icon icon="sousuo"></pos-icon>
    <pos-icon icon="edit"></pos-icon>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss"></style>
