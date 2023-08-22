import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue2'
import commonjs from '@rollup/plugin-commonjs'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// https://vitejs.dev/config/

export default ({ mode }) => {
  console.log(mode, 'mode')
  const isLib = mode === 'lib'

  let basic = {
    plugins: [commonjs(), vue(), VueSetupExtend()],
    test: {
      environment: 'happy-dom'
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/]
      }
    }
  }
  const libBuild = {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: 'cascaderTreeSelect',
      fileName: (format) => `cascader-tree-select.${format}.js`
    }
  }
  const docsBuild = {
    outDir: 'docs'
  }
  basic = { ...basic, build: isLib ? { ...libBuild, ...basic.build } : { ...docsBuild, ...basic.build } }
  return defineConfig(basic)

}
