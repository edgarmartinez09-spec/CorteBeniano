import { motion } from "framer-motion";

const colores = ["#FF0000", "#8B0000", "#2B0000"]; // rojo, vino, casi negro

// Generar 30 bolitas con propiedades aleatorias
const bolitas = Array.from({ length: 30 }).map(() => ({
  size: 20 + Math.random() * 40, // tamaño 20px a 60px
  color: colores[Math.floor(Math.random() * colores.length)],
  top: Math.random() * 100, // porcentaje
  left: Math.random() * 100,
  durationX: 5 + Math.random() * 10, // duración movimiento horizontal
  durationY: 5 + Math.random() * 10, // duración movimiento vertical
  delay: Math.random() * 5,
  rotate: Math.random() * 360,
}));

export default function FormasFondo() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {bolitas.map((bola, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-60"
          style={{
            width: bola.size,
            height: bola.size,
            backgroundColor: bola.color,
            top: `${bola.top}%`,
            left: `${bola.left}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0], // movimiento horizontal aleatorio
            y: [0, Math.random() * 200 - 100, 0], // movimiento vertical aleatorio
            rotate: [0, 360],
          }}
          transition={{
            duration: bola.durationX,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: bola.delay,
          }}
        />
      ))}
    </div>
  );
}
