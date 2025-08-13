import { motion } from "framer-motion";

export default function AnimacionFondo() {
  return (
    <>
      {/* Círculo rojo brillante */}
      <motion.div
        className="absolute w-96 h-96 rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(255,50,50,0.9), rgba(139,0,0,0.5))",
          filter: "blur(50px)"
        }}
        animate={{ 
          y: [0, -80, 0], 
          scale: [1, 1.15, 1], 
          rotate: [0, 40, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Círculo negro con efecto profundo */}
      <motion.div
        className="absolute w-[34rem] h-[34rem] rounded-full -z-20"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.85), rgba(50,50,50,0.4))",
          filter: "blur(60px)"
        }}
        animate={{ 
          x: [0, 70, -70, 0], 
          y: [0, 40, -40, 0], 
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Círculo extra con parpadeo */}
      <motion.div
        className="absolute w-72 h-72 rounded-full -z-30"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.15), rgba(255,0,0,0.08))",
          filter: "blur(80px)"
        }}
        animate={{ 
          opacity: [0.3, 0.8, 0.3], 
          scale: [1, 1.25, 1], 
          x: [0, -60, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
