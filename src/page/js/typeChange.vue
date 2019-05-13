<template>
    <div>
        <div class="div-block">
            <h5 style="color: red">if判断:</h5>
            <p>if(undefined):  {{ifBoolean(undefined)}}</p>
            <p>if(null):  {{ifBoolean(null)}}</p>
            <p>if(''):  {{ifBoolean('')}}</p>
            <p>if(false):  {{ifBoolean(false)}}</p>
            <p>if(0):  {{ifBoolean(0)}}</p>
            <p>if(-0):  {{ifBoolean(-0)}}</p>
            <p>if(NAN):  {{ifBoolean(Number('N'))}}</p>
            <p>if(object):  {{ifBoolean({a: 2})}}</p>
        </div>
        <div class="div-block">
            <h5 style="color: red">对象转基本类型:</h5>
            <p>1 + a = {{sumCount(1, a)}}</p>
            <p>'1' + a = {{sumCount('1', a)}}</p>
            <p>1 + b = {{sumCount(1, b)}}</p>
            <p>'1' + b = {{sumCount('1', b)}}</p>
            <p>[] + [] :  {{sumCount([], [])}}</p>
            <p>{} + {} :  {{sumCount({}, {})}}</p>
            <p>[] + {} :  {{sumCount([], {})}}</p>
            <p>{} + [] :  {{sumCount({}, [])}}</p>
        </div>
        <div class="div-block">
            <h5 style="color: red">四则运算:</h5>
            <p>2 + str = {{fourCount(2, '5', '+')}}</p>
            <p>2 * str = {{fourCount(2, '5', '*')}}</p>
            <p>[1, 2] + [2, 1] = {{fourCount([1,2], [2,1], '+')}}</p>
            <!-- [1, 2].toString() -> '1,2'
                 [2, 1].toString() -> '2,1'
                 '1,2' + '2,1' = '1,22,1'   -->
            <p>'1' + + '3' = {{fourCount('1', '3', '++')}}</p>
            <p>'a' + + 'b' = {{fourCount('a', 'b', '++')}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'type-change',
  data () {
    return {
      sum: null,
      a: {},
      b: 2
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 优先级：[Symbol.toPrimitive] 》 valueOf 》 toString
      this.a = {
        toString () {
          return '1';
        },
        valueOf () {
          return 0;
        },
        [Symbol.toPrimitive] () {
          return '2';
        }
      }
    });
  },
  methods: {
    // 加法
    sumCount (type, obj) {
      return type + obj;
    },
    // if判断不同js类型
    ifBoolean (type) {
      console.log(type);
      if (type) {
        return true;
      } else {
        return false;
      }
    },
    // 四则运算
    fourCount (num, str, type) {
      switch (type) {
        case '*':
          return num * str;
        case '+':
          return num + str;
        case '-':
          return num - str;
        case '/':
          return num / str;
        case '++':
          return num + (+str);
        default:
          return '运算符不正确';
      }
    },
    // 对象装换
    changObject (input, preferedType) {
      if (preferedType) {
        Symbol.toPrimitive(input, preferedType);
      } else {
        Symbol.toPrimitive(input);
      }
    }
  }
}
</script>

<style scoped>
.div-block {
    width: 280px;
    height: 120px;
    display:inline-block;
}
</style>
