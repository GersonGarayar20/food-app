'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartStore } from "@/store/cart";
import { useParams } from "next/navigation";
import React from "react";
import useStore from "@/store/useStore";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea"
import { OrderFooter } from "../../components/OrderFooter";


export default function ProductPage() {

  const {slug}=useParams()
  
  const stateCart=useStore(useCartStore,useCartStore.getState)
  const product=stateCart?.cart[+slug]
  if (product==undefined) return <>Not found</>
  const total=product.price*product.count

  return (
    <div className="flex flex-col justify-between h-screen">
      <img src="https://d31npzejelj8v1.cloudfront.net/media/recipemanager/recipe/1687289598_doble-carne.jpg" alt="" className="aspect-square h-72 lg:h-auto lg:aspect-auto overflow-x-hidden relative -z-10" />
        
      <section className="flex flex-col gap-y-2 flex-grow p-4 bg-[#f1f1f1] dark:bg-[#050505] rounded-tl-3xl rounded-tr-3xl -mt-5 ">
            <h2 className="font-bold">{product.name}</h2>
            <div className="grid w-full max-w-sm items-center gap-4 bg-white dark:bg-black rounded-xl px-4 py-4">
              <Label htmlFor="email">intrucciones</Label>
              <Textarea placeholder="creamas ......" id="message" className="bg-[#f1f1f1] outline-none border-none dark:text-black " />
            </div>
            <div className="flex gap-x-4 justify-between items-center rounded-3xl bg-white dark:bg-black  px-4 py-4">
              <p className="text-sm font-bold">Quantity</p>
              <div className="flex gap-2 items-center">
                  <Button className="rounded-full size-8" onClick={()=>stateCart?.decrementItem(product.id)}>-</Button>
                  <span>{product.count}</span>
                  <Button className="rounded-full size-8" onClick={()=>stateCart?.incrementItem(product.id)}>+</Button>
              </div>
            </div>
      </section>
    {/* foot */}
      <OrderFooter total={total}/>
    </div>
  );
}
