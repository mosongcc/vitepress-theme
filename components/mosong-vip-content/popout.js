import QRCode from "qrcode";
import {state} from './state.js';
import {httpPost} from "../../utils/http";


// 创建订单，返回订单ID
async function orderCreate(prod_id) {
    return await httpPost("/vpapi/meb/order-create", {prod_id})
}

// 微信支付
async function orderWxpay(order_id) {
    const body = await httpPost("/vpapi/meb/order-wxpay", {order_id})
    if (body.code_url) {
        //*** 微信Native支付，生成二维码
        state.payQrcode = (await QRCode.toDataURL(body.code_url))
    } else if (body.payinfo) {
        //*** 微信JSAPI支付，使用前端SDK   WX_JSAPI
        jsapipay(order_id, body.payinfo)
    }
}

//TODO 跳转授权域名页面再进行JSAPI支付
// 微信JSAPI支付
function jsapipay(order_id, payinfo) {
    let payobj = JSON.parse(payinfo);

    function onBridgeReady() {
        WeixinJSBridge.invoke('getBrandWCPayRequest', {...payobj}, function (res) {
            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                //TODO 查询支付结果，支付成功刷新页面

            }
        });
    }

    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }
}

// 提交订单
export async function submit(prod_id) {
    const order = await orderCreate(prod_id)
    await orderWxpay(order.order_id)
}

export default {
    submit,
}