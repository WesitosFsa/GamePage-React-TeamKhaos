function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Bienvenido a Team Khaos 
      </h1>

      <p className="text-gray-700 mb-6">
        Esta es la página de inicio. Aquí podrás explorar juegos nuevos,
        ver los más populares y subir tus propias creaciones.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-500">Juego 1</h2>
          <p className="text-gray-600 mt-2">
            Descripción breve del juego 1.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-500">Juego 2</h2>
          <p className="text-gray-600 mt-2">
            Descripción breve del juego 2.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-500">Juego 3</h2>
          <p className="text-gray-600 mt-2">
            Descripción breve del juego 3.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
