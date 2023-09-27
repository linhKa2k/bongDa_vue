<template >
    <div :style="stylesModal.player_open"><img src="@/assets/shirt.png" alt="ronaldo"></div>
    <div :style="stylesModal.formPlayer_open">
        <p :style="stylesModal.text_player_open">{{ MODAL_MODE.playerOpenModal.ronaldoPlayer }}</p>
    </div>
    <div :style="stylesModal.formPlayer_open">
        <p :style="stylesModal.text_player_open">{{ MODAL_MODE.playerOpenModal.portugal }}</p>
    </div>
</template>
<script setup>
import { MODAL_MODE } from "@/utils/constants";
import { stylesModal } from '@/components/modal/modalStyle'
</script>