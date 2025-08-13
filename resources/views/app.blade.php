<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
                    {{-- Favicon personalizado --}}
            <link rel="icon" href="{{ asset('logo.png') }}" type="image/png">

            {{-- Open Graph para redes sociales --}}
            <meta property="og:title" content="Carniceria Corte Beniano" />
            <meta property="og:description" content="Cortes de Calidad Hechos Con Amor" />
            <meta property="og:image" content="https://edgartrabajo-production.up.railway.app/images/preview.jpg" />
            <meta property="og:url" content="{{ url('/') }}" />
            <meta property="og:type" content="website" />

            {{-- Para Twitter (opcional) --}}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Empresa De Frutas - Valle de Mizque" />
            <meta name="twitter:description" content="Frutas frescas, naturales y de calidad desde el Valle de Mizque." />
            <meta name="twitter:image" content="{{ asset('logo.png') }}" />
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
