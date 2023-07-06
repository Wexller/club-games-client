
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: ["unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    'vue/no-multiple-template-root': "off",
    'vue/valid-template-root': "off",
    'vue/no-setup-props-destructure': 'warn'
  },
}