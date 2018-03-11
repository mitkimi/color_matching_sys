<template>
  <el-container class='container'>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>拾色器</span>
      </div>
      <div>
        <el-row :gutter="20">
          <Box v-for="o in colors" :key="o.id" :data="o"/>
        </el-row>
      </div>
    </el-card>
  </el-container>
</template>

<script>
import Box from '@/components/Box';

export default {
  name: 'HelloWorld',
  components: { Box },
  data() {
    return {
      colors: [
        {
          id: 1,
          name: '名字',
          colors: ['#a1c4fd', '#c2e9fb'],
        },
        {
          id: 2,
          name: '名字2',
          colors: ['#a4fc79', '#96e6a1'],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
  width: 100%;
}
</style>
