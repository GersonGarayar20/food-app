'use client'
import { Button } from "@/components/ui/button";
import { ProductI } from "@/types";
import { Heart } from "lucide-react";


export function AddtoCart({product,count,fn}:{product:ProductI,count:number,fn:Function}) {
    
    return (
    <div className="flex justify-between w-full mx-auto">
        <Button className="rounded-xl" variant="outline" size="icon"><Heart /></Button>
        <Button className="rounded-3xl px-12" onClick={()=>{fn({...product,count})}}>add to cart</Button>
     </div>
    )
}