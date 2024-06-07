import {defineConfig} from 'vite';
import checker from 'vite-plugin-checker'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        format: "iife",
      },
    },
  },
  plugins: [checker({typescript: false}),],
});

