'use client'
import { FilterProducts } from "./components/FilterProducts";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import Link from "next/link";
import {  Heart } from "lucide-react";
import { CartNavigate } from "@/components/icons/ArrowBack";
import { useStore } from "zustand";
import { useCartStore } from "@/store/cart";


export default function HomePage({user}:{user:any}) {

  const stateCart=useStore(useCartStore,useCartStore.getState)
  
  return (
    <main className=" min-h-screen p-4">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-3xl">Bravazo</h2>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Link href={"/favorites"}>
            <Heart className="w-8 h-8" />
          </Link>
          <div className="relative bg-white dark:bg-transparent rounded-3xl p-1 lg:top-0 lg:right-0" >
            <div className="rounded-full bg-orange-600 text-white absolute w-6 -top-1 -right-1 z-20 text-center" ><p className="" id="count">{stateCart.count()}</p></div>
            <CartNavigate className='text-dark dark:text-white'/>
          </div>
          <Link href={"/profile"}>
            <img
              src={user?.image?user.image:"https://randomuser.me/api/portraits/men/62.jpg"}
              className="rounded-full w-10 h-10 border-[1px] border-slate-300"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <FilterProducts />
      </div>
      <CategoryList />
      <Link href={"products/10"}>
      <img src="offer.png" loading="lazy" alt="" className="my-8 rounded-lg hover:scale-[1.02] duration-300 ease-linear cursor-pointer" />
      </Link>
      <section>
        <ProductList />
      </section>
      
    </main>
  );
}
