const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: "source-map"
    }).sourceMaps();
}

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .react("resources/js/dashboard.js", "public/js/dashboard.js")
    .react("resources/js/noticeboard.js", "public/js/noticeboard.js")
    .react("resources/js/community.js", "public/js/community.js")
    .react("resources/js/messenger.js", "public/js/messenger.js")
    .react("resources/js/houses.js", "public/js/houses.js")
    .react("resources/js/flatavailability.js", "public/js/flatavailability.js")
    .react("resources/js/myrent.js", "public/js/myrent.js")
    .react("resources/js/ourhouse.js", "public/js/ourhouse.js")
    .react("resources/js/ownerstructure.js", "public/js/ownerstructure.js")

    .browserSync({
        host: "www.hously.test",
        port: 3000,
        proxy: {
            target: "http://www.hously.test"
        }
    });

mix.version();
