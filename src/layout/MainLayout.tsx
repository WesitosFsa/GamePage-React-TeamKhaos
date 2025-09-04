import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="flex flex-1 relative">
                                   
                {/* Overlay solo para cerrar sidebar */}
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-30"
                    ></div>
                )}

                {/* Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-gray-200 shadow-lg p-6 transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >   

                        <br />
                        <br />
                        <br />

                    <h2 className="text-lg font-bold mb-6 text-indigo-600">Ver</h2>
                    <ul className="space-y-4 text-gray-700">
                        <li><a href="#" className="hover:text-indigo-600">Categorías</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Populares</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Nuevos</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Mi Perfil</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Configuración</a></li>
                    </ul>
                </div>

                {/* Contenido principal con filtros */}
                <div
                    className={`flex-1 transition-all duration-300 ease-in-out relative ${isOpen ? "filter grayscale blur-sm" : ""
                        }`}
                >
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default MainLayout;
