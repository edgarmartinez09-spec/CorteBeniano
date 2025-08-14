import { Link } from "@inertiajs/react";
import BotonComprarAhora from "@/Components/BotonComprarAhora";

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-12 py-8">

            {/* Título arriba */}
            <h2 className="text-5xl sm:text-6xl font-bold text-white text-center">
                Contáctanos
            </h2>

            {/* Contenedor principal: imagen izquierda, redes y botón derecha */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl">

                {/* Imagen izquierda */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="https://res.cloudinary.com/dnbklbswg/image/upload/v1755142064/letrero_onopcw.png" // Cambia por la ruta real de tu imagen
                        alt="El Corte Beniano"
                        className="max-w-xs sm:max-w-sm md:max-w-md rounded-md shadow-md"
                    />
                </div>

                {/* Redes y botón derecha */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">

                    {/* Botones de contacto */}
                    <div className="grid grid-cols-2 gap-6 text-lg w-full max-w-md">
                        <Link
                            href="#"
                            className="bg-gray-900 text-white px-6 py-4 text-center rounded hover:opacity-80 transition"
                        >
                            Whatsapp
                        </Link>
                        <Link
                            href="#"
                            className="bg-gray-900 text-white px-6 py-4 text-center rounded hover:opacity-80 transition"
                        >
                            Instagram
                        </Link>
                        <Link
                            href="#"
                            className="bg-gray-900 text-white px-6 py-4 text-center rounded hover:opacity-80 transition"
                        >
                            Facebook
                        </Link>
                        <Link
                            href="#"
                            className="bg-gray-900 text-white px-6 py-4 text-center rounded hover:opacity-80 transition"
                        >
                            Tik Tok
                        </Link>
                    </div>

                    <hr className="w-full border-t border-gray-300 my-6" />

                    {/* Botón de compra */}
                    <BotonComprarAhora
                        buttonText="COMPRAR AHORA"
                        buttonHref="/comprar"
                        showText={true}
                        textContent="Recibe un DESCUENTO y DELIVERY GRATIS"
                        textColor="text-#152636"
                    />

                    {/* Ubicación */}
                    <p className="mt-4 text-white text-center text-lg">Cochabamba, Bolivia</p>
                </div>
            </div>
        </div>
    );
}
