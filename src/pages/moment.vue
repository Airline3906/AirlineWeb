<template>
  <page-shell title="技术动态" subtitle="记录学习路上的点滴更新">
    <el-timeline class="page-timeline">
      <el-timeline-item
        v-for="item in moments"
        :key="item.id"
        :timestamp="item.date"
        placement="top"
        :color="item.color"
      >
        <div class="page-feature-item">
          <span class="skill-tag">{{ item.tag }}</span>
          <h3 class="feature-label">{{ item.title }}</h3>
          <p class="page-text">{{ item.content }}</p>
        </div>
      </el-timeline-item>
    </el-timeline>
  </page-shell>
</template>

<script>
export default {
  name: 'Moment',
  data() {
    return {
      moments: [
        {
          id: 1,
          date: '2025-06',
          tag: '站点更新',
          title: '博客界面全面升级',
          content: '优化侧边栏布局、标签栏交互，全站页面统一视觉风格，首页加入动态效果与快捷入口。',
          color: '#6366f1'
        },
        {
          id: 2,
          date: '2025-05',
          tag: 'CTF',
          title: '新增 WriteUp 系列',
          content: '完成龙猫、小摩托、wav 隐写等题目的详细解题记录。',
          color: '#8b5cf6'
        },
        {
          id: 3,
          date: '2025-04',
          tag: '前端',
          title: '框架教程模块上线',
          content: 'Vue、React、Vite、Axios 等前端工具教程陆续完善。',
          color: '#0ea5e9'
        },
      ]
    }
  }
}
</script>

<style scoped>
.page-timeline {
  padding-left: 4px;
}

.skill-tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  color: #6366f1;
  background: rgba(99, 102, 241, 0.1);
  margin-bottom: 8px;
}
</style>
