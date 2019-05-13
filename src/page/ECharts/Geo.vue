<template>
    <div id="geoArea" style="height: 100%; width: 100%">
    </div>
</template>

<script>
export default {
  name: 'geo-echarts',
  data () {
    return {
      name_title: '中国人民大学2017年各省市计划录取人数',
      subname: '数据抓取自千栀网\n，\n上海、浙江无文理科录取人数',
      nameColor: 'rgb(55, 75, 113)',
      name_fontFamily: '等线',
      name_fontSize: 18,
      subname_fontSize: 15,
      mapName: 'China',
      data: [
        {name: '北京', value: 177},
        {name: '天津', value: 42},
        {name: '河北', value: 102},
        {name: '山西', value: 81},
        {name: '内蒙古', value: 47},
        {name: '辽宁', value: 67},
        {name: '吉林', value: 82},
        {name: '黑龙江', value: 66},
        {name: '上海', value: 102},
        {name: '江苏', value: 81},
        {name: '浙江', value: 47},
        {name: '安徽', value: 67},
        {name: '福建', value: 177},
        {name: '江西', value: 42},
        {name: '山东', value: 102},
        {name: '河南', value: 81},
        {name: '湖北', value: 47},
        {name: '湖南', value: 67},
        {name: '重庆', value: 82},
        {name: '四川', value: 66},
        {name: '贵州', value: 102},
        {name: '云南', value: 81},
        {name: '西藏', value: 47},
        {name: '陕西', value: 67}
      ],
      geoColorMap: {},
      toolTipData: [
        {
          name: '北京', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '天津', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '河北', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '山西', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '内蒙古', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '辽宁', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '吉林', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '黑龙江', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '上海', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '江苏', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '浙江', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '安徽', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '福建', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '江西', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '山东', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '河南', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '湖北', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '湖南', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '重庆', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '四川', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '贵州', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '云南', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '西藏', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        },
        {
          name: '陕西', value: [{name: '文科', value: 95}, {name: '理科', value: 82}]
        }
      ],
      geoOption: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.geoOption = {
        title: {
          text: this.name_title,
          subtext: this.subname,
          x: 'center',
          textStyle: {
            color: this.nameColor,
            fontFamily: this.name_fontFamily,
            fontSize: this.name_fontSize
          },
          subtextStyle: {
            fontSize: this.subname_fontSize,
            fontFamily: this.name_fontFamily
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            if (typeof (params.value)[2] === 'undefined') {
              let toolTipHtml = '';
              for (let i in this.toolTipData) {
                if (params.name === i.name) {
                  toolTipHtml += i.name + ':<br>';
                  for (let j in i.value) {
                    toolTipHtml += j.name + ':' + j.value + '<br>';
                  }
                }
              }
              return toolTipHtml;
            } else {

            }
          }
        }
      }
    });
  }
}
</script>

<style>

</style>
