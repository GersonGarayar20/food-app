import { getServerSession } from "next-auth";
import CategoriesCreateForm from "./categories-create-form";
import { authOptions } from "@/lib/auth";

export default async function page() {

  const session=await getServerSession(authOptions)

  return (
    <>
      <h1 className="text-2xl">Crear una categoria</h1>
      <CategoriesCreateForm token={session.user.accessToken}/>
    </>
  );
}
