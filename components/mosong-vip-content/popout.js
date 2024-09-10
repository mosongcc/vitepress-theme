import {watch} from "vue";
import QRCode from "qrcode";
import {data} from './data.js';
import {httpPost} from "../../utils/http";
import {userinfo} from "../../store";

// 查订单状态
export async function productBuyQry() {
    if (!data.visible) {
        return
    }
    try {
        let body = await httpPost('/vpapi/meb/product-buy-qry', {prod_id: data.active})
        if (body && body.status === 'finish') { //成功，更新用户信息，隐藏购买弹框
            await userinfo()
            data.visible = false
            return
        }
    } catch (e) {
        console.log(e)
    }
    setTimeout(async () => await productBuyQry(), 10 * 1000)
}

// 查询产品
export async function productList() {
    return await httpPost("/vpapi/meb/product-list", {})
}

// 选择会员
export async function selectVip(active, buyUrl) {
    data.active = active;
    data.payQrcode = (await QRCode.toDataURL(buyUrl, {width: 400, margin: 0}))
}


// 弹出购买界面时查询产品
watch(() => data.visible, async () => {
    if (data.visible) {
        data.datum = await productList()
        if (data.datum.items && data.datum.items.length > 0) {
            let prod = data.datum.items[1]
            await selectVip(prod.prod_id, prod.buy_url)
        }
        // 定时查询订单状态
        await productBuyQry()
    }
})

export default {
    selectVip,
    productList
}