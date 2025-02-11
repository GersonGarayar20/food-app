import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async  function DashboardPage() {

  const sesion = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-2xl">Bienvenido al Dashaboard <strong className="text-orange-300">{sesion?.user?.name}!</strong></h1>
    </div>
  );
}
