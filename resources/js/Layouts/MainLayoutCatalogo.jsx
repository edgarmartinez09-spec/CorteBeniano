import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/Components/Catalogo/Header";
import SidebarMenu from "@/Components/Catalogo/SideBarMenu";

export default function MainLayout({ children, categorias }) {
  const [menuOpen, setMenuOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const sidebarWidth = "w-64 md:w-80"; // Ancho del sidebar

  // Actualizar ancho de la ventana para animación
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (

    <div className="relative flex">
      {/* Sidebar */}
      <SidebarMenu
        menuOpen={menuOpen}
        onMenuClose={() => setMenuOpen(false)}
        categorias={categorias}
        widthClass={sidebarWidth}
      />

      <div className="flex-1 flex flex-col mt-16 min-h-screen">
        {/* Header con línea roja, rectángulo negro, imagen redonda y rectángulo blanco */}
        <div className="w-full flex flex-col items-center">

          {/* Línea roja de descuento */}
          <div className="w-full bg-red-700 text-white text-center py-2 font-bold">
            10% de descuento en carne Brangus
          </div>

          {/* Rectángulo negro con imagen redonda */}
          <div className="w-full bg-black flex justify-center items-center py-10 relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white -mt-2">
              <img
                src="https://res.cloudinary.com/dnbklbswg/image/upload/v1755142110/preview_i5uu58.jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Rectángulo blanco con opciones */}
          <div className="w-full bg-white flex justify-center py-4 shadow-md">
            <div className="flex space-x-6 items-center text-gray-800 font-semibold">
              <a href="/" className="hover:text-red-700 transition">Inicio</a>
              <button className="flex items-center hover:text-red-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
                </svg>
                Buscar
              </button>
            </div>
          </div>

        </div>


        {/* Header  */}
        <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} />
        {/* Contenido principal */}
        <motion.main
          className="pt-4 md:pt-10 p-4 md:p-10"
          animate={{
            marginLeft: menuOpen ? (windowWidth >= 768 ? 320 : 256) : 0,
          }}
          transition={{ type: "tween", duration: 0.4 }}
        >
          {children ? (
            children
          ) : (
            <>
              <h1 className="text-2xl pt-10 font-bold">Contenido principal</h1>
              <p>Aquí va tu contenido...</p>
            </>
          )}
        </motion.main>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/59165359695"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
