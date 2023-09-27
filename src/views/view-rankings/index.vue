<template >
    <modal-ranking :is-visible="formModal.isVisible.value" :on-hide-modal="handleHideModal" :style="stylesModal.formModal" />
    <div :style="styles.form_main">
        <SlierRanking />
        <div>
            <data-table :data="{ dataSource: listRanking, totalElement: 10 }" :columns="columns"> <template #table></template> </data-table>
        </div>
        <div>
            <div>
                <div> <p :style="styles.form_text_title_bottom">Rank của bạn</p> </div>
            </div>
            <div :style="styles.form_table_bottom">
                <div> <p :style="styles.form_text_table_bottom">10%</p> </div>
                <div> <p :style="styles.form_text_table_bottom">Nguyen Van A</p> </div>
                <div> <p :style="styles.form_text_table_bottom">231</p> </div>
            </div>
            <div :style="styles.form_my_rewatch">
                <div :style="styles.form_text_my_rewatch">
                    <div> <p :style="styles.form_textTop_my_rewatch">Phần thưởng hiện tại của bạn</p> </div>
                    <div> <p :style="styles.form_textBottom_my_rewatch">Top 10%: 10.000 CT$</p> </div>
                </div>
                <div :style="styles.form_icon_bottom"> <question-circle-outlined :style="styles.icon_bottom" @click="showModal" /> </div>
            </div>
        </div>
    </div>
</template> 
<script setup>
import { QuestionCircleOutlined } from '@ant-design/icons-vue';

import { useModal } from "@/utils/hooks";
import { Ranking } from "@/mockupData/index"
import { stylesModal } from '@/components/modal/modalStyle';

import { styles } from "./data";
import { columns } from "./data"
import ModalRanking from "./display-ranking/DisplayModalranking.vue";
import SlierRanking from "./display-ranking/SliderDayRanking.vue"

const listRanking = Ranking;
const formModal = useModal();

const handleHideModal = () => { formModal.hideModal() }
const showModal = () => { formModal.showModal() }
</script> 
<style scoped>
@import "../../styles/sliderRanking.css";
</style>