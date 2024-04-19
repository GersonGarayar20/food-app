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
import { updateUser } from "@/lib/fetch/users";

const formSchema = z.object({
  name: z.string(),
  password: z.string(),
  image: z.string(),
});

export function EditUserForm({ user }: { user: any }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name,
      image: user.image,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await updateUser(user.id, values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <img
          className="size-32 rounded-full border"
          src={form.getValues("image")}
          alt={form.getValues("name")}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button className="w-full" type="submit">
          Guardar Cambios
        </Button>
      </form>
    </Form>
  );
}
