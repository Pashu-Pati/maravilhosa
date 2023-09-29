if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./assets/js/service-worker.js")
    .then(function (registration) {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch(function (error) {
      console.log("Service Worker registration failed:", error);
    });
}
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('image-cache')
  );
});

self.addEventListener('fetch', (event) => {
  if (!event.request.url.includes('.jpg') && !event.request.url.includes('.png')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request.clone())
          .then((response) => {
            if (!response || response.status !== 200) {
              return response;
            }

            const responseToCache = response.clone();
            caches.open('image-cache')
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
});