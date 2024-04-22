'use client'
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ProductI } from "@/types";
import { Heart } from "lucide-react";
import Loader from "@/components/Loader";
import { useStore } from "zustand";
import { useCartStore } from "@/store/cart";
import { useFavorite } from "../../hook/useFavorite";
import { HeartFilled } from "@/app/ui/icons/heartFilled";
import ArrowBack, { CartNavigate } from "@/components/icons/ArrowBack";




export  default function ProductPage({product,token,id}:{token:string,product:ProductI,id:number}) {
  
  const stateCart=useStore(useCartStore,useCartStore.getState)
  const {favorites,handleFavorite,handleUnFavorite}=useFavorite()
  
  const isFavorite=favorites?.some(favorite=>favorite?.id==product?.id)

  const [count,setCount]=useState(()=>stateCart.cart.find(e=>e.id==id)?.count || 1)


  if (product?.id==undefined) return <Loader/>

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="fixed top-3 left-3">
        <ArrowBack/>
      </div>
      <div className="fixed top-5 right-5 bg-white rounded-3xl p-1 " >
        <div className="rounded-full bg-gray-500 text-white absolute w-6 -top-3 -right-3 -z-10 text-center" ><p className="" id="count">{stateCart.count()}</p></div>
        <CartNavigate/>
      </div>
      <img src={product.image} alt="" className="h-96 object-cover lg:h-auto lg:aspect-auto overflow-x-hidden relative -z-10" />
        
        <section className="flex flex-col  gap-y-5 justify-end flex-grow p-4 bg-[#f1f1f1] dark:bg-[#050505] rounded-tl-3xl rounded-tr-3xl -mt-5 ">
            <h2 className="font-bold mb-5">{product.name.toUpperCase()}</h2>
            <div className="grid w-full items-center gap-4 bg-white dark:bg-black rounded-xl px-4 py-6">
              <h2>Ingredientes</h2>
              <p>{product.ingredients}</p>
            </div>
            <div className="grid w-full items-center gap-4 bg-white dark:bg-black rounded-xl px-4 py-6">
              <h2>Ingredientes</h2>
              <p>{product.description}</p>
            </div>
            <div className="flex gap-x-4 justify-between items-center rounded-3xl bg-white dark:bg-black  px-4 py-4">
              <p className="text-sm font-bold">Quantity</p>
              <div className="flex gap-2 items-center">
                  <Button className="rounded-full size-8" onClick={()=>{if(count==1)return; setCount(count-1)}}>-</Button>
                  <span>{count}</span>
                  <Button className="rounded-full size-8" onClick={()=>{if(count==10) return;setCount(count+1)}}>+</Button>
              </div>
            </div>
      </section>
    {/* foot */}
      <div className="bg-[#fbfbfb] dark:bg-black py-2 flex flex-col gap-y-4 min-h-28 px-8">
          <div className="w-full flex justify-between font-bold text-lg">
            <p className="font-bold">Total</p>
            <span>${product.price*count}</span> 
          </div>
          <div className="flex justify-between w-full mx-auto">
          <Button className="rounded-xl" variant="outline" size="icon" onClick={()=>{isFavorite?handleUnFavorite({product,token}):handleFavorite({product,token})}}>{isFavorite?<HeartFilled/>:<Heart />}</Button>
          <Button className="rounded-3xl px-12" onClick={()=>{stateCart.add({...product,count})}}>add to cart</Button>
          </div>
      </div>
    </div>
  );
}
