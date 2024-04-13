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
import { getCategories } from "@/lib/api/categories";

export default async function AdminCategoriesPage() {
  const categories = await getCategories();

  console.log(categories.data);

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1>products</h1>
        <Link
          className={cn(buttonVariants())}
          href={"/admin/categories/create"}
        >
          Crear
        </Link>
      </header>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Imagen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories?.data?.map(({ id, name, image }: any) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
