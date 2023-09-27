import { defineStore } from "pinia";
import { ref } from "vue";
import { Openning_Player, Detail_Player } from "../mockupData/index"

export const useStore = defineStore("marketStore", () => {
    const listOpen = ref([])
    const listDetail = ref([])

    listOpen.value = Openning_Player
    listDetail.value = Detail_Player
    return {
        listOpen,
        listDetail
    };
});
