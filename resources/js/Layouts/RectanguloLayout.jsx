export default function RectanguloLayout({ children, background = "bg-grisClaro" }) {
    const isColorCode = background.startsWith("#") || background.startsWith("rgb");

    return (
        <div
            className={`w-full min-h-screen flex flex-col md:flex-row items-center justify-start px-4 sm:px-8 md:px-16 py-4 md:py-10 overflow-visible ${!isColorCode ? background : ""}`}
            style={isColorCode ? { background } : {}}
        >
            {children}
        </div>
    );
}
