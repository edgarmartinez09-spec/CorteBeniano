import AnimatedSection from "@/Components/Animaciones"; // tu componente de animaciones
import { Link } from "@inertiajs/react";

export default function AnimatedButtonWithText({
  buttonText = "COMPRA AHORA",
  buttonHref = "/comprar",
  buttonDelay = 0.8,
  showText = true,
  textContent = "Recibe un DESCUENTO y DELIVERY GRATIS",
  textDelay = 1,
  textColor = "text-white", // nuevo prop para color del texto
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        {/* Botón animado */}
        <AnimatedSection animationType="fit" delay={buttonDelay} className="mt-12 md:mt-16">
          <Link
            href={buttonHref}
            className="bg-celesteoscuro text-white px-24 md:px-32 py-3 md:py-5 rounded-full font-bold hover:bg-[#0f1a2b] transition-all whitespace-nowrap"
          >
            <span className="border-b border-white">
              {buttonText}
            </span>
          </Link>
        </AnimatedSection>

        {/* Texto animado opcional */}
        {showText && (
          <AnimatedSection animationType="up" delay={textDelay} className="mt-6">
            <p className={`${textColor} text-center font-extrabold text-sm md:text-base`}>
              {textContent}
            </p>
          </AnimatedSection>
        )}
      </div>
    </>
  );
}