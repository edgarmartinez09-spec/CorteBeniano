import { Link } from "@inertiajs/react";
import AnimatedSection from "@/Components/Animaciones"; // importa tu componente de animación

export default function LogoConVideo() {
    return (
        <div className="bg-grisClaro w-full h-screen flex flex-col md:flex-row items-center justify-start px-4 sm:px-8 md:px-16 py-6 md:py-10 overflow-hidden">

            {/* IZQUIERDA: Logo + texto + botón */}
            <AnimatedSection animationType="up" className="w-full md:w-1/2 flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-[600px] md:max-w-none flex-shrink-0 md:justify-center md:h-full overflow-auto">
                <img
                    src="https://res.cloudinary.com/dnbklbswg/image/upload/v1755060860/Dise%C3%B1o_sin_t%C3%ADtulo_4_xsamuc.png"
                    alt="logo corte beniano"
                    className="w-full max-w-[360px] sm:max-w-[450px] md:max-w-[500px] h-auto"
                />

                <p className="text-lg sm:text-xl md:text-[30px] font-montserrat text-gray-800 leading-snug sm:leading-tight max-w-[600px] mx-auto">
                    Compra tus productos cárnicos desde<br />
                    casa de manera sencilla, rápida y segura<br />
                    en <span className="font-bold">Cochabamba, Bolivia.</span>
                </p>

                <Link
                    href="/ruta-de-compra"
                    className="bg-[#8B1C1C] hover:bg-[#6e1515] text-white font-bold tracking-widest py-3 sm:py-4 px-8 sm:px-12 rounded-full transition text-base sm:text-lg md:text-[25px] font-montserrat"
                >
                    <span className="border-b border-white">
                        COMPRA AHORA
                    </span>
                </Link>
            </AnimatedSection>

            {/* DERECHA: Teléfono con forma roja detrás */}
            <AnimatedSection animationType="up" className="relative flex justify-center items-center w-full md:w-1/2 mt-14 md:mt-0 max-w-none flex-shrink-0 md:h-full h-auto">
                <div
                    className="relative w-[70vw] max-w-[240px] bg-black rounded-[35px] shadow-2xl overflow-hidden border-8 border-black"
                    style={{ aspectRatio: '9 / 19', maxHeight: '457px' }}
                >
                    <video
                        src="/videos/pedido.mp4"
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                    />
                </div>
            </AnimatedSection>

        </div>
    );
}
