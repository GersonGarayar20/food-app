import { authOptions } from "@/lib/auth";
import FavoritesPage from "./page.client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function FavoriteServer() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.accessToken) return redirect("/login");
  return <FavoritesPage token={session.user.accessToken} />;
}
