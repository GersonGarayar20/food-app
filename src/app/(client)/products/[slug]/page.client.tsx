"use client";
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
import styles from "./index.module.css";

export default function ProductPage({
  product,
  token,
  id,
}: {
  token: string | undefined;
  product: ProductI;
  id: number;
}) {
  const stateCart = useStore(useCartStore, useCartStore.getState);
  const { favorites, handleFavorite, handleUnFavorite } = useFavorite();

  const isFavorite = favorites?.some((favorite) => favorite?.id == product?.id);

  const [count, setCount] = useState(
    () => stateCart.cart.find((e) => e.id == id)?.count || 1
  );

  if (product?.id == undefined) return <Loader />;

  return (
    <section className="min-h-screen w-full lg:flex lg:flex-col p-6">
      {/* navbar */}
      <header className="flex justify-between w-full lg:my-5 ">
        <ArrowBack />
        <div className="relative bg-white dark:bg-black rounded-3xl p-1 lg:relative lg:top-0 lg:right-0">
          <div className="rounded-full bg-orange-600 text-white absolute w-6 -top-2 -right-2 z-20 text-center">
            <p className="" id="count">
              {stateCart.cart?.length}
            </p>
          </div>
          <CartNavigate className="text-dark dark:text-white" />
        </div>
      </header>
      {/* imagen mobile */}
      <figure className="w-full flex justify-center items-center pb-8 px-4 lg:hidden">
        <img
          src={product.image}
          alt=""
          className="max-h-80  object-cover  relative -z-10  lg:h-auto lg:z-50 lg:-right-[33%] lg:size-[500px]  lg:top-[25%]  lg:p-0 lg:absolute"
        />
      </figure>

      {/* order */}
      <div className="lg:flex lg:flex-col lg:grow justify-center  items-end h-full lg:w-full lg:min-h-full pb-20 lg:pb-0">
        <div className="grid lg:grid-cols-[3fr,2fr] 2xl:aspect-video   lg:dark:bg-black/70 rounded-[30px] lg:bg-[#fafafa] overflow-hidden ">
          <div className="flex flex-col w-full h-full  lg:items-start  lg:justify-center  lg:py-10 lg:ml-8">
            <section className="flex flex-col 2xl:gap-y-5  flex-grow lg:flex-grow-0 p-4 bg-[#f1f1f1] dark:bg-[#050505] rounded-tl-3xl rounded-tr-3xl  lg:bg-transparent lg:dark:bg-transparent ">
              <h2 className="font-bold  text-center md:text-3xl 2xl:text-5xl">
                {product.name.toUpperCase()}
              </h2>
              <div className="grid w-full items-center gap-4 bg-white dark:bg-black rounded-xl px-4 lg:px-0 py-6 lg:bg-transparent lg:dark:bg-transparent">
                <h2 className="lg:text-xl">Descripcion</h2>
                <p className="text-base font-extralight max-w-sm ">
                  {product.ingredients}
                </p>
              </div>
              <div className="grid w-full items-center gap-4 bg-white dark:bg-black rounded-xl px-4 lg:px-0 py-6 lg:bg-transparent lg:dark:bg-transparent">
                <h2 className="lg:text-xl">Ingredientes</h2>
                <p className="text-base font-extralight max-w-sm ">
                  {product.description}
                </p>
              </div>
              <div className="flex gap-x-4 justify-between items-center rounded-3xl bg-white dark:bg-black lg:px-0  px-4 py-4 lg:bg-transparent lg:dark:bg-transparent lg:justify-start">
                <p className="text-sm font-bold">Quantity</p>
                <div className="flex gap-2 items-center">
                  <Button
                    className="rounded-full size-8"
                    onClick={() => {
                      if (count == 1) return;
                      setCount(count - 1);
                    }}
                  >
                    -
                  </Button>
                  <span>{count}</span>
                  <Button
                    className="rounded-full size-8"
                    onClick={() => {
                      if (count == 10) return;
                      setCount(count + 1);
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
            </section>
            <div className="bg-[#fbfbfb] dark:bg-black py-2 flex flex-col gap-y-4 min-h-28 px-8 lg:bg-transparent lg:dark:bg-transparent lg:px-4 ">
              <div className="w-full flex justify-between font-bold text-lg lg:justify-start lg:gap-x-16">
                <p className="font-bold lg:text-4xl">Total</p>
                <span className="lg:text-4xl">${product.price * count}</span>
              </div>
              <div className="flex justify-between w-full mx-auto lg:justify-start lg:gap-x-7">
                {
                  token != undefined && (<Button
                    className="rounded-xl"
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      isFavorite
                        ? handleUnFavorite({ product, token })
                        : handleFavorite({ product, token });
                    }}
                  >
                    {isFavorite ? <HeartFilled /> : <Heart />}
                  </Button>)
                }
                <Button
                  className="rounded-3xl px-12"
                  onClick={() => {
                    stateCart.add({ ...product, count });
                  }}
                >
                  add to cart
                </Button>
              </div>
            </div>
          </div>
          <div
            className="hidden relative lg:flex justify-start items-center h-full "
            id="products-rigth"
          >
            <img
              src={product.image}
              alt=""
              className={`${styles.image_opacity} ${styles.rotacion}  relative z-50 lg:right-[33%] h-[400]  object-cover animate-opacity `}
            />
            <div className="absolute bg-orange-600 w-full h-full dark:opacity-85 opacity-20"></div>
          </div>
        </div>
      </div>
    </section >
  );
}
