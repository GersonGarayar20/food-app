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
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ButtonDeleteProduct from "./button-delete-product";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="text-2xl">Productos</h1>
        <Link className={cn(buttonVariants())} href={"/admin/products/create"}>
          Crear
        </Link>
      </header>

      <Table>
        <TableHeader className="sticky top-0 bg-white dark:bg-black">
          <TableRow>
            <TableHead className="w-[40px]">Id</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map(({ id, name, price, image, category_id }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>
                <img
                  className="aspect-video object-contain w-32"
                  src={image}
                  alt={name}
                />
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
