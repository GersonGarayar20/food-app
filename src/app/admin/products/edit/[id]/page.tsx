import React from "react";
import ProductEditForm from "./product-edit-form";
import { getCategories } from "@/lib/fetch/categories";
import { getProduct } from "@/lib/fetch/products";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProduct(id);

  if (!product) {
    return <div>el producto no existe</div>;
  }

  const categories = await getCategories();

  return (
    <div>
      <ProductEditForm product={product} categories={categories} />
    </div>
  );
}
