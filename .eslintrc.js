module.exports = {
  extends: [
    'google',
    'plugin:react/recommended'
  ],
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'indent': [2, 2],
    'linebreak-style': 0,
    'max-len': [2, 120],
    'no-multiple-empty-lines': ['error', {'max': 1, 'maxBOF': 1}],
    'no-console': 2,
    'no-unused-vars': ['error'],
    'no-whitespace-before-property': ['error'],
    'no-undef': 'error',
    'react/jsx-indent': [2, 2],
    'require-jsdoc': 2,
  },
  'parserOptions': {
    'ecmaVersion': 8,
    'sourceType': 'module',
    'ecmaFeatures': {
        'jsx': true,
        'modules': true
    }
  },
  env: {
		browser: true
	},
  plugins: [
    'react'
  ]
}
