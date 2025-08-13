import { Link } from "@inertiajs/react";

export default function Porqueescoger() {
    const logosArriba = [
        {
            src: "/images/logo-izquierda.png",
            descripcion: "Ahorra tiempo evitando largas filas, pide de manera sencilla, segura y rápida de manera online. ¡Puedes hacer tu pedido en menos de 1 minuto!"
        },
        {
            src: "/images/logo-medio.png",
            descripcion: "Nuestros productos son previamente seleccionados y provienen del mejor ganado que existe en Bolivia: Brangus & Nelore."
        },
        {
            src: "/images/logo-derechas.png",
            descripcion: "Con nuestras promociones y precios sumamente competitivos, te ahorraremos mucho dinero. Tenemos la mejor relación calidad-precio del mercado."
        },
    ];

    return (
        <div className="w-full flex flex-col items-center px-4 md:px-16 pt-4 md:pt-6 ">
            {/* Título */}
            <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
                ¿Por qué elegir <br /> El Corte Beniano?
            </h2>

            {/* Logos con descripción */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl">
                {logosArriba.map((logo, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        {/* Logo circular */}
                        <div className="flex items-center justify-center rounded-full w-40 h-40 md:w-48 md:h-48 bg-[#142238]">
                            <img
                                src={logo.src}
                                alt={`Logo ${index + 1}`}
                                className="w-[154px] h-[113px] object-contain"
                            />
                        </div>

                        {/* Descripción */}
                        <div className="w-full border-2 border-white rounded-[40px] p-4  flex-1">
                            <p className="text-white text-sm md:text-base text-center leading-relaxed">
                                {logo.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botón */}
            <Link
                href="/comprar"
                className="mt-9 md:mt-12 bg-celesteoscuro text-white px-32 py-5 rounded-full font-bold hover:bg-[#0f1a2b] transition-all"
            >
                <span className="border-b border-white">
                    COMPRA AHORA
                </span>
            </Link>

            {/* Texto de descuento */}
            <p className="text-white text-center font-extrabold text-sm md:text-base mt-2">
                Recibe un DESCUENTO y DELIVERY GRATIS
            </p>
        </div>
    );
}
