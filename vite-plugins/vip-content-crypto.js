/*
Vite插件：编译时加密Markdown中Vip可见内容

1. markdown-it 把 .md 文件中vip标签中的内容转为html
2. 解析html，把文本标签全部加密成密文
3. 自定义解密组件，把密文作为组件参数

使用此方法实现编译后的js文件中没有明文内容，浏览器可以看到明文。

*/

//import CryptoJS from 'crypto-js';
//const fs = require('fs');
//const path = require('path');

/*function encryptData(data, key) {
    const encrypted = CryptoJS.AES.encrypt(data, key);
    return encrypted.toString();
}*/

function vipContentCryptoPlugin() {
    return {
        name: 'vip-content-crypto',
        enforce: 'pre', // 插件顺序，在Vite核心插件前执行
        transform(src, id) {
            /*if (id.endsWith('sensitiveData.js')) {
                const key = 'your-secret-key';
                const encryptedData = encryptData(src, key);
                return `export default '${encryptedData}';`;
            }*/
            if (id.indexOf('.md') !== -1) {
                console.log(id)
                console.log(src)
                //return src.replace('console.log', 'log')
            }
            //console.log("id-------------------")
            //console.log(id)
            //console.log("src----------------------")
            //console.log(src)
            return null;
        },
    };
}

export default vipContentCryptoPlugin