let util = {};

// // 获取菜单数据
// util.getMenuList = function (vm) {
//   return new Promise((resolve, reject) => {
//     let url = 'http://localhost:8081/static/tempMenu.json';
//     vm.axios.get(url).then(res => {
//       console.log('as');
//       resolve(res.data);
//     }).catch(error => {
//       reject(error);
//     })
//   })
// };

// 错误提示
util.errorMessage = function (vm, content = '操作失败', duration = 1) {
  vm.$Message.error({
    render: h => {
      return h('span', {style: {fontSize: '25px'}}, [
        content
      ])
    },
    duration
  });
};
// 成功提示
util.successMessage = function (vm, content = '操作成功', duration = 2) {
  vm.$Message.success({
    render: h => {
      return h('span', {style: {fontSize: '25px'}}, [
        content
      ])
    },
    duration
  });
};

// 时间格式转换
util.dateFormate = function (date, flag = true) {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let minute = date.getMinutes();
  let s = date.getSeconds();
  m = m < 10 ? ('0' + m) : m;
  d = d < 10 ? ('0' + d) : d;
  h = h < 10 ? ('0' + h) : h;
  minute = minute < 10 ? ('0' + minute) : minute;
  s = s < 10 ? ('0' + s) : s;
  let result = '';
  if (flag) {
    result = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + s;
  } else {
    result = y + '-' + m + '-' + d;
  }
  return result;
};

// 面包屑
util.setBreadArray = function (vm, data) {
  //   data = [
  //     {name: '首页', path: '/index/mainpage'}
  //   ];
  const arr = [];
  //   console.log(JSON.stringify(data));
  for (const item of data) {
    const tmp = {};
    if ((item.name === '' || item.name === undefined) && typeof (item.meta.pathshow) === 'undefined') {
      tmp.name = item.meta.name;
      // tmp.path = item.path;
      tmp.path = '';
      arr.push(tmp);
    } else if (typeof (item.meta.pathshow) === 'undefined') {
      tmp.name = item.name;
      // tmp.path = item.path;
      tmp.path = '';
      arr.push(tmp);
    }
  }
  console.log(arr);
  vm.$store.commit('updateBreadArray', arr);
};
export default util;
