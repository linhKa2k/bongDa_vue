<template >
    <Card>
        <template #cardTop>
            <div :style="[stylesLineupScreen.Text, stylesAllMatchResult.Top]">CÁC TRẬN TRƯỚC ĐÂY
            </div>
        </template>
        <template #cardBot>
            <div :style="[stylesAllMatchResult.FlexContainer]">
                <Card :styleSheet="stylesAllMatchResult.Container" v-for="n in 8">
                    <template #cardLeft>
                        <Card :styleSheet="stylesAllMatchResult.Left">
                            <template #cardTop>
                                <div :style="stylesAllMatchResult.ItemContainer">
                                    <div v-for="(item, key) in dataLatestResult" :key="key">
                                        <Card :styleSheet="stylesAllMatchResult.Item">
                                            <template #cardTop>
                                                <a-image :style="[stylesAllMatchResult.Img,]" :preview="false"
                                                    :src="item.Avatar" />
                                            </template>
                                            <template #cardBot>
                                                <div :style="[stylesAllMatchResult.Text, stylesLineupScreen.Text]">{{
                                                        item.Player
                                                }}</div>
                                            </template>
                                        </Card>
                                        <div :style="[stylesAllMatchResult.Point, stylesLineupScreen.Text]">9.5</div>
                                    </div>
                                </div>
                            </template>
                            <template #cardBot>
                                <div :style="stylesAllMatchResult.totalPointContainer">
                                    <span :style="stylesAllMatchResult.totalPoint">Tổng điểm: 48.5</span>
                                </div>
                            </template>
                        </Card>
                    </template>
                    <template #cardRight>
                        <Card :styleSheetContent="stylesAllMatchResult.Right">
                            <template #cardLeft>
                                <div :style="[stylesAllMatchResult.RightContent]">
                                    <div>
                                        <a-image :style="stylesAllMatchResult.VsImg" :preview="false"
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                                        <div :style="stylesAllMatchResult.VsText">Nhật Bản</div>
                                    </div>
                                    <div :style="[stylesLineupScreen.Text, stylesAllMatchResult.Vs]">Vs
                                    </div>
                                    <div>
                                        <a-image :style="stylesAllMatchResult.VsImg" :preview="false"
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                                        <div :style="stylesAllMatchResult.VsText">Hàn Quốc</div>
                                    </div>
                                </div>
                            </template>
                            <template #cardRight>
                                <a-button :style="stylesAllMatchResult.RightButton" block>Xem
                                    thêm
                                </a-button>
                            </template>
                        </Card>
                    </template>
                </Card>
            </div>
        </template>
    </Card>
</template>
<script setup>
import { storeToRefs } from "pinia";

import { useStore } from '@/stores/lineupStore';
import Card from '@/components/Card/Card.vue';
import { stylesAllMatchResult, stylesLineupScreen } from '@/styles/lineupStyles';

const { dataLatestResult } = storeToRefs(useStore());


</script>