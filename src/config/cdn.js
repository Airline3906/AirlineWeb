export const CDN_BASE = 'https://airline3906.oss-cn-shenzhen.aliyuncs.com'

export function imgUrl(filename) {
  return `${CDN_BASE}/${filename}`
}
