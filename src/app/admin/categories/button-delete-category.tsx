"use client";

import { Button } from "@/components/ui/button";
import { deleteCategory } from "@/lib/fetch/categories";
import { toast } from "sonner";

export default function ButtonDeleteCategory({ id }: { id: number }) {
  const handleClick = () => {
    toast("Producto eliminado.");
    deleteCategory(id);
  };

  return (
    <Button variant={"destructive"} onClick={handleClick}>
      Eliminar
    </Button>
  );
}
