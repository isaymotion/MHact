const C="mh-trainer-v4",F=["./","index.html","styles.css","app.js","data.js","practice.js","law.js","interventions.js","sdoh.js","manifest.json","assets/apple-touch-icon.png","assets/icon-192.png","assets/icon-512.png","assets/icon.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
