"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function ButtonCerrarSesion() {
  return (
    <Button
      variant={"ghost"}
      className="py-6 flex justify-between items-center rounded-full"
      onClick={() => {
        signOut();
      }}
    >
      Cerrar sesión
      <LogOut />
    </Button>
  );
}
