<template>
    <div>
    <div :style="styles.form_title_Top"> <p :style="styles.form_text_title">Bảng xếp hạng Fantasy point</p> </div>
    <a-carousel arrows :dots="false">
                <template #prevArrow>
                    <div class="custom-slick-arrow" style="left: 10px; z-index: 1"> <caret-left-outlined /> </div>
                </template>
                <template #nextArrow>
                    <div class="custom-slick-arrow" style="right: 10px"> <caret-right-outlined /> </div>
                </template>
                <div> <h3>Hôm nay, 12/11</h3>
                </div>
                <div> <h3>Hôm nay, 12/11</h3>
                </div>
                <div> <h3>Hôm nay, 12/11</h3>
                </div>
                <div> <h3>Hôm nay, 12/11</h3>
                </div>
            </a-carousel>
        </div>
</template>
<script setup>
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons-vue';

import { styles } from "../data";
</script>
<style scoped>
@import "@/styles/sliderRanking.css";
</style>