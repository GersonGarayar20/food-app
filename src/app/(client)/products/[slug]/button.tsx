'use client'
import { Button } from "@/components/ui/button";
import { createFavorite } from "@/lib/fetch/favorites";
import { ProductI } from "@/types";
import { Heart } from "lucide-react";

const handleFavorite=async(id:any)=>{
    /* const res= await createFavorite({token,productId:id}) */
}


export function AddtoCart({product,count,fn}:{product:ProductI,count:number,fn:Function}) {
    
    return (
    <div className="flex justify-between w-full mx-auto">
        <Button className="rounded-xl" variant="outline" size="icon" onClick={()=>handleFavorite(product.id)}><Heart /></Button>
        <Button className="rounded-3xl px-12" onClick={()=>{fn({...product,count})}}>add to cart</Button>
     </div>
    )
}