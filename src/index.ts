// index.ts
import BaseInput from './components/BaseInput.vue'
import Plugin from './plugin'

export { BaseInput, Plugin }

export default {
  install(app: any) {
    app.component('BaseInput', BaseInput)
  }
}