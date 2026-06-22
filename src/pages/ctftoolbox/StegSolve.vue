<template>
  <page-shell title="StegSolve 安装和配置指南" :logo="$img('stegsolve1.png')">
    <div class="page-card">
      <p>Stegsolve 是一款常用于 CTF 比赛的图片隐写分析工具，支持多种图片格式，可进行位平面分析、帧提取、图像合并等操作，帮助发现隐藏信息。</p>
    </div>
    <div>
      <h2 class="page-section-title">下载StegSolve</h2>
      <p>使用stegsolve是jar文件,所有要有的java的环境，因此要下载jdk 。
        首先我们下载stegsolve.jar文件，下载的地址为：</p>
    </div>
    <div class="page-code-block">链接：https://pan.baidu.com/s/1UVS1LYVksQydxk3jeOqHkQ
      <br> 提取码：ip8v
      <el-button @click="copyText('链接：https://pan.baidu.com/s/1UVS1LYVksQydxk3jeOqHkQ 提取码：ip8v')">
        <i class="el-icon-document-copy"></i>
      </el-button>
    </div>

    <div>
      <h2 class="page-section-title">下载JDK</h2>
      <p>jdk百度云盘下载链接：</p>
    </div>
    <div class="page-code-block">https://pan.baidu.com/s/1eZM0SnpjHY8Wp_H2gkFb7Q
      <el-button @click="copyText('https://pan.baidu.com/s/1eZM0SnpjHY8Wp_H2gkFb7Q')">
        <i class="el-icon-document-copy"></i>
      </el-button>
    </div>

    <p>当然，下载jdk也可以选择从官网下载</p>
    <div class="page-img-wrap">
      <img :src="$img('stegsolve2.png')" alt="">
    </div>
    <div class="page-link-btn">
      <el-button type="primary" @click="goToUrl('https://www.oracle.com/downloads/')">
        StegSolve官网直达</el-button>
    </div>
    <h2 class="page-section-title">jdk的安装</h2>
    <p>下载好了安装包后，双击进入安装向导。根据指示安装。</p>
    <div class="page-img-wrap">
      <img :src="$img('stegsolve3.png')" alt="">
    </div>

    <h2 class="page-section-title">配置环境变量</h2>
    <p>打开“此电脑”，右键选择属性，选择高级系统设置。</p>
    <div class="page-img-wrap">
      <img :src="$img('stegsolve4.png')" alt="">
    </div>
    <div class="page-img-wrap">
      <img :src="$img('stegsolve5.png')" alt="">
    </div>
    <p>在系统变量区域，点击新建：变量值为 jdk 的安装路径。</p>
    <div class="page-img-wrap">
      <img :src="$img('stegsolve6.png')" alt="">
    </div>
    <p>新建变量名：CLASSPATH ，变量值： .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar</p>
    <div class="page-img-wrap">
      <img :src="$img('stegsolve7.png')" alt="">
    </div>
    <p>找到Path变量，双击编辑 Path变量：<br>
      点击新建，变量值为%JAVA_HOME%\bin ，并将它移到最前端，然后点击确定。</p>
    <div class="page-img-wrap">
      <img :src="$img('stegsolve8.png')" alt="">
    </div>
    <p>这样环境就配置好了</p>

    <h2 class="page-section-title">关联jar文件</h2>
    <p>win+R打开“运行”窗口；输入cmd打开命令行窗口；进入java安装目录下的bin文件夹(注意查看自己的安装路径) <br>关联jar文件 </p>
    <div class="page-img-wrap">
      <img :src="$img('stegsolve9.png')" alt="">
    </div>
    <p>关联完成后即可自动打开stegsolve.jar ：</p>
    <div class="page-img-wrap">
      <img :src="$img('stegsolve10.png')" alt="">
    </div>
  </page-shell>
</template>
