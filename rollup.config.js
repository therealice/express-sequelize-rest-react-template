require('dotenv').config()
const htmlTemplate = require('rollup-plugin-generate-html-template');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  input: 'src/client/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    htmlTemplate({
      template: 'src/client/index.html',
      target: 'index.html',
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ]
};