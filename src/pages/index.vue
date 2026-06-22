<template>
  <div class="home-page">
    <div class="hero-bg" aria-hidden="true">
      <span class="orb orb-1"></span>
      <span class="orb orb-2"></span>
      <span class="orb orb-3"></span>
    </div>

    <div class="home-inner">
      <!-- 头像区 -->
      <div class="animate-fade-up hero-section" style="animation-delay: 0.05s">
        <div class="avatar-wrap animate-float animate-glow">
          <el-avatar :size="160" :src="$img('Tom.jpg')" />
        </div>
        <h1 class="hero-name">Airline</h1>
        <p class="hero-role">在校大学生 · 网络安全爱好者 · 前端自学开发者</p>
        <div class="skill-tags">
          <span v-for="tag in skills" :key="tag" class="skill-tag">{{ tag }}</span>
        </div>
      </div>

      <!-- 快捷入口 -->
      <div class="animate-fade-up stat-grid" style="animation-delay: 0.15s">
        <div
          v-for="item in quickLinks"
          :key="item.name"
          class="stat-card"
          @click="navigateTo(item)"
        >
          <i :class="item.icon" class="stat-icon"></i>
          <div class="stat-title">{{ item.title }}</div>
          <div class="stat-desc">{{ item.desc }}</div>
        </div>
      </div>

      <!-- 简介 -->
      <div class="animate-fade-up intro-card" style="animation-delay: 0.25s">
        <p>欢迎来到我的个人博客</p>
        <p>专注网络安全与前端技术学习，日常分享 CTF Writeup、前端踩坑笔记与生活随手记录。</p>
        <p class="motto"><em>Motto：道阻且长，行则将至</em></p>
      </div>

      <!-- 联系方式 -->
      <div class="animate-fade-up contact-section" style="animation-delay: 0.35s">
        <h2 class="contact-title">联系方式</h2>
        <div class="contact-grid">
          <div
            v-for="item in contacts"
            :key="item.label"
            class="contact-card"
            @click="copyText(item.value)"
          >
            <i :class="item.icon"></i>
            <div class="contact-info">
              <span class="contact-label">{{ item.label }}</span>
              <span class="contact-value">{{ item.value }}</span>
            </div>
            <i class="el-icon-document-copy copy-icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from '@/bus'

export default {
  data() {
    return {
      skills: ['Vue', 'React', 'CTF', 'Web安全', 'Node.js', 'Vite'],
      quickLinks: [
        { name: '2-1', title: 'WriteUp', desc: 'CTF 解题记录', icon: 'el-icon-document', path: '/WriteUp/Moto', tabTitle: '小摩托' },
        { name: '4-1', title: '工具箱', desc: 'CTF 常用工具', icon: 'el-icon-s-tools', path: '/ctftoolbox/Editor', tabTitle: '010Editor' },
        { name: '3-1-1', title: '前端框架', desc: 'Vue / React 等', icon: 'el-icon-cpu', path: '/frameworks/Vue', tabTitle: 'Vue3' },
        { name: '6', title: '作品集', desc: '个人创作展示', icon: 'el-icon-picture-outline', path: '/personalwork', tabTitle: '个人作品集' },
      ],
      contacts: [
        { label: '电话号码', value: '18465987571', icon: 'el-icon-phone' },
        { label: 'QQ邮箱', value: '3458513412@qq.com', icon: 'el-icon-message' },
        { label: '网易邮箱', value: '18465987571@163.com', icon: 'el-icon-message' },
      ]
    }
  },
  methods: {
    navigateTo(item) {
      bus.emit('addTab', { name: item.name, title: item.tabTitle })
      this.$router.push(item.path)
    },
    copyText(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          this.$message.success({ message: '复制成功！', duration: 1000 })
        }).catch(() => {
          this.$message.error('复制失败，请手动复制')
        })
      } else {
        const input = document.createElement('textarea')
        input.value = text
        document.body.appendChild(input)
        input.select()
        try {
          document.execCommand('copy')
          this.$message.success({ message: '复制成功！', duration: 1000 })
        } catch (e) {
          this.$message.error('复制失败，请手动复制')
        }
        document.body.removeChild(input)
      }
    }
  }
}
</script>

<style scoped>
.home-page {
  position: relative;
  min-height: calc(100vh - 120px);
  padding: 24px 20px 48px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 45%, #f1f5f9 100%);
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.45;
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 280px;
  height: 280px;
  background: #818cf8;
  top: -60px;
  right: 10%;
}

.orb-2 {
  width: 200px;
  height: 200px;
  background: #a78bfa;
  bottom: 20%;
  left: -40px;
  animation-delay: -2s;
}

.orb-3 {
  width: 160px;
  height: 160px;
  background: #6366f1;
  top: 40%;
  right: -30px;
  animation-delay: -4s;
}

.home-inner {
  position: relative;
  z-index: 1;
  max-width: 880px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  margin-bottom: 36px;
}

.avatar-wrap {
  display: inline-block;
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #a78bfa);
  margin-bottom: 16px;
}

.avatar-wrap ::v-deep .el-avatar {
  border: 3px solid #fff;
}

.hero-name {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 8px;
}

.hero-role {
  color: #64748b;
  font-size: 0.95rem;
  margin: 0 0 16px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.skill-tag {
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  color: #4f46e5;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: transform 0.2s ease, background 0.2s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
  background: rgba(99, 102, 241, 0.18);
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 28px;
}

.stat-card {
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 24px rgba(99, 102, 241, 0.08);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.15);
}

.stat-icon {
  font-size: 1.75rem;
  color: #6366f1;
  margin-bottom: 10px;
}

.stat-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 4px;
}

.stat-desc {
  font-size: 0.82rem;
  color: #94a3b8;
}

.intro-card {
  padding: 24px 28px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);
  border: 1px solid #e2e8f0;
  text-align: center;
  line-height: 1.85;
  color: #475569;
  margin-bottom: 28px;
}

.intro-card p {
  margin: 0 0 8px;
}

.motto {
  margin-top: 12px !important;
  color: #6366f1;
  font-weight: 500;
}

.contact-section {
  margin-top: 8px;
}

.contact-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  text-align: center;
  margin: 0 0 16px;
}

.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 12px;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-card:hover {
  transform: translateX(4px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
}

.contact-card > i:first-child {
  font-size: 1.4rem;
  opacity: 0.9;
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-label {
  font-size: 0.75rem;
  opacity: 0.85;
}

.contact-value {
  font-size: 0.95rem;
  font-weight: 500;
}

.copy-icon {
  opacity: 0.7;
  transition: opacity 0.2s;
}

.contact-card:hover .copy-icon {
  opacity: 1;
}
</style>
