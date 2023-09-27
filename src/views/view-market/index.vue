<template >
    <modal-player :isVisible="formModal.isVisible.value" :on-hide-modal="handleHideModal" />
    <modal-detail :is-visibled="formModal.isVisibleSeeDetailGroupA.value" :on-hide-modal-see-detail-group-a="handleCloseSeeDetail" :close="modalCloseX" />
    <div :style="styles.height_main">
        <Card :styleSheetContent="styles.btnDetail" :styleSheet="styles.form_card" v-for="(item, key) in listOpen" :key="key">
            <template #cardLeft>
                <a-button @click="showModalSeeDetail" :style="styles.btn_detail">
                    <p :style="styles.text_detail_left">Chi tiết</p>
                </a-button>
            </template>
            <template #cardCenter>
                <div> <img src="../../assets/shirt-market.png" alt="anh" :style="styles.form_img_player"> </div>
            </template>
            <template #cardRight>
                <div :style="styles.form_card_right">
                    <div> <p :style="styles.text_detail_right">CÁC CẦU THỦ BẢNG A</p> </div>
                    <div>
                        <a-button :style="styles.btn_detail_right" @click="showModal">
                            <p :style="styles.btn_detail_right_top">CHIÊU MỘ NGAY</p>
                            <p :style="styles.btn_detail_right_bottom">CT$: 3,500</p>
                        </a-button>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";

import { useModal } from "@/utils/hooks";
import Card from "@/components/Card/Card.vue"
import { MODAL_MODE } from "@/utils/constants";
import { useStore } from "@/stores/marketStore";
import ModalDetail from "@/components/modal/ModalSeeDetailGroupA.vue"

import ModalPlayer from "./display-market/displayModalOpenPlayer.vue"

import { styles } from "./data"

const formModal = useModal();
const modalCloseX = ref(undefined); 
const { listOpen } = storeToRefs(useStore());

const showModalSeeDetail = () => {
    formModal.showModalSeeDetailGroupA();
    modalCloseX.value = MODAL_MODE.buttonX.closeX;
}

const showModal = () => { formModal.showModal() }
const handleHideModal = () => { formModal.hideModal() }
const handleCloseSeeDetail = () => { formModal.hideModalSeeDetailGroupA() }
</script>