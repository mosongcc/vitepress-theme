import DefaultTheme from 'vitepress/theme'
import Layout from './layout/Layout.vue'
import './style/var.css'
import MosongVipContent from './components/mosong-vip-content/index.vue'
import QrcodeMp from './components/qrcode-mp/index.vue'
import QrcodeWx from './components/qrcode-wx/index.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({app, router}) {
        const components = {
            MosongVipContent,
            QrcodeMp,
            QrcodeWx
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
