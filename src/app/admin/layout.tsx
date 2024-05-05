import React from "react";
import Menu from "./components/menu";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex gap-4">
      <div className="w-60">
        <Menu />
      </div>
      <main className="flex-1 p-4 overflow-y-scroll">{children}</main>
    </div>
  );
}
