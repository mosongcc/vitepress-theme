import {reactive} from "vue";

// 组件状态值
export const state = reactive({
    visible: false,//是否显示扫码弹框
    qrimg:"",//微信扫二维码
    tips:'',//二维码提示信息
})

export default {state}