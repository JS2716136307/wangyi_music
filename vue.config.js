const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/foo': {
                target: 'https://interface.music.163.com',// 目标地址 请求的后台接口
                ws: true,
                changeOrigin: true,
                pathRewrite: { // 路径重写
                    "^/foo": ''
                }
            },
            '/boo': {
                target: 'https://music.163.com',//目标地址 请求的后台接口
                ws: true,
                changeOrigin: true,
                pathRewrite:{//路径重写
                    "^/boo":''
                }
            },
        }
    }
})
