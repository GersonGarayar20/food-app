import { ProductI } from "@/types";
import { HeartFilled } from "@/app/ui/icons/heartFilled";
import { Heart } from "lucide-react";
import { useFavorite } from "../hook/useFavorite";

export function FavoriteCard({
  product,
  token,
}: {
  product: ProductI;
  token: string;
}) {
  const { favorites, handleFavorite, handleUnFavorite } = useFavorite();

  if (!favorites) return <>Error in favorites products</>;
  const isFavorite = favorites.some((favorite) => favorite?.id == product?.id);

  return (
    <article
      key={product?.id}
      className="flex items-start gap-5 dark:bg-[#121116]  bg-[#f7f0ee]  rounded-2xl relative h-32"
    >
      <img
        src={product?.image}
        alt=""
        className="rounded-2xl w-36 h-32 object-contain"
      />
      <div className="flex flex-col justify-evenly gap-y-7 h-full pr-8">
        <h1 className="font-bold text-lg">{product?.name}</h1>
        <div className="">
          <p className="overflow-x-hidden lg:w-full opacity-70 text-xs w-[95%] text-ellipsis">
            {product?.description}
          </p>
          <p className="overflow-x-hidden lg:w-full opacity-70 text-xs w-[95%] text-ellipsis">
            {product?.ingredients}
          </p>
        </div>
      </div>
      {/* Cambiar logo */}
      <button
        className="absolute top-2 right-2"
        onClick={() =>
          isFavorite
            ? handleUnFavorite({ product, token })
            : handleFavorite({ product, token })
        }
      >
        {isFavorite ? <HeartFilled /> : <Heart />}
      </button>
    </article>
  );
}
