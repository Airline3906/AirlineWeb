<template>
  <page-shell>
    <div class="page-404-wrap">
      <el-result icon="warning" title="页面走丢了" sub-title="你访问的页面不存在或已被移除">
        <template slot="extra">
          <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        </template>
      </el-result>
    </div>
  </page-shell>
</template>
