<template>
  <page-shell title="为什么选 Vite" :logo="$img('Vite.png')">
    <div class="page-card">
      <p class="text-size-[20px] my-2">现实问题</p>
      <p class="my-2">
        在浏览器支持 ES 模块之前，JavaScript 并没有提供原生机制让开发者以模块化的方式进行开发。这也正是我们对 “打包”
        这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。<br>

        时过境迁，我们见证了诸如<em class=" text-purple-500 ">webpack</em>、<em class=" text-purple-500 ">Rollup</em>和<em
          class=" text-purple-500 ">Parcel</em> 等工具的变迁，它们极大地改善了前端开发者的开发体验。<br>

        然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。基于 JavaScript
        开发的工具就会开始遇到性能瓶颈：通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用模块热替换（HMR），文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。<br>

        Vite 旨在利用生态系统中的新进展解决上述问题：浏览器开始原生支持 ES 模块，且越来越多 JavaScript 工具使用编译型语言编写。</p>
    </div>
    <div>
      <h2 class="page-section-title">缓慢的服务器启动</h2>
      <em class="flex my-2">当冷启动开发服务器时，基于打包器的方式启动必须优先抓取并构建你的整个应用，然后才能提供服务。</em>
      <em class="flex text-size-[15px] my-2">Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类，改进了开发服务器启动时间。</em>
      <ul class="page-list">
        <li><el-text tag="b" class="text-size-[20px]">依赖</el-text> 大多为在开发时不会变动的纯
          JavaScript。一些较大的依赖（例如有上百个模块的组件库）<br> 处理的代价也很高。依赖也通常会存在多种模块化格式（例如 ESM 或者 CommonJS）。

          Vite 将会使用<em class=" text-purple-500 ">esbuild</em> 预构建依赖。esbuild 使用 Go 编写，并且比以 JavaScript
          编写的打包器预构建依赖快 10-100 倍。</li>
        <li><el-text tag="b" class="text-size-[20px]">源码</el-text> 通常包含一些并非直接是 JavaScript 的文件，需要转换（例如 JSX，CSS 或者
          Vue/Svelte 组件），时常会被编辑。同时，并不是所有的源码都需要同时被加载（例如基于路由拆分的代码模块）。

          Vite 以 原生 <em class=" text-purple-500 ">ESM</em> 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite
          只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。</li>
      </ul>
    </div>
    <div>
      <h2 class="page-section-title">安装</h2>
      <p>使用npm:</p>
      <div class="page-code-block">
        <span>$ npm create vite@latest</span>
        <el-button @click="copyText('npm create vite@latest')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>使用yarn:</p>
      <div class="page-code-block">
        <span>$ yarn create vite</span>
        <el-button @click="copyText('yarn create vite')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p>使用pnpm:</p>
      <div class="page-code-block">
        <span>$ pnpm create vite</span>
        <el-button @click="copyText('pnpm create vite')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p class="page-center">或者您也可以直接跳转官网</p>
      <div class="page-link-btn">
        <el-button type="primary" @click="goToUrl('https://vitejs.cn/vite3-cn/')">
          Vite中文网直达</el-button>
      </div>
    </div>
  </page-shell>
</template>
