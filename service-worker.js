self.addEventListener('install', async event => {
    const cache = await caches.open('my-cache');
    try{
        await cache.add('inicial.html');
        await cache.add( 'css/style.css');
        await cache.add('js/script.js');
        console.log('arquivo adicionados ao cache')
    } catch (error) {
        console.log("falha ao adicionar ao cache:", error);
    }

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