import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    eslintPlugin({
      cache: false,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
      hashPrefix: 'prefix',
    },
  },
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true,
  },
});
