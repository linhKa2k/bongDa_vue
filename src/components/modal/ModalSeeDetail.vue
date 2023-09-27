<template >
    <div>
        <a-modal v-model:visible="isVisible" :title="title" @cancel="onHideModalSeeDetail" :closable="close" :footer="null">
            <a-form :style="stylesModal.form_center"> 
                <div>
                <div>
                    <p :style="stylesModal.text_setting_Title">{{ MODAL_MODE.rewardExchangeIphone14.iphone14TitleModal }}</p>
                </div>
                <div :style="stylesModal.form_center">
                    <img src="@/assets/iphone14.png" alt="iphone14" />
                </div>
                <div :style="stylesModal.form_reward_exchange_iphone14">
                    <p :style="stylesModal.text_center">{{ MODAL_MODE.rewardExchangeIphone14.iphone14DayContentModal }}</p>
                    <p :style="stylesModal.padding20">{{ MODAL_MODE.rewardExchangeIphone14.iphone14TextContentModal }}</p>
                </div>
            </div>
            </a-form>
            <div :style="stylesModal.formbtn">
                <a-button :style="stylesModal.btn_ok_color_white_backToGift" @click="onHideModalSeeDetail"><p :style="stylesModal.text_white">{{ MODAL_MODE.buttonBottomModal.backToGiftBasketTitleBtn }}</p>
                </a-button>
            </div>
        </a-modal>
    </div>
</template>
<script setup>
import { bool, func, object, string } from "vue-types";

import { MODAL_MODE } from "@/utils/constants";
import { stylesModal } from '@/components/modal/modalStyle'

const props = defineProps({
    mode: string(),
    isVisible: bool(),
    onActionModal: func(),
    onHideModalSeeDetail:func(),
    styles: object(),
    title: string(),
    close: bool(),
});


</script>