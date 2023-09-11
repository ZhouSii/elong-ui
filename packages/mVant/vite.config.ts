/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: './',
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  test: {
    environment: 'happy-dom'
  },
  plugins: [
    vue(),
    VueSetupExtend(),
    dts({
      entryRoot: './src',
      outputDir: ['./ui/es/src', './ui/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: './tsconfig.json'
    })
  ],
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'vant'],
      input: ['./index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: path.resolve(__dirname, './ui/es')
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: path.resolve(__dirname, './ui/lib')
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'elongVant',
      formats: ['es', 'cjs']
    }
  }
});
