import { ref } from "vue";
import { defineStore } from "pinia";

import { InformationUser } from "../mockupData/index"

export const useStore = defineStore("userStore", () => {
    const dataUser = ref([])
    dataUser.value = InformationUser
    return {
        dataUser,
    };
});
