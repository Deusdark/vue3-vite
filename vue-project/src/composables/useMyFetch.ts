import { ref, type Ref } from 'vue';

export function useMyFetch<T>(url: string) {
  const data: Ref<T | null> = ref(null);
  const error = ref(null);

  fetch(url)
    .then((res) => res.json() as T)
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
}
