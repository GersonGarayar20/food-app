import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProducts } from "@/lib/fetch/products";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function AdminProductsPage() {
  const products = await getProducts();

  console.log(products);

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1>products</h1>
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
            <TableHead className="text-right">Precio</TableHead>
            <TableHead className="text-right">Categoria</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
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
              <TableCell className="text-right">{category_id}</TableCell>
              <TableCell className="flex gap-2">
                <Button variant={"secondary"}>Editar</Button>
                <Button variant={"destructive"}>Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
