<template>
  <page-shell title="Vuex是什么?" :logo="$img('Vuex.png')">
    <div class="page-card">
      <p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。<br> 它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p>
    </div>
    <div>
      <h2 class="page-section-title">什么情况下我应该使用 Vuex？</h2>
      <p class="text-size-[17px] my-10" style="line-height: 1.5;">Vuex
        可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。<br>

        如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store
        模式就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。引用 Redux 的作者 Dan Abramov 的话说就是：
      </p>
      <em class="text-size-[17px] my-10 text-gray-400">
        Flux 架构就像眼镜：您自会知道什么时候需要它。
      </em>
    </div>
    <div>
      <h2 class="page-section-title">安装</h2>
      <p>使用npm:</p>
      <div class="page-code-block">
        <span>$ npm install vuex@next --save</span>
        <el-button @click="copyText('npm install vuex@next --save')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>使用yarn:</p>
      <div class="page-code-block">
        <span>$ yarn add vuex@next --save</span>
        <el-button @click="copyText('yarn add vuex@next --save')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>自己构建</p>
      <div class="page-code-block">
        <span>$ git clone https://github.com/vuejs/vuex.git node_modules/vuex <br>
          cd node_modules/vuex <br>
          yarn <br>
          yarn build</span>
        <el-button @click="copyText('$ git clone https://github.com/vuejs/vuex.git node_modules/vuex $ cd node_modules/vuex $ yarn $ yarn build')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p class="page-center">或者您也可以直接跳转官网</p>
      <div class="page-link-btn">
        <el-button type="primary" @click="goToUrl('https://vuex.vuejs.org/zh/')">
          Vuex中文网直达</el-button>
      </div>
    </div>
  </page-shell>
</template>
