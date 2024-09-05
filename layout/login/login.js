import QRCode from "qrcode";
import {httpPost} from "../../utils/http";

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
    return await httpPost("/vpapi/meb/oauth-polling", {state})
}

// 查当前登录用户信息
export async function userinfo() {
    return await httpPost("/vpapi/meb/userinfo", {})
}


export default {
    authorize, authorizeQrcode, polling
}