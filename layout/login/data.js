import {reactive} from "vue";

// 组件数据共享
export const $data = reactive({
    userPanelVisible: false,//用户信息面板是否展示
})

export default {
    $data
}