<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"/>
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Radio+Canada:wght@400;500;600;700&display=swap"/>

        <link
            media="print"
            rel="stylesheet"
            onload="this.media='all'"
            href="https://fonts.googleapis.com/css2?family=Radio+Canada:wght@400;500;600;700&display=swap" />

        <link
            media="print"
            rel="stylesheet"
            onload="this.media='all'"
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" />

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
