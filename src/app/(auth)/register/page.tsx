import Link from "next/link";
import React from "react";
import { RegisterForm } from "./register-form";

export default function RegisterPage() {
  return (
    <div>
      <h1>Registrarte</h1>
      <RegisterForm />
      <p>
        ya tienes una cuenta
        <Link href={"/login"}>iniciar sesion</Link>
      </p>
    </div>
  );
}
