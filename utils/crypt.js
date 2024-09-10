const b64encode = function (str) {
    if (typeof window === 'undefined') {
        return ''
    }
    return window.btoa(window.encodeURIComponent(str));
}

const b64decode = function (str) {
    try {
        return window.decodeURIComponent(window.atob(str));
    } catch (e) {
        console.log(e)
    }
    return '{}'
}

const key = 99000; // 加密密钥，可以根据需要调整

const xor = function (str) {
    let encrypted = '';
    for (let i = 0; i < str.length; i++) {
        encrypted += String.fromCharCode(str.charCodeAt(i) ^ key);
    }
    return encrypted;
}

//TODO 加密结果报文暴涨很多倍
export const encode = function (s) {
    return b64encode(xor(s));
}


export const decode = function (s) {
    return xor(b64decode(s));
}

export default {encode, decode};
