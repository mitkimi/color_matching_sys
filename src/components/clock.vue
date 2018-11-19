/* eslint-disable */
<template>
  <div id="clock">
    <div class="num-clock" v-if="show === 'num'" style="width: 160px;
    height: 70px;
    line-height: 70px;
    font-size: 24px;
    background: #eeeeee;
    border-radius: 6px;
    text-align: center;">{{currTime}}</div>
    <clock :time="currTime" v-if="show === 'clock'"></clock>
  </div>
</template>
<script>
import Clock from 'vue-clock2';
import Moment from 'moment';

export default{
  data() {
    return {
      show: localStorage.clock || 'clock',
      currTime: Moment().format('hh:mm:ss'), // 当前日期对象
    };
  },
  components: {
    Clock,
    Moment,
  },
  created() {
    setInterval(() => { // 钩子函数，在实例创建的时候运行定时器，我们只需要动态刷新当前的日期对象即可
      this.currTime = Moment().format('hh:mm:ss');
    }, 1000);
  },

};
</script>
<style scoped>
</style>
