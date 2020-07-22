// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const { env } = require('../configuration.js')

module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  // test: /\.(scss|sass|css)$/i,
  // use: ExtractTextPlugin.extract({
  //   fallback: 'style-loader',
  //   use: [
  //     { loader: 'css-loader', options: { minimize: env.NODE_ENV === 'production' } },
  //     { loader: 'postcss-loader', options: { sourceMap: true } },
  //     'resolve-url-loader',
  //     { loader: 'sass-loader', options: { sourceMap: true } }
  //   ]
  // })
}
