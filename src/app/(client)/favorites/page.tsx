import { authOptions } from "@/lib/auth";
import FavoritesPage from "./page.client";
import { getServerSession } from "next-auth";

export default async function FavoriteServer() {
    const session = await getServerSession(authOptions);
    return(
        <FavoritesPage token={session.user.accessToken}/>
    )
}