export default function Users({ src, nombre }) {
  // Componente funcional que recibe props: 'src' (URL de la imagen) y 'nombre' (nombre del usuario)

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
      {/* Contenedor principal:
          - flex para disposición flexible
          - flex-col-reverse en móviles (texto debajo de la imagen)
          - sm:flex-row en pantallas ≥640px (texto a la izquierda, imagen a la derecha)
          - items-center en móviles, items-start en pantallas ≥640px
          - gap-4 en móviles, gap-6 en pantallas ≥640px
          - w-full para ocupar todo el ancho disponible
      */}

      <div className="flex flex-col text-center sm:text-left max-w-[200px] sm:max-w-[300px] w-full">
        {/* Contenedor del texto:
            - flex-col para apilar nombre y estrellas verticalmente
            - text-center en móviles, text-left en pantallas grandes
            - max-width de 200px en móviles y 300px en pantallas ≥640px
            - w-full para que ocupe el ancho disponible dentro del contenedor principal
        */}
        <p className="font-extrabold text-base sm:text-[18px]">{nombre}</p>
        {/* Nombre del usuario:
            - fuente extra bold
            - tamaño de texto base en móviles, 18px en pantallas ≥640px
        */}
        <p className="text-yellow-400 text-lg sm:text-2xl mt-1">★★★★★</p>
        {/* Estrellas de valoración:
            - color amarillo
            - tamaño de texto grande (lg) en móviles, 2xl en pantallas ≥640px
            - margin-top 1 para separar del nombre
        */}
      </div>

      <img
        src={src}
        alt={nombre}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
        // Imagen del usuario:
        // - ancho y alto 64px en móviles, 80px en pantallas ≥640px
        // - rounded-full para hacerla circular
        // - object-cover para que la imagen se recorte y mantenga proporción
      />
    </div>
  );
}
