"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateProduct } from "@/lib/fetch/products";
import { CategoryI, ProductI } from "@/types";

const formSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  price: z.coerce.number().positive(),
  category_id: z.coerce.number().positive(),
});

export default function ProductEditForm({
  product,
  categories,
}: {
  product: ProductI;
  categories: CategoryI[];
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: product,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { id, ...rest } = values;
    const a =await updateProduct(id, rest);
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categorias</FormLabel>
              <Select
                onValueChange={field.onChange}
                /* defaultValue={field.value.toString()} */
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories?.map(({ id, name }: any) => (
                    <SelectItem key={id} value={id.toString()}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
