"use client"
import { Input } from "@/components/ui/input";
import { FilterProducts } from "./components/FilterProducts";
import Navbar from "@/components/navbar";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import { useState } from "react";

export default function HomePage() {




  return (

    <main className=" min-h-screen px-4">
      <h1 className="text-2xl font-bold my-2">Bravazo</h1>
      <h2 className="mb-8">Lo mejor en un solo lugar!!</h2>
      <div className="flex gap-4 h-12 mb-6">
        <FilterProducts />
      </div>
      <h2 className="mb-4">Categorias</h2>
      <CategoryList />
      <section>
        <h2 className="mb-4">Productos</h2>
        <ProductList />
      </section>
      <Navbar />
    </main>
  );
}
