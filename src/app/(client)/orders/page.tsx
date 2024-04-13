import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";



export default function OrderPage() {
    return (
      <main className="flex flex-col justify-between h-[88vh]">
        <div className="bg-[#f1f1f1] w-full flex flex-col px-4 py-4 flex-grow">
          <section className="flex flex-col gap-y-4">
            <div className="flex gap-x-4 rounded-3xl bg-white dark:bg-black  px-3 py-4" >
              <div className="w-28"><img src="https://d31npzejelj8v1.cloudfront.net/media/recipemanager/recipe/1687289598_doble-carne.jpg" alt="" className="rounded-2xl" /></div>
              <div className="w-full flex flex-col justify-between">
                <h1 >here, you write your title</h1>
                <div className="flex justify-between items-center">
                  <h2>$20</h2>
                  <div className="flex gap-2 items-center">
                    <Button className="rounded-full size-8">-</Button>
                    <span>1</span>
                    <Button className="rounded-full size-8">+</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 rounded-3xl bg-white dark:bg-black   px-3 py-4 gap-y-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" className="bg-[#f7f7f7]" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 rounded-3xl bg-white  dark:bg-black  px-3 py-4 gap-y-4">
              <Label htmlFor="email">addres</Label>
              <Input type="email" id="email" placeholder="address" className="bg-[#f7f7f7]"/>
            </div>
          </section>
        </div>
        <div className="bg-[#fbfbfb] dark:bg-black py-2 flex flex-col ga-y-4 min-h-40 px-4">
          <div className="border-b-[1px] w-full mx-auto border-black flex flex-col gap-y-1 pb-2">
            <div className="w-full flex justify-between">
              <p>subtotal</p>
              <span>20</span>
            </div>
            <div className="w-full flex justify-between">
              <p>Delivery</p>
              <span>20</span>
            </div>
          </div>
          <div className="w-full flex justify-between py-4">
            <p>Total</p>
            <span>$20</span>
          </div>
          <div className="flex justify-between w-full mx-auto">
             <Button className="rounded-xl" variant="outline" size="icon">:3</Button>
             <Button className="rounded-3xl px-12">Proceed to Pay</Button>
          </div>
        </div>
      </main>
    );
  }
  