<template>
   <a-row v-if="result" :style="[styles.TopBarContainer, styles.flexCenter]">
      <a-col :span="4">
         <a-avatar shape="square" :size="65">
            <template #icon>
               <UserOutlined />
            </template>
         </a-avatar>
      </a-col>
      <a-col :span="17" :style="[styles.flexCenter, styles.TopBarContent]">
         <div>
            <div :style="[styles.TopBarContentItemLeft]">{{ dataUser.userName }}</div>
            <div :style="[styles.TopBarContentItemLeft]">Điểm của bạn: {{ dataUser.Point }}</div>
         </div>
         <div :style="[styles.flexCenter]">
            <span :style="[styles.TopBarContentItemRight, styles.TopBarContentItemRightTitle]">CT$: 30,000,000</span>
            <a-button :style="[styles.TopBarContentItemRight, styles.TopBarContentItemRightButton]">
               <template #icon>
                  <PlusOutlined :style="[styles.TopBarContentItemRightIcon]" />
               </template>
            </a-button>
         </div>
      </a-col>
      <a-col :span="3">
         <MenuComponent :on-options="handleClickOptions" :on-rules="handleRulesModal" />
      </a-col>
   </a-row>
   <a-row v-else :style="[styles.TopBarContainer, styles.flexCenter]">
      <a-col :span="4" :style="styles.TopBarBackButtonContainer">
         <a-button type="text" size="large" @click="handleBack">
            <template #icon>
               <left-outlined :style="styles.TopBarBackButtonIcon" />
            </template>
         </a-button>
      </a-col>
      <a-col :span="20">
         <div :style="styles.TopBarResultsContent">KẾT QUẢ</div>
      </a-col>
   </a-row>
   <OptionsModal :isVisible="isOptionsModal" :onModal="handleClickOptions" />
   <RulesModal :isVisible="isRulesModal" :onModal="handleRulesModal" />
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';

import { UserOutlined, PlusOutlined, LeftOutlined } from '@ant-design/icons-vue';
import router from '@/router';
import { useStore } from '@/stores/userStore';

import { styles } from './TopBarConfig';
import OptionsModal from './ChidComponent/OptionsModal.vue'
import RulesModal from './ChidComponent/RulesModal.vue'
import MenuComponent from './ChidComponent/Menu.vue'

const { dataUser } = storeToRefs(useStore());

const result = ref(true);
const isOptionsModal = ref(false);
const isRulesModal = ref(false);

const handleClickOptions = () => {
   isOptionsModal.value = !isOptionsModal.value;
};
const handleRulesModal = () => {
   isRulesModal.value = !isRulesModal.value;
};

const handleBack = e => {
   router.go(-1)
   result.value = true;
};

watchEffect(() => {
   if (router.currentRoute.value.name == "allMatchResult") {
      result.value = false;
   } else {
      result.value = true;
   }
})


</script>