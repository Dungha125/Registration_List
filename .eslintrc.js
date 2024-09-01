module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      jsx: true,
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      // Add your custom rules here
    },
  };
  