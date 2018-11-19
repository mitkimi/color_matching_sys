import MyClock from '@/components/clock';
import MyChart from '@/components/PieEchart';

export default {
  name: 'home',
  data() {
    return {
      pageStatusData: {
        clockSettingDialog: false,
        clockStyle: 'clock',
      },
      lastWeek: {
        dayMon: this.getTime(8),
        daySun: this.getTime(2),
      },
    };
  },
  components: {
    MyClock,
    MyChart,
  },
  mounted() {
    this.pageStatusData.clockStyle = localStorage.clock || 'clock';
  },
  methods: {
    setClock(value) {
      // console.log(value);
      this.pageStatusData.clockStyle = value;
      localStorage.clock = value;
    },
    getTime(n) {
      /** *
       * usage
       * 参数都是以周一为基准的
        //上周的开始时间
        console.log(getTime(7));
        //上周的结束时间
        console.log(getTime(1));
        //本周的开始时间
        console.log(getTime(0));
        //本周的结束时间
        console.log(getTime(-6));
      */
      const now = new Date();
      let year = now.getFullYear();
      // 因为月份是从0开始的,所以获取这个月的月份数要加1才行
      let month = now.getMonth() + 1;
      let date = now.getDate();
      const day = now.getDay();
      // 判断是否为周日,如果不是的话,就让今天的day-1(例如星期二就是2-1)
      if (day !== 0) {
        n += (day - 1);
      } else {
        n += day;
      }
      if (day) {
        // 这个判断是为了解决跨年的问题
        if (month > 1) {
          month = month;
        }
        // 这个判断是为了解决跨年的问题,月份是从0开始的
        else {
          year -= 1;
          month = 12;
        }
      }
      now.setDate(now.getDate() - n);
      year = now.getFullYear();
      month = now.getMonth() + 1;
      date = now.getDate();
      const s = `${year}年${month < 10 ? (`0${month}`) : month}月${date < 10 ? (`0${date}`) : date}日`;
      return s;
    },
  },
};
