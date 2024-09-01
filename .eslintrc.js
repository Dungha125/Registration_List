module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      "react-app",
    "react-app/jest"

    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      jsx: true,
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      "react/react-in-jsx-scope": "off"
    },
  };
  