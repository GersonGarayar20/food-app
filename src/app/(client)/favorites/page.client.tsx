"use client";
import ArrowBack from "@/components/icons/ArrowBack";
import { getFavorites } from "@/lib/fetch/favorites";
import { useEffect } from "react";
import { FavoriteCard } from "../components/FavoriteCard";
import { useFavorite } from "../hook/useFavorite";

export default function FavoritesPage({ token }: { token: string }) {
  const { favorites, setFavorites } = useFavorite();

  useEffect(() => {
    getFavorites({ token }).then((res) => setFavorites(res));
  }, []);

  if (!favorites)
    return <h1 className="text-center">Error al traer los favoritos</h1>;

  return (
    <div className="p-4">
      <ArrowBack />
      <div className="flex justify-center  mt-8">
        <h2 className="text-3xl font-bold mb-8 ">Favoritos</h2>
      </div>

      <div className="flex flex-col gap-x-10 gap-y-5">
        {favorites?.length == 0 ? (
          <h1 className="text-center">No hay favoritos</h1>
        ) : (
          favorites?.map((favorite, i) => {
            return <FavoriteCard key={i} product={favorite} token={token} />;
          })
        )}
      </div>
    </div>
  );
}
