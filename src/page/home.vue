<template>
  <!-- 界面侧边菜单栏 -->
  <div class="main-layout">
    <Layout :style="{minHeight: '99.7vh',maxHeight: '99.8vh'}">
      <Sider ref="leftSider" v-model="isCollapsed" :collapsed-width="60" collapsible hide-trigger width="220px" :style="{overflow: 'auto'}">
        <div style="height: 70px;width: 100px">
          <Icon @click.native="collapsedSider" type="navicon-round" :class="rotateIcon" size="28" :style="{margin: '20px 20px 0', cursor: 'pointer', color: 'white'}"></Icon>
        </div>
        <div>
          <i-menu theme="dark" @on-select="selectPath">
            <template v-for="item in menuList">
              <Submenu :name="item.path" :key="item.path">
                <template slot="title">{{item.name}}</template>
                <template v-for="nextNode in item.children">
                  <template v-if="nextNode.children.length !== 0 && nextNode.type !== 2">
                    <Submenu :key="nextNode.path">
                      <template>{{nextNode.name}}</template>
                      <template v-for="lastNode in nextNode.children">
                        <menu-item :key="lastNode.path" :name="lastNode.path">{{lastNode.name}}</menu-item>
                      </template>
                    </Submenu>
                  </template>
                  <template v-else>
                    <menu-item :key="nextNode.path" :name="nextNode.path">{{nextNode.name}}</menu-item>
                  </template>
                </template>
              </Submenu>
            </template>
          </i-menu>
        </div>
      </Sider>
      <Layout>
        <Header class="header-bar">
          <i-col span="1">
            <span class="headerLogo">
              <Icon type="ios-book-outline"></Icon>
            </span>
          </i-col>
          <i-col span="12">
            <span class="headerTitle">
                VUE系统
            </span>
          </i-col>
        </Header>
        <Content>
            <Breadcrumb separator=">>" >
            <template v-for="(item, index) in breadContent">
              <template v-if="item != null">
                <BreadcrumbItem v-if="item.path != ''" :to="item.path" :key="index">
                  {{item.name}}
                </BreadcrumbItem>
                <BreadcrumbItem v-else :key="index">
                  {{item.name}}
                </BreadcrumbItem>
              </template>
            </template>
          </Breadcrumb>
          <card>
            <router-view></router-view>
          </card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
const menuData = require('../../static/tempMenu.json');
export default {
  name: 'home',
  data () {
    return {
      isCollapsed: false,
      menuData,
      menuList: [],
      menuDataResolve: [] // 解析后菜单路由数据
    }
  },
  computed: {
    rotateIcon () {
      return [
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    breadContent () {
      return this.$store.getters.getBreadArray;
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 初始化加载页面
      this.menuList = this.menuData;
      this.loadRouterRecursion(true, this.menuList, {});
      this.$router.addRoutes(this.menuDataResolve);
      this.$router.replace({path: '/index'});
    })
  },
  methods: {
    collapsedSider () {
      this.$refs.leftSider.toggleCollapse();
    },
    // 解析菜单
    loadRouterRecursion (firstFlag, data, parentData) {
      let mainData = [];
      for (let item of data) {
        // 数据类型为'目录'
        if (item.type === 1) {
          let obj = {};
          obj.type = item.type;
          obj.path = item.path;
          obj.name = item.name;
          obj.phypath = item.phypath;
          obj.children = [];
          if (item.phypath !== null && typeof item.phypath) {
            obj.component = (resolve) => {
              require.ensure([], (requeire) => {
                resolve(require.context('@', true, /\.vue$/)(`./${item.phypath}`));
              });
            };
          }
          this.loadRouterRecursion(false, item.children, obj);
          if (firstFlag) {
            this.menuDataResolve.push(obj);
          } else {
            mainData.push(obj);
            parentData.children = mainData;
          }
        } else if (item.type === 2) { // 数据类型为'菜单'
          let obj = {};
          obj.type = item.type;
          obj.meta = {};
          obj.meta.name = item.name;
          obj.name = item.resKey;
          obj.path = item.path;
          obj.phypath = item.phypath;
          if (item.phypath !== null && typeof (item.phypath) !== 'undefined') {
            obj.component = (resolve) => {
              require.ensure([], (require) => {
                resolve(require.context('@', true, /\.vue$/)(`./${item.phypath}`));
              });
            }
          }
          mainData.push(obj);
          parentData.children = mainData;
        } else {
          return;
        }
      }
    },
    // 菜单跳转页面回调
    selectPath (name) {
      this.$router.push(name);
    }
  }
}
</script>

<style scoped>
  .main-layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .rotate-icon {
    transform: rotate(90deg);
  }
  .header-bar {
    background: #fff;
    box-shadow: 0 1px 2px 1px rgba(0,0,0,.1);
    padding: 6px 0px 0px 50px;
    margin-bottom: 10px;
    height: 78px;
  }
  @media screen and (min-width:1400px){
    .headerTitle{
      font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 40px;
      position: relative;
      top:2px;
    }
    .headerLogo{
      font-size: 45px;
      width: 410px;
    }
  }
  @media screen and (min-width:1000px) and (max-width:1399px){
    .headerTitle{
      font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 20px;
      position: relative;
      top:2px;
    }
    .headerLogo{
      font-size: 22px;
      width: 300px;
    }
  }

  @media screen and (min-width:901px) and (max-width:999px){
    .headerTitle{
      font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 20px;
      position: relative;
      top:1px;
    }
    .headerLogo{
      font-size: 22px;
      width: 200px;
    }
  }

  @media screen and (max-width:900px){
    .headerTitle{
      font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 17px;
      top:1px;
      position: relative;
    }
    .headerLogo{
      font-size: 17px;
      width: 200px;
    }
  }
</style>
