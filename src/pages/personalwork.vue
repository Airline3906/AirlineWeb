<template>
  <page-shell title="个人作品集" subtitle="手绘创作 · 持续更新中">
    <div class="page-gallery">
      <el-image
        v-for="(item, index) in srcList"
        :key="index"
        :src="item"
        fit="cover"
        :preview-src-list="srcList"
        :initial-index="index"
      />
    </div>
    <div class="page-actions">
      <el-button type="primary" @click="liked()">
        <i :class="ifliked ? 'el-icon-star-off' : 'el-icon-star-on'"></i>
        喜欢
      </el-button>
    </div>
  </page-shell>
</template>

<script>
import { imgUrl } from '@/config/cdn'

export default {
  data() {
    return {
      ifliked: true,
      srcList: Array.from({ length: 17 }, (_, i) => imgUrl(`work-${i + 1}.jpg`)),
    }
  },
  methods: {
    liked() {
      if (this.ifliked) {
        this.$message.success({ message: '谢谢你的喜欢!', duration: 1000 })
      }
      this.ifliked = !this.ifliked
    }
  }
}
</script>
