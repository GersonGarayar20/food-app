import React from "react";
import ProductCreateForm from "./product-create-form";
import { getCategories } from "@/lib/fetch/categories";

export default async function page() {
  const categories = await getCategories();

  console.log("->", categories);

  return (
    <>
      <header>
        <h1 className="text-2xl">Crear un Producto</h1>
      </header>
      <ProductCreateForm categories={categories} />
    </>
  );
}
