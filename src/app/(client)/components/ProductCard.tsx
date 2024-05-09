/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

interface Props {
  id?: number
  category_id: number;
  name: string;
  image: string;
  price: number;
  description:string
}

export default function ProductCard({
  category_id,
  description,
  id,
  name,
  image,
  price,
}: Props) {
  return (
    <Link href={`/products/${id}`} className="h-full mt-20" >
      <Card className="p-2 h-full flex flex-col justify-evenly items-center dark:bg-[#121116] bg-black/10 border-none ">
          <img
              className={`aspect-[3/2] object-contain rounded-md lg:-mt-24 -mt-16 `}
              src={image}
              alt={name}
              id="products_translate"
              />
        <article className="w-10/12 ">
          <div className="flex flex-col justify-between gap-2">
            <h4 className="lg:text-lg">{name}</h4>
            <p className="text-gray-500">{description}</p>
            <p className="lg:text-xl dark:text-white text-black">${price}</p>
          </div>
        </article>
      </Card>
    </Link>
  );
}
