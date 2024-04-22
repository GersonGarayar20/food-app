/* eslint-disable @next/next/no-img-element */
"use client"


import { getProducts } from "@/lib/fetch/products";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
import { ProductListSkeleton } from "./ProductListSkeleton";
import { Product } from "@/types/types";
import { useFilter } from "../hook/useFilter"
import { useState } from "react";
import { useFilterStore } from "@/app/global/filter";
import { ProductI } from "@/types";
import { ServerOff } from "lucide-react";

function ProductList() {
    const { category_id, word, maxPrice, minPrice } = useFilterStore()
    const { data: products, isLoading, isError } = useQuery<ProductI[]>(
        "users",
        () => getProducts(),
        { cacheTime: 3600 })

    if (isError) return (<div className="flex flex-col justify-center items-center  min-h-[500px]">
        <h2>Ocurrio un problema al obtener los datos</h2>
        <ServerOff size={200} />
    </div>)
    if (isLoading) return <ProductListSkeleton />
    if (products?.length == 0) return <div>No hay datos para mostrar</div>

    function filterProducts(products: Product[]) {

        let filtered = products;

        if (word) {
            const searchTerm = word.toLowerCase();
            filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm))

        }

        if (category_id && category_id != 1) filtered = products.filter(product => product.category_id === category_id)

        if (maxPrice !== 1000 || minPrice !== 0) filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);


        return filtered;
    }

    const productsFiltered = filterProducts(products!)

    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 ">

            {
                productsFiltered?.map(({ id, category_id, name, image, price }) => (
                    <ProductCard
                        key={id}
                        id={id}
                        category_id={category_id}
                        name={name}
                        image={image}
                        price={price}
                    />
                ))
            }
        </div>
    );
}

export default ProductList;