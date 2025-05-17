// plugin.ts
// Optional: Add plugin logic here 
// src/plugin.ts
import type { App } from 'vue'
import BaseInput from './components/BaseInput.vue'
import { setGlobalMessages } from './utils/validation'

export default {
  install(app: App, options?: { messages?: Record<string, string> }) {
    app.component('BaseInput', BaseInput)

    if (options?.messages) {
      setGlobalMessages(options.messages)
    }
  }
}