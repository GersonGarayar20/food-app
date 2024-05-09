import { FilterProducts } from "./components/FilterProducts";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import Link from "next/link";
import { Heart } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Footer from "@/components/footer";
import useStore from "@/store/useStore";
import CounterCart from "./components/CounterCart";

import styles from './index.module.css';

export default function HomePage({ user }: { user: any }) {

  return (
    <main className=" min-h-screen p-4">
      <div className={`${styles.presentation} fixed inset-0 z-50 bg-black flex justify-center items-center`}>
        <div className={` ${styles.box} `}>
            Bravazo
          <div className={` ${styles.co}`}>
            <div className={` ${styles.grow} `}></div>
            <div className={` ${styles.ab} `}></div>
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-3xl">Bravazo</h2>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Link href={"/favorites"}>
            <Heart className="w-8 h-8" />
          </Link>
          <ThemeSwitcher text={false} />
          <div className="relative bg-white dark:bg-transparent rounded-3xl p-1 lg:top-0 lg:right-0">
          <CounterCart/>
          </div>
          <Link href={"/profile"}>
            <img
              src={
                user?.image
                  ? user.image
                  : "https://randomuser.me/api/portraits/men/62.jpg"
              }
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
