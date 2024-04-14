import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Productos",
    link: "/admin/products",
  },
  {
    title: "Categories",
    link: "/admin/categories",
  },
];

export default function Menu() {
  return (
    <div className="border p-4">
      <nav className="flex flex-col gap-4">
        <Link href={"/admin"}>Dashboard</Link>
        {links.map(({ title, link }) => (
          <Link key={link} href={link}>
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
