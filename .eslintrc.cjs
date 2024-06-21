/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
const path = require('path');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:playwright/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
      },
      alias: {
        map: [
          ['@', path.resolve(__dirname, 'src')],
        ],
        'extensions': ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      },
    }
  },
  globals: {
    $: 'readonly',
    jQuery: 'readonly',
  },
}
