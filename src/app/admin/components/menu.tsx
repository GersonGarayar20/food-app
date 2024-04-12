import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Productos",
    link: "/admin/products",
  },
];

export default function Menu() {
  return (
    <div className="border p-4">
      <Link href={"/admin"}>Dashboard</Link>
      <nav className="flex flex-col gap-4">
        {links.map(({ title, link }) => (
          <Link key={link} href={link}>
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
