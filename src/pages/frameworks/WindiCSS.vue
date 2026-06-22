<template>
  <page-shell title="开始" :logo="$img('windicss.svg')">
    <div class="page-card">
      <p>Windi CSS 是下一代工具优先的 CSS 框架。<br><br>
        如果你已经熟悉了 <span class="text-blue-400">Tailwind CSS</span> ，可以把 Windi CSS 看作是按需供应的 Tailwind
        替代方案，它为你提供了更快的加载体验，完美兼容 Tailwind v2.0，并且拥有很多额外的酷炫功能。</p>
    </div>
    <div>
      <h2 class="page-section-title">为什么选择 Windi CSS？</h2>
      <p class="text-size-[18px] my-10">在阐述为什么创建 Windi CSS 时，作者曾说：</p>
      <p class="text-size-[15px] my-10 text-gray-400">当项目越来越大时（大约几十个组件），使用 Tailwind CSS 最初的编译时间达到了 3s，而热更新时的时间甚至超过了 1s。 - @voorjaar</p>
      <p class="text-size-[18px] my-10">通过扫描 HTML 和 CSS 按需生成工具类（utilities），Windi CSS 致力于在开发中提供 更快的加载体验 以及更快的 HMR，并且在生产环境下无需对 CSS 进行 Purge（一种在生产环境中对未使用的 CSS 进行清除而节省体积的技术）。</p>
    </div>
    <div>
      <h2 class="page-section-title">安装</h2>
      <p>Vite集成:</p>
      <div class="page-code-block">
        <span>$ npm i -D vite-plugin-windicss windicss</span>
        <el-button @click="copyText('npm i -D vite-plugin-windicss windicss')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>Roolup集成</p>
      <div class="page-code-block">
        <span>$ npm i rollup-plugin-windicss -D # yarn add rollup-plugin-windicss -D</span>
        <el-button @click="copyText('npm i rollup-plugin-windicss -D # yarn add rollup-plugin-windicss -D')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>PostCSS集成</p>
      <div class="page-code-block">
        <span>$ npm i -D postcss-windicss</span>
        <el-button @click="copyText('npm i -D postcss-windicss')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>Windi CSS CLI</p>
      <div class="page-code-block">
        <span>$ npm i -g windicss</span>
        <el-button @click="copyText('npm i -g windicss')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p class="page-center">或者您也可以直接跳转官网</p>
      <div class="page-link-btn">
        <el-button type="primary" @click="goToUrl('https://cn.windicss.org/')">
          Windi CSS中文网直达</el-button>
      </div>
    </div>
  </page-shell>
</template>
