import Link from "next/link";
import React from "react";
import { RegisterForm } from "./register-form";

export default function RegisterPage() {
  return (
    <div className="md:w-[400px] mx-auto p-8 flex flex-col gap-8">
      <h1 className="text-2xl">Registrarte</h1>
      <RegisterForm />
      <p>
        ¿Tienes una cuenta?{" "}
        <Link className="text-blue-500" href={"/login"}>
          Inicia sesion
        </Link>
      </p>
    </div>
  );
}
