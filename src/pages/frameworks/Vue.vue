<template>
  <page-shell title="什么是 Vue？" :logo="$img('Vue.png')">
    <div class="page-card">
      <p>Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。</p>
    </div>
    <div>
      <h2 class="page-section-title">渐进式框架</h2>
      <p>Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue 的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue：</p>
      <ul class="page-list">
        <li>无需构建步骤，渐进式增强静态的 HTML</li>
        <li>在任何页面中作为 Web Components 嵌入</li>
        <li>单页应用 (SPA)</li>
        <li>全栈 / 服务端渲染 (SSR)</li>
        <li>Jamstack / 静态站点生成 (SSG)</li>
        <li>开发桌面端、移动端、WebGL，甚至是命令行终端中的界面</li>
      </ul>
    </div>
    <div>
      <h2 class="page-section-title">安装</h2>
      <p>使用npm:</p>
      <div class="page-code-block">
        <span>$ npm create vue@latest</span>
        <el-button @click="copyText('npm create vue@latest')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>使用bun:</p>
      <div class="page-code-block">
        <span>$ bun create vue@latest</span>
        <el-button @click="copyText('bun create vue@latest')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>使用yarn:</p>
      <div class="page-code-block">
        <span>$ yarn dlx create-vue@latest</span>
        <el-button @click="copyText('yarn dlx create-vue@latest')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>使用pnpm:</p>
      <div class="page-code-block">
        <span>$ pnpm create vue@latest</span>
        <el-button @click="copyText('pnpm create vue@latest')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p class="page-center">或者您也可以直接跳转官网</p>
      <div class="page-link-btn">
        <el-button type="primary" @click="goToUrl('https://cn.vuejs.org/')">
          Vue3中文网直达</el-button>
      </div>
    </div>
  </page-shell>
</template>
