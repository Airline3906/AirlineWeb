<template>
  <page-shell title="龙猫">
    <p>下载得到一个zip文件,修改后缀解压缩之后得到:</p>
    <div class="page-code-block">
      <ul class="page-list">
        <li>Key.zip</li>
        <li>Totoro.jpg</li>
      </ul>
    </div>
    <p>解压zip文件需要密码,
      我们先看Totoro.jpg文件,发现是损坏的文件,无法查看,
      用010打开后一看文件头不属于任何类型的文件,
      但是FE D7 FE又很接近jpg文件的文件头FF D8 FF,
      仔细看了一下发现所有的字节都被减一了,
      于是用代码将所有的字节逐个加一再输出为新的jpg,
    </p>
    <div class="page-link-btn">
      <el-button type="primary" @click="downloadFile1()">
        Byte plus one逐字节加一.py</el-button>
    </div>
    <p>成功得到了能正常打开的龙猫图片,但是龙猫图片上又没有什么实际的信息,
      好像派不上用场,但是结合题目提示:"一个信息可能有多个用处",
      再次仔细看了一下图片,用010打开后能在结尾处发现jpg文件尾后面还有一串Hex字符,
      密文: 34 34 36 46 35 46 35 38 33 30 37 32 32 31 ;</p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('dolocat3.png')]" :src="$img('dolocat3.png')" />
    </div>
    <p>Hex转Bytes后又得到
      明文: bytearray(b'446F5F58307221');
      将里面新的字符串:44 6F 5F 58 30 72 21;
      再丢进去转换一遍,得到
      明文: bytearray(b'Do_X0r!');
    </p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('dolocat1.png')]" :src="$img('dolocat1.png')" />
    </div>
    <p>Do_X0r!就是解压密码,解压后得到一个叫Key的未知类型文件,
      结合解压密码的提示:"Do_X0r!"(做异或),
      将得到的内容作为key,龙猫图片的Hex作为密文,
      异或后得到一串带有大量加号的字符串,</p>
    <div class="page-link-btn">
      <el-button type="primary" @click="downloadFile2()">
        XOR逐字循环节异或.py</el-button>
    </div>
    <p>一眼顶针,鉴定为brainfuck,往下翻找到在两个"?"之间有一串不一样的字符:</p>
    <div class="page-code-block">
      <p>++++++++[>>++>++++>++++++>++++++++>++++++++++>++++++++++++>++++++++++++++>++++++++++++++++>++++++++++++++++++>++++++++++++++++++++>++++++++++++++++++++++>++++++++++++++++++++++++>++++++++++++++++++++++++++>++++++++++++++++++++++++++++>++++++++++++++++++++++++++++++<<<<<<<<<<<<<<<<-]>>>>>>>++++++.>----.<-----.>-----.>-----.
        <<<<++++.<.>>>--.<+++++.>.<<++++++++.>>>++++++++.>-----.<<<<<+++.>>>.<-.<------------.>>>>--.<.>
        --.<<<---.<-.>>>>+++++++++++.</p>
    </div>
    <p>解密后得到明文:flag{D0_U_Lov3_T@torQ?}</p>
    <div class="page-img-wrap">
      <el-image :preview-src-list="[$img('dolocat2.png')]" :src="$img('dolocat2.png')" />
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
    },
    downloadFile1() {
      fetch('/documentzip/dolocat1.py')
        .then(res => res.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'dolocat1.py'
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          window.URL.revokeObjectURL(url)
        })
    },
    downloadFile2() {
      fetch('/documentzip/dolocat2.py')
        .then(res => res.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'dolocat2.py'
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          window.URL.revokeObjectURL(url)
        })
    }
  }
}
</script>
