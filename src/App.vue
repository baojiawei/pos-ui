<template>
  <div id="app">
    <pos-container>
      <pos-header>Header</pos-header>
      <pos-main>Main</pos-main>
    </pos-container>

    <pos-container>
      <pos-header>Header</pos-header>
      <pos-main>Main</pos-main>
      <pos-footer>Footer</pos-footer>
    </pos-container>

    <pos-container>
      <pos-aside width="200px">Aside</pos-aside>
      <pos-main>Main</pos-main>
    </pos-container>

    <pos-container>
      <pos-header>Header</pos-header>
      <pos-container>
        <pos-aside width="200px">Aside</pos-aside>
        <pos-main>Main</pos-main>
      </pos-container>
    </pos-container>

    <pos-container>
      <pos-header>Header</pos-header>
      <pos-container>
        <pos-aside width="200px">Aside</pos-aside>
        <pos-container>
          <pos-main>Main</pos-main>
          <pos-footer>Footer</pos-footer>
        </pos-container>
      </pos-container>
    </pos-container>

    <pos-container>
      <pos-aside width="200px">Aside</pos-aside>
      <pos-container>
        <pos-header>Header</pos-header>
        <pos-main>Main</pos-main>
      </pos-container>
    </pos-container>

    <pos-container>
      <pos-aside width="200px">Aside</pos-aside>
      <pos-container>
        <pos-header>Header</pos-header>
        <pos-main>Main</pos-main>
        <pos-footer>Footer</pos-footer>
      </pos-container>
    </pos-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.pos-header,
.pos-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.pos-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.pos-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .pos-container {
  margin-bottom: 40px;
}

.pos-container:nth-child(5) .pos-aside,
.pos-container:nth-child(6) .pos-aside {
  line-height: 260px;
}

.pos-container:nth-child(7) .pos-aside {
  line-height: 320px;
}
</style>
