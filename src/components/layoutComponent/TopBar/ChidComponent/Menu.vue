<template>
    <a-dropdown>
        <a-button :style="[styles.TopBarButtonRight]" type="text">
            <template #icon>
                <MenuOutlined :style="[styles.TopBarButtonRightIcon]" />
            </template>
        </a-button>
        <template #overlay>
            <a-menu>
                <a-menu-item @click="onOptions" key="Options">
                    Tùy chỉnh
                </a-menu-item>
                <a-menu-item @click="onRules" key="Rules">
                    Thể lệ
                </a-menu-item>
                <a-menu-item key="Exit">
                    Thoát
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>
<script setup>
import { func } from "vue-types";
import { MenuOutlined } from '@ant-design/icons-vue';

import { styles } from '../TopBarConfig';

const props = defineProps({
    onOptions: func(),
    onRules: func(),
})
</script>
<style>

</style>