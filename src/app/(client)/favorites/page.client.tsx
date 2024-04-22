'use client'
import ArrowBack from "@/components/icons/ArrowBack";
import {
  createFavorite,
  deleteFavorite,
  getFavorites,
} from "@/lib/fetch/favorites";
import {  dataProductI } from "@/types";
import { useEffect, useState } from "react";
import { FavoriteCard } from "../components/FavoriteCard";

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
             <FavoriteCard product={favorite.product} token={token}/>
            );
          })
        )}
      </div>
    </div>
  );
}
