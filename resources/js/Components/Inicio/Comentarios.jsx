// Importa el componente de tarjeta de comentarios
import CardComentarios from '@/Components/Inicio/CardDeComentarios';

// Importa el componente para animaciones de aparición
import AnimatedSection from '@/Components/Inicio/Animaciones';

// Componente principal para mostrar comentarios de clientes
export default function Comentario() {
  return (
    // Contenedor principal: centrado, texto alineado al centro y con padding horizontal
    <div className="flex flex-col w-full items-center text-center px-4 sm:px-0">
      
      {/* Texto principal animado */}
      <AnimatedSection animationType="up" delay={0}>
        <p className="text-3xl sm:text-4xl font-sans font-extrabold mb-6">
          ¿Qué opinan nuestros clientes <br />sobre nosotros?
        </p>
      </AnimatedSection>
      
      {/* Contenedor de tarjetas de comentarios, con diseño flexible y espacio entre ellas */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {/* Se renderiza el componente que muestra los comentarios */}
        <CardComentarios />
      </div>
    </div>
  );
}
