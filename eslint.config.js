// import antfu from '@antfu/eslint-config'
// export default antfu()

import globals from 'globals';
import { defineFlatConfig } from 'eslint-define-config';

import * as parserBabel from '@babel/eslint-parser';

import * as parserVue from 'vue-eslint-parser';
import pluginVue from 'eslint-plugin-vue';
import js from '@eslint/js';

export default defineFlatConfig([
  {
    ...js.configs.recommended,
    files: ['**/*.vue', '**/*.?([cm])js'],
    ignores: ['public', 'build', 'dist', 'node_modules', 'coverage', 'src/assets/**'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2015,
        ...globals.browser,
        ...globals.jest
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          legacyDecorators: true
        },
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    rules: {
      'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'comma-spacing': ['error', { after: true, before: false }],
      'constructor-super': 'error',
      'default-case-last': 'error',
      'dot-notation': ['error', { allowKeywords: true }],
      'eqeqeq': ['error', 'smart'],
      'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-async-promise-executor': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-console': ['error', {
        allow: ['log', 'dir', 'warn', 'error']
      }],
      'no-const-assign': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implied-eval': 'error',
      'no-import-assign': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-iterator': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': ['error', { builtinGlobals: false }],
      'no-regex-spaces': 'error',
      'no-restricted-globals': [
        'error',
        { message: 'Use `globalThis` instead.', name: 'global' },
        { message: 'Use `globalThis` instead.', name: 'self' }
      ],
      'no-restricted-properties': [
        'error',
        { message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.', property: '__proto__' },
        { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
        { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
        { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' },
        { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' }
      ],
      'no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement',
        'TSEnumDeclaration[const=true]',
        'TSExportAssignment'
      ],
      'no-self-assign': ['error', { props: true }],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTaggedTemplates: true,
        allowTernary: true
      }],
      'no-unused-vars': ['warn'],
      'no-use-before-define': ['error', {
        classes: false,
        functions: false,
        variables: false
      }],
      'no-useless-backreference': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-with': 'error',
      'object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: true,
          ignoreConstructors: false
        }
      ],
      'one-var': ['error', { initialized: 'never' }],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true
        }
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true
        }
      ],
      'prefer-exponentiation-operator': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }
      ],

      // https://cn.eslint.org/docs/rules/no-trailing-spaces
      'no-trailing-spaces': 2, // 禁用行尾空白
      'comma-style': ['error', 'last'],
      'comma-dangle': ['error', 'never'],
      'no-multi-spaces': 1,
      'no-multiple-empty-lines': [
        2,
        {
          max: 2
        }
      ],
      // https://cn.eslint.org/docs/rules/eol-last
      'eol-last': 2,
      'quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true
        }
      ]
    }
  },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
      },
      parserOptions: {
        parser: parserBabel,
        ecmaVersion: 2022,
        sourceType: 'module',
        jsxPragma: 'React',
        ecmaFeatures: {
          jsx: true
        },
        extraFileExtensions: ['.vue']
      }
    },
    plugins: {
      vue: pluginVue
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...pluginVue.configs.base.rules,
      ...pluginVue.configs['vue3-essential'].rules,
      ...pluginVue.configs['vue3-strongly-recommended'].rules,
      ...pluginVue.configs['vue3-recommended'].rules,
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 0,
      'vue/singleline-html-element-content-newline': 'off',
      'vue/require-default-prop': 'off',
      'vue/html-closing-bracket-spacing': 'error',
      'vue/no-unused-components': 1,
      'vue/no-mutating-props': 0,
      'vue/v-on-event-hyphenation': ['warn', 'always', {
        autofix: true
      }],
      'vue/script-setup-uses-vars': 'error',
      'vue/html-self-closing': ['error', {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }]
    }
  }
]);
