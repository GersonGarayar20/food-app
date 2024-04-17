'use client'
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { getProduct } from "@/lib/fetch/products";
import { ProductI } from "@/types";
import { AddtoCart } from "./button";
import { useParams, useRouter } from "next/navigation";
import { MoveLeft, ShoppingCart } from "lucide-react";
import { useNotifications } from "./notifications";
import Loader from "@/components/Loader";

export  default function ProductPage() {

  const param=useParams()
  const router=useRouter()
  const slug =param.slug as string

  const [count,setCount]=useState(1)
  const {setTrigger,notifications}=useNotifications()
  const [product,setProduct]=useState<ProductI|null>(null)
  
    useEffect(()=>{
      getProduct(slug)
      .then((res)=>setProduct(res))

    },[])

    const handleBack=()=>{
      router.back()
    }
    

  if (product?.id==undefined) return <Loader/>

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="fixed top-3 left-3">
      <Button onClick={()=>handleBack()}><MoveLeft /></Button>
      </div>
      <div className="fixed top-3 right-3">
        <div className="rounded-full bg-white text-black absolute w-6 -top-3 -right-3 -z-10 text-center"><p>{notifications}</p></div>
        <ShoppingCart color="black"/>
        </div>
      <img src={product.image} alt="" className="aspect-square h-72 lg:h-auto lg:aspect-auto overflow-x-hidden relative -z-10" />
        
        <section className="flex flex-col justify-between gap-y-4 flex-grow p-4 bg-[#f1f1f1] dark:bg-[#050505] rounded-tl-3xl rounded-tr-3xl -mt-5 ">
            <h2 className="font-bold ">{product.name}</h2>
            <div className="grid w-full items-center gap-4 bg-white dark:bg-black rounded-xl px-4 py-4">
              <h2>Ingredientes</h2>
              <p>Lorem ipsum dolor sit, </p>
            </div>
            <div className="flex gap-x-4 justify-between items-center rounded-3xl bg-white dark:bg-black  px-4 py-4">
              <p className="text-sm font-bold">Quantity</p>
              <div className="flex gap-2 items-center">
                  <Button className="rounded-full size-8" onClick={()=>{if(count==1)return; setCount(count-1)}}>-</Button>
                  <span>{count}</span>
                  <Button className="rounded-full size-8" onClick={()=>setCount(count+1)}>+</Button>
              </div>
            </div>
      </section>
    {/* foot */}
      <div className="bg-[#fbfbfb] dark:bg-black py-2 flex flex-col gap-y-4 min-h-28 px-8">
          <div className="w-full flex justify-between font-bold text-lg">
            <p className="font-bold">Total</p>
            <span>${product.price*count}</span> 
          </div>
          <AddtoCart product={product} count={count} setState={setTrigger}/>
      </div>
    </div>
  );
}
