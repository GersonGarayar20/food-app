"use client";

import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/lib/fetch/products";
import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";

export default function ButtonDeleteProduct({ id }: { id: number }) {
  const { data: session } = useSession();

  const handleClick = () => {
    toast("Producto eliminado.");
    deleteProduct(id,session?.user?.accessToken!);
  };

  return (
    <Button variant={"destructive"} onClick={handleClick}>
      Eliminar
    </Button>
  );
}
