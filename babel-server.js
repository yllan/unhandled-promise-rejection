// Polyfill for Node server-side code
require('@babel/polyfill')
require('@babel/register')({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-object-rest-spread'
  ]
})
const filePath = './app.js'
module.exports = require(filePath)
