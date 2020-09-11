module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
   // parser: 'babel-eslint'
  },
  extends: [
    //'plugin:nuxt/recommended',
    //'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
   // '@nuxtjs'
  ],
  // add your custom rules here
  rules: {
  }
}
