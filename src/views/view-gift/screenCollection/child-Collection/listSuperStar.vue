<template>
  <Card :styleSheet="[styles.mainCollection]">
    <template #cardTop>
      <p :style="[styles.titleCollections]">
        BỘ SƯU TẬP 8 SIÊU SAO - ĐỔI NGAY IPHONE
      </p>
    </template>
    <template #cardCenter>
      <div :style="[styles.centerCollections]">
        <div :style="[styles.CardCollections]">
          <div v-for="(item, key) in List_Star_Collections" :key="key">
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
          <p :style="[styles.textRight]">Số lượng còn lại: 8</p>
          <img src="@/assets/iPhone-14-PNG-File 1.png" />
          <p :style="[styles.textRight]">Iphone 14</p>
          <a-button @click="showModal" :style="[styles.buttonRight]">
            Đổi ngay
          </a-button>
        </div>
      </div>
    </template>
  </Card>
  <modal :isVisible="formModal.isVisible.value" :on-hide-modal="hideModal"/>
</template>
<script setup>
import { storeToRefs } from "pinia";

import { useStore } from "@/stores";
import Card from "@/components/Card/Card.vue";
import { useModal } from "@/utils/hooks";

import { styles } from "../CollectionsConfig";
import modal from "./modal.vue"

const formModal = useModal();
const { List_Star_Collections } = storeToRefs(useStore());

const showModal = () => {
  formModal.showModal()
}

const hideModal = () => {
  formModal.hideModal();
};


</script>
