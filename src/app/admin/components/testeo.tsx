"use client"
import { useUserStore } from "@/store/user";


export default function Testeo() {
  const data= useUserStore();
 console.log({data})
  return (
    <div className="p-4">
      {/* <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-500">{email}</p>
      <img src={image || "/default-avatar.png"} alt="Foto de perfil" className="w-16 h-16 rounded-full" /> */}
    </div>
  );
}