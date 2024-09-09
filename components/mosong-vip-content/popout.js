import QRCode from "qrcode";
import {data} from './data.js';
import {httpPost} from "../../utils/http";
import {watch} from "vue";

// 查询产品
export async function productList() {
    return await httpPost("/vpapi/meb/product-list", {})
}

// 选择会员
export async function selectVip(active) {
    data.active = active;
    data.payQrcode = (await QRCode.toDataURL(active, {width: 400, margin: 0}))
}


// 弹出购买界面时查询产品
watch(() => data.visible, async () => {
    if (data.visible) {
        data.datum = await productList()
        if (data.datum.items && data.datum.items.length > 0) {
            await selectVip(data.datum.items[1].buy_url)
        }
    }
})

export default {
    selectVip,
    productList
}