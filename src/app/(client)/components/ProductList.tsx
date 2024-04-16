"use client"


import { getProducts } from "@/lib/fetch/products";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
import { ProductListSkeleton } from "./ProductListSkeleton";


function ProductList() {

    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: getProducts,
    })

    if (isError) return <div>Ocurrio un problema al obtener los datos</div>
    if (isLoading) return <ProductListSkeleton/>
    if(products?.lenght ==0) return  <div>No hay datos para mostrar</div>
    
    
    return (
      <div className="grid grid-cols-2 gap-4 ">
        {
            products.map(({ category_id, name, image, price }) => (
                <ProductCard
                    key={category_id}
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