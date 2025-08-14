import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/Components/Carrito/Header";
import SidebarMenu from "@/Components/Carrito/SidebarMenu";

export default function MainLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(true);
  const categorias = ["Categoría 1", "Categoría 2", "Categoría 3", "Categoría 4"];

  // Ancho del sidebar según la pantalla
  const sidebarWidth = "w-64 md:w-80"; // 16rem en móvil, 20rem en desktop

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <SidebarMenu
        menuOpen={menuOpen}
        onMenuClose={() => setMenuOpen(false)}
        categorias={categorias}
        widthClass={sidebarWidth}
      />

      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <Header
          menuOpen={menuOpen}
          onMenuToggle={() => setMenuOpen(!menuOpen)}
        />

        {/* Contenido principal */}
        <motion.main
          className="pt-16 p-4 md:p-10"
          animate={{
            marginLeft: menuOpen ? (window.innerWidth >= 768 ? 320 : 256) : 0,
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
      </div>
    </div>
  );
}
