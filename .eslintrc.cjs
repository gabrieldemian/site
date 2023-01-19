module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    astroHTML: true,
  },
  plugins: ['@typescript-eslint', 'import', 'markdown'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  settings: {
    'mdx/code-blocks': true,
  },
  ignorePatterns: ['CHANGELOG.md', 'build', 'dist', 'node_modules'],
  overrides: [
    {
      files: ['**/*.md', ''],
      processor: 'markdown/markdown',
    },
    {
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      extends: ['plugin:astro/recommended'],
    },
    {
      files: '*.mdx',
      extends: 'plugin:mdx/recommended', // ESLint Parser/Plugin for MDX
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'all',
        tabWidth: 2,
        bracketSpacing: true,
        semi: false,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: ['external', 'internal'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
}
