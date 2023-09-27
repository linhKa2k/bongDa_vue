import { defineStore } from "pinia";
import { ref } from "vue";
import { Gift, Star_Collections, Young_Star } from "../mockupData/giftMockup";

export const useStore = defineStore("businessName", () => {
  const data = ref([]);
  const List_Star_Collections = ref([]);
  const List_Young_Start = ref([]);
  data.value = Gift;
  List_Star_Collections.value = Star_Collections;
  List_Young_Start.value = Young_Star;
  return {
    data,
    List_Star_Collections,
    List_Young_Start,
  };
});
