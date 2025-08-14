<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
                    {{-- Favicon personalizado --}}
            <link rel="icon" href="{{ asset('https://res.cloudinary.com/dnbklbswg/image/upload/v1755121029/logo_esb5wx.png') }}" type="image/png">



    {{-- Open Graph para redes sociales --}}
    <meta property="og:title" content="Carniceria Corte Beniano" />
    <meta property="og:description" content="Cortes de Calidad Hechos Con Amor" />
    <meta property="og:image" content="{{ asset('https://res.cloudinary.com/dnbklbswg/image/upload/v1755121029/logo_esb5wx.png') }}" />
    <meta property="og:url" content="{{ url('/') }}" />
    <meta property="og:type" content="website" />

    {{-- Para Twitter --}}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Carniceria Corte Beniano" />
    <meta name="twitter:description" content="Cortes de Calidad Hechos Con Amor" />
    <meta name="twitter:image" content="{{ asset('https://res.cloudinary.com/dnbklbswg/image/upload/v1755121029/logo_esb5wx.png') }}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

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
