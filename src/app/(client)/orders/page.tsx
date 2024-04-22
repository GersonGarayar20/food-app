'use client'
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher";
import useStore from "@/store/useStore";
import { useCartStore } from "@/store/cart";
import { Heart,MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ArrowBack from "@/components/icons/ArrowBack";
import { Trash2 } from "lucide-react";


export default function OrderPage() {

  const router=useRouter()

  const handleBack=()=>{
    router.back()
  }


    const stateCart=useStore(useCartStore,useCartStore.getState)
    const total=stateCart?.totalPrice()
  
    return (
      <main className="flex flex-col justify-between h-screen">
        <div className="bg-[#f1f1f1] dark:bg-[#050505] w-full flex flex-col px-4 py-4 flex-grow">
          {/* navegacion */}
          <header className="flex justify-between mb-4">
            <nav className="flex gap-x-2 items-center">
              <ArrowBack/>
              <h1>Order Details</h1>
            </nav>
            <div className="flex items-center gap-x-4">
              <Link href={"/favorites"}>
              <Button><Heart color="red"/></Button>
              </Link>
            </div>
          </header>
          <section className="flex flex-col gap-y-4">
            
              {/* mapear products of car */}
              {stateCart?.cart.map(product=>{
                return(
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
                          <Button className="rounded-full size-8" onClick={()=>stateCart.decrementItem(product.id)}>-</Button>
                          <span>{product.count}</span>
                          <Button className="rounded-full size-8" onClick={()=>stateCart.incrementItem(product.id)}>+</Button>
                        </div>
                      </div>
                    </div>
                        <button className="absolute top-2 right-4 group" onClick={()=>stateCart.removeItem(product.id)}><Trash2 size={24} className="hover:text-red-600"/></button>
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
             <Button className="rounded-xl" variant="outline" size="icon"><Heart/></Button>
             <Link href={"/orders"}>
             <Button className="rounded-3xl px-12">Proceed to Pay</Button>
             </Link>
          </div>
      </div>
      </main>
    );
  }
  