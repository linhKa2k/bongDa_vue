<template>
    <ModalForm :isVisible="props.isVisible"  :hideModal="hideModal" >
    	<template #contentMissionModal>
            <div >
                <div>
                    <p :style="styleMisstion.tittleModalMission">{{ MODAL_MODE.missionModal.attendanceTitleModal }}</p>
                </div>
                <div :style="styleMisstion.infoModalMission">
                    <p :style="styleMisstion.textInfoModalMission">{{ MODAL_MODE.missionModal.moneyContent }}</p>
                </div>
            </div>
        </template>
        <template #footerButton>
            <div >
                <a-button @click="props.hideModal" type="primary" :style="styleMisstion.buttonModalMission">{{ MODAL_MODE.buttonBottomModal.okTitleBtn }}</a-button>
            </div>
        </template>
  </ModalForm>
</template>
<script setup>
import {bool, func} from 'vue-types'

import ModalForm from "@/components/modal/index.vue"
import { MODAL_MODE } from "@/utils/constants";
import { stylesModal } from '@/components/modal/modalStyle'

import { styles } from "../../MissionConfig";
 const props = defineProps({
    hideModal: func(), 
    isVisible: bool()
 })
const styleMisstion = styles;
</script>
