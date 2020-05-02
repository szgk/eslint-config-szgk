module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
  ],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  env: {browser: true, node: true, es6: true},
  rules: {
    'no-param-reassign': ['error'],
    'import/no-unassigned-import': ['error'],
    'no-sequences': ['error'],
    '@typescript-eslint/typedef': ['error'],
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/adjacent-overload-signatures': ['error'],
    '@typescript-eslint/ban-ts-ignore': ['error'],
    '@typescript-eslint/ban-types': [2, {
      types: {
        Object: 'Use {} instead',
        String: {
          message: 'Use string instead',
          fixWith: 'string',
        },
      },
    }],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    '@typescript-eslint/member-ordering': ['error', {default: [
      // Fields
      'public-static-field',
      'public-instance-field',
      'private-static-field',
      'private-instance-field',
      'protected-static-field',
      'protected-instance-field',
    
      // Constructors
      'public-constructor',
      'private-constructor',
      'protected-constructor',
    
      // Methods
      'public-static-method',
      'public-instance-method',
      'private-static-method',
      'private-instance-method',
      'protected-static-method',
      'protected-instance-method',
    ]}],
    '@typescript-eslint/no-explicit-any': [0],
    '@typescript-eslint/no-empty-interface': ['error'],
    '@typescript-eslint/no-inferrable-types': [0],
    '@typescript-eslint/no-magic-numbers': [0],
    '@typescript-eslint/no-namespace': ['error'],
    '@typescript-eslint/no-non-null-assertion': ['error'],
    '@typescript-eslint/triple-slash-reference': ['error'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
    '@typescript-eslint/no-var-requires': ['error'],
    '@typescript-eslint/prefer-for-of': ['error'],
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/unified-signatures': ['error'],
    '@typescript-eslint/await-thenable': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
  },
}