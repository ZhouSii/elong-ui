/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { resolve } from 'path';

export default defineConfig({
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom'
  },
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: true,
    //css分离
    cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue和.less文件
      external: ['vue', /\.scss/],
      input: ['index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: resolve(__dirname, '../elong/es')
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: resolve(__dirname, '../elong/lib')
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'elong'
    }
  },
  plugins: [
    vue(),
    dts({
      outputDir: ['../elong/es/', '../elong/lib/'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json'
    }),
    VueSetupExtend(),
    {
      name: 'style',
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const bundler: any = bundle[key];
          //rollup内置方法,将所有输出文件code中的.scss换成.css,因为我们当时没有打包scss文件

          this.emitFile({
            type: 'asset',
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.scss/g, '.css')
          });
        }
      }
    }
  ]
});
