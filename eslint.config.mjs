// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @description uses also eslint-config-prettier */
import prettier from 'eslint-plugin-prettier/recommended';

import unusedImports from 'eslint-plugin-unused-imports';

export default [
  ...tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, {
    files: ['**/*.js', '**/*.mjs', '**/*.ts'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
        },
      ],
    },
  }),
  prettier,
];
