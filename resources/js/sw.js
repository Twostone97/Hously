const CACHE_NAME = "dependencies-cache";

var REQUIRED_FILES = [
    "app.css",
    "index.html",
    "index.js",
    "app.js",
    "hously.js",
    "mapa.js",
    "dashboard.html",
    "loader.js",
    "smap-jak.js",
    "smap-jak.css",
    "config.js",
    "cs.js"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                console.log(
                    "[install] Caches opened, adding all core components" +
                        "to cache"
                );
                return cache.addAll(REQUIRED_FILES);
            })

            .then(function() {
                console.log(
                    "[install] All required resources have been cached, " +
                        "we're good!"
                );
                return self.skipWaiting();
            })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(request).catch(function(error) {
            console.error(
                "[onfetch] Failed. Serving cached offline fallback " + error
            );
            return caches.open(REQUIRED_FILES);
        })
    );
});
