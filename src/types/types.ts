export interface Product {
  category: string;
  id?: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}
