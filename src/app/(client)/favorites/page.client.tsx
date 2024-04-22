'use client'
import ArrowBack from "@/components/icons/ArrowBack";
import {
  createFavorite,
  deleteFavorite,
  getFavorites,
} from "@/lib/fetch/favorites";
import {  dataProductI } from "@/types";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function FavoritesPage({token}:{token:string}) {

  
  const [favorites,setFavorites] = useState<dataProductI[] | null>([])

  useEffect(()=>{
    getFavorites({token})
    .then((res)=>setFavorites(res))
  },[])

  if (!favorites)
    return <h1 className="text-center">Error al traer los favoritos</h1>;

  return (
    <div className="p-4">
      <ArrowBack />
      <div className="flex justify-center  mt-8">
        <h2 className="text-3xl font-bold mb-8 ">Favoritos</h2>
      </div>
      <div className="flex flex-col gap-x-10 gap-y-5">
        {favorites?.length == 0 ? (
          <h1 className="text-center">No hay favoritos</h1>
        ) : (
          favorites?.map((favorite) => {
            return (
              <article
                key={favorite.product.id}
                className="flex items-start gap-5 dark:bg-[#000000] bg-[#f7f0ee]  rounded-2xl relative h-32"
              >
                <img
                  src={favorite.product.image}
                  alt=""
                  className="rounded-2xl w-36 h-32 object-cover"
                />
                <div className="flex flex-col justify-evenly gap-y-7 h-full pr-8">
                  <h1 className="font-bold text-lg">{favorite.product.name}</h1>
                  <div className="">
                    <p className="overflow-x-hidden lg:w-full opacity-70 text-xs w-[95%] text-ellipsis">
                      {favorite.product.description}
                    </p>
                    <p className="overflow-x-hidden lg:w-full opacity-70 text-xs w-[95%] text-ellipsis">
                      {favorite.product.ingredients}
                    </p>
                  </div>
                </div>
                {/* Cambiar logo */}
                <button className="absolute top-2 right-2"><Heart className="text-orange-600"/></button>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
