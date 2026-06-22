/** 路由路径 → 侧边栏菜单 index 及需展开的 submenu */
export const routeMenuMap = {
  '/': { active: '1', openeds: [] },
  '/personalwork': { active: '6', openeds: [] },
  '/moment': { active: '5', openeds: [] },
  '/Webinfo': { active: '7', openeds: [] },
  '/personalinfo': { active: '1', openeds: [] },
  '/WriteUp/Moto': { active: '2-1', openeds: ['2'] },
  '/WriteUp/DoloCat': { active: '2-2', openeds: ['2'] },
  '/WriteUp/HidePng': { active: '2-3', openeds: ['2'] },
  '/WriteUp/WavHide': { active: '2-4', openeds: ['2'] },
  '/ctftoolbox/Editor': { active: '4-1', openeds: ['4'] },
  '/ctftoolbox/stream': { active: '4-2', openeds: ['4'] },
  '/ctftoolbox/tweakpng': { active: '4-3', openeds: ['4'] },
  '/ctftoolbox/StegSolve': { active: '4-4', openeds: ['4'] },
  '/ctftoolbox/Audacity': { active: '4-5', openeds: ['4'] },
  '/frameworks/Vue': { active: '3-1-1', openeds: ['3', '3-1'] },
  '/frameworks/Axios': { active: '3-1-2', openeds: ['3', '3-1'] },
  '/frameworks/Vuex': { active: '3-1-3', openeds: ['3', '3-1'] },
  '/frameworks/React': { active: '3-1-4', openeds: ['3', '3-1'] },
  '/frameworks/WindiCSS': { active: '3-2-1', openeds: ['3', '3-2'] },
  '/frameworks/Vite': { active: '3-3-1', openeds: ['3', '3-3'] },
  '/frameworks/npm': { active: '3-3-2', openeds: ['3', '3-3'] },
  '/frameworks/Nodejs': { active: '3-3-3', openeds: ['3', '3-3'] },
}

export function getMenuStateByPath(path) {
  return routeMenuMap[path] || { active: '1', openeds: [] }
}
