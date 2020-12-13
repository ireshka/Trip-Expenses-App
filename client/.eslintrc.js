module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    /**
     * @info General
     */
    'eslint:recommended',
    /**
     * @info React
     */
    'react-app',
    /**
     * @info Prettier
     */
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    /**
     * @info General eslint plugins
     */
    'simple-import-sort',
    /**
     * @info React eslint plugins
     */
    'better-styled-components',
    'prettier',
  ],
  rules: {
    /**
     * @info eslint-plugin-import
     */
    'import/prefer-default-export': 'off',
    /**
     * @info better-styled-components rules
     */
    'better-styled-components/sort-declarations-alphabetically': 'warn',
    /**
     * @info single rules before connect full eslint setup
     * during refactor
     */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
    jest: {
      version: 'detect',
    },
    react: {
      version: 'detect',
    },
  },
};
