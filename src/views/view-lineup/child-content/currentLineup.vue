<template>
    <Card :styleSheet="stylesCurrentLineup.container">
        <template #cardTop>
            <div :style="[stylesLineupScreen.Text, stylesCurrentLineup.Top]">ĐỘI HÌNH HIỆN TẠI CỦA
                BẠN</div>
        </template>
        <template #cardBot>
            <div :style="stylesCurrentLineup.ItemContainer">
                <Card :styleSheet="stylesCurrentLineup.Item" v-for="(item, key) in dataSource" :key="key">
                    <template #cardTop>
                        <a-image :style="[stylesCurrentLineup.Img,]" :preview="false" :src="item.Avatar" />
                    </template>
                    <template #cardBot>
                        <div :style="[stylesCurrentLineup.Name, stylesLineupScreen.Text]">{{ item.Player }}
                        </div>
                    </template>
                </Card>
            </div>
        </template>
    </Card>
</template>
<script setup>
import { array } from "vue-types";

import Card from '@/components/Card/Card.vue';
import { stylesCurrentLineup, stylesLineupScreen } from '@/styles/lineupStyles';

const props = defineProps({
    dataSource: array()
})

</script>