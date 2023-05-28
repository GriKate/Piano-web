// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 10,
    sourceType: "module",
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    // 'eslint:recommended',
    '@vue/prettier'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true, quoteProps: 'as-needed' }],
    'prefer-const': ['warn'],
    'quotes': ["error", "single", { "avoidEscape": true }],
    'no-console': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
