import router from 'vue-router';
import utils from '@/utilitys/utils';

// 需登录访问列表
const needLoginPaths = [
  // 系统
  '/',
];

// -----------------

// 路由守卫
/** *
 *  Part 1 登录守卫
 *  检测跳转到的页面是否在需登录访问的页面，
 *  需要访问的，在本地存一下来源路由，登录后跳回，再清掉来源路由
 *  -------
 *  Part 2 显示底部常驻图标或显示返回首页按钮
 *  检测进入的页面是否在显示底部常住图标的页面，显示底部常驻图标
 *  检测进入的页面是否需要显示返回首页的按钮，显示返回按钮
 */
router.beforeEach((to, from, next) => {
  // 判断是否已经登录
  const SIGNATURE = utils.signature();
  if (SIGNATURE) {
    next();
    return 0;
  }
  // 未登录的走以下流程
  const PATH = location.hash.substring(1, location.hash.length);
  if (needLoginPaths.indexOf(to.path) !== -1) {
    // 记录路由
    localStorage.path = PATH;
    // 提示此页面需要登录 - 晚点再说
    // const TXT = this.$i18n.locale === 'zh' ? '您需要登录才能完成此操作' : 'Please sign in first'
    // this.$Message.info(TXT)
    // 跳转到登录页面
    next({
      path: '/login',
    });
  } else {
    next();
  }
  return 0;
});
