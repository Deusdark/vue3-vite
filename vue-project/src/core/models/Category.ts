import type { Product } from './Product';

/**
 * Model definition for category
 */
export interface Category {
  id: string;
  name?: string;
  slug?: string;
  products: Product[];
}
