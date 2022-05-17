import { IProduct } from './product';

/**
 * Model definition for category
 */
export interface ICategory {
  id: string;
  name?: string;
  slug?: string;
  products: IProduct[];
}
