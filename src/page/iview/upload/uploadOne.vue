<template>
    <div>
        <Modal :value="modalFlag">
            <Upload accept=".xls, .xlsx, .cvs" :format="['.xls', '.xlsx', '.cvs']" :before-upload="handleUpload" action="">
                <Icon></Icon>
            </Upload>
        </Modal>
    </div>
</template>

<script>
export default {
  name: 'uploadOne',
  props: {
    modalFlag: {
      type: Boolean,
      requried: true,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleUpload (file) {
      console.log(file);
    }
  }
}
</script>

<style>

</style>
