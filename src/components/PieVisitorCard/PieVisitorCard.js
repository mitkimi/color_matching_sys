
export default {
  name: 'PieVisitorCard',
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      dialogVisible: false,
      componentData: this.data,
    };
  },
  mounted() {
    // this.qrcode();
  },
  methods: {
    qrcode() {
      // const MY_QRCODE = this.$refs.qrcode;
      // console.log(MY_QRCODE);
      // QRCode.toCanvas(MY_QRCODE, 'sample text', (error) => {
      //   if (error) console.error(error);
      //   console.log('success!');
      // });
    },
  },
};
