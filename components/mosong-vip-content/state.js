import {reactive} from "vue";

// 组件状态值
export const state = reactive({
    visible: false,
    payQrcode: "",
    active: '',
    datum: {
        items: []//产品列表
    },
})

export default {state}