<template>
  <page-shell title="Axios是什么?" :logo="$img('Axios.png')">
    <div class="page-card">
      <p>Axios 是一个基于<em class=" text-purple-500 ">promise</em> 网络请求库，作用于node.js 和浏览器中。 <br>它是<em
          class=" text-purple-500 ">isomorphic</em> 的(即同一套代码可以运行在浏览器和node.js中)。<br> 在服务端它使用原生 node.js http 模块,
        而在客户端 (浏览端) 则使用 XMLHttpRequest。</p>
    </div>
    <div>
      <h2 class="page-section-title">特性</h2>
      <ul class="page-list">
        <li>从浏览器创建 <em class=" text-purple-500 ">XMLHttpRequest</em></li>
        <li>从 node.js 创建 http 请求</li>
        <li>支持 <em class=" text-purple-500 ">Promise</em> API</li>
        <li>拦截请求和响应</li>
        <li>转换请求和响应数据</li>
        <li>取消请求</li>
        <li>超时处理</li>
        <li>查询参数序列化支持嵌套项处理</li>
        <li>将 HTML Form 转换成 JSON 进行请求</li>
      </ul>
    </div>
    <div>
      <h2 class="page-section-title">安装</h2>
      <p>使用npm:</p>
      <div class="page-code-block">
        <span>$ npm install axios</span>
        <el-button @click="copyText('$ npm install axios')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>使用bower:</p>
      <div class="page-code-block">
        <span>$ bower install axios</span>
        <el-button @click="copyText('$ bower install axios')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>使用yarn:</p>
      <div class="page-code-block">
        <span>$ yarn add axios</span>
        <el-button @click="copyText('$ yarn add axios')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>使用pnpm:</p>
      <div class="page-code-block">
        <span>$ pnpm add axios</span>
        <el-button @click="copyText('$ pnpm add axios')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p class="page-center">或者您也可以直接跳转官网</p>
      <div class="page-link-btn">
        <el-button type="primary" @click="goToUrl('https://www.axios-http.cn/')">
          Axios中文网直达</el-button>
      </div>
    </div>
  </page-shell>
</template>
