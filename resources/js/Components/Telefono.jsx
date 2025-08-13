import Reproductor from "@/Components/Reproductor"; // Ajusta la ruta si está en otra carpeta

export default function Telefono() {
  return (
    <div className="relative flex justify-center items-center w-full mt-6 md:mt-0">
      {/* Contenedor del teléfono */}
      <div className="relative w-[80%] max-w-[300px] min-w-[200px] aspect-[9/16] z-10">
        
        {/* Pantalla interna */}
        <div className="absolute top-[2%] left-[9%] w-[82%] h-[96%] overflow-hidden rounded-[25px] border-2 border-gray-800">
          {/* Aquí usamos el componente Reproductor */}
          <Reproductor 
            src="https://res.cloudinary.com/dnbklbswg/video/upload/v1754685757/video2_fzf7el.mp4" 
          />
        </div>

        {/* Marco encima */}
        <img
          src="/images/marco-telefono.png"
          alt="Carcasa de teléfono"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-auto pointer-events-none"
        />
      </div>
    </div>
  );
}
