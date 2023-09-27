<template>
        <modal-form :isVisible="isVisible" :on-hide-modal="onHideModal" :close="modalCloseX" :style="stylesModal.formModal">
        <template #modalCommon>
            <div>
                <div> 
                    <p :style="stylesModal.text_setting_Title">{{ MODAL_MODE.rankingReward.rankingRewardsTitleModal }}
                    </p>
                </div>
                <div :style="stylesModal.form_rankingReward">
                    <p :style="stylesModal.form_text_rankingReward">{{ MODAL_MODE.rankingReward.top1 }}</p>
                    <p :style="stylesModal.form_text_rankingReward">{{ MODAL_MODE.rankingReward.top10 }}</p>
                    <p :style="stylesModal.form_text_rankingReward">{{ MODAL_MODE.rankingReward.top30 }}</p>
                    <p :style="stylesModal.form_text_rankingReward">{{ MODAL_MODE.rankingReward.top60 }}</p>
                    <p :style="stylesModal.form_text_rankingReward">{{ MODAL_MODE.rankingReward.top100 }}</p>
                </div>
            </div>
        </template>
    </modal-form>    
</template> 
<script setup>    
import { ref } from "vue";
import { bool, func } from "vue-types";

import { MODAL_MODE } from "@/utils/constants";
import ModalForm from "@/components/modal/index.vue"
import { stylesModal } from '@/components/modal/modalStyle'

const modalCloseX = ref(undefined);
const props = defineProps({
    isVisible: bool(),
    onHideModal: func(),
})

</script>