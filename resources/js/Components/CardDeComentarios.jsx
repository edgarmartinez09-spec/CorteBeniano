import Users from '@/Components/FotosUsuarios';      // Componente que muestra foto + nombre del usuario
import AnimatedSection from '@/Components/Animaciones'; // Componente para animar la aparición de cada tarjeta

export default function CardComentarios() {
    // Estilos reutilizables para la tarjeta y el texto
    const cardStyle = "border-2 border-black flex flex-col justify-between max-w-[350px] w-full sm:w-[350px] rounded-[40px] p-6 sm:p-10 min-h-[300px]";
    const textStyle = "text-base sm:text-[20px] mb-4 text-start";

    // Lista de comentarios con texto, nombre y foto
    const comentarios = [
        {
            texto: `“Pedir nunca fue tan sencillo! Los productos son excelentes y me llegaron en menos de 30 minutos, y la carne es espectacular, muy recomendable!”`,
            nombre: `Nicolás Monzón, Vocalista de Cumbia de la Cruz`,
            src: "https://tse3.mm.bing.net/th/id/OIP.0ryQlCaXmH3eRRP-m3vuygHaEI?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            texto: `“La primera vez que pedí fue porque tenía apuros y organicé todo a última hora. El Corte Beniano me salvó ya que todo llegó rápido y la carne estuvo espectacular. Ahora soy su cliente fiel, se los recomiendo a todos.”`,
            nombre: "Ronald Arnéz, Presentador de Unitel",
            src: "https://estaticos-television.unitel.bo/binrepository/1025x715/0c0/1024d512/none/160810533/XRER/ronaaald_101-7451144_20231108134403.jpg"
        },
        {
            texto: `“Al fin una empresa que se preocupa por los clientes, todo es muy fácil, cómodo y la verdad sus precios son excelentes para la carne que le pueden ofrecer a un cliente, le doy 5 estrellas a este emprendimiento.”`,
            nombre: "Gabriel Nogales, Ex Presentador de ATB",
            src: "https://th.bing.com/th/id/R.54bc067e4174d179af608ba1fc27ba88?rik=6fPCuFz5QWT90Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f-_3-zFPa4lZY%2fUdSRW_kwvdI%2fAAAAAAAAn-k%2fukJ-JkNOHHw%2fs598%2f%2c%2bEL%2bPERIODISTA%2bJOS%c3%a9%2bNOGALES.jpg&ehk=6DKXXL9PVT0v7jGreTGrjQtEaHSJaIS4FWWKGMgz1xM%3d&risl=&pid=ImgRaw&r=0"
        }
    ];

    // Tipos de animación para aplicar en forma cíclica a cada tarjeta
    const animaciones = ["up", "right", "left"];

    return (
        // Contenedor que organiza las tarjetas con espacio y alineación
        <div className="flex flex-wrap justify-center gap-6 mt-10 items-stretch">
            {comentarios.map((item, idx) => (
                <AnimatedSection
                    key={idx}
                    animationType={animaciones[idx % animaciones.length]} // Alterna animaciones
                    delay={idx * 0.3} // Escalonado de aparición
                    className="w-full sm:w-auto flex" // Flex para que "stretch" funcione
                >
                    {/* Tarjeta individual */}
                    <div className={`${cardStyle} h-full`}>
                        {/* Texto del comentario */}
                        <p className={textStyle}>{item.texto}</p>

                        {/* Nombre y foto del usuario, si existen */}
                        {item.nombre && item.src && (
                            <div className="mt-4">
                                <Users nombre={item.nombre} src={item.src} />
                            </div>
                        )}
                    </div>
                </AnimatedSection>
            ))}
        </div>
    );
}
