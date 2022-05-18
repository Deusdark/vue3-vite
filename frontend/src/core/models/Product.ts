import type { Category } from './Category';

/**
 * Model definition for product
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  price?: number;
  image: any;
  slug?: string;
  categories: Category[];
  Custom_field: any[];
  status: ProductStatus;
  quantityInStock: number;
}

export enum ProductStatus {
  draft = 'draft',
  published = 'published',
}
