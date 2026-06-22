<template>
  <page-shell title="Audacity 安装,配置和使用指南" :logo="$img('audacity1.jpg')">
    <div class="page-card">
      <p>Audacity是一款易于使用的多轨音频编辑和录音工具。它是一款自1999年以来由专注社区开发的免费
        开源软件。</p>
    </div>
    <div>
      <h2 class="page-section-title">StegSolve的下载和安装</h2>
      <p>使用stegsolve是jar文件,所有要有的java的环境，因此要下载jdk 。
        首先我们下载stegsolve.jar文件，下载的地址为：</p>
    </div>
    <div class="page-code-block">https://www.audacityteam.org/
      <el-button @click="copyText('https://www.audacityteam.org/')">
        <i class="el-icon-document-copy"></i>
      </el-button>
    </div>
    <div class="page-link-btn">
      <el-button type="primary" @click="goToUrl('https://www.audacityteam.org/download/windows/')">
        Audacity官网直达</el-button>
    </div>
    <p>安装FFmpeg</p>
    <div class="page-code-block">https://ffmpeg.org/download.html
      <el-button @click="copyText('https://ffmpeg.org/download.html')">
        <i class="el-icon-document-copy"></i>
      </el-button>
    </div>

    <div>
      <h2 class="page-section-title">Audacity的使用</h2>
      <p>导入文件<br>
        要开始编辑，需要某种声音进行编辑。可以录制一段声音，或者通过将现有声音文件（例如 MP3 或 WAV）拖放到项目窗口中来导入该文件。
        即可看到声音波形图：</p>
    </div>
    <div class="page-img-wrap">
      <img :src="$img('audacity2.png')" alt="">
    </div>
    <p>此波形是歌曲的波形图。蓝色“斑点”越大，部分越响亮。单独的线条（“尖峰”）表示突然和短促的响亮部分，例如咔嗒声、啪啪声、拍手声和鼓声。</p>
    <h2 class="page-section-title">应用效果</h2>
    <div>
      <ul class="page-list">Audacity支持广泛的效果和效果插件。这些效果可用于降噪和消除噪音等等，虽然每种效果的作用不同，但它们通常都可以通过以下方式应用：
        <li>选择要应用效果的音频。</li>
        <li>转到效果菜单。</li>
        <li>选择要使用的效果</li>
        <li>根据自己的喜好调整效果。可以单击“预览”按钮来收听简短的样本，然后再将其应用于整个选择。</li>
        <li>按“确定”应用效果。</li>
      </ul>
    </div>
    <h2 class="page-section-title">光谱分析</h2>
    <p>Audacity 中的每个轨道都可以在频谱图中查看：</p>
    <div class="page-img-wrap">
      <img :src="$img('audacity3.png')" alt="">
    </div>
    <div class="page-img-wrap">
      <img :src="$img('audacity4.png')" alt="">
    </div>

    <h2 class="page-section-title">绘图谱</h2>
    <ul class="page-list">
      <li>选择目标分析的音频</li>
      <li>转到分析 -> 绘图光谱。</li>
    </ul>
    <div class="page-img-wrap">
      <img :src="$img('audacity5.png')" alt="">
    </div>
    <p class="text-gray-500">更多使用方法等待您的探索......</p>
  </page-shell>
</template>
