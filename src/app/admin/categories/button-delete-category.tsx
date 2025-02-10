"use client";

import { Button } from "@/components/ui/button";
import { deleteCategory } from "@/lib/fetch/categories";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

export default function ButtonDeleteCategory({ id, token }: { id: number, token: string }) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: () => deleteCategory(id, token),
    onSuccess: () => {
      queryClient.invalidateQueries("categoryAll");
    },
  });

  return (
    <Button variant={"destructive"} onClick={()=>mutation.mutate()}>
      Eliminar
    </Button>
  );
}
