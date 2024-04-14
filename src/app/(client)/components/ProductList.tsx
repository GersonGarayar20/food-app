"use client"


import { getProducts } from "@/lib/api/products";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";

function ProductList() {

    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: getProducts,
    })

    if (isError) return <div>Ocurrio un problema al obtener los datos</div>
    if (isLoading) return <div>Cargando los datos</div>
    if(products?.lenght ==0) return  <div>No hay datos para mostrar</div>
    console.log(products);
    
    return (
      <div>
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