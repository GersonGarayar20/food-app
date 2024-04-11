import React from "react";

interface Props {
  category_id: number;
  name: string;
  image: string;
  price: number;
}

export default function ProductCard({
  category_id,
  name,
  image,
  price,
}: Props) {
  return (
    <article key={category_id}>
      <img
        className="aspect-[3/2] object-cover rounded-3xl"
        src={image}
        alt={name}
      />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
}
