import {state} from './state.js'

// 渲染VIP开通提示内容
const tag = "mosong-vip-content"

// 创建付费提示内容块
function renderHTML() {
    if (typeof document === 'undefined') {
        return;
    }
    let dom = document.getElementById(tag);
    //console.log("!dom || dom.innerHTML !== \"\"", !dom || dom.innerHTML !== "");
    if (!dom || dom.innerHTML !== "") {
        return
    }
    dom.innerHTML = `
            <div>
              <div class="content">
                <p>剩余部分为VIP内容，需要你开通会员</p>
                <button onclick="window.openvip()">开通VIP会员</button>
              </div>
            </div>`;
}

setInterval(renderHTML, 1000)


//点击开通按钮触发，弹出会员开通界面
if (typeof window !== 'undefined') {
    window.openvip = function () {
        state.visible = true
    }
}


export default {}
