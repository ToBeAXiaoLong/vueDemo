<template>
  <div>
    <Row>
    <i-col span="6">
      <date-picker v-model="endTime" type="date" placement="bottom-end" placeholder="Select date" style="width: 200px"></date-picker>
    </i-col>
    <i-col span="2">
      <label>-</label>
    </i-col>
    <i-col span="6">
      <date-picker v-model="startTime" type="date" placeholder="Select date" style="width: 200px"></date-picker>
    </i-col>
    <i-col span="2">
      <label>=</label>
      </i-col>
    <i-col span="6">
      <span>{{sltime}}</span>
    </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'timetest',
  data () {
    return {
      endTime: new Date(),
      startTime: new Date()
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.time1 = new Date(this.$util.dateFormate(new Date(), false));
      // this.time2 = new Date(this.$util.dateFormate(new Date(new Date() - 6 * 24 * 60 * 60 * 1000), false));
      this.endTime = new Date();
      this.startTime = new Date(new Date() - 6 * 24 * 60 * 60 * 1000);
    })
  },
  computed: {
    sltime: function () {
      return parseInt((this.endTime.getTime() - this.startTime.getTime()) / (24 * 60 * 60 * 1000));
    }
  }
}
</script>

<style scoped>

</style>
