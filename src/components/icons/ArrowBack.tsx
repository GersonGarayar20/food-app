"use client";
import { MoveLeft } from "lucide-react";
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
