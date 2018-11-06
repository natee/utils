import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: './src/index.js',
  output: {
    file: isProduction ? './dist/cm-utils.min.js' : './dist/cm-utils.js',
    format: 'umd',
    name: 'cmUtils',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    (isProduction && terser()), // 压缩
  ]
}