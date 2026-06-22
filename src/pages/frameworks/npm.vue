<template>
  <page-shell title="关于 npm" :logo="$img('npm.png')">
    <div class="page-card">
      <p>npm 是世界上最大的软件下载注册中心。来自各大洲的开源开发者使用 npm 来共享和借用软件包，许多组织也使用 npm 来管理私有开发。</p>
    </div>
    <div>
      <h2 class="page-section-title">npm 由三个不同的组件组成：</h2>
      <ul class="page-list">
        <li>网站</li>
        <li>命令行接口 (CLI)</li>
        <li>注册表</li>
      </ul>
    </div>
    <div>
      <h2 class="page-section-title">你可以使用npm去...</h2>
      <ul class="page-list">
        <li>为你的应用调整代码包，或按原样合并包。</li>
        <li>下载你可以立即使用的独立工具。</li>
        <li>使用 npx 在不下载的情况下运行包。</li>
        <li>随时随地与任何 npm 用户共享代码。</li>
        <li>将代码限制为特定的开发者。</li>
        <li>创建组织以协调包维护、编码和开发者。</li>
        <li>通过使用组织形成虚拟团队。</li>
        <li>管理多个版本的代码和代码依赖。</li>
        <li>更新底层代码时轻松更新应用。</li>
        <li>发现解决同一个难题的多种方法。</li>
        <li>寻找正在处理类似问题和项目的其他开发者。</li>
      </ul>
    </div>
    <div>
      <h2 class="page-section-title">新手入门</h2>
      <p>使用npm:</p>
      <div class="page-code-block">
        <span>要开始使用 npm，你可以创建一个账户，该账户将可以在 http://www.npmjs.com/~yourusername 使用。</span>
        <el-button @click="copyText('http://www.npmjs.com/~yourusername')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p class="page-center">或者您也可以直接跳转官网</p>
      <div class="page-link-btn">
        <el-button type="primary" @click="goToUrl('https://npm.nodejs.cn/about-npm')">
          NPM中文网直达</el-button>
      </div>
    </div>
  </page-shell>
</template>
