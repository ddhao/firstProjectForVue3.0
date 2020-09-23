import path from 'path'

module.exports = {
  // 别名
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  // 配置Dep优化
  optimizeDeps: {
    inlcide: ["lodash"]
  },
  // 开发端口
  port: 8586,
  proxy: { // 配置跨域
    '/api': {
      target: 'http://baidu.com/',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, '')
    }
  }
}