const CACHE="nobonofo-0.66";
const FILES=["./", "./index.html", "./manifest.webmanifest", "./assets/BLOOMERS.png", "./assets/BOOK ICON.png", "./assets/ERNEST.png", "./assets/H2G2.png", "./assets/HST.png", "./assets/HUCK.png", "./assets/JEEVES.png", "./assets/JOBS.png", "./assets/KEEF.png", "./assets/LIBRARY.png", "./assets/SOTWEED.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
