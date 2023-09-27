<template>
    <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" :style="styles.navMenu" @click="handleClick">
        <a-row type="flex" :style="styles.navbarContainer">
            <a-col :flex="1">
                <a-menu-item :style="[styles.navbarItem, styles.navbarItemLongContent]" key="market">
                    <span :style="[styles.navbarContentTitle,]">
                        Chợ chuyển nhượng
                    </span>
                </a-menu-item>
            </a-col>
            <a-col :flex="1">
                <a-menu-item :style="[styles.navbarItem]" key="mission">
                    <span :style="[styles.navbarContentTitle,]">
                        Nhiệm vụ
                    </span>
                </a-menu-item>
            </a-col>
            <a-col :flex="1">
                <a-menu-item :style="[styles.navbarItem]" key="lineup">
                    <span :style="[styles.navbarContentTitle,]">
                        Đội hình
                    </span>
                </a-menu-item>
            </a-col>
            <a-col :flex="1">
                <a-menu-item :style="[styles.navbarItem]" key="gift">
                    <span :style="[styles.navbarContentTitle,]">
                        Giỏ quà
                    </span>
                </a-menu-item>
            </a-col>
            <a-col :flex="1">
                <a-menu-item :style="[styles.navbarItem, styles.navbarItemLongContent]" key="rankings">
                    <span :style="[styles.navbarContentTitle,]">
                        Bảng xếp hạng
                    </span>
                </a-menu-item>
            </a-col>
        </a-row>
    </a-menu>
</template>
<script setup>
import { onMounted, ref } from 'vue';

import router from '@/router/index';

import { styles } from './NavBarConfig'

const selectedKeys = ref(['lineup']);

const handleClick = e => {
    router.push({ name: e.key })
    localStorage.setItem('currentPage', e.key)
};
onMounted(() => {
    const localData = localStorage.getItem('currentPage');
    if (localData) {
        selectedKeys.value = [localData]
    }
})

</script>