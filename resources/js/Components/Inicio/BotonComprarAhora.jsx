import AnimatedSection from "@/Components/Inicio/Animaciones"; // Componente que aplica animaciones al entrar en pantalla
import { Link } from "@inertiajs/react"; // Enlaces para navegación con Inertia.js

export default function AnimatedButtonWithText({
  // Props con valores por defecto
  buttonText = "COMPRA AHORA",              // Texto dentro del botón
  buttonHref = "/compra",                  // Enlace al que redirige el botón
  buttonDelay = 0.8,                         // Retraso de animación del botón
  showText = true,                           // Si se muestra o no el texto debajo
  textContent = "Recibe un DESCUENTO y DELIVERY GRATIS", // Texto que aparece debajo del botón
  textDelay = 1,                             // Retraso de animación para el texto
  textColor = "text-white",                  // Color del texto (clase Tailwind)
}) {
  return (
    <>
      {/* Contenedor principal: contenido centrado en columna */}
      <div className="flex flex-col items-center justify-center w-full">
        
        {/* BOTÓN animado */}
        <AnimatedSection 
          animationType="fit"                 // Tipo de animación (efecto "ajuste/aparición")
          delay={buttonDelay}                  // Retraso antes de que aparezca
          className="mt-12 md:mt-16"            // Margen superior
        >
          <Link
            href={buttonHref}                  // URL de destino
            className="bg-celesteoscuro text-white 
                       px-24 md:px-32 py-3 md:py-5 
                       rounded-full font-bold 
                       hover:bg-[#0f1a2b]        // Cambio de color al pasar el mouse
                       transition-all 
                       whitespace-nowrap"       // Evita que el texto se corte en varias líneas
          >
            {/* Subrayado solo en la parte inferior */}
            <span className="border-b border-white">
              {buttonText}
            </span>
          </Link>
        </AnimatedSection>

        {/* TEXTO animado opcional */}
        {showText && ( // Solo se renderiza si showText es true
          <AnimatedSection 
            animationType="up"                 // Animación desde abajo
            delay={textDelay}                   // Retraso antes de mostrar el texto
            className="mt-6"                    // Margen superior
          >
            <p className={`${textColor} text-center font-extrabold text-sm md:text-base`}>
              {textContent}
            </p>
          </AnimatedSection>
        )}
      </div>
    </>
  );
}
