// validation.ts

let globalMessages: Record<string, string> = {}

export function setGlobalMessages(messages: Record<string, string>) {
  globalMessages = messages
}

export function getValidationMessage(
  key: string,
  params: Record<string, any> = {},
  overrideMessages?: Record<string, string>
): string {
  const template =
    overrideMessages?.[key] || globalMessages?.[key] || defaultMessages[key] || ''
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? '')
}

export function validateValue(
  value: string,
  rules: Record<string, any>,
  messages?: Record<string, string>
): string | null {
  for (const [rule, ruleValue] of Object.entries(rules)) {
    if (typeof ruleValue === 'function') {
      const result = ruleValue(value)
      if (result !== true) {
        return typeof result === 'string'
          ? result
          : getValidationMessage(rule, {}, messages)
      }
      continue
    }

    if (rule === 'required' && ruleValue && !value) {
      return getValidationMessage('required', {}, messages)
    }
    if (rule === 'minLength' && value.length < ruleValue) {
      return getValidationMessage('minLength', { min: ruleValue }, messages)
    }
    if (rule === 'maxLength' && value.length > ruleValue) {
      return getValidationMessage('maxLength', { max: ruleValue }, messages)
    }
    if (rule === 'email' && ruleValue) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        return getValidationMessage('email', {}, messages)
      }
    }
  }
  return null
}

const defaultMessages: Record<string, string> = {
  required: 'This field is required.',
  minLength: 'Minimum length is {min}.',
  maxLength: 'Maximum length is {max}.',
  email: 'Please enter a valid email address.'
}