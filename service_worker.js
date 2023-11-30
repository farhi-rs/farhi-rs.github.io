// Cached core static resources 
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(".").then(cache=>{
      return cache.addAll(["./",'./anim/', './assets/imgs/', './fonts/', './fonts/symbols/', './lib/', './styling/']);
    })
  );
});

// Fatch resources
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response=>{
      return response || fetch(e.request);
    })
  );
});