<template>
    <el-row class="login-container" type="flex">
        <el-col :xs="24" :sm="24" :md="12" :lg="16" class="login-left">
            <div class="left-content animate-fade-up">
                <div class="left-top-text">欢迎光临</div>
                <div class="left-bottom-text">Airline的个人后台管理系统站点</div>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="8" class="login-right">
            <div class="login-form-panel animate-fade-up" style="animation-delay: 0.12s">
            <h2 class="right-top-text">欢迎回来</h2>
            <div class="right-tips">
                <span class="right-tips-line"></span>
                <span>账号密码登录</span>
                <span class="right-tips-line"></span>
            </div>
            <div class="login-form-wrap">
                <el-form ref="formRef" :rules="rules" :model="form" label-width="0">
                    <el-form-item prop="username">
                        <el-input v-model="form.username" placeholder="用户名">
                            <i slot="prefix" class="el-icon-user"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input show-password type="password" v-model="form.password" placeholder="密码">
                            <i slot="prefix" class="el-icon-lock"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="right-button" type="primary" @click="onSubmit">login</el-button>
                    </el-form-item>
                </el-form>
            </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{
          required: true,
          message: 'Please input username',
          trigger: 'blur'
        },
        {
          max: 10,
          message: 'Length should be 0 ~ 10',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: 'Please input password',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 10,
          message: 'Length should be at least 3',
          trigger: 'blur'
        }],
      }
    }
  },
  mounted() {
    document.title = '登录-Airline的个人网址'
  },
  methods: {
    onSubmit() {
      this.$refs.formRef.validate((valid) => {
        if (!valid) {
          this.$notify({
            title: 'Warning',
            message: '请输入正确的格式',
            type: 'warning',
            duration: 3000,
          })
          return
        } else if (this.form.username !== 'Airline' || this.form.password !== 'Airline') {
          this.$notify({
            title: 'Error',
            message: '只能以管理员身份登录!',
            type: 'error',
            duration: 3000,
          })
          return
        } else {
          store.commit('SET_USERINFO', {
            username: 'admin',
            password: 'admin',
          })
          this.$notify({
            title: 'Success',
            message: '登录成功!',
            type: 'success',
            duration: 3000,
          })
          localStorage.setItem('isLogin', 'true')
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container {
    min-height: 100vh;
    margin: 0 !important;
    flex-wrap: wrap;
}

.login-left {
    @apply flex items-center justify-center flex-col;
    min-height: 40vh;
    padding: 48px 20px;
    background: linear-gradient(-45deg, #4f46e5, #6366f1, #7c3aed, #6366f1);
    background-size: 400% 400%;
    animation: gradient-shift 10s ease infinite;
}

.left-content {
    text-align: center;
}

.login-right {
    @apply bg-light-50 flex items-center justify-center flex-col;
    min-height: 60vh;
    padding: 40px 20px;
}

.login-form-panel {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.left-top-text {
    @apply font-bold text-5xl text-light-50 mb-4;
}

.left-bottom-text {
    @apply text-dark-100 text-center px-4;
}

.login-right {
    @apply bg-light-50 flex items-center justify-center flex-col;
    min-height: 60vh;
    padding: 40px 20px;
}

.right-top-text {
    @apply font-bold text-3xl text-gray-800;
}

.right-tips {
    @apply flex items-center justify-center my-5 text-gray-400;
}

.right-tips-line {
    @apply h-[1px] w-16 bg-gray-200;
    margin: 0 10px;
}

.login-form-wrap {
    width: 250px;
    max-width: 100%;
}

.login-form-wrap ::v-deep .el-input__inner {
    background-color: #eef2ff;
    border-color: #e5e7eb;
    border-radius: 8px;
    height: 40px;
    line-height: 40px;
}

.login-form-wrap ::v-deep .el-input__prefix {
    left: 10px;
    color: #9ca3af;
}

.login-form-wrap ::v-deep .el-input--prefix .el-input__inner {
    padding-left: 36px;
}

.login-form-wrap ::v-deep .el-form-item {
    margin-bottom: 22px;
}

.right-button {
    width: 250px;
    max-width: 100%;
    border-radius: 9999px;
    background-color: #626aef;
    border-color: #626aef;
    height: 40px;
    font-size: 16px;
}

.right-button:hover,
.right-button:focus {
    background-color: #5258d4;
    border-color: #5258d4;
}

/* 电脑端：左右分栏，各占满屏高 */
@media (min-width: 992px) {
    .login-container {
        flex-wrap: nowrap;
    }

    .login-left,
    .login-right {
        min-height: 100vh;
        padding: 0;
    }
}
</style>
