import { defineStore } from "pinia";
import { ref } from "vue";

import { businessApi } from "@/apis";

export const useStore = defineStore("marketStore", () => {
    const listRanking = ref([])
    const listRankingStore = async() => {
        const { getDataApi } = businessApi();
        const res = await getDataApi();
        listRanking.value = res
        return;
    }
    return {
        listRanking,
        listRankingStore
    }
});
