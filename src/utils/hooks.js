import { ref } from "vue";

export const useLoading = () => {
  const isLoading = ref(false);

  const setLoading = (status) => {
    isLoading.value = status;
  };

  return {
    isLoading,
    setLoading,
  };
};

export const useModal = () => {
  const isVisible = ref(false);
  const isVisibleSeeDetail = ref(false);
  const isVisibleSeeDetailGroupA = ref(false);

  const showModal = () => (isVisible.value = true);
  const showModalSeeDetail = () => (isVisibleSeeDetail.value = true);
  const showModalSeeDetailGroupA = () => (isVisibleSeeDetailGroupA.value = true);

  const hideModal = () => (isVisible.value = false);
  const hideModalSeeDetail = () => (isVisibleSeeDetail.value = false);
  const hideModalSeeDetailGroupA = () => (isVisibleSeeDetailGroupA.value = false);

  return {
    isVisible,
    isVisibleSeeDetail,
    isVisibleSeeDetailGroupA,
    showModal,
    showModalSeeDetail,
    showModalSeeDetailGroupA,
    hideModal,
    hideModalSeeDetail,
    hideModalSeeDetailGroupA
  };
};
