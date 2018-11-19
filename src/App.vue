<template>
  <div id="app">
    <div class="body-header">
      <pie-header />
    </div>
    <div class="body-container">
      <div class="page-menu">
        <pie-menu />
      </div>
      <div class="page-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import PieHeader from '@/components/PieHeader';
import PieMenu from '@/components/PieMenu';

export default {
  name: 'App',
  components: {
    PieHeader,
    PieMenu,
  },
};
</script>

<style>
* {
  border: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  background: #ffffff;
  height: 100vh;
}
.clearfix {
  clear: both;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
}

#app .body-header {
  height: 85px;
  width: calc(100vw - 10px);
}
#app .body-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
#app .body-container .page-menu {
  width: 200px;
  background: #eeeeee;
  height: calc(100vh - 85px);
}
#app .body-container .page-container {
  width: calc(100vw - 210px);
  height: calc(100vh - 85px);
  padding: 20px;
}
</style>
