module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
  },
};
