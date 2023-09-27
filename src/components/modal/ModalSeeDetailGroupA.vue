<template >
    <div>
        <a-modal v-model:visible="isVisibled" :title="title" @cancel="onHideModalSeeDetailGroupA" :closable="close"
            :footer="null">
            <a-form :style="stylesModal.form_center">
                <div>
                    <div>
                        <p :style="stylesModal.text_setting_Title">{{
                                MODAL_MODE.playerOpenModal.detailPlayerGroupATitleModal
                        }}</p>
                    </div>
                    <div :style="stylesModal.form_see_detailGroupA" >
                        <div :style="stylesModal.form_item_see_detailGroupA" v-for="(item, key) in listDetail" :key="key">
                            <div>
                                <p :style="stylesModal.text_see_detailGroupA">{{item.namePlayer}}</p>
                            </div>
                            <div>
                                <p :style="stylesModal.text_center_see_detailGroupA">{{item.Country}}</p>
                            </div>
                            <div>
                                <p :style="stylesModal.text_see_detailGroupA">Số Áo: 7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a-form>
            <div :style="stylesModal.formbtn">
                <a-button :style="stylesModal.btn_back_see_detailGroupA" @click="onHideModalSeeDetailGroupA">
                    <p :style="stylesModal.text_title_back_see_detailGroupA">{{
                            MODAL_MODE.buttonBottomModal.backBtn
                    }}</p>
                </a-button>
            </div>
        </a-modal>
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { bool, func, string } from "vue-types"; 

import { MODAL_MODE } from "@/utils/constants";
import { useStore } from "@/stores/marketStore";
import { stylesModal } from '@/components/modal/modalStyle'


const { listDetail } = storeToRefs(useStore()); 

const props = defineProps({
    isVisibled: bool(),
    onHideModalSeeDetailGroupA: func(),
    title: string(),
    close: bool(),
});


</script>