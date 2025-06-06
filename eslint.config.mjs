import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      // JS rules
      semi: ['error', 'always'],
      'prefer-const': 'error',
      curly: ['error', 'all'],
      'max-len': [
        'error',
        {
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'no-redeclare': ['error', { builtinGlobals: true }],
      'no-console': 'warn',
      'operator-linebreak': 'off',
      'brace-style': ['error', '1tbs'],
      'arrow-body-style': 'off',
      'arrow-parens': 'off',
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['state'],
        },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
      ],

      // React rules
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'import/prefer-default-export': 'off',
      'standard/no-callback-literal': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/destructuring-assignment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/state-in-constructor': ['error', 'never'],
      'react-hooks/rules-of-hooks': 'error',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          assert: 'either',
        },
      ],
      'jsx-a11y/label-has-for': [
        'error',
        {
          components: ['Label'],
          required: { some: ['id', 'nesting'] },
          allowChildren: true,
        },
      ],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // TypeScript rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],

      // Prettier
      'prettier/prettier': 'error',
    },
  }),
];

export default eslintConfig;
