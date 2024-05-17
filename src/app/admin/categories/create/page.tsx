import { getServerSession } from "next-auth";
import CategoriesCreateForm from "./categories-create-form";
import { authOptions } from "@/lib/auth";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) return <div>no has iniciado sesion</div>;

  return (
    <div>
      <h1 className="text-2xl">Crear una categoria</h1>
      <CategoriesCreateForm token={session.user.accessToken} />
    </div>
  );
}
