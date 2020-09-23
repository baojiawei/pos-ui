<template>
  <div id="app">
    <pos-row>
      <pos-col :span="12">aaa</pos-col>
      <pos-col :span="12">bbb</pos-col>
    </pos-row>
    <pos-row>
      <pos-col :span="24">ccc</pos-col>
    </pos-row>
    <hr />
    <pos-row>
      <pos-col :span="6" class="red">ccc</pos-col>
      <pos-col :span="6" :offset="12" class="green">ccc</pos-col>
    </pos-row>
    <hr />
    <pos-row :gutter="20">
      <pos-col :span="6">
        <div class="red">ccc</div>
      </pos-col>
      <pos-col :span="6">
        <div class="green">ccc</div>
      </pos-col>
      <pos-col :span="6">
        <div class="red">ccc</div>
      </pos-col>
      <pos-col :span="6">
        <div class="green">ccc</div>
      </pos-col>
      <pos-col :span="6">
        <div class="green">ccc</div>
      </pos-col>
      <pos-col :span="6">
        <div class="green">ccc</div>
      </pos-col>
    </pos-row>
    <hr />
    <pos-row justify="space-around">
      <pos-col :span="3">
        <div class="red">ccc</div>
      </pos-col>
      <pos-col :span="3">
        <div class="green">ddd</div>
      </pos-col>
    </pos-row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.red {
  background: red;
}
.green {
  background: green;
}
</style>
