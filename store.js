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
    //指定需要持久化存储的字段
    let storageFields = ['isLogin', 'user']
    let data = {}
    for (let storageField of storageFields) {
        data[storageField] = dat[storageField]
    }
    if (typeof window !== 'undefined') {
        sessionStorage.setItem(mss_store, JSON.stringify(data))
    }
};

// 查询用户信息
export const getUser = async function () {
    if (typeof window == 'undefined') {
        return {}
    }
    let store = sessionStorage.getItem(mss_store)
    if (store) {
        let s = JSON.parse(store)
        // 登录状态才使用缓存
        if (s.isLogin) {
            setStore(s)
            return $store.user
        }
    }
    let user = await httpPost("/vpapi/meb/userinfo", {})
    setStore({user, isLogin: true})
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