export default function () {
  return {
    cards: [
      {
        key: 'today-visitor-number',
        title: '今日访客总数',
        desc: 81,
        color: null,
      },
      {
        key: 'present-visitor-number',
        title: '在场访客数',
        desc: 6,
        color: null,
      },
      {
        key: 'printer-connect-status',
        title: '打印机链接',
        desc: '正常',
        color: 'green',
      },
      {
        key: 'server-connect-status',
        title: '服务器链接',
        desc: '离线',
        color: 'red',
      },
    ],
  };
}
