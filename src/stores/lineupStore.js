import { ref } from "vue";
import { defineStore } from "pinia";

import { Current_Lineup, Player_Collections, Latest_Result } from "../mockupData/lineupMockup"

export const useStore = defineStore("lineupStore", () => {
  const dataLineup = ref([])
  const dataPlayerCollections = ref([])
  const dataLatestResult = ref([])
  dataLineup.value = Current_Lineup
  dataPlayerCollections.value = Player_Collections
  dataLatestResult.value = Latest_Result
  return {
    dataLineup, dataPlayerCollections, dataLatestResult
  };
});
