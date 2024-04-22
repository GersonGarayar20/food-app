import ArrowBack from "@/components/icons/ArrowBack";
import { authOptions } from "@/lib/auth";
import {
  createFavorite,
  deleteFavorite,
  getFavorites,
} from "@/lib/fetch/favorites";
import { getServerSession } from "next-auth";

export default async function FavoritesPage() {
  const favorites = await getFavorites({ userId: "", token: "" });
  // de la sesion obtengo el userId y el token
  const sesion = await getServerSession(authOptions);

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
          favorites?.map((favorite) => {
            return (
              <article
                key={favorite.id}
                className="flex items-start gap-5 shadow-xl rounded-2xl relative h-32"
              >
                <img
                  src={favorite.image}
                  alt=""
                  className="rounded-2xl w-36 h-32 object-cover"
                />
                <div className="flex flex-col justify-evenly h-full">
                  <h1 className="font-bold text-xl">{favorite.name}</h1>
                  <div className="-mt-5">
                    <p className="overflow-x-hidden w-4/12 lg:w-full opacity-70 text-xs text-ellipsis">
                      {favorite.description}
                    </p>
                    <p className="overflow-x-hidden w-4/12 lg:w-full opacity-70 text-xs text-ellipsis">
                      {favorite.ingredients}
                    </p>
                  </div>
                </div>
                {/* Cambiar logo */}
                <span className="absolute top-2 right-2">logo</span>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
