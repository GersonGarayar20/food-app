import ArrowBack from "@/components/icons/ArrowBack";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

function Profile() {
   return (
      <div className="p-4 pt-8 ">
         <div className="flex justify-between">
            <ArrowBack />
            <h2 className="text-3xl font-bold text-center mb-8">Perfil</h2>
            <div className="w-10"></div>
         </div>
         <div className="text-center">
            <img src="https://randomuser.me/api/portraits/men/62.jpg" className="rounded-full w-30 h-30 m-auto border-[1px] border-slate-300 mb-4" alt="" />
            <h3 className="font-bold mb-2">Lucas</h3>
            <h4 className="opacity-70 ">lucas@gmail.com</h4>
         </div>
         <div className="text-center my-6">
            <Button className="rounded-full  px-12 py-4 ">
               Editar Perfil
            </Button>
         </div>
         <div className=" w-full p-4 flex flex-col gap-6">
            <div className="flex gap-4 items-center justify-between rounded-full bg-slate-300 p-3">
               <p>Cambiar de modo</p>
               <ThemeSwitcher />
            </div>
            <div className="flex gap-4 items-center">
               <LogOut size={"40"} className="bg-slate-400 p-2 rounded-full "/>
               <p>Cerrar sesión</p>
            </div>

         </div>
      </div>
   );
}

export default Profile;