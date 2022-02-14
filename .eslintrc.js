module.exports = {
    extends: [
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    plugins: ['react-hooks'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    env: {
        browser: true,
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/explicit-function-return-type': 1,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-member-accessibility': 1,
        'no-console': 1,
        'spaced-comment': ['error', 'always'],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    },
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            version: 'detect',
        },
    },
};
