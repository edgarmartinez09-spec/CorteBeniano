export default function Users({ src, nombre }) {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full">
      <div className="flex flex-col text-center sm:text-left max-w-[200px] sm:max-w-[300px] w-full">
        <p className="font-extrabold text-base sm:text-[18px]">{nombre}</p>
        <p className="text-yellow-400 text-lg sm:text-2xl mt-1">★★★★★</p>
      </div>
      <img
        src={src}
        alt={nombre}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
      />
    </div>
  );
}
