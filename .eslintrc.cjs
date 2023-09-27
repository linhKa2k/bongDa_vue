/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  'prettier/prettier': [
    'error',
    {
      'endOfLine': 'auto',
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    }
  ],
};