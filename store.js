import {reactive} from 'vue'
import {httpPost} from "./utils/http";

// 全局状态
export const $store = reactive({
    loginVisible: false,// 是否显示登录弹框
    isLogin: false,//是否已登录
    user: {uid: '', nickname: '', avatar: ''},// 登录用户信息
});

// 赋值
export const setStore = function (v = {}) {
    Object.assign($store, v)
};

// 查询用户信息
export const userinfo = async function () {
    let user = await httpPost("/vpapi/meb/userinfo", {})
    setStore({user, isLogin: true})
    return user;
};

//初始化加载用户信息
(async () => {
    if (typeof document !== 'undefined') {
        await userinfo();
    }
})();

export default {
    $store, setStore, userinfo,
}