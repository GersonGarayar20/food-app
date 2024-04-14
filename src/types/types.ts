export interface Product {
    id?: number
    name: string
    image: string | File
    price: number
    category_id: number
    createdAt?: Date
    updatedAt?: Date
}