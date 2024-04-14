import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteProduct, getProducts } from "@/lib/fetch/products";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ButtonDeleteProduct from "./button-delete-product";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1>Productos</h1>
        <Link className={cn(buttonVariants())} href={"/admin/products/create"}>
          Crear
        </Link>
      </header>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(({ id, name, price, image, category_id }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>
                <img className="aspect-video w-32" src={image} alt={name} />
              </TableCell>
              <TableCell>${price}</TableCell>
              <TableCell>{category_id}</TableCell>
              <TableCell className="flex gap-2">
                <Link
                  href={`/admin/products/edit/${id}`}
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Editar
                </Link>
                <ButtonDeleteProduct id={id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
