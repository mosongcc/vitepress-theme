import {reactive} from 'vue'

const mss_store = "mss_store"

// 全局状态
export const $store = reactive({
    isLogin: false,//是否已登录
    user: {uid: '', nickname: '', avatar: ''},// 登录用户信息
    loginVisible: false,// 是否显示登录弹框
})

// 赋值
export const setStore = function (v = {}) {
    let dat = Object.assign($store, v)
    if (typeof window !== 'undefined') {
        localStorage.setItem(mss_store, JSON.stringify(dat))
    }
}

//初始化加载缓存
if (typeof window !== 'undefined') {
    if (localStorage.getItem(mss_store)) {
        setStore(JSON.parse(localStorage.getItem(mss_store)))
    }
}

export default {
    $store,
    setStore
}