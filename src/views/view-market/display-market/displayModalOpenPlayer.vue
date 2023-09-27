<template >
    <div>
        <modal-form :isVisible="isVisible" :on-hide-modal="onHideModal" :style="stylesModal.formModal">
            <template #modalCommon>
                <div>
                    <div>
                        <p :style="stylesModal.text_setting_Title">{{ MODAL_MODE.playerOpenModal.playerOpenTitleModal }}</p>
                    </div>
                    <div>
                        <div :style="stylesModal.form_player_open">
                            <div> <FormItem /> </div>
                            <div> <FormItem /> </div>
                            <div> <FormItem /> </div>
                        </div>
                        <div :style="stylesModal.form_bottom_player_open">
                            <div> <FormItem /> </div>
                            <div> <FormItem /> </div>
                        </div>
                    </div>
                    <div>
                        <p :style="stylesModal.text_extra_reward">{{ MODAL_MODE.playerOpenModal.extraReward }}</p>
                        <div :style="stylesModal.form_extra_reward">
                            <p :style="stylesModal.text_extra_reward">{{ MODAL_MODE.playerOpenModal.extraRewardNo }}</p>
                        </div>
                    </div>
                </div>
            </template>
            <template #footerButton>
                <div :style="stylesModal.formbtn">
                    <a-button :style="stylesModal.form_btn_player_modal" @click="onHideModal">
                        <p :style="stylesModal.textBtn">{{ MODAL_MODE.buttonBottomModal.backBtn }} </p>
                    </a-button>
                    <a-button :style="stylesModal.form_btn_player_modal" @click="onHideModal">
                        <p :style="stylesModal.textBtn">{{ MODAL_MODE.buttonBottomModal.openAgainTopTitleBtn }}</p>
                        <p :style="stylesModal.textBtn">{{ MODAL_MODE.buttonBottomModal.openAgainBottomTitleBtn }}</p>
                    </a-button>
                </div>
            </template>
        </modal-form>
    </div>
</template>
<script setup>
import { bool, func } from "vue-types";
 
import { MODAL_MODE } from "@/utils/constants";
import ModalForm from "@/components/modal/index.vue"
import { stylesModal } from '@/components/modal/modalStyle'

import FormItem from "./displayItemModelOpenPlayer.vue"

const props = defineProps({
    isVisible: bool(),
    onHideModal: func()
})
</script>