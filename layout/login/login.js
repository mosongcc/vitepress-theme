import QRCode from "qrcode";

// 接口POST请求
async function post(path, body) {
    const response = await fetch(path, {
        method: "POST", body: JSON.stringify(body), headers: {"Content-Type": "application/json"}
    })
    const result = await response.json()
    if (result.errno !== "00000") {
        throw new Error(result.errno + ":" + result.errmsg)
    }
    return result.body
}

export function uuid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (Math.random() * 16) | 0;
        let v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export function authorize(state) {
    return `${window.location.protocol}//${window.location.host}/vpapi/meb/weixin-authorize?scope=snsapi_userinfo&state=${state}`
}

//PC网页，生成二维码图片，微信扫码授权
export async function authorizeQrcode(state) {
    const text = authorize(state)
    const img = (await QRCode.toDataURL(text))
    console.log(text)
    console.log(img)
    return img
}

// PC网页，轮询查询授权结果
export async function polling(state) {
    return await post("/vpapi/meb/oauth-polling", {state})
}

// 查当前登录用户信息
export async function userinfo() {
    return await post("/vpapi/meb/userinfo", {})
}


export default {
    uuid, authorize, authorizeQrcode, polling
}