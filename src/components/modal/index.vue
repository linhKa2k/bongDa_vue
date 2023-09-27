<template>
  <div>
    <a-modal v-model:visible="isVisible" :title="title" @cancel="onHideModal" :closable="close" footer={null} >
      <a-form :style="stylesModal.form_center">
        <slot name="contentMissionModal"></slot>
        <slot name="contentTopRankModal"></slot>
        <slot name="contentSettingModal"></slot>
        <slot name="contentRulesModal"></slot>
        <slot name="contentIphone14"></slot>
        <slot name="Iphone14"></slot>
        <slot name="playerOpen"></slot>
        <slot name="detailPlayer"></slot>
        <slot name="rankingReward"></slot>
      </a-form>
      <slot name="modalCommon"></slot>
      <slot name="footerButton"></slot>
      
    </a-modal>
  </div>
</template>
<script setup>
import { bool, func, object, string } from "vue-types";

import { stylesModal } from './modalStyle';

const props = defineProps({
  mode: string(),
  isVisible: bool(),  
  onHideModal: func(),
  onOkModal: func(),
  onActionModal: func(),
  styles: object(),
  title: string(),
  close: bool(),
  button: bool()
});

</script>