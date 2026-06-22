<template>
  <page-shell title="010Editor的下载安装和使用" :logo="$img('editor.png')">
    <div class="page-card">
      <p>010 Editor（也称为 SweetScape 010
        Editor）是一款功能强大的二进制文件编辑器和文本编辑器。它主要用于查看、编辑和分析各种二进制文件和文本文件，特别适用于处理数据恢复、磁盘编辑、编程和系统管理等领域。</p>
    </div>
    <h2 class="page-section-title">下载和安装</h2>
    <p>（1）访问官方网站，打开你的网络浏览器，访问 010 Editor 官方网站</p>
    <div class="page-link-btn">
      <el-button type="primary" @click="goToUrl('https://010editor.cn/')">
        010Editor中文网直达</el-button>
    </div>
    <div class="page-img-wrap">
      <img :src="$img('editorwb.png')" alt="">
    </div>
    <p>(2)下载 010 Editor，在官方网站上，点击 “Download Now” 或类似的按钮，以便下载 010 Editor 安装程序。</p>
    <div class="page-img-wrap">
      <img :src="$img('editorwb2.png')" alt="">
    </div>
    <p>(3)安装 010 Editor，找到下载的安装程序，双击运行它。</p>
    <div class="page-img-wrap">
      <img :src="$img('editorwb3.png')" alt="">
    </div>
    <p>(4) 跟随安装向导的指示，进行安装。</p>
    <div class="page-img-wrap">
      <img :src="$img('editorwb4.png')" alt="">
    </div>
    <h2 class="page-section-title">Editor的使用</h2>
    <p>（1）安装成功后,启动 010 Editor编辑器。</p>
    <div class="page-img-wrap">
      <img :src="$img('editorwb5.png')" alt="">
    </div>
    <p> (2) 浏览并选择你要编辑的文件，点击 “打开”。</p>
    <div class="page-img-wrap">
      <img :src="$img('editorwb6.png')" alt="">
    </div>
    <p>这样你就可以对你想要的文件进行编辑了</p>
    <div class="page-img-wrap">
      <img :src="$img('editorwb7.png')" alt="">
    </div>
  </page-shell>
</template>
