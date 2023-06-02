self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache')
        .then(cache => cache.addAll([
            '/index.html',
            'cadastro.html',
            '/cronometro.html',
            '/detalhedolivro.html',
            'inicial.html',
            'pagesearch.html',
            '/css/style.css',
            '/js/script.js'
        ]))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {  
                    if (cacheName.startsWith('my-cache')) {
                        return caches.delete(cacheName);
                    }

                }).map(cacheNames =>{
                    return caches.delete(cacheNames);
                })
            )
        })
    )
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});