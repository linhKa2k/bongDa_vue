<template>
  <Card :styleSheet="[styles.mainCollection]">
    <template #cardTop>
      <p :style="[styles.titleCollections]">
        BỘ SƯU TẬP CẦU THỦ TRẺ TRIỂN VỌNG - NHẬN NGAY VOUCHER
      </p>
    </template>

    <template #cardCenter>
      <div :style="[styles.CardCollections]">
        <div v-for="(item, key) in List_Young_Start" :key="key">
          <div :style="{ background: item.Owned ? '#D1D1D1' : 'gray' }">
            <div :style="[styles.ImgCollections]">
              <img :style="[styles.Img]" src="@/assets/53183 11.png" />
            </div>
            <p :style="[styles.textCollections]">{{ item.Player }}</p>
            <p :style="[styles.textCollections]">
              {{ item.Owned ? "Đã sở hữu" : "Chưa có" }}
            </p>
          </div>
        </div>
      </div>
      <div :style="[styles.cardRight]">
        <img
          src="@/assets/two-tickets-icon-ticket-ico-11562902873mix2fznwjo 6.png"
        />
        <p :style="[styles.textRight]">Voucher 200k</p>
        <a-button disabled :style="[styles.buttonChange]"> Đã đổi </a-button>
      </div>
    </template>
  </Card>
</template>
<script setup>
import { storeToRefs } from "pinia";

import { useStore } from "@/stores";
import Card from "@/components/Card/Card.vue";

import { styles } from "../CollectionsConfig";

const { List_Young_Start } = storeToRefs(useStore());
</script>
