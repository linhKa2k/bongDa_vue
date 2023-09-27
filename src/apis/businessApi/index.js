import { fetchApi } from "../apiFactory";
import { BUSSINESS } from "../constants";
import { Ranking } from "../../mockupData/index"
const { GET_DATA } = BUSSINESS;

export const businessApi = () => {
  const getDataApi = async () => {
    // TODO: use transform here
    const res = Ranking
    return res
  };

  return {
    getDataApi,
  };
};
