import React from "react";
import ProductCreateForm from "./product-create-form";
import { getCategories } from "@/lib/api/categories";

export default async function page() {
  const categories = await getCategories();

  console.log(categories);

  return (
    <div>
      <ProductCreateForm categories={categories.data} />
    </div>
  );
}
