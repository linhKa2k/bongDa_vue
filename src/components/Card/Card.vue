<template >
    <a-card :style="[styleSheet]" :bordered="false">
        <slot name="cardTop"></slot>
        <div :style="[styles.cardContent, styleSheetContent]">
            <slot name="cardLeft"></slot>
            <slot name="cardCenter"></slot>
            <slot name="cardRight"></slot>
        </div>
        <slot name="cardBot"></slot>
    </a-card>
</template>
<script setup>
import { object } from "vue-types";

import { styles } from './CardConfig';

const props = defineProps({
    styleSheet: object(),
    styleSheetContent: object()
})

</script>