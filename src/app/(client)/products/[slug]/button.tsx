'use client'
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";
import useStore from "@/store/useStore";
import { ProductI } from "@/types";


export function AddtoCart({product,count}:{product:ProductI,count:number}) {
    const stateCart=useStore(useCartStore,useCartStore.getState)
    
    
    return (
    <div className="flex justify-between w-full mx-auto">
        <Button className="rounded-xl" variant="outline" size="icon">:3</Button>
        <Button className="rounded-3xl px-12" onClick={()=>stateCart!.add({...product,count})}>add to cart</Button>
     </div>
    )
}