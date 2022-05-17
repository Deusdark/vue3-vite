import { ICategory } from './category';

/**
 * Model definition for product
 */
export interface IProduct {
  id: string;
  title: string;
  description: string;
  price?: number;
  image: any;
  slug?: string;
  categories: ICategory[];
  Custom_field: any[];
  status: IProductStatus;
}

export enum IProductStatus {
  draft = "draft",
  published = "published",
}
