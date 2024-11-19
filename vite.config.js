import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
export default defineConfig({
  plugins: [vue()], // 加载 Vue 插件
  server: {
    hmr: true, // 热模块替换
    port: 3002, // 开发服务器的端口号
    proxy: {
      '/api': { // 配置 API 的代理
        target: "http://localhost:1991/",
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' },
      },
    },
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname, './src'),
    },
  },
});
