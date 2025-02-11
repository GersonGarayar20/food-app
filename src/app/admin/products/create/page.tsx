import React from "react";
import ProductCreateForm from "./product-create-form";
import { getCategories } from "@/lib/fetch/categories";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function page() {
  const categories = await getCategories();
  const session = await getServerSession(authOptions);
  return (
    <>
      <header>
        <h1 className="text-2xl">Crear un Producto</h1>
      </header>
      <ProductCreateForm
        categories={categories}
        token={session?.user?.accessToken!}
      />
    </>
  );
}
