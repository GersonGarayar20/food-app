
import { FilterProducts } from "./components/FilterProducts";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import Bell from "@/components/icons/Bell";
import Config from "@/components/icons/Config";

export default function HomePage() {

  return (

    <main className=" min-h-screen p-4">
      <div className="mb-4 flex justify-between">
        <img src="https://randomuser.me/api/portraits/men/62.jpg" className="rounded-full w-10 h-10 border-[1px] border-slate-300" alt="" />
        <div className="flex gap-4 ">
          <Bell />
          <Config />
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
