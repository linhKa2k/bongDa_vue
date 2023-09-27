<template> 
    <div>
        <ModalForm :isVisible="isVisible" :onHideModal="onModal">
            <template #contentMissionModal>
                <div :style="stylesWelcomeModal.Container">
                    <div>
                        <p :style="stylesWelcomeModal.Title">Chào mừng bạn đến với <br /> Chợ chuyển nhượng</p>
                    </div>
                    <div>
                        <p :style="stylesWelcomeModal.Content">{{ MODAL_MODE.missionModal.moneyContent }}</p>
                    </div>
                </div>
            </template>
            <template #footerButton>
                <div :style="stylesWelcomeModal.Bottom">
                    <a-button @click="onModal" type="primary" :style="stylesWelcomeModal.Button">{{
                            MODAL_MODE.buttonBottomModal.okTitleBtn
                    }} 
                    </a-button>
                </div>
            </template>
        </ModalForm>
    </div>
</template>
<script setup>
import { bool, func } from "vue-types";

import { MODAL_MODE } from "@/utils/constants";
import ModalForm from "@/components/modal/index.vue"
import { stylesWelcomeModal } from '@/styles/lineupStyles'

const props = defineProps({
    isVisible: bool(),
    onModal: func()
})

</script>