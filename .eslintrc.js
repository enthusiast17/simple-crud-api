module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    quotes: ["error", "double"],
  },
};
