import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Presentacion from "./presentacion";
import NavbarHome from "./navbar-home";
import { FilterProducts } from "./components/FilterProducts";
import CategoryList from "./components/CategoryList";
import Link from "next/link";
import ProductList from "./components/ProductList";

export default async function HomeServer() {
  const session = await getServerSession(authOptions);

  return (
    <section className="flex flex-col gap-4">
      <Presentacion />
      <NavbarHome user={session?.user} />
      <FilterProducts />
      <CategoryList />
      <Link href={"products/10"}>
        <img
          src="offer.png"
          loading="lazy"
          alt=""
          className="rounded-lg hover:scale-[1.02] duration-300 ease-linear cursor-pointer"
        />
      </Link>
      <ProductList />
    </section>
  );
}
