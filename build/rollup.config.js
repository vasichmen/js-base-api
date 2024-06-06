import buble from '@rollup/plugin-buble'; // Транспиляция/добавление полифилов для умеренной поддержки браузеров
import commonjs from '@rollup/plugin-commonjs'; // Конвертирование CommonJS модулей в ES6

export default {
  input: 'src/index.js',
  output: {
    name: 'JsBaseApi',
    exports: 'named',
  },
  plugins: [
    commonjs(),
    buble({
      objectAssign: 'Object.assign',
    }), // Транспиляция в ES5
  ],
};