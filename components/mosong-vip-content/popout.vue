<script setup>
import {data} from "./data";
import {selectVip} from './popout';

// 购买会员组件在 /layout/Layout.vue 全局使用
</script>

<!--支付弹框界面 -->
<template>
  <Teleport to="body">
    <div class="vip-popout" v-if="data.visible">
      <div class="shade" @click="data.visible=false"></div>
      <div class="content">
        <div class="close" @click="data.visible=false">X</div>
        <div class="title"><h1>开通会员</h1></div>
        <div class="section">
          <div class="prods">
            <template v-for="(prod,index) in data.datum.items" :key="index">
              <div class="prod" @click="selectVip(prod.prod_id,prod.buy_url)">
                <div :class="data.active===prod.prod_id ? 'msprod msprod-active' : 'msprod'">
                  <h2>{{ prod.prod_name }}</h2>
                  <div class="price">
                    <span class="unitPrice">¥<span class="amt">{{ (prod.unit_price / 100).toFixed(2) }}</span></span>
                    <span class="markPrice">¥<span>{{ (prod.mark_price / 100).toFixed(2) }}</span></span>
                  </div>
                  <div class="rights" v-html="prod.intro"></div>
                </div>
              </div>
            </template>
          </div>
          <div class="pay" v-if="data.active&&data.active!=='0'">
            <div class="qrcode">
              <div>
                <img class="qrcodeimg" v-if="data.payQrcode" :src="data.payQrcode">
                <p>请使用微信扫码支付</p>
              </div>
            </div>
            <div class="records"></div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@import "popout.css";
</style>

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
