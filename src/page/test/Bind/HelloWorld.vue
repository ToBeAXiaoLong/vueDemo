<template>
  <div class="hello">
    <my-header></my-header>
    <my-footer></my-footer>
    <button @click="emitMyEvent">emit</button>
  </div>
</template>

<script>
import Vue from 'vue'
// 全局组件注册
Vue.component('my-footer', {
  template: '<p>this is my footer => {{tComp}}</p>',
  // component内，data必须声明为返回一个初始数据对象的function，因为组件可能被用于创建多个实例
  data () {
    return {
      tComp: '全局组件'
    }
  }
})
var myHeader = {
  template: '<p>this is my header => {{comp}}</p>',
  // component内，data必须声明为返回一个初始数据对象的function，因为组件可能被用于创建多个实例
  data () {
    return {
      comp: '局部组件component'
    }
  }
}
export default {
  name: 'HelloWorld',
  // 局部组件注册
  components: {
    'my-header': myHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    emitMyEvent () {
      this.$emit('my-event', this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
