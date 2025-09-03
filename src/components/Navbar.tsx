

function Navbar() {
    return (
        <>
            <nav className="bg-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                <div className="flex items-center">
                    <a href="#">
                        <img src="public/logo.png" alt="Logo de la página" className="h-16 w-auto" />
                    </a>
                </div>

                <div className="w-1/2 flex-1 flex items-center justify-center">
                    <div className="relative flex items-center w-full max-w-md mx-auto">
                        <svg className="h-5 w-5 text-white absolute left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <input type="text" placeholder="Buscar..." className="font-sans w-full bg-indigo-400 pl-12 pr-4 py-2 rounded-sm text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white" />
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <a href="#" className="hover:text-gray-200 flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 5.158 6 8.583 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0a3 3 0 10-6 0"></path>
                        </svg>
                    </a>

                    <a href="#" className="hover:text-gray-200 flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM14.5 5.5a1 1 0 10-2 0v1a1 1 0 102 0V5.5zM17 9a1 1 0 100-2h-1a1 1 0 100 2h1zM14.5 12.5a1 1 0 10-2 0v1a1 1 0 102 0v-1zM11 15a1 1 0 10-2 0v1a1 1 0 102 0v-1zM6.5 12.5a1 1 0 10-2 0v1a1 1 0 102 0v-1zM4 9a1 1 0 100-2H3a1 1 0 100 2h1zM6.5 5.5a1 1 0 10-2 0v1a1 1 0 102 0V5.5zM17 10a7 7 0 11-14 0 7 7 0 0114 0zM12 10a2 2 0 10-4 0 2 2 0 004 0z"></path>
                        </svg>
                    </a>

                    <button className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                        Subir
                    </button>
                </div>

                <div className="md:hidden flex items-center">
                    <button id="menu-btn" className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    </>)
}

export default Navbar;