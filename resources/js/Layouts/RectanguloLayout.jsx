export default function RectanguloLayout({ children, background = "bg-grisClaro" }) {
    // Verifica si el valor de 'background' es un código de color (hexadecimal o rgb)
    // Esto permite usar tanto clases de Tailwind (ej. "bg-red-500") como valores directos de color ("#ff0000")
    const isColorCode = background.startsWith("#") || background.startsWith("rgb");

    return (
        <div
            // Clases de Tailwind aplicadas siempre
            // w-full           → ancho completo
            // min-h-screen    → altura mínima = pantalla completa
            // flex            → usa flexbox
            // flex-col        → dirección columna en móviles
            // md:flex-row     → cambia a dirección fila en pantallas medianas o más grandes
            // items-center    → alinea verticalmente al centro
            // justify-start   → alinea horizontalmente al inicio
            // px-* y py-*     → paddings horizontales y verticales según tamaño de pantalla
            // overflow-visible→ permite que el contenido pueda sobresalir
            // ${!isColorCode ? background : ""} → si 'background' NO es un código de color, se aplica como clase de Tailwind
            className={`w-full min-h-screen flex flex-col md:flex-row items-center justify-start px-4 sm:px-8 md:px-16 py-4 md:py-10 overflow-visible ${!isColorCode ? background : ""}`}
            
            // Si el fondo ES un código de color, se aplica como estilo en línea
            style={isColorCode ? { background } : {}}
        >
            {/* Renderiza el contenido hijo que se le pase */}
            {children}
        </div>
    );
}
