export interface ProductI {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  image: string;
  price: number;
  category_id: number;
}

export interface CategoryI {
  id: number;
  name: string;
  image: string;
}

export interface UserI {
  id: number;
  name: string;
}

export interface ClientI {
  id: number;
  name: string;
}

export interface RolI {
  id: number;
  name: string;
}

export interface OrderI {
  id: number;
  name: string;
}
