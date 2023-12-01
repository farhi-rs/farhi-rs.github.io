// Cached core static resources 
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("farhi_rs").then(cache=>{
      return cache.addAll(['anim/book.json', 'assets/imgs/site_icon.png', 'fonts/alexandria-latin.woff2', 'fonts/alexandria.woff2', 'fonts/poppins.woff2', 'fonts/symbols/material-symbols.woff2', 'lib/lottie-player.js', 'styling/material-symbols.css', 'styling/pagefont.css', 'favicon.ico', 'index.html', 'index.js', 'manifest.json', 'service_worker.js', 'style.css']);
    })
  );
});

// Fetch resources
self.addEventListener("fetch", e => {
  console.log(e.request.url)
  e.respondWith(
    caches.open("farhi_rs").then(cache => {
      cache.match(e.request).then(response=>{
        return response || fetch(e.request);
      })
    })
  );
});