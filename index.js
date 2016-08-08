module.exports = {
  'extends': ['standard'],
  'parserOptions': {
    'ecmaVersion': 5,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': false,
      'jsx': false
    }
  },

  'env': {
    'es6': false
  },

  'plugins': [
    'standard'
  ],

  'rules': {
    'semi': [0, 'never'],
    'space-before-function-paren': [0, 'never']
  }
};
