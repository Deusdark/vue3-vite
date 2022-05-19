import { ref } from 'vue';

const nbItems = ref(0);

export function useCart() {
  function addItem() {
    nbItems.value++;
  }

  function removeItem() {
    nbItems.value--;
  }

  return {
    nbItems,
    addItem,
    removeItem,
  };
}
