import { CommonStatus, ProductStatus } from "./enum";

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  sold: number;
  createAt: string;
  images: Image[];
  category: CategoryType;
  status: ProductStatus;
  phoneCategories: PhoneCategoryType[];
};
export type PhoneCategoryType = {
  id: number;
  name: string;
  status: CommonStatus;
  products: ProductType[];
};
export type CategoryType = {
  id: number;
  name: string;
  products: ProductType[];
};
export type Image = {
  id: number;
  url: string;
};
