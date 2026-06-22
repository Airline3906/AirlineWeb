import { MessageBox } from 'element-ui'

export function showwarning(content = '提示内容', type = 'warning', title = '') {
  return MessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: type,
    }
  )
}
