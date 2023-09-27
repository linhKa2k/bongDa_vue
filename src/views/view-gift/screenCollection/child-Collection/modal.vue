<template>
  <modal-form
    :isVisible="props.isVisible"
    :on-hide-modal="props.onHideModal">
    <template #contentIphone14>
      <div>
        <div>
          <p :style="stylesModal.text_setting_Title">
            {{ MODAL_MODE.rewardExchangeIphone14.rewardExchangeIphone14TitleModal }}
          </p>
        </div> 
        <div :style="stylesModal.form_center">
          <img src="@/assets/iphone14.png" alt="iphone14" />
        </div>
      </div>
    </template>
    <template #footerButton>
      <div :style="stylesModal.formbtn">
        <a-button @click="props.onHideModal" :style="stylesModal.btn_ok_color_white">
          <p :style="stylesModal.text_white">
            {{ MODAL_MODE.buttonBottomModal.exitTitleBtn }}
          </p>
        </a-button>
        <a-button @click="showModalIphone14" :style="stylesModal.btn_ok_color_white">
          <p :style="stylesModal.text_white">
            {{ MODAL_MODE.buttonBottomModal.seeDetailsTitleBtn }}
          </p>
        </a-button>
        <modal-detail
          :isVisible="formModal.isVisibleSeeDetail.value"
          :on-hide-modal-see-detail="onHideModalSeeDetail" />
      </div>
    </template>
  </modal-form>
</template>

<script setup>
import { bool, func } from "vue-types";

import { stylesModal } from "@/components/modal/modalStyle";
import { MODAL_MODE } from "@/utils/constants";
import { useModal } from "@/utils/hooks";
import ModalDetail from "@/components/modal/ModalSeeDetail.vue";
import ModalForm from "@/components/modal/index.vue";

const props = defineProps({
  isVisible: bool(),
  onHideModal: func(),
});
const formModal = useModal();

const showModalIphone14 = () => {
  formModal.showModalSeeDetail();
};
const onHideModalSeeDetail = () => {
  formModal.hideModalSeeDetail();
};
</script>
