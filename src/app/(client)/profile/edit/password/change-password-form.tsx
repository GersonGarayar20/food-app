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
import { changeUserPassword } from "@/lib/fetch/users";

const formSchema = z
  .object({
    password: z.string(),
    newPassword: z.string(),
    repeatNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.repeatNewPassword, {
    message: "New passwords must match", // Mensaje de error personalizado
    path: ["repeatNewPassword"], // Especificar la ruta del campo que desencadena el error
  });

export function ChangePasswordForm({ user }: { user: any }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    await changeUserPassword({
      token: "",
      oldPassword: values.password,
      newPassword: values.repeatNewPassword,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nueva contraseña</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repetir contraseña</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Cambiar contraseña
        </Button>
      </form>
    </Form>
  );
}
