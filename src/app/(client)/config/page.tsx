import ArrowBack from "@/components/icons/ArrowBack";
import { ThemeSwitcher } from "@/components/theme-switcher";

function AvatarConfig() {
    return ( 
        <div className="p-4 pt-8">
             <div>
                <ArrowBack/>
                <h2 className="text-3xl text-center mb-8">Config</h2>
             </div>
             <h3 className="text-xl mb-4">opciones</h3>
             <div className="flex gap-4 items-center justify-between">
                <li>Cambiar color de fondo</li>
                <ThemeSwitcher/>
             </div>
        </div>
     );
}

export default AvatarConfig;