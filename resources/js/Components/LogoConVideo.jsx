import { Link } from "@inertiajs/react";
import AnimatedSection from "@/Components/Animaciones"; // importa tu componente de animación
import Telefono from "@/Components/Telefono";

export default function LogoConVideo() {
    return (
        <>
            {/* IZQUIERDA */}
            <AnimatedSection animationType="up" className="w-full  md:w-1/2 flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-[600px] md:max-w-none flex-shrink-0 md:justify-center md:h-full overflow-auto">
                <img
                    src="https://res.cloudinary.com/dnbklbswg/image/upload/v1755060860/Dise%C3%B1o_sin_t%C3%ADtulo_4_xsamuc.png"
                    alt="logo corte beniano"
                    className="w-full max-w-[360px] sm:max-w-[450px] md:max-w-[500px] h-auto"
                />

                <p className="text-lg sm:text-xl md:text-[30px]  font-montserrat text-gray-800 leading-snug sm:leading-tight max-w-[600px] mx-auto">
                    Compra tus productos cárnicos desde<br />
                    casa de manera sencilla, rápida y segura<br />
                    en <span className="font-bold">Cochabamba, Bolivia.</span>
                </p>

                <Link
                    href="/ruta-de-compra"
                    className="bg-[#8B1C1C] hover:bg-[#6e1515]   text-white font-bold tracking-widest py-3 sm:py-4 px-8 sm:px-12 rounded-full transition text-base sm:text-lg md:text-[25px] font-montserrat"
                >
                    <span className="border-b border-white">
                        COMPRA AHORA
                    </span>
                </Link>
            </AnimatedSection>

            {/* DERECHA */}
            <AnimatedSection
                animationType="up"
                className="w-full md:w-1/2 flex items-center justify-center text-center space-y-4 md:space-y-6">

                <Telefono />
            </AnimatedSection>

        </>
    );
}
