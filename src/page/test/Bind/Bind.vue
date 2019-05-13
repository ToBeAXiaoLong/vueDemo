<template>
  <!--v-html -->
  <!--v-text-->
  <!--v-for -->
  <!--v-if v-show v-else 条件渲染-->
  <!--v-bind（缩写:） 可以绑定class和内联样式等-->
  <!--v-on(缩写@) 可以绑定事件-->
  <!--@keydown 其他事件绑定-->
   <div>
     <p v-html="hello"></p>
     <p v-text="hello"></p>
     {{hello}}
     <ul>
       <li v-for="(item,index) in list" :key="index" :class="{odd:index % 2}">{{item.name}} - {{item.price}} - {{index}}</li>
     </ul>
     <ul>
       <li v-for="(value,key) in object" :key="key">{{key}} - {{value}}</li>
     </ul>
     <a :href="link" :title="hello" class="odd" :class="classname1" :style="linkCSS">to baidu</a>
     <button v-if='isTrue' @click="addItem">addItem</button>
     <button v-else>no addItem</button>
     <button v-show='!isTrue' @click="changeItem">changeItem</button>
     <button @click="toggle">切换</button>
     <input @keydown.13="onKeyDown" v-model="myValue"/>{{myValue}}
     <input v-model.number="myNumber"/>{{typeof myNumber}}
     <input v-model.trim="myTrim"/>{{myTrim}}
     <hWorld @my-event="onMyEvent"></hWorld>
   </div>
</template>

<script>
import hWorld from './HelloWorld'
export default {
  name: 'bind',
  data () {
    return {
      myValue: '',
      myNumber: '',
      myTrim: '',
      hello: '<span><img> world </span>',
      list: [
        {
          name: 'apple',
          price: 24
        },
        {
          name: 'banana',
          price: 28
        }
      ],
      object: {
        name: 'zlp',
        title: 'focus',
        age: 24,
        height: 200,
        qus: 'none'
      },
      link: 'http://www.baidu.com',
      classname: ['red-font', 'big-font'],
      classname1: {
        'red-font': true,
        'big-font': false
      },
      linkCSS: {
        'font-size': '24px'
      },
      isTrue: true
    }
  },
  components: {
    hWorld
  },
  methods: {
    addItem () {
      this.list.push(
        {
          name: 'pear',
          price: 245
        }
      )
    },
    changeItem () {
      // 该方法不会改变数组
      // this.list[0] = {
      //   name: 'pear',
      //   price: 245
      // }
      this.$set(this.list, 0, {name: 'pear', price: 245})
    },
    toggle () {
      this.isTrue = !this.isTrue
    },
    onKeyDown () {
      console.log('on key down')
    },
    // 自定义事件
    onMyEvent (msg) {
      console.log(msg)
    }
  }
}
</script>

<style scoped>
.odd {
  color: red;
}
</style>
