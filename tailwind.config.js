import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

   theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],//letras de la pagina original
      },
      colors: {
        grisClaro: '#f0efef',      // Gris claro
        rojo: '#962b2b',           // Rojo
        marronOscuro: '#1e1a17',   // Marrón oscuro apagado
        rojoApagado: '#bea4a3',    // Rojo apagado
        gris: '#696663', 
        celesteoscuro: '#152636',           // Gris medio
      },
    },
  },
    plugins: [forms],
};
