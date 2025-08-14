import { motion } from "framer-motion";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

const menuButtonAnimations = {
  open: [
    { rotate: 48, y: 0 },
    { opacity: 0 },
    { rotate: -45, y: -5 },
  ],
  closed: [
    { rotate: 0, y: -4 },
    { opacity: 1, y: 0 },
    { rotate: 0, y: 4 },
  ],
};

export default function Header({ menuOpen, onMenuToggle }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      
      {/* Botón hamburguesa animado */}
      <button
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        className="relative w-10 h-8 flex flex-col justify-center items-center md:w-12 md:h-10"
      >
        {menuButtonAnimations.open.map((anim, i) => (
          <motion.span
            key={i}
            className="block w-8 h-[2px] bg-gray-800 rounded-full origin-center md:w-10 md:h-[3px]"
            animate={menuOpen ? anim : menuButtonAnimations.closed[i]}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        ))}
      </button>

      {/* Íconos lupa y bolso */}
      <div className="flex items-center gap-4 md:gap-6">
        <button
          className="text-xl md:text-2xl text-gray-600 hover:text-black transition-colors duration-200"
        >
          <FaSearch style={{ strokeWidth: 0.5 }} />
        </button>
        <button
          className="text-2xl md:text-3xl  hover:text-black transition-colors duration-200"
        >
          <FaShoppingBag />
        </button>
      </div>
    </header>
  );
}
