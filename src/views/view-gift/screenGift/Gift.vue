<template>
  <div >
  <modal-detail
    :isVisible="formModal.isVisibleSeeDetail.value"
    :on-hide-modal-see-detail="handleCloseSeeDetail"
    :close="modalCloseX"
  />

  <Card v-for="(item, key) in data" :key="key" :style="[styles.infoGift]">
    <template #cardLeft>
      <img :style="[styles.imgGift]" :src="item.Avatar" />
    </template>
    <template #cardCenter>
      <div :style="[styles.textGift]">
        <p :style="[styles.Title]">{{ item.Title }}</p>
        <p :style="[styles.Datetime]">{{ item.Datetime }}</p>
      </div>
    </template>
    <template #cardRight>
      <a-button @click="click()" :style="[styles.Detailbutton]"
        >Chi tiết</a-button>
    </template>
  </Card>
</div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";

import { useStore } from "@/stores";
import { useModal } from "@/utils/hooks";
import { MODAL_MODE } from "@/utils/constants";
import ModalDetail from "@/components/modal/ModalSeeDetail.vue";
import Card from "@/components/Card/Card.vue";
import "@/styles/viewGift.scss";

import { styles } from "./GiftConfig";

const { data } = storeToRefs(useStore());
const formModal = useModal();
const modalCloseX = ref(undefined);

const click = async () => {
  formModal.showModalSeeDetail();
  modalCloseX.value = MODAL_MODE.buttonX.closeX;
};

const handleCloseSeeDetail = () => {
  formModal.hideModalSeeDetail();
};
</script>
