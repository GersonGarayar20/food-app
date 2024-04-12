import React from "react";
import CategoriesCreateForm from "./categories-create-form";

export default async function page() {
  return (
    <div>
      <h1>Crear una categoria</h1>
      <CategoriesCreateForm />
    </div>
  );
}
