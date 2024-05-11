import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getCategories } from "@/lib/fetch/categories";
import ButtonDeleteCategory from "./button-delete-category";

export default async function AdminCategoriesPage() {
  const categories = await getCategories();
  
  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl">Categorias</h1>
        <Link
          className={cn(buttonVariants())}
          href={"/admin/categories/create"}
        >
          Crear
        </Link>
      </header>

      <Table>
        <TableHeader className="sticky top-0 bg-white dark:bg-black">
          <TableRow>
            <TableHead className="w-[40px]">Id</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories?.map(({ id, name, image }: any) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>
                <img className="aspect-square w-16" src={image} alt={name} />
              </TableCell>
              <TableCell className="flex gap-2">
                <Link
                  href={`/admin/categories/edit/${id}`}
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Editar
                </Link>
                <ButtonDeleteCategory id={id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
