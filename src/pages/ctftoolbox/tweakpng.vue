<template>
  <page-shell title="TweakPNG 安装和配置指南" :logo="$img('tweakpng.webp')">
    <div class="page-card">
      <p>TweakPNG 是一个用于 Windows 平台的 PNG 图像文件操作工具。它允许用户查看和编辑 PNG 文件的元数据，适用于需要深入了解和修改 PNG 文件内部结构的用户。
      </p>
    </div>
    <div>
      <h2 class="page-section-title">项目使用的关键技术和框架</h2>
      <ul class="page-list">关键技术
        <li>PNG 文件格式解析：TweakPNG 能够解析和操作 PNG 文件的内部结构，包括各种块（chunks）的读取和修改。</li>
        <li>Windows API：项目主要面向 Windows 平台，因此使用了大量的 Windows API 进行界面和文件操作。</li>
      </ul>
      <ul class="page-list">框架
        <li>Windows SDK：用于开发 Windows 应用程序的标准框架。</li>
        <li>C++ 标准库：用于实现大部分的逻辑和数据处理。</li>
      </ul>
      <h2 class="page-section-title">项目使用的关键技术和框架</h2>
      <ul class="page-list">准备工作:
        <li>操作系统：确保你的操作系统是 Windows XP 或更高版本。</li>
        <li>开发环境：如果你需要从源代码编译 TweakPNG，你需要安装 Visual Studio 2022 或更高版本。</li>
      </ul>
    </div>
    <h2 class="page-section-title">下载和安装</h2>
    <p>下载源代码：从 GitHub 仓库下载 TweakPNG 的源代码。</p>
    <div class="page-img-wrap">
      <img :src="$img('tweakpng1.png')" alt="">
    </div>
    <div class="page-link-btn">
      <el-button type="primary" @click="goToUrl('https://github.com/jsummers/tweakpng')">
        前往GitHub地址</el-button>
    </div>
    <p>找到下载的 ZIP 文件，右键点击并选择“解压到当前文件夹”或使用解压软件（如 WinRAR 或 7-Zip）解压。</p>
    <div>
      <h2 class="page-section-title">编译 TweakPNG（可选）</h2>
      <ul class="page-list">
        <li>打开 Visual Studio。</li>
        <li>在 Visual Studio 中，点击“文件” -> “打开” -> “项目/解决方案”，然后选择解压后的 tweakpng-master 文件夹中的 .sln 文件。</li>
        <li>在解决方案资源管理器中，右键点击项目名称，选择“生成”或“重新生成”。</li>
        <li>编译完成后，你会在 x86 或 x64 文件夹中找到 tweakpng.exe,直接点击运行即可</li>
      </ul>
    </div>
    <p>安装好后打开,将需要操作或查看的图片拖入即可</p>
    <div class="page-img-wrap">
      <img :src="$img('tweakpng2.png')" alt="">
    </div>
  </page-shell>
</template>
