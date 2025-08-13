import CardComentarios from '@/Components/CardDeComentarios';
import AnimatedSection from '@/Components/Animaciones';

export default function Comentario() {
  return (
    <div className="flex flex-col w-full items-center text-center px-4 sm:px-0">
      
      <AnimatedSection animationType="up" delay={0}>
        <p className="text-3xl sm:text-4xl font-sans font-extrabold mb-6">
          ¿Qué opinan nuestros clientes <br />sobre nosotros?
        </p>
      </AnimatedSection>
      
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <CardComentarios />
      </div>
    </div>
  );
}
