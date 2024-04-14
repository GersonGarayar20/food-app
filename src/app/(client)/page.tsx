'use client'
import ProductCard from "@/components/product-card";
import { Input } from "@/components/ui/input";
import React from "react";
import { FilterProducts } from "./components/FilterProducts";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import { getProducts } from "@/lib/api/products";
import ProductList from "./components/ProductList";

export default function HomePage() {




  return (
    <main className=" min-h-screen px-4">
      <h1 className="text-2xl font-bold my-2">Bravazo</h1>
      <h2 className="mb-8">Lo mejor en un solo lugar!!</h2>
      <div className="flex gap-4 h-12 mb-6">
        <Input placeholder="buscador" className="h-full rounded-lg" />
        <FilterProducts />
      </div>
      <div>

      </div>
      <h2 className="mb-4">Categorias</h2>
      <div className="flex gap-2 mb-4">
        <Button className="rounded-2xl">All</Button>
        <Button className="rounded-2xl">Pizza</Button>
        <Button className="rounded-2xl">Burger</Button>
      </div>
      <section>
        <h2 className="mb-4">Productos</h2>
        <ProductList />
      </section>
      <Navbar />
    </main>
  );
}
