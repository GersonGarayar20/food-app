import ArrowBack from "@/components/icons/ArrowBack";
import React from "react";

export default function BarraNavegacion({ title }: { title: string }) {
  return (
    <header className="py-4 flex items-center">
      <ArrowBack />
      <h1 className="flex-1 text-2xl text-center pr-10">{title}</h1>
    </header>
  );
}
