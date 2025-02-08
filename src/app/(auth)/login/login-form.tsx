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

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUserStore } from "@/store/user";

const formSchema = z.object({
  email: z.string().email("Formato de correo electrónico no válido."),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 8 caracteres."),
});

export function LoginForm() {
  const [error, setError] = useState<string | null | undefined>();
  const router = useRouter();
  const { setUser } = useUserStore();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });


async function onSubmit(values: z.infer<typeof formSchema>) {
  
  const res = await signIn("credentials", {
    email: values.email,
    password: values.password,
    redirect: false,
  });

  if (res?.ok) {
    // Obtiene la sesión actual
    const session = await fetch("/api/auth/session").then((res) => res.json());

    // Guarda los datos en Zustand
    if (session?.user) {
      setUser({
        name: session.user.name || "",
        image: session.user.image || "",
        email: session.user.email || "",
      });
    }

    router.push("/");
    router.refresh();
  } else {
    setError(res?.error);
  }
}


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:text-3xl space-y-4 "
      >
        {error && (
          <div className="bg-red-500 text-white rounded px-4 py-2">{error}</div>
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-xl">Correo</FormLabel>
              <FormControl>
                <Input
                  className="lg:text-lg lg:py-8"
                  type="email"
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
              <FormLabel className="lg:text-xl">Contraseña</FormLabel>
              <FormControl>
                <Input
                  className="lg:text-lg lg:py-8"
                  type="password"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full lg:text-xl lg:py-7" type="submit">
          Iniciar Sesion
        </Button>
      </form>
    </Form>
  );
}
