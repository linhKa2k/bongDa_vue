<template>
    <Card v-for="item in Mission.listMission"
            :key="item.title"
            :styleSheet="item.status? styleMisstion.cardMissonDone :styleMisstion.cardMisson">
        <template v-slot:cardLeft class="background">
              <div class="style-slot">
                <img :src="dollarImg"  class="style-slot-img" />
                <p class="number">{{item.reward}}</p>
              </div>
        </template>
        <template v-slot:cardCenter>
              <div >
                <div class="content" :style="item.status ? styleMisstion.cardButtonDone : styleMisstion.cardNone">
                  <div class="text-title">{{ item.title }}</div>
                  <div class="text-content">{{ item.info }}</div>
                  <div class="text-limit">{{ item.limit }}</div>
                </div>
              </div>
        </template>
        <template v-slot:cardRight>
              <a-button :style="item.status === true ? styleMisstion.cardCenter : styleMisstion.cardCenterDone"
                :disabled="item.status === true" 
                class="slot-buton"
                @click="showModal(item.waiting)"
                >{{
                  handleText({waiting: item.waiting, status: item.status})
                }}</a-button
              >
        </template>
    </Card>
    <ModalMission :isVisible="formModal.isVisible.value"  :hideModal="hideModal"/>
</template>
<script setup>
import { ref } from "vue";

import Card from "@/components/Card/Card.vue";
import "@/styles/styleViewMission.scss";
import dollarImg from '@/assets/dollar-yellow.jpg'
import { useModal } from "@/utils/hooks";
import { MODAL_MODE } from "@/utils/constants";
import { Mission } from "@/mockupData/DataMission";

import { styles } from "../MissionConfig";
import ModalMission from "./modal/ModalCard.vue"

const styleMisstion = styles;
const formModal = useModal();
const modalCloseX = ref(undefined)

const hideModal = () => {
    formModal.hideModal();
}
const showModal = (data) => {
    modalCloseX.value = MODAL_MODE.buttonX.openX;
    if(data=== false){
      formModal.showModal();
    }
}
const handleText = (obj)=>{
  if(obj.waiting !== true){
    return "Nhận thưởng"
  }else if(obj.status !== true){
    return "Thực hiện ngay"
  }else{
    return "Đã hoàn thành"
  }
}
</script>
