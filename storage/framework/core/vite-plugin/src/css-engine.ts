import type { Plugin } from 'vite'
import { path as p } from '@stacksjs/path'
import Unocss from 'unocss/vite'

export function cssEngine(isWebComponent = false): any {
  return Unocss({
    configFile: p.uiPath('src/uno.config.ts'),
    mode: isWebComponent ? 'shadow-dom' : 'vue-scoped',
  })
}
