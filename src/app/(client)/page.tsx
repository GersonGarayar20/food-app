
import Presentacion from "./presentacion";
import NavbarHome from "./navbar-home";
import { FilterProducts } from "./components/FilterProducts";
import CategoryList from "./components/CategoryList";
import Link from "next/link";
import ProductList from "./components/ProductList";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Permanent_Marker } from "next/font/google";

const PermentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
import Testeo from "../admin/components/testeo";

export default async function HomeServer() {


  return (
    <section className="flex flex-col gap-4">
      <Presentacion />
      <NavbarHome />
      <Testeo/>
      <FilterProducts />
      <CategoryList />
      <ProductList />
      <Link href={"products/10"}>
        <img
          src="offer.png"
          loading="lazy"
          alt=""
          className="rounded-lg hover:scale-[1.02] duration-300 ease-linear cursor-pointer"
        />
      </Link>
      <div className="flex flex-col lg:flex-row   gap-8 my-12 justify-center">
        <figure className="order-2 lg:order-1 grow-0 ">
          <img src="offer_girl.png" alt="" className="w-full  rounded-lg max-w-sm m-auto" />
        </figure>
        <div className=" flex flex-col grow gap-4 mb-8 lg:mb-0 justify-between items-center order-1 lg:order-2">
          <div className=" flex flex-col gap-8">
            <h2 className={`${PermentMarker.className} text-4xl md:text-7xl mb-16   text-primary  text-center `}>
              <p className="text-center">NO ESPERES...</p>
              <p className="text-center">A COMERTE RICO!!</p>

            </h2>
            <p className="max-w-sm m-auto text-lg dark:text-white/70  text-center font-light ">Visítanos hoy mismo y dale a tus papilas gustativas el placer que se merecen.
            </p>
            <p className=" m-auto text-2xl  text-center tracking-wide ">
              ¡Te garantizamos que volverás por más!
            </p>
            <div className="text-center">
              <Button className="m-auto px-16 py-8 rounded-full text-2xl tracking-tighterduration-100 ease-linear transition  hover:scale-105 ">
                <Link href={"/products/10"}>
                  COMPRAR AHORA
                </Link>
              </Button>
            </div>
          </div>
          <p className="text-3xl flex justify-around items-end gap-4"><span>Precio</span> <span className={`${PermentMarker.className} text-5xl text-primary font-bold `}>S/ 20</span> </p>
        </div>
      </div>
      <Footer />

    </section>
  );
}
