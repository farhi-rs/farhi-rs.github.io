// Cached core static resources 
self.addEventListener("install", e => {
  e.waitUntil(
    caches.addAll(['anim/book.json', 'anim/loading.json', 'assets/imgs/site_icon.png', 'fonts/alexandria-latin.woff2', 'fonts/alexandria.woff2', 'fonts/poppins.woff2', 'fonts/symbols/material-symbols.woff2', 'lib/lottie-player.js', 'lib/xlsx.bundle.js', 'styling/material-symbols.css', 'styling/pagefont.css', 'favicon.ico', 'index.html', 'index.js', 'eruda.js', 'notification.js', 'style.css'])
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


self.addEventListener('notificationclick', event => {
  event.notification.close(); // Close the notification when clicked
  
  const uid = event.notification.data.uid;
  
  // Open a relative URL when the notification is clicked
  const urlToOpen = './index.html'; // Replace with your relative path

  // Check if there are no open clients
  event.waitUntil(
    clients.matchAll().then(clientsList => {
      if (clientsList.length === 0) {
        // Open a new window only if there are no active clients
        let promise = clients.openWindow(urlToOpen);
        clientsList[0].postMessage({ message: uid });
        return promise;
      } else {
        // Focus on the first available client window
        clientsList[0].focus();
        clientsList[0].postMessage({ message: uid });
        return Promise.resolve();
      }
    })
  );
});
