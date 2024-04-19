"use client"
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
function ArrowBack() {
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }

    return (
        <Button onClick={() => handleBack()} className="bg-transparent text-black dark:text-white"><MoveLeft /></Button>
    );
}

export default ArrowBack;