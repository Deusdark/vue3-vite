import { APISettings } from '@/api/APISettings';
import type { Category } from '@/core/models/Category';
import { useFetch } from '@vueuse/core';
import { reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export async function useCategories() {
  const route = useRoute();

  const data = reactive({
    category: {} as Category,
    isFinished: false,
    error: undefined,
  });

  async function fetchData() {
    const response = await useFetch<Category>(
      APISettings.baseURL + '/categories/' + route.params.id
    ).json();

    data.category = response.data.value;
    data.isFinished = response.isFinished.value;
    data.error = response.error.value;
  }

  await fetchData();

  watch(() => route.params.id, fetchData);

  return {
    data,
  };
}
