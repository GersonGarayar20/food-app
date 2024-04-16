"use client";

import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/lib/fetch/products";
import { toast } from "sonner";

export default function ButtonDeleteCategory({ id }: { id: number }) {
  const handleClick = () => {
    toast("Producto eliminado.");
    deleteProduct(id);
  };

  return (
    <Button variant={"destructive"} onClick={handleClick}>
      Eliminar
    </Button>
  );
}
