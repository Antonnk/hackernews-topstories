let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')


mix.ts('src/app.ts', 'dist/').sass('src/resources/app.scss', 'dist/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    });
