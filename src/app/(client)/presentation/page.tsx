function Presentation() {
    return (
        <div className="h-screen w-full p-4 pt-8">
            <h2 className="text-7xl text-center font-normal mb-8">Bravazo</h2>
            <p className="text-center mb-8">¡Lo buenazo <br /> no tiene precio!</p>
            <div className="mb-8">
                <img src="humburguesa_pequenia.png" alt="" className="w-64 m-auto" />
            </div>
            <div className="m-auto flex flex-col justify-center items-center gap-4">
                <button className="w-64 px-12 py-5 bg-[#f3953e] rounded-full ">Inicio Sesión</button>
                <button className="w-64 px-12 py-5  border-[#f3953e] border-2 rounded-full ">Registrate</button>
            </div>
        </div>
    );
}

export default Presentation;