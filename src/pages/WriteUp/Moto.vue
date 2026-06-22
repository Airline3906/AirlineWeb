<template>
  <page-shell title="小摩托">
    <p>下载压缩文件后双击打开看到5个文件</p>
    <div class="page-code-block">
      <ul class="page-list">
        <li>file</li>
        <li>hint.txt</li>
        <li>xiaomotuo.wav</li>
        <li>送你一朵小fafa.pdf</li>
        <li>听歌识曲.mp3</li>
      </ul>
    </div>
    <p>其中"送你一朵小fafa.pdf"和"xiaomotuo.wav"是加密过的,</p>
    <p>打开hint.txt文件说:"<em>让你听歌识曲就听歌识曲哦，别想太多哦~</em>",</p>
    <p>行,那我直接听歌识曲,识别出来是林俊杰的《关键词》,可能是一个提示,
      不过暂且不知道有什么用,</p>
    <p>用010editor打开file文件,看到一大串疑似base的字符,看到结尾处的"=="更加确认了,</p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('moto1.png')]" :src="$img('moto1.png')" />
    </div>
    <p>放进随波逐流里面base64转图片得到一张图,里面写有字符串"dlddddhm",</p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('moto2.png')]" :src="$img('moto2.png')" />
    </div>
    <p>用这串字符去解压文件,把"送你一朵小fafa.pdf"解压出来了,</p>
    <p>打开可以看到一串由花朵图案组成的字符串,且有"=="做补位符,明显是一串密文,</p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('moto3.png')]" :src="$img('moto3.png')" />
    </div>
    <p>解密出来"qwertyuiop",尝试用来解压文件但是失败了,又陷入了僵局,
      结合现在的文件为pdf,考虑是不是隐藏了信息,使用wbstego提取隐藏信息,
      得到"ENTYNSTLWNRNTKYW13287484",再次尝试解压文件还是不行,</p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('moto4.png')]" :src="$img('moto4.png')" />
    </div>
    <p>想起之前的提示《关键词》,那有可能是关键词解密,将qwertyuiop作为关键词,
      ENTYNSTLWNRNTKYW13287484作为密文,
      解密得出CVEFVWETBVDVESFB13287484,再丢进去解压文件终于成功了,
      得到xiaomotuo.wav文件,用010打开没找到什么线索,也没有什么隐藏文件,</p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('moto5.png')]" :src="$img('moto5.png')" />
    </div>
    <p>那就考虑是不是文件本身藏了什么信息,steghide提取一下提示要密码,
      事到如今能用的密码都用过了,那就随便试试,把文件名"xiaomotuo"作为密码提取,
      成功得到flag{du_du_du_du}</p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('moto6.png')]" :src="$img('moto6.png')" />
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
