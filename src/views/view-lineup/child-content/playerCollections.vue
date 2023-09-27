<template>
    <Card>
        <template #cardTop>
            <div :style="stylesPlayerCollection.Top">
                <span :style="stylesLineupScreen.Text">BỘ SƯU TẬP CẦU THỦ</span>
                <a-select ref="select" v-model:value="valueOption" :style="stylesPlayerCollection.TopOption"
                    :options="options">
                </a-select>
            </div>
        </template>
        <template #cardBot>
            <div :style="stylesPlayerCollection.ItemContainer">
                <Card :styleSheet="stylesPlayerCollection.Item" v-for="(item, key) in dataSource" :key="key">
                    <template #cardTop>
                        <a-image :style="[stylesPlayerCollection.Img,]" :preview="false" :src="item.Avatar" />
                    </template>
                    <template #cardBot>
                        <div :style="[stylesPlayerCollection.Text, stylesLineupScreen.Text]">{{ item.Player
                        }}</div>
                        <div
                            :style="[stylesPlayerCollection.Text, stylesLineupScreen.Text, stylesPlayerCollection.Country]">
                            {{ item.Country }}
                        </div>
                    </template>
                </Card>
            </div>
        </template>
    </Card>
</template>
<script setup>
import { ref } from 'vue';
import { array } from "vue-types";

import Card from '@/components/Card/Card.vue';
import { stylesPlayerCollection, stylesLineupScreen } from '@/styles/lineupStyles';

const props = defineProps({
    dataSource: array()
})

const valueOption = ref('Đội tham gia hôm nay')
const options = ref([{
    value: 'Tất cả',
    label: 'Tất cả',
}, {
    value: 'Đội tham gia hôm nay',
    label: 'Đội tham gia hôm nay',
}, {
    value: 'Sẽ tham gia hôm nay',
    label: 'Sẽ tham gia hôm nay',
}])

</script>