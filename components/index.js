import MosongVipContent from './mosong-vip-content/index.vue';
import QrcodeMp from './qrcode-mp/index.vue';
import QrcodeWx from './qrcode-wx/index.vue';

export const components = {
    MosongVipContent,
    QrcodeMp,
    QrcodeWx
};

export function install(app) {
    for (let k in components) {
        app.component(k, components[k]);
    }
}

export default components;