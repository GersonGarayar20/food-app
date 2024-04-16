'use client'
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";
import useStore from "@/store/useStore";
import { ProductI } from "@/types";
import { Heart } from "lucide-react";


export function AddtoCart({product,count,setState}:{product:ProductI,count:number,setState:React.Dispatch<any>}) {
    const stateCart=useStore(useCartStore,useCartStore.getState)
    
    
    return (
    <div className="flex justify-between w-full mx-auto">
        <Button className="rounded-xl" variant="outline" size="icon"><Heart /></Button>
        <Button className="rounded-3xl px-12" onClick={()=>{stateCart!.add({...product,count});setState(prev=>prev+1)}}>add to cart</Button>
     </div>
    )
}