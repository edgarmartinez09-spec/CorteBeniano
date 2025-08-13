import AnimatedSection from "@/Components/Animaciones";
import BotonComprarAhora from "@/Components/BotonComprarAhora";

export default function Corte() {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-col md:flex-row items-center md:space-x-12 w-full max-w-6xl">

                {/* Imagen izquierda animada */}
                <AnimatedSection animationType="left" delay={0.2} className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <img
                        src="https://grupoestancia.mx/wp-content/uploads/2024/05/cortes_de_carne_populares.webp"
                        alt="Producto certificado"
                        className="w-full max-w-lg object-cover rounded-[50px_0_50px_0] shadow-2xl border-4 border-celesteoscuro transition-transform duration-500 hover:scale-105"
                    />
                </AnimatedSection>

                {/* Contenido derecho animado */}
                <AnimatedSection animationType="right" delay={0.4} className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center">
                    <h2 className="text-[30px] md:text-[40px] font-bold mb-4 text-white text-center">
                        Acerca de <br /> El Corte Beniano
                    </h2>
                    <p className="text-white mb-4 text-[20px] md:text-[25px] text-center">
                        Somos una empresa dedicada a la producción y selección de los mejores productos cárnicos procedentes del Beni en toda Bolivia. Nos encargamos de entregarte el producto en la puerta de tu casa de una manera rápida y sencilla con una presentación de lujo, por lo que debes olvidarte de hacer largas filas y buscar productos de alta calidad a precios económicos.
                    </p>

                    {/* Botón animado */}
                    <AnimatedSection animationType="fit" delay={0.6} className="mt-4 ">
                        <BotonComprarAhora
                            buttonText="COMPRAR AHORA"
                            buttonHref="/comprar"
                            showText={false}
                        />
                    </AnimatedSection>
                </AnimatedSection>

            </div>
        </div>
    );
}
