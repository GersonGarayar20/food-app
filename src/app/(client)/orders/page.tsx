'use client'
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher";
import useStore from "@/store/useStore";
import { useCartStore } from "@/store/cart";
import { OrderFooter } from "../components/OrderFooter";



export default function OrderPage() {

    const stateCart=useStore(useCartStore,useCartStore.getState)
    const total=stateCart?.totalPrice()
    return (
      <main className="flex flex-col justify-between h-screen">
        <div className="bg-[#f1f1f1] dark:bg-[#050505] w-full flex flex-col px-4 py-4 flex-grow">
          {/* navegacion */}
          <header className="flex justify-between mb-4">
            <nav className="flex gap-x-2 items-center">
              <Button>--</Button>
              <h1>Order Details</h1>
            </nav>
            <div className="flex items-center gap-x-4">
              <Button>:3</Button>
              <ThemeSwitcher />
            </div>
          </header>


          <section className="flex flex-col gap-y-4">
            
              {/* mapear products of car */}
              {stateCart?.cart.map(product=>{
                return(
                  <article key={product.id} className="flex gap-x-4 rounded-3xl bg-white dark:bg-black  px-3 py-4">
                    <div className="w-28">
                      <img src={product.image} alt="" className="rounded-2xl" />
                    </div>
                    <div className="w-full flex flex-col justify-between">
                      <h1 >{product.name}</h1>
                      <div className="flex justify-between items-center">
                        <h2>${product.price}</h2>
                        <div className="flex gap-2 items-center">
                          <Button className="rounded-full size-8" onClick={()=>stateCart.decrementItem(product.id)}>-</Button>
                          <span>{product.count}</span>
                          <Button className="rounded-full size-8" onClick={()=>stateCart.incrementItem(product.id)}>+</Button>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
          </section>
        </div>
              {/* foot */}
        <OrderFooter total={total}/>
      </main>
    );
  }
  