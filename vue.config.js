const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  outputDir: 'docs',
  publicPath: '/yoyoi-chem-ts-github.io/'
}