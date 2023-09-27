<template>
  <div class="gift-Screen">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="GIỎ QUÀ">
        <Gift />
      </a-tab-pane>
      <a-tab-pane key="2" tab="BỘ SƯU TẬP">
        <Collection />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Gift from "../view-gift/screenGift/Gift.vue";
import Collection from "../view-gift/screenCollection/Collection.vue";
import "../../styles/viewGift.scss"

const activeKey = ref("1");

</script>
