import { APISettings } from '@/api/APISettings';
import type { Product } from '@/core/models/Product';
import { useFetch } from '@vueuse/core';

export function useProducts() {
  return useFetch(APISettings.baseURL + '/products').json<Product[]>();
}
