import { App } from '@vue/runtime-core'
import { Directive, Plugin } from 'vue'

export const autofocus: Directive = {
  mounted(el) {
    el.focus()
  },
}

const plugin: Plugin = (app: App, options) => {
  app.directive(options?.name || 'autofocus', autofocus)
}

export default plugin
