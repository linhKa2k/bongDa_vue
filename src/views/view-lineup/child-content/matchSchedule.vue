<template>
    <Card :styleSheet="[stylesMatchSchedule.Border]">
        <template #cardTop>
            <div :style="stylesMatchSchedule.Header">
                <div :style="[stylesLineupScreen.Text, stylesMatchSchedule.Border, stylesMatchSchedule.Left]">
                    LỊCH SỬ THI ĐẤU
                    NGÀY 23/11</div>
                <div :style="[stylesLineupScreen.Text, stylesMatchSchedule.Border, stylesMatchSchedule.Right]">
                    TRẬN GẦN NHẤT
                </div>
            </div>
        </template>
        <template #cardLeft>
            <Card :styleSheet="[stylesMatchSchedule.Left]">
                <template #cardCenter>
                    <div>
                        <a-button type="text" :style="[stylesMatchSchedule.BtnLeft]">
                            <span :style="[stylesLineupScreen.Text]">20h30: Nhật Bản - Hàn Quốc</span>
                        </a-button>
                        <a-button type="text" :style="[stylesMatchSchedule.BtnLeft]">
                            <span :style="[stylesLineupScreen.Text]">21h30: Nhật Bản - Hàn Quốc</span>
                        </a-button>
                        <a-button type="text" :style="[stylesMatchSchedule.BtnLeft]">
                            <span :style="[stylesLineupScreen.Text]">22h30: Nhật Bản - Hàn Quốc</span>
                        </a-button>
                        <a-button type="text" :style="[stylesMatchSchedule.BtnLeft]">
                            <span :style="[stylesLineupScreen.Text]">23h30: Nhật Bản - Hàn Quốc</span>
                        </a-button>
                    </div>
                </template>
            </Card>
        </template>
        <template #cardRight>
            <Card :styleSheet="[stylesMatchSchedule.Right]" :styleSheetContent="stylesMatchSchedule.RightPoint" @click="onViewResult">
                <template #cardCenter>
                    <Card>
                        <template #cardTop>
                            <div :style="[stylesMatchSchedule.RightCenter]">
                                <div>
                                    <a-image :style="stylesMatchSchedule.Img" :preview="false"
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                                    <div :style="stylesLineupScreen.Text">Nhật Bản</div>
                                </div>
                                <div :style="[stylesLineupScreen.Text, stylesMatchSchedule.Vs]">Vs
                                </div>
                                <div>
                                    <a-image :style="stylesMatchSchedule.Img" :preview="false"
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                                    <div :style="stylesLineupScreen.Text">Hàn Quốc</div>
                                </div>
                            </div>
                        </template>
                        <template #cardCenter>
                            <div :style="[stylesMatchSchedule.RightPoint]">
                                <div :style="stylesMatchSchedule.Point">0</div>
                                <div :style="stylesMatchSchedule.Point">-</div>
                                <div :style="stylesMatchSchedule.Point">0</div>
                            </div>
                        </template>
                        <template #cardBot>
                            <div :style="[stylesMatchSchedule.RightBot]">Bắt đầu trong: 32m30s</div>
                        </template>
                    </Card>
                </template>
            </Card>
        </template>
    </Card>
</template>
<script setup>
import { func } from "vue-types";

import Card from '@/components/Card/Card.vue';
import { stylesMatchSchedule, stylesLineupScreen } from '@/styles/lineupStyles';

const props = defineProps({
    onViewResult: func()
})

</script>