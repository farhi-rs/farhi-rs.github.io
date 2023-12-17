// Cached core static resources 
self.addEventListener("install", e => {
  e.waitUntil(
    caches.addAll(['anim/book.json', 'anim/loading.json', 'assets/imgs/site_icon.png', 'fonts/alexandria-latin.woff2', 'fonts/alexandria.woff2', 'fonts/poppins.woff2', 'fonts/symbols/material-symbols.woff2', 'lib/lottie-player.js', 'styling/material-symbols.css', 'styling/pagefont.css', 'favicon.ico', 'index.html', 'index.js', 'eruda.js', 'style.css'])
  );
});

// Fetch resources
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response=>{
        return response || fetch(e.request);
      })
  );
});