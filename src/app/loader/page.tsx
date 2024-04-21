

function Loader() {
    return (
        <div className="inset-0 w-full h-screen bg-loader flex flex-col justify-center items-center ">
            <h2 className="text-3xl animate-pulse font-bold  mb-8 font-merienda ">Bravazo</h2>
            <div className="border-4 border-black/80 w-14 h-14 border-l-white rounded-full animate-spin duration-700">

            </div>
        </div>
    );
}

export default Loader;