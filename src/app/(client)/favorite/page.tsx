import ArrowBack from "@/components/icons/ArrowBack"
import { getFavorites } from "@/lib/fetch/favorite";

async function Page() {

    const favorites= await getFavorites({userid:3})

    return (
        <div className="p-4">
            <ArrowBack />
            <div className="flex justify-center  mt-8">
                <h2 className="text-3xl font-bold mb-8 ">Favoritos</h2>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-5 w-full">
                {favorites?.map(favorite=>{
                    return(
                        <article key={favorite.id} className="flex items-start gap-5 shadow-xl rounded-2xl relative h-32" >
                            <img src={favorite.image} alt="" className="rounded-2xl w-36 h-32 object-cover"/>
                            <div className="flex flex-col justify-evenly h-full">
                                <h1 className="font-bold text-xl">{favorite.name}</h1>
                                <div className="-mt-5">
                                    <p className="overflow-x-hidden w-4/12 lg:w-full opacity-70 text-xs text-ellipsis">{favorite.description}</p>
                                    <p className="overflow-x-hidden w-4/12 lg:w-full opacity-70 text-xs text-ellipsis">{favorite.ingredients}</p>
                                </div>
                            </div>
                            {/* Cambiar logo */}
                            <span className="absolute top-2 right-2">logo </span>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Page



/* {
    "error": false,
    "data": {
        "id": 4,
        "createdAt": "2024-04-19T15:52:07.785Z",
        "updatedAt": "2024-04-19T15:52:07.785Z",
        "name": "keury",
        "image": "keury.png",
        "address": "San Luis",
        "phone": "927859435",
        "email": "keury@gmail.com",
        "password": "12345"
    },
    "message": "created client"
} */