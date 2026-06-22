# 代码备份说明

## 备份位置
`_backup/pre-enhance-20250620/src/` — 美化升级前的完整 `src` 目录快照

## 如何回退

### 方式一：整目录恢复
1. 删除当前 `src` 文件夹
2. 将 `_backup/pre-enhance-20250620/src` 复制回项目根目录并重命名为 `src`

### 方式二：单文件恢复
从备份目录中复制对应文件覆盖即可，例如：
- `src/pages/index.vue`
- `src/layout/admin.vue`
- `src/layout/components/Fheader.vue`
- `src/styles/global.css`（回退时删除此文件，并从 main.js 移除引用）

## 本次美化涉及的文件
- `src/styles/global.css`（新增）
- `src/main.js`
- `src/layout/admin.vue`
- `src/layout/components/Fheader.vue`
- `src/layout/components/Faside.vue`
- `src/pages/index.vue`
- `src/pages/login.vue`
- `src/pages/moment.vue`
