import React from "react";
import { LoginForm } from "./login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <h1>Iniciar Sesion</h1>
      <LoginForm />
      <p>
        si no tienes cuenta
        <Link href={"/register"}>Registrarte</Link>
      </p>
    </div>
  );
}
