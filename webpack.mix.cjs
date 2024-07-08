const mix = require("laravel-mix");
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
const sassGlobImporter = require("node-sass-glob-importer");

const themename = "moratta";
const themePath = "./";
const resources = themePath + "src";

mix.setPublicPath(`${themePath}assets`)

.sass(`${resources}/scss/style.scss`, `${themePath}assets/css`, {
    sassOptions: {
        importer: sassGlobImporter(),
    },
})
    .js(`${resources}/js/main.js`, `${themePath}/assets/js`)

    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .sourceMaps();