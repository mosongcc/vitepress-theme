import {reactive} from 'vue'
import {httpPost} from "./utils/http";

const mss_store = "mss_store"

// 全局状态
export const $store = reactive({
    loginVisible: false,// 是否显示登录弹框
    isLogin: false,//是否已登录
    user: {uid: '', nickname: '', avatar: ''},// 登录用户信息
});

// 赋值
export const setStore = function (v = {}) {
    let dat = Object.assign($store, v)
    if (typeof window !== 'undefined') {
        sessionStorage.setItem(mss_store, JSON.stringify(dat))
    }
};

// 查询用户信息
export const getUser = async function () {
    if (typeof window == 'undefined') {
        return {}
    }
    let store = sessionStorage.getItem(mss_store)
    if (store) {
        setStore(JSON.parse(store))
    } else {
        let user = await httpPost("/vpapi/meb/userinfo", {})
        setStore({user, isLogin: true})
    }
    return $store.user
};

(async function () {
    await getUser(); //初始化加载用户信息
})();

export default {
    $store,
    setStore,
    getUser,
}