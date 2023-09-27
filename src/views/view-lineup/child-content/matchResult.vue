<template >
    <Card :styleSheet="stylesMatchResult.Container">
        <template #cardTop>
            <div :style="[stylesLineupScreen.Text, stylesMatchResult.Top]" >KẾT QUẢ TRẬN ĐẤU GẦN NHẤT
            </div>
        </template>
        <template #cardLeft>
            <Card :styleSheet="stylesMatchResult.Left">
                <template #cardTop>
                    <div :style="stylesMatchResult.ItemContainer">
                        <div v-for="(item, key) in dataSource" :key="key">
                            <Card :styleSheet="stylesMatchResult.Item">
                                <template #cardTop>
                                    <a-image :style="[stylesMatchResult.Img,]" :preview="false" :src="item.Avatar" />
                                </template>
                                <template #cardBot>
                                    <div :style="[stylesMatchResult.Text, stylesLineupScreen.Text]">{{ item.Player
                                    }}</div>
                                </template>
                            </Card>
                            <div :style="[stylesMatchResult.Point, stylesLineupScreen.Text]">9.5</div>
                        </div>
                    </div>
                </template>
                <template #cardBot>
                    <span :style="stylesMatchResult.totalPoint">Tổng điểm: 48.5</span>
                </template>
            </Card>
        </template>
        <template #cardRight>
            <Card :styleSheetContent="stylesMatchResult.Right">
                <template #cardLeft>
                    <div :style="[stylesMatchResult.RightContent]">
                        <div>
                            <a-image :style="stylesMatchResult.VsImg" :preview="false"
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                            <div :style="stylesMatchResult.VsText">Nhật Bản</div>
                        </div>
                        <div :style="[stylesLineupScreen.Text, stylesMatchResult.Vs]">Vs
                        </div>
                        <div>
                            <a-image :style="stylesMatchResult.VsImg" :preview="false"
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                            <div :style="stylesMatchResult.VsText">Hàn Quốc</div>
                        </div>
                    </div>
                </template>
                <template #cardRight>
                    <a-button :style="stylesMatchResult.RightButton" block @click="onSeeMore">Xem thêm</a-button>
                </template>
            </Card>
        </template>
    </Card>
</template>
<script setup>
import { array, func } from "vue-types";

import Card from '@/components/Card/Card.vue';
import { stylesMatchResult, stylesLineupScreen } from '@/styles/lineupStyles';

const props = defineProps({
    dataSource: array(),
    onSeeMore: func()
})

</script>