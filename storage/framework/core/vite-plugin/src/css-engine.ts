import type { Plugin } from 'vite'
import { path as p } from '@stacksjs/path'
import UnoCSS from 'unocss/vite'

export function cssEngine(isWebComponent = false): any {
  return UnoCSS({
    configFile: p.uiPath('src/uno.config.ts', { relative: true }),
    mode: isWebComponent ? 'shadow-dom' : 'vue-scoped',
  })
}
