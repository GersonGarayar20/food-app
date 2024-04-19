import ArrowBack from "@/components/icons/ArrowBack"

async function Page() {

    return (
        <div className="p-4">
            <ArrowBack />
            <div className="flex  justify-between mt-8">
                <h2 className="text-3xl font-bold mb-8">Favoritos</h2>
                <div className="w-8">
                </div>
            </div>
            <div>
                No hay Favoritos
            </div>
        </div>
    );
}

export default Page