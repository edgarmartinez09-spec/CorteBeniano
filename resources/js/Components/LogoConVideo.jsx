import { Link } from "@inertiajs/react";
import AnimatedSection from "@/Components/Animaciones"; 
import Telefono from "@/Components/Telefono";

export default function LogoConVideo({
    logoSrc,
    children,
    linkHref = "/compra",
    linkText = "COMPRA AHORA",
    videoSrc // 📌 Nueva prop para el video
}) {
    return (
        <>
            {/* IZQUIERDA */}
            <AnimatedSection 
                animationType="up" 
                className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-[600px] md:max-w-none flex-shrink-0 md:justify-center md:h-full overflow-auto"
            >
                <img
                    src={logoSrc}
                    alt="logo corte beniano"
                    className="w-full max-w-[360px] sm:max-w-[450px] md:max-w-[500px] h-auto"
                />

                {/* Contenido que venga por children */}
                {children}

                <Link
                    href={linkHref}
                    className="bg-[#8B1C1C] hover:bg-[#6e1515] text-white font-bold tracking-widest py-3 sm:py-4 px-8 sm:px-12 rounded-full transition text-base sm:text-lg md:text-[25px] font-montserrat"
                >
                    <span className="border-b border-white">
                        {linkText}
                    </span>
                </Link>
            </AnimatedSection>

            {/* DERECHA */}
            <AnimatedSection
                animationType="up"
                className="w-full md:w-1/2 flex items-center justify-center text-center space-y-4 md:space-y-6"
            >
                {/* 📌 Ahora el video viene como prop */}
                <Telefono videoSrc={videoSrc} />
            </AnimatedSection>
        </>
    );
}
