<template>
  <page-shell title="React 教程" :logo="$img('React.webp')">
    <div class="page-card">
      <p>React 是一个用于构建用户界面的 JAVASCRIPT 库。</p>
      <p>React 主要用于构建 UI，很多人认为 React 是 MVC 中的 V（视图）。</p>
      <p>React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。</p>
      <p>React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。</p>
    </div>
    <div>
      <h2 class="page-section-title">React 特点</h2>
      <ul class="page-list">
        <li><el-text tag="b" class="text-size-[20px]">声明式设计</el-text> −React采用声明范式，可以轻松描述应用。</li>
        <li><el-text tag="b" class="text-size-[20px]">高效</el-text> −React通过对DOM的模拟，最大限度地减少与DOM的交互。</li>
        <li><el-text tag="b" class="text-size-[20px]">灵活</el-text> −React可以与已知的库或框架很好地配合。</li>
        <li><el-text tag="b" class="text-size-[20px]">JSX</el-text> − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。</li>
        <li><el-text tag="b" class="text-size-[20px]">组件</el-text> − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。</li>
        <li><el-text tag="b" class="text-size-[20px]">单向响应的数据流</el-text> − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。</li>
      </ul>
    </div>
    <div>
      <h2 class="page-section-title">安装</h2>
      <p>Try React</p>
      <p class="text-gray-400">无需进行任何安装，即可体验：</p>
      <div class="page-code-block">
        <span>React 从诞生之初就是可被渐进式使用的。因此你可以选择性地使用 React 特性。不管你是想体验下 React，用它为简单的 HTML 页面增加交互，还是重新搭建一个由 React 驱动的复杂应用</span>
      </div>
      <p class="page-center">或者您也可以直接跳转官网</p>
      <div class="page-link-btn">
        <el-button type="primary" @click="goToUrl('https://zh-hans.react.dev/learn')">
          React中文网直达</el-button>
      </div>
    </div>
  </page-shell>
</template>
