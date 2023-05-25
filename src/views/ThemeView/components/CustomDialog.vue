<template>
  <el-dialog
    :model-value="dialogVisible"
    title="Tips"
    width="30%"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('update:dialogVisible', false)">取消</el-button>
        <el-button type="primary" @click="$emit('update:dialogVisible', false)">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'CustomDialog',
  props: {
    dialogVisible: {
      type: Boolean,
      require: true
    }
  }
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
