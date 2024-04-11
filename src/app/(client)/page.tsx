import ProductCard from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";
import React from "react";

export default function HomePage() {
  return (
    <main>
      <h1>hola mundo</h1>
      <Input placeholder="buscador" />
      {/* categorias */}
      <div className="flex gap-2 py-2">
        <div>pizza</div>
        <div>hamburger</div>
      </div>
      <section>
        <h2>Productos</h2>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {products.map(({ category_id, name, image, price }) => (
            <ProductCard
              key={category_id}
              category_id={category_id}
              name={name}
              image={image}
              price={price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
