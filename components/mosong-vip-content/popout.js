import QRCode from "qrcode";
import {state} from './state.js';
import {httpPost} from "../../utils/http";

// 查询产品
export async function productList() {
    return await httpPost("/vpapi/meb/product-list", {})
}

// 选择会员
export async function selectVip(active) {
    state.active = active;
    state.payQrcode = (await QRCode.toDataURL(active, {width: 400, margin: 0}))
}

export default {
    selectVip,
    productList
}