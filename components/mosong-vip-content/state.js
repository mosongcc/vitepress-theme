import {reactive} from "vue";

// 组件状态值
export const state = reactive({
    visible: false,
    payQrcode: "",
})

export default {state}