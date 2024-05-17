"use client";

import { getProducts } from "@/lib/fetch/products";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
import { ProductListSkeleton } from "./ProductListSkeleton";
import { useFilterStore } from "@/app/global/filter";
import { ProductI } from "@/types";
import { ServerOff } from "lucide-react";

function ProductList() {
  const { category_id, word, maxPrice, minPrice } = useFilterStore();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery<ProductI[] | null>("users", () => getProducts());

  if (isError)
    return (
      <div className="flex flex-col justify-center items-center  min-h-[500px]">
        <h2>Ocurrio un problema al obtener los datos</h2>
        <ServerOff size={200} />
      </div>
    );
  if (isLoading) return <ProductListSkeleton />;
  if (products?.length == 0) return <div>No hay datos para mostrar</div>;

  function filterProducts(products: ProductI[]) {
    let filtered = products;

    if (word) {
      const searchTerm = word.toLowerCase();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    }

    if (category_id && category_id != 1)
      filtered = products.filter(
        (product) => product.category_id === category_id
      );

    if (maxPrice !== 1000 || minPrice !== 0)
      filtered = filtered.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );

    return filtered;
  }

  const productsFiltered = filterProducts(products ? products : []);

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-7 gap-y-16">
      {productsFiltered?.map(
        ({ id, description, category_id, name, image, price }) => (
          <ProductCard
            key={id}
            id={id}
            category_id={category_id}
            name={name}
            image={image}
            price={price}
            description={description}
          />
        )
      )}
    </section>
  );
}

export default ProductList;
