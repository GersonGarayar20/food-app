import {  ProductI } from "@/types";
import { useState,createContext } from "react";


export const FavoriteContext=createContext<{ favorites: ProductI[]|null; setFavorites: React.Dispatch<React.SetStateAction<ProductI[]|null>> }>({ favorites: [], setFavorites: () => {} })

export function FavoriteProvider({children}:{children:React.ReactNode}) {
    
    const [favorites,setFavorites]=useState<ProductI[]|null>([])


    return(
        <FavoriteContext.Provider value={{favorites,setFavorites}} >
            {children}
        </FavoriteContext.Provider>
    )

}




