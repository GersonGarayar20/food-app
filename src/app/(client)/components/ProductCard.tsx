/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface Props {
  id?:number
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
    <Link href={`/products/${id}`} className="aspect-video">
      <img
        className="aspect-[3/2] object-cover rounded-3xl"
        src={image}
        alt={name}
      />
      <h4>{name}</h4>
      <p>${price}</p>
    </Link>
  );
}
