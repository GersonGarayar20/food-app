'use client'
import { Button } from "@/components/ui/button"
import useStore from "@/store/useStore";
import { useCartStore } from "@/store/cart";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ArrowBack from "@/components/icons/ArrowBack";
import { Trash2 } from "lucide-react";
import { HeartFilled } from "@/app/ui/icons/heartFilled";
import { useEffect, useState } from "react";
import { getPagePayment } from "@/lib/fetch/payment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Skeleton } from "@/components/ui/skeleton";


export default function OrderPage() {
  const [url, setUrl] = useState("")
  const router = useRouter()
  const stateCart = useStore(useCartStore, useCartStore.getState)
  const total = stateCart?.totalPrice()
  

  useEffect(() => {
    if (!stateCart) return
    const a = stateCart.cart
    
    if(a.length === 0) return
    if (stateCart.cart.length > 0) {
      const data = async () => {
        /* const sesion = await getServerSession(authOptions); */
        const body = stateCart.cart
        const res = await getPagePayment(body)
        setUrl(res.url)

      }
      data()
    }
  }, [stateCart])

  const handleBack = () => {
    router.back()
  }






  return (
    <main className="flex flex-col justify-between h-screen">
      <div className="bg-[#f1f1f1] dark:bg-[#050505] w-full flex flex-col px-4 py-4 flex-grow">
        {/* navegacion */}
        <header className="flex justify-between mb-4">
          <nav className="flex gap-x-2 items-center">
            <ArrowBack />
            <h1>Order Details</h1>
          </nav>
          <div className="flex items-center gap-x-4">
            <Link href={"/favorites"}>
              <Button className="bg-transparent border-y-[1px] dark:border-white border-black"><HeartFilled /></Button>
            </Link>
          </div>
        </header>
        <section className="flex flex-col gap-y-4">

          {/* mapear products of car */}
          {stateCart?.cart.map(product => {
            return (
              <article key={product.id} className="flex gap-x-4 rounded-3xl bg-white dark:bg-black  px-3 py-4 relative">
                <div className="w-80">
                  <img src={product.image} alt="" className="rounded-2xl" />
                </div>
                <div className="w-full flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h1>{product.name}</h1>
                  </div>
                  <div className="flex justify-between items-center">
                    <h2>${product.price}</h2>
                    <div className="flex gap-2 items-center">
                      <Button className="rounded-full size-8" onClick={() => stateCart.decrementItem(product.id)}>-</Button>
                      <span>{product.count}</span>
                      <Button className="rounded-full size-8" onClick={() => stateCart.incrementItem(product.id)}>+</Button>
                    </div>
                  </div>
                </div>
                <button className="absolute top-2 right-4 group" onClick={() => stateCart.removeItem(product.id)}><Trash2 size={24} className="hover:text-red-600" /></button>
              </article>
            )
          })}
        </section>
      </div>
      {/* foot */}
      <div className="bg-[#fbfbfb] dark:bg-black py-2 flex flex-col gap-y-4 min-h-28 px-8">
        <div className="w-full flex justify-between font-bold text-lg">
          <p className="font-bold">Total</p>
          <span>${total}</span>
        </div>
        <div className="flex justify-between w-full mx-auto">
          <Button className="rounded-xl" variant="outline" size="icon"><Heart /></Button>
          {
            !url ?<Skeleton className=" h-8 w-48  rounded-full"></Skeleton>
            :(<Link href={url ? url : ""} className={url ?"":"pointer-events-none opacity-10"}>
            <Button className="rounded-3xl px-12">Proceed to Pay</Button>
          </Link>)}
        </div>
      </div>
    </main>
  );
}
