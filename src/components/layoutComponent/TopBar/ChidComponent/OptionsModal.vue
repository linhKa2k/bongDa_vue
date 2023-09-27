<template>
    <div>
        <ModalForm :isVisible="isVisible" :close="MODAL_MODE.buttonX.openX" :onHideModal="onModal">
            <template #contentSettingModal>
                <div :style="stylesModal.form_rules">
                    <div>
                        <p :style="stylesModal.text_setting_Title">{{ MODAL_MODE.settingModal.settingsTitleModal }}</p>
                    </div>
                    <div :style="stylesModal.form_rules_item">
                        <p>Âm Nhạc</p>
                        <a-switch v-model:checked="checkedOpen" checked-children="Mở" un-checked-children="Tắt" />
                    </div>
                    <div :style="stylesModal.form_rules_item">
                        <p>Âm thanh</p>
                        <a-switch v-model:checked="checkedClose" checked-children="Mở" un-checked-children="Tắt" />
                    </div>
                </div>
            </template>
        </ModalForm>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { bool, func } from "vue-types";

import { MODAL_MODE } from "@/utils/constants";
import ModalForm from "@/components/modal/index.vue"
import { stylesModal } from '@/components/modal/modalStyle'

const props = defineProps({
    isVisible: bool(),
    onModal: func()
})

const checkedClose = ref(false)
const checkedOpen = ref(true)

</script>