'use client'
import { FilterProducts } from "./components/FilterProducts";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import {Bell,BellIcons} from "@/components/icons/Bell";
import Link from "next/link";
import {  Heart } from "lucide-react";

export default function HomePage({user}:{user:any}) {

  
  return (
    <main className=" min-h-screen p-4">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-3xl">Bravazo</h2>
        </div>
        <div className="flex gap-4 ">
          <Link href={"/favorites"}>
            <Heart className="w-8 h-8" />
          </Link>

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
      <section>
        <ProductList />
      </section>
    </main>
  );
}
