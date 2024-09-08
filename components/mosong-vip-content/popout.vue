<script setup>
import {state} from './state'
import {submit} from './popout'
import QRCode from "qrcode";

async function selectVip(active) {
  state.active = active;
  state.payQrcode = (await QRCode.toDataURL(active, {width: 400, margin: 0}))
}

</script>

<!--支付弹框界面-->
<template>
  <Teleport to="body">
    <div class="vip-popout" v-if="state.visible">
      <div class="shade" @click="state.visible=false"></div>
      <div class="content">
        <div class="close">X</div>
        <div class="title"><h1>开通会员</h1></div>
        <div class="section">
          <div class="prods">
            <div class="prod" @click="selectVip('0')">
              <div :class="state.active==='0' ? 'msprod msprod-active' : 'msprod'">
                <h2>免费用户</h2>
                <div class="price"><span class="unitPrice"><span class="amt">免费</span></span></div>
                <ul class="rights">
                  <li>限开放内容</li>
                </ul>
              </div>
            </div>
            <div class="prod" @click="selectVip('1')">
              <div :class="state.active==='1' ? 'msprod msprod-active' : 'msprod'">
                <h2>当前文档</h2>
                <div class="price">
                  <span class="unitPrice">¥<span class="amt">9.9</span></span>
                  <span class="markPrice">¥<span>39</span></span>
                </div>
                <ul class="rights">
                  <li>全部免费内容</li>
                  <li>全部VIP内容</li>
                  <li>包含持续更新...</li>
                </ul>
              </div>
            </div>
            <div class="prod" @click="selectVip('2')">
              <div :class="state.active==='2' ? 'msprod msprod-active' : 'msprod'">
                <h2>VIP 年卡会员</h2>
                <div class="price"><span class="unitPrice">¥<span class="amt">98</span>/年</span> <span
                    class="markPrice">¥<span>365</span>/年</span></div>
                <ul class="rights">
                  <li>全部免费内容</li>
                  <li>全部VIP内容</li>
                  <li>包含持续更新...</li>
                </ul>
              </div>
            </div>
            <!--            <div class="prod" @click="selectVip('3')">
                          <div :class="state.active==='3'? 'msprod msprod-active' : 'msprod'">
                            <h2>VIP 永久会员</h2>
                            <div class="price"><span class="unitPrice">¥<span class="amt">399</span>/年</span> <span
                                class="markPrice">¥<span>1200</span>/年</span></div>
                            <ul class="rights">
                              <li>全部免费内容</li>
                              <li>全部VIP内容</li>
                              <li>包含持续更新...</li>
                            </ul>
                          </div>
                        </div>-->
          </div>
          <div class="pay" v-if="state.active&&state.active!=='0'">
            <div class="qrcode">
              <div>
                <img class="qrcodeimg" v-if="state.payQrcode" :src="state.payQrcode">
                <p>请使用微信扫码支付</p>
                <!--            <button @click="submit('240001')">支付</button>-->
              </div>
            </div>
            <div class="records"></div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style>

.msprod {
  border: solid 1px #e4efea;
  border-radius: 15px;
  padding: 15px;
  width: 100%;
  height: 100%;
}

.msprod-active {
  border: solid 2px #fa9321;
}

</style>

<style scoped>

.vip-popout .shade {
  position: absolute;
  z-index: 10000;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background: #1b1b1f;
  opacity: 0.5;
}

.content {
  position: absolute;
  z-index: 10001;
  top: 15vw;
  left: 25vw;
  width: 50vw;
  background: #ffffff;
  opacity: 1;
  border-radius: 15px;
  overflow: hidden;
  color: #5d5d68;
}

.close {
  position: absolute;
  right: 15px;
  top: 15px;
}

.title {
  padding: 15px;
  background-color: #eff0f3;
}

.section {
  width: 90%;
  margin: 0 auto 30px auto;
}

.prods {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  margin: 0px auto;
}

.prod {
  width: 180px;
  margin: 15px;
}

.prod h2 {
  font-weight: bold;
}

.prod .price {
  color: #fa9321;
  margin: 5px 0;
  font-size: 12px;
}

.prod .unitPrice {
}

.prod .unitPrice .amt {
  font-size: 16px
}

.markPrice {
  margin-left: 5px;
  text-decoration-line: line-through;
  color: #babbbd;
  font-size: 12px;
}

.prod .rights {
  font-size: 14px;
}

.pay {

  border-top: solid 1px #eee;
}

.qrcode {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 14px;
}

.qrcodeimg {
  width: 200px;
  height: 200px;
  border: solid 1px #e4efea;
  margin: 20px auto;
}
</style>