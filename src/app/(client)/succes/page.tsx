"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Confetti from "react-confetti";

interface WindowSize {
  width: number;
  height: number;
}

const Success: React.FC = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="p-8">
      <Confetti width={windowSize.width} height={windowSize.height} />
      <div className="mb-16">
        <h1 className="text-center font-bold text-7xl my-8">Bravazo</h1>
      </div>
      <Card className="max-w-md m-auto text-center">
        <CardHeader>
          <CardTitle>Gracias por tu compra!!</CardTitle>
          <CardDescription>Esteban Salas</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-light">
            Estamos muy felices de que hayas encontrado lo que te gusta.
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/" className="w-full">
            <Button className="w-full">Seguir comprando</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Success;
