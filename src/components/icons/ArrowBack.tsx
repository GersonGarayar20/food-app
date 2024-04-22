"use client";
import { MoveLeft, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
function ArrowBack() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <Button
      className="rounded-full"
      variant={"ghost"}
      size={"icon"}
      onClick={() => handleBack()}
    >
      <MoveLeft />
    </Button>
  );
}

export default ArrowBack;

export function CartNavigate() {
  const router = useRouter();
  const handleNavigation=()=>[
    router.push("/orders")
  ]


  return(
    <Button
      className="rounded-full"
      variant={"ghost"}
      size={"icon"}
      onClick={() => handleNavigation()}
    >
      <ShoppingCart color="black" />
    </Button>
  )
}


