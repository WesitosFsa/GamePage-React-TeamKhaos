
interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <>
      <nav className="bg-indigo-600 text-white relative z-50">
        <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                id="menu-btn"
                className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <a
                href="#"
                className="hover:text-gray-200 flex items-center space-x-2 ml-4"
              >
                <img
                                
                  src="public/logo.png"
                  alt="logo"
                  className="h-16 w-auto rounded-full"
                
                />
                <span className="font-bold underline underline-offset-4">
                  TEAM KHAOS
                </span>
              </a>
            </div>

            <div className="flex-1 flex items-center justify-center mx-4 sm:mx-8">
              <div className="relative flex items-center w-full">
                <svg
                  className="h-5 w-5 text-gray-200 absolute left-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="font-sans w-full bg-indigo-500 pl-12 pr-4 py-2 rounded-lg text-white text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-gray-200 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 5.158 6 8.583 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0a3 3 0 10-6 0"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-200">
                <img
                  src="https://placehold.co/40x40/ffffff/000000?text=Profile"
                  alt="Perfil"
                  className="h-10 w-auto rounded-full"
                />
              </a>
              <button className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                + Subir Juego
              </button>
            </div>

           
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
