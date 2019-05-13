<template>
    <div>
      <input v-model="myValue"/>
      <ul>
        <li v-for="(item, index) in list" :key="index">{{index + 1 }}: {{item.value}} </li>
      </ul>
      <button @click="change">插入数组</button>
    </div>
</template>

<script>
export default {
  name: 'ComputedWatch',
  data () {
    return {
      myValue: '',
      list: [
        {
          value: 'num'
        },
        {
          value: 'num'
        }
      ],
      numb: null
    }
  },
  // 计算属性 用于处理v-modal绑定的值
  computed: {
    // myValueWithoutNum () {
    //   return this.myValue.replace(/\d/g, '')
    // }
  },
  // 属性监听 用于监听变量
  watch: {
    myValue: (value, oldValue) => {
      console.log(value, oldValue);
      //   if (value !== '') {
      this.getMyValueWithoutNum();
    //   }
    },
    // 箭头函数
    list: function () {
      this.tellyou()
    }
  },
  methods: {
    getMyValueWithoutNum () {
    //   return this.myValue.replace(/[^\d]/g, '')
      console.log(this.myValue);
      this.myValue = this.myValue.replace(/[^\d]/g, '');
    },
    tellyou () {
      console.log('修改了数组')
    },
    change () {
      this.list.push({
        // key: 3,
        value: this.myValue
      })
    }
  }
}
</script>

<style scoped>

</style>
