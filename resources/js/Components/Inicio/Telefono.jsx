// Importamos el componente Reproductor que maneja el video
import Reproductor from "@/Components/Inicio/Reproductor"; // Ajusta la ruta según tu estructura de carpetas

// Componente que simula un teléfono mostrando un video en su pantalla
export default function Telefono({ videoSrc }) {
  return (
    <div className="relative flex justify-center items-center w-full mt-6 md:mt-0">
      {/* Contenedor del teléfono centrado */}
      <div className="relative w-[80%] max-w-[300px] min-w-[200px] aspect-[9/16] z-10">
        
        {/* Pantalla interna del teléfono */}
        <div className="absolute top-[2%] left-[9%] w-[82%] h-[96%] overflow-hidden rounded-[25px] border-2 border-gray-800">
          {/* Aquí se renderiza el video usando el componente Reproductor */}
          <Reproductor src={videoSrc} />
        </div>

        {/* Marco exterior del teléfono */}
        <img
          src="https://res.cloudinary.com/dnbklbswg/image/upload/v1755141820/marco-telefono_eraje7.png"
          alt="Carcasa de teléfono"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-auto pointer-events-none"
          // `pointer-events-none` evita que el marco bloquee la interacción con la pantalla interna
        />
      </div>
    </div>
  );
}
