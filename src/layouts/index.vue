<template>
    <a-layout :style="styles.layoutContainer">
        <a-layout-header :style="[styles.layoutHeader]">
            <TopBar />
        </a-layout-header>
        <a-layout-content :style="[styles.layoutContent]">
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer :style="[styles.layoutFooter]">
            <NavBar />
        </a-layout-footer>
    </a-layout>
</template>
<script setup>
import { styles } from './LayoutConfig';
import TopBar from '../components/layoutComponent/TopBar/index.vue'
import NavBar from '../components/layoutComponent/NavBar/index.vue'
</script>