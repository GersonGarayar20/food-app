
import { FavoriteContext } from "@/app/context/favorite"
import { createFavorite, deleteFavorite } from "@/lib/fetch/favorites"
import { ProductI } from "@/types"
import { useContext } from "react"

export function useFavorite() {

    const {favorites,setFavorites}=useContext(FavoriteContext)

    const handleFavorite=async({product,token}:{product:ProductI,token:string})=>{
        setFavorites((prev)=>{
          if (!prev) return [product]
          return [...prev,{...product}]})
        createFavorite({token,productId:product.id})
          .then()
          .catch((res)=>setFavorites(prev=>prev!.filter(e=>e.id!==product.id)))
          
        }
        
      const handleUnFavorite=async({product,token}:{product:ProductI,token:string})=>{
            setFavorites(prev=>prev!.filter(e=>e.id!==product.id))
             deleteFavorite({token,productId:product.id})
             .then()
             .catch((res)=>setFavorites(prev=>{
              if (!prev) return [product]
              return[...prev,{...product}]}))
         }

    return{handleFavorite,handleUnFavorite,favorites,setFavorites}
}


