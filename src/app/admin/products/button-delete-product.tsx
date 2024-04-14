"use client";

import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/lib/fetch/products";
import React from "react";

export default function ButtonDeleteProduct({ id }: { id: number }) {
  return (
    <Button
      variant={"destructive"}
      onClick={() => {
        deleteProduct(id);
      }}
    >
      Eliminar
    </Button>
  );
}
