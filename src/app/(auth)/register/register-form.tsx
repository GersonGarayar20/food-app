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

import { createUser } from "@/lib/fetch/users";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre de usuario debe tener al menos 2 caracteres."),
  email: z.string().email("Formato de correo electrónico no válido."),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres."),
  phone: z.string(),
  address: z.string(),
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await createUser(values);
    console.log(res);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-lg">Nombre</FormLabel>
              <FormControl>
                <Input className="lg:text-lg lg:py-6" placeholder="Escribe tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-lg">Correo</FormLabel>
              <FormControl>
                <Input
                  className="lg:text-lg lg:py-6" type="email"
                  placeholder="tucorreo@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-lg">Constraseña</FormLabel>
              <FormControl>
                <Input className="lg:text-lg lg:py-6" type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-lg">Dirección</FormLabel>
              <FormControl>
                <Input
                  className="lg:text-lg lg:py-6" placeholder="Jirón de la Unión 1032, Cercado de Lima, Lima, Perú"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-lg">Teléfono</FormLabel>
              <FormControl>
                <Input className="lg:text-lg lg:py-6" placeholder="987654321" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full lg:text-xl lg:py-7" type="submit">
          Registrarse
        </Button>
      </form>
    </Form>
  );
}
