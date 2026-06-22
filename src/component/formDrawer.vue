<template>
    <div>
        <el-drawer :visible.sync="drawer" :title="title" :size="size" :destroy-on-close="destoryOnClose">
            <div class="formDrawer">
                <div class="body">
                    <slot>

                    </slot>
                </div>
                <div>
                    <el-button class="action" type="primary" @click="submit">确认</el-button>
                    <el-button class="action" type="default" @click="close">取消</el-button>
                </div>
                
            </div>
        </el-drawer>
    </div>
</template>
<script>
export default {
  props: {
    title: String,
    size: {
      type: String,
      default: '45%',
    },
    destoryOnClose: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    submit() {
      this.$emit('submit')
    },
    open() {
      this.drawer = true
    },
    close() {
      this.drawer = false
    }
  }
}
</script>
<style>
.formDrawer{
    width: 100%;
    height: 100%;
    position: relative;
    @apply flex flex-col;
}
.formDrawer .body{
    flex:1;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 50px;
    overflow-y: auto;
}
.formDrawer .action{
    height: 50px;
    @apply mt-auto flex items-center;
}
</style>
