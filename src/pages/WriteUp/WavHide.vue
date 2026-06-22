<template>
  <page-shell title="Wav隐藏">
    <p>下载好misc40.zip文件后直接打开能看到四个文件:</p>
    <div class="page-code-block">
      <ul class="page-list">
        <li>svega.mp3</li>
        <li>svega.wav</li>
        <li>conversion.txt</li>
        <li>一张普通的二维码.png</li>
      </ul>
    </div>
    <p>其中svega.wav需要密码
      我们从简单的开始分析,打开"conversion.txt"看到内容:
    </p>
    <div class="page-code-block">
      <p>110001010100011101</p>
      <p>2>4>8>10</p>
    </div>

    <p>结合文件名可能和进制转换有关,将二进制转换为十进制后可得"202013",看了一下文件属性是出题人修改题目的时间
      虽然不一定有用,但是把相关信息联系在一起的习惯是重要的
      尝试使用202013作为密码解压,但是失败了,我们暂且放下不管
      打开"一张普通的二维码.png"后扫描二维码,但是只得到"flag不在这里哦~~"
      试着用010editor打开,在文件末尾发现了大量含有"+-><"等的字符串 为典型的brainfuck编码,</p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('wav3.png')]" :src="$img('wav3.png')" />
    </div>
    <p>解密后得到"和谐民主和谐文明和谐和谐和谐自由和谐平等和谐公正"
      显然是社会主义核心价值观编码,解密后得到"123456"
    </p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('wav2.png')]" :src="$img('wav2.png')" />
    </div>
    <p>再次尝试解密压缩文件,但仍然失败
      那突破口就在最后的svega.mp3文件上了,使用针对mp3进行分析的软件"mp3stego"
      尝试解码,显示需要密码,使用刚刚的"123456"
      解密得出提示:
    </p>
    <div class="page-code-block">
      <p>"hint：静默之眼
        对了~另一个音乐的密码是abc123哦
        你马上就成功了！"</p>
    </div>
    <p>再次用这个密码abc123解压文件终于成功了
      解压出来的svega.wav根据提示使用silenteye(沉默之眼)打开
      在"key"处输入最开始的密码202013得到flag
      (默认参数解不出来,调整参数多试几次,这题是"sould quality: high" "type AES128" key "202013"要输入两遍确认)</p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('wav1.png')]" :src="$img('wav1.png')" />
    </div>

    <div class="page-actions">
      <el-button @click="liked()" type="primary">
        <i :class="ifliked ? 'el-icon-star-off' : 'el-icon-star-on'"></i>
        有帮助</el-button>
    </div>
  </page-shell>
</template>

<script>
export default {
  data() {
    return {
      ifliked: true
    }
  },
  methods: {
    liked() {
      if (this.ifliked) {
        this.$message.success('很高兴能帮上你!')
      }
      this.ifliked = !this.ifliked
    }
  }
}
</script>
