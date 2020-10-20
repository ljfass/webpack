module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
            ]
        })
    ]
}
/**
 * Autoprefixer 自动获取浏览器的流行度和能够支持的属性，并根据这些数据帮你自动为 CSS 规则添加前缀
 */

 const autoprefixer = require('autoprefixer');
 module.exports = {
     parser: 'sugrass',
     plugins: {
         'autoprefixer': {
             flex: true,
             browsers: [
                 '> 1%',
                 'last 3 versions',
                 'android 4.2',
                 'ie 8'
             ]
         }
     }
 }