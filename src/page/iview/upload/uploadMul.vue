<template>
    <Modal :value="modalFlag" title="上传多文件" :closable="false" :mask-closable="false">
        <!-- action -上传地址
            accept -接受上传类型（选择文件时过滤）
            format -上传文件类型（识别后缀名）
            show-upload-list -是否显示已上传文件列表
            before-upload -上传文件之前的钩子
          -->
        <div style="text-align: left">
            <Upload :before-upload="handleUpload" multiple action="" show-upload-list accept=".txt, .log" :format="['.txt', '.log']">
                <Button type="ghost" icon="ios-cloud-upload-outline">多文件上传</Button>
            </Upload>
            <div v-for="(file, index) in fileList" :key="index" class="ivu-upload-list-file">
                <Icon
                style="padding-right:5px;"
                type="stats-bars"></Icon>
                <span>{{file.name}}</span>
                <Icon
                style="padding-right:5px;"
                type="close-circled"
                class="ivu-upload-list-remove" @click="removeFile(file)"></Icon>
            </div>
        </div>
        <div slot="footer">
            <Button @click="submitEve">提交</Button>
            <Button @click="closeModal">关闭</Button>
        </div>
    </Modal>
</template>

<script>
export default {
  name: 'uploadMul',
  data () {
    return {
      fileList: []
    }
  },
  props: {
    modalFlag: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  watch: {
    modalFlag (val) {
      if (val) {
        this.fileList = [];
      } else {
        this.fileList = [];
      }
    }
  },
  methods: {
    handleUpload (file) {
      this.fileList.push(file);
    },
    closeModal () {
      this.$emit('closeEve');
    },
    removeFile (file) {
      const index = this.fileList.indexOf(file);
      this.fileList.splice(index, 1);
    },
    submitEve () {
      if (this.fileList.length > 0) {
        this.$util.successMessage(this, '请求接口进行上传操作');
      } else {
        this.$util.errorMessage(this, '请选择上传文件');
      }
    }
  }
}
</script>

<style>

</style>
