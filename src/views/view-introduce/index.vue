<template>
    <div :style="[styles.introContainer]">
        <div :style="[styles.introTitle]">
            Chợ chuyển nhượng World Cup 2022
        </div>
        <div>
            <a-spin v-if="spinning" :spinning="spinning" tip="Loading..." />
            <div v-else :style="[styles.introTitleContinue]" @click="handleContinue">
                Chạm vào màn hình để tiếp tục...
            </div>
        </div>
    </div>
    <div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

import router from '../../router/index';
import styles from '../../styles/introduceStyle';

const spinning = ref(false);

const handleContinue = () => {
    router.replace({ name: 'home' })
}

onMounted(() => {
    spinning.value = !spinning.value
    setTimeout(() => {
        spinning.value = !spinning.value
    }, 3000)
})
</script>