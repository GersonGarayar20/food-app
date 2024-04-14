import React from "react";
import ProductCreateForm from "./product-create-form";
import { getCategories } from "@/lib/fetch/categories";

export default async function page() {
  const categories = await getCategories();

  console.log("->", categories);

  return (
    <div>
      <header>
        <h1>Crear un Producto</h1>
      </header>
      <ProductCreateForm categories={categories} />
    </div>
  );
}
