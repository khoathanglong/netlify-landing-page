module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/attributes-order': 'off',
    'vue/name-property-casin': 'off',
    'vue/require-default-prop': 'off',
    'vue/name-property-casing': 'off',
    'vue/order-in-components': 'off',
    'vue/comment-directive': 'off',
    'vue/require-component-is':'off'
  }
}
