import { Heart, Home, Settings } from "lucide-react";
import { Session } from "next-auth";
import Link from "next/link";
import Avatar from "react-avatar";

interface Props{
  session:Session
}

function NavbarClient({session}:Props) {
  console.log({session})
  return (
    <div className="hidden lg:block  grow  h-full min-h-screen min-w-[250px] max-w-[300px] ">
      <figure className="mb-16 flex flex-col justify-center items-center mt-12 gap-y-2">
        
        
          {session?.user?.image && <img
          src={session?.user?.image||"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f5/f5dc208cabba29fa25fdceb3d438db71ec70560e_full.jpg"}
          className="aspect-square w-20 bg-black rounded-full"
          alt=""
        />}
          {!(session?.user?.image) &&  <Avatar name={session?.user?.name!} size={"60"} round={true}  fgColor='black' color='#ffff' />}


        <figcaption >{session?.user?.name || ""}</figcaption>
      </figure>
      <nav className="pl-8">
        <Link href={"/"} className="">
          <div className="flex justify-star  items-center gap-4 mb-6">
            <div className="rounded-full bg-neutral-200 dark:bg-[#121116] p-4 ">
              <Home />
            </div>
            <span>Home</span>
          </div>
        </Link>
        <Link href={"/favorites"}>
          <div className="flex justify-star   items-center gap-4 mb-6">
            <div className="rounded-full bg-neutral-200 dark:bg-[#121116] p-4 ">
              <Heart />
            </div>
            <span>Favoritos</span>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex justify-star  items-center gap-4 mb-6">
            <div className="rounded-full bg-neutral-200 dark:bg-[#121116] p-4 ">
              <Settings />
            </div>
            <span>Configuración</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default NavbarClient;
