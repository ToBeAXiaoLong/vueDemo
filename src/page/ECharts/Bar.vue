<template>
  <div>
    <div id="barCharts" class="areaCharts"></div>
    <div id="pieCharts" class="areaCharts"></div>
  </div>
</template>

<script>
// 在main.js中全局引入
// const myCharts = require('echarts/lib/echarts');
// const myCharts = require('echarts');

// 引入柱状图
// require('echarts/lib/chart/bar');
// 引入提示框和标题组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');

export default {
  name: 'bar-echarts',
  data () {
    return {
      num: '',
      option: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      let myBar = this.$myCharts.init(document.getElementById('barCharts'));
      let myPie = this.$myCharts.init(document.getElementById('pieCharts'));
      this.showChart();
      myBar.setOption(this.barOption);
      myPie.setOption(this.pieOption);
    })
  },
  methods: {
    showChart () {
      this.barOption = {
        title: {
          text: 'ECharts 柱状图'
        },
        tooltip: {},
        lengend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      this.pieOption = {
        title: {
          textStyle: {
            color: 'black'
          },
          text: 'ECharts 南丁格尔图'
        },
        // backgroundColor: '#2c343c',
        textStyle: {
          color: 'rgba(0, 0, 0, 0.5)'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            roseType: 'angle',
            data: [
              {value: 235, name: '视频广告'},
              {value: 274, name: '联盟广告'},
              {value: 310, name: '邮件营销'},
              {value: 335, name: '直接访问'},
              {value: 400, name: '搜索引擎'}
            ],
            itemStyle: {
              // 阴影的大小
              shadowBlur: 200,
              // 阴影水平方向上的偏移
              shadowOffsetX: 10,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 10,
              // 阴影颜色
              shadowColor: 'rgba(225, 122, 0, 0.5)',
              // 鼠标hover高亮效果
              emphasis: {
                shadowBlur: 100,
                shadowColor: 'rgba(0, 225, 24, 0.9)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.areaCharts {
    display: inline-block;
    margin: 30px;
    height: 300px;
    width: 460px;
}
</style>
