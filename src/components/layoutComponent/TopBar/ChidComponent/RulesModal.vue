<template>
    <div>
        <ModalForm :isVisible="isVisible" :close="MODAL_MODE.buttonX.openX" :onHideModal="onModal">
            <template #contentRulesModal>
                <div :style="stylesModal.form_rules">
                    <div>
                        <p :style="stylesModal.text_setting_Title">{{ MODAL_MODE.rulesModal.rulesTitleModal }}</p>
                    </div>
                    <div :style="stylesModal.rules_content_modal">
                        <p :style="stylesModal.rules_text_modal">{{ MODAL_MODE.rulesModal.rulesContentModal }}</p>
                    </div>
                </div>
            </template>
            <template #footerButton>
                <div :style="stylesModal.formbtn">
                    <a-button @click="onModal" type="primary" :style="stylesModal.btn_ok">{{
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
import { stylesModal } from '@/components/modal/modalStyle'

const props = defineProps({
    isVisible: bool(),
    onModal: func()
})

</script>