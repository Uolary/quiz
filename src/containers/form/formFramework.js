export function createControl(config, validation) {
  return {
    ...config,
    validation: validation,
    valid: !validation,
    touched: false,
    value: ''
  }
}