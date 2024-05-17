import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Success: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-16">
        <h1 className="text-center font-bold text-7xl my-8">Bravazo</h1>
      </div>
      <Card className="max-w-md m-auto text-center">
        <CardHeader>
          <CardTitle>Gracias por tu compra!!</CardTitle>
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
