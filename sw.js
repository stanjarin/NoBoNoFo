const CACHE="nobonofo-pass3-v1";const FILES=["./", "index.html", "manifest.webmanifest", "books/index.json", "books/jeeves.json", "books/jobs.json", "books/sotweed.json", "books/farewell.json", "books/bloomfield.json", "books/h2g2.json", "books/huck.json", "books/hst.json", "books/keef.json"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
