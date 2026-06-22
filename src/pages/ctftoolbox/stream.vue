<template>
  <page-shell title="[随波逐流软件]CTF编码工具，一站式编解码全能编码工具箱。" :logo="$img('streamlogo.png')">
    <div class="page-card">
      <p>[随波逐流软件]CTF编码工具是一款专为网络安全竞赛选手和信息安全爱好者打造的集成式工具箱，旨在为用户提供一站式的文本编码解码与数据分析解决方案。本工具集成超过100种编码算法，涵盖Base系列、ROT系列、置换密码、栅栏密码、摩尔斯电码等经典与现代加密编码方式。内置智能编码识别系统，支持图片LSB隐写、音频频谱分析、文本奇偶校验及零宽字符等多种信息提取方式。配备多轮探测引擎，可自动识别进制转换、非常规Base编码及复合结构CTF题目，从密码破解到企业安全审计漏洞检测，提供教学级可视化展示与逐步骤解密过程。交互式界面、专业功能，支持拖拽一键加解密，让新手到专家级用户均可自定义调整参数，显著提升解题效率。
      </p>
    </div>
    <div>
      <h2 class="page-section-title">工具概览与核心功能解析</h2>
      <ul class="page-list">基础编码转换：
        <li>Base家族全系列（Base16/32/64/85/91等）</li>
        <li>URL/HTML/Unicode等Web相关编码</li>
        <li>各进制转换（支持到36进制）</li>
      </ul>
      <ul class="page-list">古典密码系统：
        <li>凯撒、维吉尼亚、栅栏等传统密码</li>
        <li>培根、摩尔斯等符号编码</li>
        <li>包括一些罕见的如"与佛论禅"等趣味编码</li>
      </ul>
      <ul class="page-list">现代加密与隐写：
        <li>AES/DES/3DES等标准加密算法</li>
        <li>盲水印、LSB隐写检测</li>
        <li>文件结构分析（binwalk集成）</li>
      </ul>
      <ul class="page-list">实用辅助工具：
        <li>字频分析、哈希计算</li>
        <li>文件头修复、伪加密检测</li>
        <li>二维码/条形码解码</li>
      </ul>
      <p>具体如下(可点击查看)</p>
      <div class="page-img-wrap">
        <el-image :preview-src-list="[$img('stream2.png')]" :src="$img('stream2.png')" />
      </div>
    </div>

    <h2 class="page-section-title">下载和安装</h2>
    <p>访问官方网站，打开你的网络浏览器，访问随波逐流官方网站</p>
    <div class="page-link-btn">
      <el-button type="primary" @click="goToUrl('http://150.158.159.129/index.html')">
        010Editor中文网直达</el-button>
    </div>
    <div class="page-img-wrap">
      <img :src="$img('stream.png')" alt="">
    </div>
    <p>下载随波逐流CTF编码工具，在官方网站上，点击 “Download Now” 或类似的按钮，以便下载 010 Editor 安装程序。</p>
    <div class="page-img-wrap">
      <img :src="$img('stream1.png')" alt="">
    </div>
  </page-shell>
</template>
