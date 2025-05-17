# @ertu/forms

A customizable and Nuxt 3-compatible input component with validation and masking support.

## ✨ Features

- ✅ Vue 3 + Nuxt 3 support
- 🔠 Masking (string or function-based)
- ✅ Validation rules (required, minLength, maxLength, email)
- 🌐 Optional i18n-style custom messages
- 🧩 Plugin or named import usage
- 🔧 Supports custom user-defined validation functions

## 📦 Installation

```bash
npm install @ertu/forms
```

## 🚀 Usage

### Global Plugin Registration (Nuxt 3 or Vue)

```ts
import { createApp } from 'vue'
import App from './App.vue'
import ERTUForms from '@ertu/forms'

const app = createApp(App)

app.use(ERTUForms, {
  messages: {
    required: 'Bu alan zorunludur',
    email: 'Geçerli bir e-posta giriniz'
  }
})
```

### Or Direct Import

```ts
import { BaseInput } from '@ertu/forms'
```

### Nuxt 3 Auto-Import Support

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  components: [
    { path: 'node_modules/@ertu/forms/src/components', extensions: ['vue'] }
  ]
})
```

## 🧩 BaseInput Props

| Prop         | Type                             | Description |
|--------------|----------------------------------|-------------|
| `modelValue` | `string`                         | Bound value |
| `rules`      | `Record<string, any>`            | Validation rules |
| `mask`       | `string \| (val: string) => string` | Optional mask |
| `messages`   | `Record<string, string>`         | Optional per-instance override |

## ✅ Validation Rules

Built-in rules:
- `required`
- `minLength`
- `maxLength`
- `email`

Custom rule example:
```ts
rules: {
  required: true,
  isUsername: (val) => val.startsWith('@') || 'Username must start with @'
}
```

## 🎭 Masking

String-based:
```ts
mask: '###-##-####'
```

Function-based:
```ts
mask: (val) => {
  return '+90 (' + val.slice(0, 3) + ') ' + val.slice(3, 6) + ' ' + val.slice(6)
}
```

## 📁 Project Structure

```
ertu-forms/
├── src/
│   ├── components/         # BaseInput.vue
│   ├── utils/              # masking & validation logic
│   ├── plugin.ts           # Vue plugin install
│   └── index.ts            # Entry point
├── playground/             # Nuxt 3 example usage
```

## 📤 Publish

To publish this package:

```bash
npm login
npm version patch # or minor/major
npm publish --access public
```

---

Made with ❤️ by ertugrul.yaman 