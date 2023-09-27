<template >
    <div :style="stylesLineupScreen.Screen">
        <div v-if="isResult">
            <MatchResult :dataSource="dataLatestResult" :on-see-more="handleSeeMore" />
        </div>
        <router-view />
        <div>
            <MatchSchedule v-if="!isResult" :on-view-result="handleViewResult" />
        </div>
        <div :style="stylesLineupScreen.Container" v-if="!isAllMatchResult">
            <CurrentLineup :dataSource="dataLineup" />
        </div>
        <div :style="stylesLineupScreen.Container" v-if="!isAllMatchResult">
            <PlayerCollections :dataSource="dataPlayerCollections" /> 
        </div>
        <WelcomeModal :is-visible="isWelcomeModal" :on-modal="handleWelcomeModal" />
    </div>
</template>
<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { storeToRefs } from "pinia"; 

import MatchSchedule from './child-content/matchSchedule.vue'
import CurrentLineup from './child-content/currentLineup.vue'
import PlayerCollections from './child-content/playerCollections.vue'
import MatchResult from './child-content/matchResult.vue'
import WelcomeModal from './child-content/welcomeModal.vue'
import { stylesLineupScreen } from '../../styles/lineupStyles';
import { useStore } from '../../stores/lineupStore';
import router from '../../router';

const isResult = ref(false);
const isAllMatchResult = ref(false);
const isWelcomeModal = ref(false);

const { dataLineup, dataLatestResult, dataPlayerCollections } = storeToRefs(useStore());

const handleViewResult = () => {
    isResult.value = !isResult.value
}

const handleSeeMore = () => {
    isAllMatchResult.value = true;
    router.push({ name: 'allMatchResult' })
}

const handleWelcomeModal = () => {
    isWelcomeModal.value = !isWelcomeModal.value;
}
onMounted(() => {
    handleWelcomeModal()
})

watchEffect(() => {
    if (router.currentRoute.value.name !== "allMatchResult") {
        isAllMatchResult.value = false;
    }
})

</script>