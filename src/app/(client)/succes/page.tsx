"use client"
import { useWindowSize } from 'react-use'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react';

function Success() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        console.log("se ejecuto")
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(windowSize.width, windowSize.height)
    return (
        <div className="p-8">
            <Confetti
                width={windowSize.width}
                height={windowSize.height}

            />
            <div className="mb-16">
                <h1 className="text-center font-bold text-7xl my-8 ">Bravazo</h1>

            </div>
            <Card className="max-w-md m-auto text-center">
                <CardHeader>
                    <CardTitle>Gracias por tu compra!!</CardTitle>
                    <CardDescription>Esteban Salas</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-light">Estamos muy felices de que hayas encontrado lo que te gusta.</p>
                </CardContent>
                <CardFooter>
                    <Link href={"/"} className="w-full">
                        <Button className="w-full">
                            Seguir comprando
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Success;