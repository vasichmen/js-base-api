import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['cjs', 'umd', 'iife'],
      name: "index",
      fileName:"index"
    },
    rollupOptions: {
      output: {
        format: "cjs",
      },
    },
  },
});

