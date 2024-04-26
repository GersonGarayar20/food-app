"use client";
import { Button } from "@/components/ui/button";
import useStore from "@/store/useStore";
import { useCartStore } from "@/store/cart";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ArrowBack from "@/components/icons/ArrowBack";
import { XIcon, PlusIcon, MinusIcon } from "lucide-react";
import { HeartFilled } from "@/app/ui/icons/heartFilled";

export default function OrderPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const stateCart = useStore(useCartStore, useCartStore.getState);
  const total = stateCart?.totalPrice();

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
              <Button className="bg-transparent border-y-[1px] dark:border-white border-black">
                <HeartFilled />
              </Button>
            </Link>
          </div>
        </header>
        <section className="flex flex-col gap-y-4">
          {/* mapear products of car */}
          {stateCart?.cart.map((product) => {
            return (
              <article
                key={product.id}
                className="bg-neutral-200 dark:bg-neutral-800 p-4 flex gap-4 rounded-[2em] md:h-40 h-32"
              >
                <div className="aspect-square">
                  <img
                    src={product.image}
                    alt=""
                    className="h-full w-full object-cover rounded-[2em]"
                  />
                </div>
                <div className="flex-1 flex items-center gap-4">
                  <div className="flex-1">
                    <h1 className="md:text-xl capitalize">{product.name}</h1>
                  </div>
                  <div className="flex items-center">
                    <Button
                      size="icon"
                      className="bg-neutral-300 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full"
                      onClick={() => stateCart.decrementItem(product.id)}
                    >
                      <MinusIcon />
                    </Button>
                    <div className="size-10 flex justify-center items-center">
                      {product.count}
                    </div>
                    <Button
                      size="icon"
                      className="bg-neutral-300 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full"
                      onClick={() => stateCart.incrementItem(product.id)}
                    >
                      <PlusIcon />
                    </Button>
                  </div>
                  <div>
                    <h2 className="md:text-2xl font-bold">${product.price}</h2>
                  </div>
                  <Button
                    size="icon"
                    className="bg-red-500 rounded-full flex-none"
                    onClick={() => stateCart.removeItem(product.id)}
                  >
                    <XIcon />
                  </Button>
                </div>
              </article>
            );
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
          <Button className="rounded-xl" variant="outline" size="icon">
            <Heart />
          </Button>
          <Link href={"/orders"}>
            <Button className="rounded-3xl px-12">Proceed to Pay</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
