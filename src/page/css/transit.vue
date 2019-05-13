<template>
  <div>
    <div style="display: inline-block; width: 400px; ">
      <Button v-on:click="show = !show" >点击</Button>
      <!--实现过渡效果：css过渡、JS过渡-->
      <transition name="fade-name">
        <div v-show="show" style="width: 100px;height: 100px;background: gray;display: inline-block;vertical-align:bottom"></div>
      </transition>
    </div>

    <!-- CSS3实现过渡 -->
    <div style="display: inline-block">
    <span id="idspan" style="vertical-align:baseline"></span>
    基线对齐
    </div>
  </div>
</template>

<script>
export default {
  name: 'transit',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.show = true;
    })
  }
}
</script>

<style scoped>
span#idspan {
    display: inline-block;
    width:100px;
    height: 100px;
    background: yellowgreen;
    /*
    // 过渡属性（null|all|property, 默认all）
    transition-property: width;
    // 过渡持续时长
    transition-duration: 1s;
    // 等待时长后过渡变化
    transition-delay: 0.2S;
    // 指定切换效果的速度(默认ease|linear|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n))
    transition-timing-function: linear;
    */

    /* 简写 */
    transition: all 1s ease 0.2s;
}
span#idspan:hover {
    width: 200px;
    height: 200px
}

/* .fade-name-enter-active .fade-name-leave-active{
  transition: all 9s ease 2s;
} */

.fade-name-enter, .fade-name-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
