export default {
    dva: {},
    proxy: {
        "/api/local": {
            target: "http://101.132.72.36:5100/",
            changeOrigin: true
        },
        "/api/upload": {
            target: "http://101.132.72.36:5100/",
            changeOrigin: true
        },
        "/api": {
            target: 'http://open.duyiedu.com/',
            changeOrigin: true
        },
        
    },
    antd: {}
}