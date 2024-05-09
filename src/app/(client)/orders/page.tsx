"use client";
import { Button } from "@/components/ui/button";
import useStore from "@/store/useStore";
import { useCartStore } from "@/store/cart";
import { Heart, Home, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ArrowBack from "@/components/icons/ArrowBack";
import { XIcon, PlusIcon, MinusIcon } from "lucide-react";
import { HeartFilled } from "@/app/ui/icons/heartFilled";
import { useEffect, useState } from "react";
import { getPagePayment } from "@/lib/fetch/payment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Skeleton } from "@/components/ui/skeleton";
import styles from './order.module.css'
export default function OrderPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const stateCart = useStore(useCartStore, useCartStore.getState);
  const total = stateCart?.totalPrice();

  return (
    <main className=" grid grid-cols-1 lg:grid-cols-[25%_50%_25%]  justify-between h-screen overflow-hidden w-full">
      {/* navbar */}
      <div className="hidden lg:block  grow  h-full min-h-screen min-w-[250px] max-w-[300px] ">
        <figure className="mb-16 flex flex-col justify-center items-center mt-12">
          <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f5/f5dc208cabba29fa25fdceb3d438db71ec70560e_full.jpg" className="aspect-square w-20 bg-black rounded-full" alt="" />
          <figcaption>Kimberly Rivz</figcaption>
        </figure >
        <nav className="pl-8">
          <div className="flex justify-star  items-center gap-4 mb-6">
            <div className="rounded-full bg-slate-700/50 p-4 ">
              <Home />
            </div>
            <span>Home</span>
          </div>
          <div className="flex justify-star  items-center gap-4 mb-6">
            <div className="rounded-full bg-slate-700/50 p-4 ">
            <Heart />
            </div>
            <span>Favoritos</span>
          </div>
          <div className="flex justify-star  items-center gap-4 mb-6">
            <div className="rounded-full bg-slate-700/50 p-4 ">
            <Settings />
            </div>
            <span>Configuración</span>
          </div>

        </nav>
      </div>
      {/*  orders*/} 
      <div className={`w-full grow  flex flex-col overflow-hidden `}>

        <header className="relative grow w-full h-32  m-auto  mb-4 flex justify-center items-center p-4 ">
          <div className="absolute h-full w-full flex items-center px-4 m-auto ">
          <ArrowBack />
          </div>
          <h1 className="text-3xl">Order Details</h1>

          {/*  <div className="flex items-center gap-x-4">
            <Link href={"/favorites"}>
              <Button className="bg-transparent border-y-[1px] dark:border-white border-black">
                <HeartFilled />
              </Button>
            </Link>
          </div> */}
        </header>

        <div className={`grow  w-full  rounded-tl-[60px]  ${styles.box} `}>
          <div className=" w-full flex flex-col px-4 py-4  ">
            {/* navegacion */}

            <section className="flex flex-col gap-y-4   ">
              {/* mapear products of car */}
              {stateCart?.cart.map((product) => {
                return (
                  <article
                    key={product.id}
                    className="relative max-w-3xl lg:w-full w-full bg-neutral-200 dark:bg-[#121116] p-4 flex gap-4 rounded-[2em] md:h-40 h-32"
                  >
                    {/* image */}
                    <div className="flex justify-center items-center">
                      <img
                        src={product.image}
                        alt=""
                        className=" w-full max-w-[100px] object-cover rounded-[2em]"
                      />
                    </div>
                    {/* botones */}
                    <div className="flex-1 flex flex-col  gap-2 lg:gap-10">
                      {/* name y price */}

                      <h1 className="text-lg font-light text-start capitalize pr-3">{product.name}</h1>


                      <div className="flex h-full  items-end justify-between gap-6 ">
                        <h2 className="text-2xl md:text-2xl font-bold">${product.price}</h2>

                        {/* incrementar */}
                        <div className="flex items-center ">
                          <Button
                            size="icon"
                            className="bg-neutral-300 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full"
                            onClick={() => stateCart.decrementItem(product.id)}
                          >
                            <MinusIcon />
                          </Button>
                          <p className="size-10 flex justify-center items-center">
                            {product.count}
                          </p>
                          <Button
                            size="icon"
                            className="bg-neutral-300 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full"
                            onClick={() => stateCart.incrementItem(product.id)}
                          >
                            <PlusIcon />
                          </Button>
                        </div>



                      </div>
                    </div>
                    {/* X */}
                    <Button
                      size="icon"
                      className="absolute right-3 bg-transparent lg:bg-red-500 w-4 h-4 rounded-full flex-none"
                      onClick={() => stateCart.removeItem(product.id)}
                    >
                      <XIcon />
                    </Button>
                  </article>
                );
              })}
            </section>
          </div>
          {/* foot */}

        </div>
      </div>
      {/* payment */}
      <div className="bg-[#fbfbfb] dark:bg-transparent py-2 flex flex-col  gap-y-4 min-h-28 p-2  lg:mt-36">
        <div className="w-full flex flex-col gap-4 justify-between font-bold text-lg py-4 dark:bg-black/20 p-4 rounded-lg">
          <p className="font-normal flex justify-between w-full "><span>subtotal</span> <span>${20}</span></p>
          <p className="font-normal flex justify-between w-full "><span>delivery</span> <span>${20}</span></p>
          <hr />
          <p className="font-bold text-2xl flex justify-between w-full"><span>Total</span> <span>${total}</span></p>
          
        </div>
        <div className="flex justify-between w-full mx-auto ">

          <Link href={"/orders"} className="w-full">
            <Button className="rounded-3xl block h-12 w-full">Proceed to Pay</Button>
          </Link> 
        </div>
      </div>

    </main>
  );
}
