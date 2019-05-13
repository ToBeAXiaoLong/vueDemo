<template>
    <div>
        <div style="margin: 6px 0">
            <span style="display: inline-block;color:red; margin-right:20px;width: 20vw;text-align: right">iview-Upload(暂不支持 IE9 浏览器):</span>
            <Button>单文件上传</Button>
            <Button @click="openModal('mulUpload')">多文件上传</Button>

            <upload-one :modal-flag="oneModalFlag" @closeEve="closeModal"></upload-one>
            <upload-mul :modal-flag="mulModalFlag" @closeEve="closeModal"></upload-mul>
        </div>
        <div>
            <span style="display: inline-block;color:red; margin-right:20px;width: 20vw;text-align: right">原生:</span>
            <Button>单文件上传</Button>
            <Button @click="openModal('mulUpload')">多文件上传</Button>

        </div>
    </div>
</template>

<script>
import uploadMul from './uploadMul'
import uploadOne from './uploadOne'

export default {
  name: 'uploadMain',
  data () {
    return {
      oneModalFlag: false,
      mulModalFlag: false
    }
  },
  components: {
    uploadOne,
    uploadMul
  },
  methods: {
    openModal (type) {
      switch (type) {
        case 'oneUplaod':
          this.oneModalFlag = true;
          break;
        case 'mulUpload':
          this.mulModalFlag = true;
          break;
        default:
          break;
      }
    },
    closeModal () {
      this.oneModalFlag = false;
      this.mulModalFlag = false;
    }
  }
}
</script>

<style>

</style>
