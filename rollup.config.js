import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import sass from 'rollup-plugin-sass';

const pkg = require('./package.json');
const external = Object.keys(pkg.dependencies);

export default {
  input: 'lib/js/index.js',
  plugins: [
    sass({
      // FIXME: source maps #100
      output: 'dist/simple-md-datepicker.css'
    }),
    babel(babelrc())
  ],
  external,
  globals: {
    rome: 'rome',
    moment: 'moment'
  },
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'MaterialDatetimePicker',
      sourceMap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourceMap: true
    }
  ]
};
