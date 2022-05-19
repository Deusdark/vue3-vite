import { ref } from 'vue';

const nbItems = ref(0);

export function useCart() {
  function addItem() {
    nbItems.value++;
  }

  return {
    nbItems,
    addItem,
  };
}
