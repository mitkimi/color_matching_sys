export default {
  name: 'PieHeaderInfoCard',
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  mounted() {
    if (this.data.color !== null) {
      // 设置了颜色
      this.$refs.desc.style.color = this.data.color;
    }
  },
};
