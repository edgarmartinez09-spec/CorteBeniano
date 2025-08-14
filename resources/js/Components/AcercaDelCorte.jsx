import AnimatedSection from "@/Components/Animaciones";     // Componente para animar secciones con efectos (izquierda, derecha, etc.)
import BotonComprarAhora from "@/Components/BotonComprarAhora"; // Botón reutilizable con estilos y enlace

export default function Corte() {
    return (
        // Contenedor principal centrado horizontal y verticalmente
        <div className="flex justify-center items-center w-full">
            
            {/* Contenedor interno con máximo ancho de 6xl, 
                disposición en columna en móvil y fila en pantallas grandes */}
            <div className="flex flex-col md:flex-row items-center md:space-x-12 w-full max-w-6xl">

                {/* Imagen a la izquierda con animación de entrada */}
                <AnimatedSection 
                    animationType="left" // Tipo de animación: desde la izquierda
                    delay={0.2}           // Retraso antes de que comience la animación
                    className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
                >
                    <img
                        src="https://grupoestancia.mx/wp-content/uploads/2024/05/cortes_de_carne_populares.webp"
                        alt="Producto certificado"
                        className="w-full max-w-lg object-cover 
                                   rounded-[50px_0_50px_0]     // Bordes redondeados en esquinas alternas
                                   shadow-2xl                  // Sombra fuerte
                                   border-4 border-celesteoscuro // Borde de 4px color celeste oscuro
                                   transition-transform duration-500 // Animación suave al hacer hover
                                   hover:scale-105"            // Aumenta tamaño en hover
                    />
                </AnimatedSection>

                {/* Contenido de texto a la derecha con animación */}
                <AnimatedSection 
                    animationType="right" // Entra desde la derecha
                    delay={0.4}           // Retraso de 0.4s
                    className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center"
                >
                    {/* Título principal */}
                    <h2 className="text-[30px] md:text-[40px] font-bold mb-4 text-white text-center">
                        Acerca de <br /> El Corte Beniano
                    </h2>

                    {/* Descripción */}
                    <p className="text-white mb-4 text-[20px] md:text-[25px] text-center">
                        Somos una empresa dedicada a la producción y selección de los mejores productos cárnicos procedentes del Beni en toda Bolivia. Nos encargamos de entregarte el producto en la puerta de tu casa de una manera rápida y sencilla con una presentación de lujo, por lo que debes olvidarte de hacer largas filas y buscar productos de alta calidad a precios económicos.
                    </p>

                    {/* Botón animado de compra */}
                    <AnimatedSection 
                        animationType="fit" // Animación de ajuste/aparición
                        delay={0.6}         // Retraso de 0.6s
                        className="mt-4"
                    >
                        <BotonComprarAhora
                            buttonText="COMPRAR AHORA" // Texto en el botón
                            buttonHref="/comprar"      // Ruta a la que redirige
                            showText={false}           // No muestra texto adicional debajo
                        />
                    </AnimatedSection>
                </AnimatedSection>
            </div>
        </div>
    );
}
