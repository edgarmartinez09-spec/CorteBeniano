import { motion } from "framer-motion";

export default function AnimacionFondo() {
  return (
    <>
      {/* Círculo rojo brillante */}
      <motion.div
        className="absolute w-64 h-64 rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(255,50,50,0.8), rgba(139,0,0,0.4))",
          filter: "blur(25px)"
        }}
        animate={{ 
          y: [0, -40, 0], 
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Círculo negro profundo */}
      <motion.div
        className="absolute w-80 h-80 rounded-full -z-20"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.7), rgba(50,50,50,0.3))",
          filter: "blur(30px)"
        }}
        animate={{ 
          x: [0, 40, -40, 0], 
          y: [0, 20, -20, 0], 
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Círculo pequeño parpadeante */}
      <motion.div
        className="absolute w-48 h-48 rounded-full -z-30"
        style={{
          background: "radial-gradient(circle, rgba(255,0,0,0.1), rgba(255,255,255,0.05))",
          filter: "blur(20px)"
        }}
        animate={{ 
          opacity: [0.3, 0.7, 0.3], 
          scale: [1, 1.15, 1],
          x: [0, -30, 0],
          y: [0, -25, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
