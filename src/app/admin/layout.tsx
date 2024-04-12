import React from "react";
import Menu from "./components/menu";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Menu />
      <main className="p-4">{children}</main>
    </div>
  );
}
