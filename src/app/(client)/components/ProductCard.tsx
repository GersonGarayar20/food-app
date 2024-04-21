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
}

export default function ProductCard({
  category_id,
  id,
  name,
  image,
  price,
}: Props) {
  return (
    <Link href={`/products/${id}`} className="h-full">
      <Card className="p-2 h-full flex flex-col gap-1 justify-between">
        <div>
          <img
            className="aspect-[3/2] object-cover rounded-md pb-1"
            src={image}
            alt={name}
          />
          <h4 className="mb-3">{name}</h4>
        </div>
        <p className=" bottom-0">${price}</p>
      </Card>
    </Link>
  );
}
