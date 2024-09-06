import DefaultTheme from 'vitepress/theme'
import Layout from './layout/Layout.vue'
import './style/var.css'
import WeixinGzhQrcode from './components/weixin-gzh-qrcode/index.vue'
import MosongVipContent from './components/mosong-vip-content/index.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({app, router}) {
        const components = {
            WeixinGzhQrcode,
            MosongVipContent,
        }
        for (let k in components) {
            app.component(k, components[k])
        }

        // 单页面应用路由更新时触发百度统计事件
        router.onBeforeRouteChange = (to) => {
            if (typeof _hmt !== 'undefined') {
                _hmt.push(['_trackPageview', to]);
            }
        }
    },
    Layout
}
