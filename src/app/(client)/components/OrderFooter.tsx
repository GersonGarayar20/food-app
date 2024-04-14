import { Button } from "@/components/ui/button";
import Link from "next/link";

export function OrderFooter({total}:{total:number}){
    return(
        <div className="bg-[#fbfbfb] dark:bg-black py-2 flex flex-col gap-y-4 min-h-28 px-8">
          <div className="w-full flex justify-between font-bold text-lg">
            <p className="font-bold">Total</p>
            <span>${total}</span> 
          </div>
          <div className="flex justify-between w-full mx-auto">
             <Button className="rounded-xl" variant="outline" size="icon">:3</Button>
             <Link href={"/orders"}>
             <Button className="rounded-3xl px-12">Proceed to Pay</Button>
             </Link>
          </div>
      </div>
    )
}