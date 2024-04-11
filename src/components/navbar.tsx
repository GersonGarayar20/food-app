import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./theme-switcher";

export default function Navbar() {
  return (
    <div>
      <header className="flex justify-between p-4">
        <Link href={"/"}>Home</Link>
        <nav></nav>
        <ThemeSwitcher />
      </header>
    </div>
  );
}
