<template>
  <page-shell title="关于 Node.js®" :logo="$img('Nodejs.jpg')">
    <div class="page-card">
      <p>Node.js 是一个基于 <span class="text-green-700">Chrome V8</span> 引擎的 JavaScript 运行环境，简单说就是：让 JS 能脱离浏览器，直接在电脑 / 服务器上运行的工具。<br> 作为一个<span class="text-green-700">异步事件</span>驱动的 JavaScript 运行库，Node.js 旨在构建可扩展的网络应用程序。</p>
    </div>
    <div class="page-card">
      <p>这与当今更常见的使用操作系统线程并发模型形成对比。基于线程的网络编程效率相对低效，而且非常难以使用。此外，Node.js 的用户<span class="text-green-700">不必担心死锁进程，因为没有锁</span>。Node.js 几乎没有任何函数直接执行 I/O 操作，除非使用 Node.js 标准库的同步方法执行 I/O，否则进程永远不会阻塞。由于没有任何阻塞，因此在 Node.js 中开发可扩展的系统非常合理。</p>
    </div>
    <div>
      <h2 class="page-section-title">下载 Node.js®</h2>
      <p class="text-gray-400 text-[15px]"># Docker 对每个操作系统都有特定的安装指导。</p>
      <p class="text-gray-400 text-[15px] my-2"># 请参考 https://docker.com/get-started/ 给出的官方文档</p><br>
      <p># 拉取 Node.js Docker 镜像：</p>
      <div class="page-code-block">
        <span>docker pull node:24-alpine</span>
        <el-button @click="copyText('docker pull node:24-alpine')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p># 创建 Node.js 容器并启动一个 Shell 会话：</p>
      <div class="page-code-block">
        <span>docker run -it --rm --entrypoint sh node:24-alpine</span>
        <el-button @click="copyText('docker run -it --rm --entrypoint sh node:24-alpine')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p># 验证 Node.js 版本：</p>
      <div class="page-code-block">
        <span>node -v <span class="text-gray-400 text-[15px]"># Should print "v24.15.0"</span></span>
        <el-button @click="copyText('node -v')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p># 验证 npm 版本：</p>
      <div class="page-code-block">
        <span>npm -v <span class="text-gray-400 text-[15px]"> # Should print "11.12.1".</span></span>
        <el-button @click="copyText('npm -v')">
          <i class="el-icon-document-copy"></i>
        </el-button>
      </div>

      <p class="page-center">或者您也可以直接跳转官网</p>
      <div class="page-link-btn">
        <el-button type="primary" @click="goToUrl('https://nodejs.org/zh-cn')">
          Nodejs中文网直达</el-button>
      </div>
    </div>
  </page-shell>
</template>
