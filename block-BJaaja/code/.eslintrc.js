module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // 'extends': 'eslint:recommended'
    'arrow-body-style': ['error', 'always'],
    'no-console': 'off',
    extends: 'eslint:recommended',
  },
};
