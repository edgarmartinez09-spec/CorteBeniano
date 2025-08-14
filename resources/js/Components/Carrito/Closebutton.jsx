import { motion } from "framer-motion";

export default function CloseButton({ onClick, menuOpen }) {
  return (
    <motion.button
      onClick={onClick}
      className="relative w-8 h-8 flex justify-center items-center"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      {/* Línea diagonal 1 */}
      <motion.span
        animate={{
          rotate: menuOpen ? 45 : 0,
          y: 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute w-6 h-1 bg-gray-800 rounded-full origin-center"
      ></motion.span>

      {/* Línea diagonal 2 */}
      <motion.span
        animate={{
          rotate: menuOpen ? -45 : 0,
          y: 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute w-6 h-1 bg-gray-800 rounded-full origin-center"
      ></motion.span>
    </motion.button>
  );
}
