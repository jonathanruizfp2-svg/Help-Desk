const V="hd-v1",LIB="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
const SHELL=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(async c=>{await c.addAll(SHELL);try{await c.add(new Request(LIB,{mode:"no-cors"}))}catch(x){}}).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);if(e.request.method!=="GET")return;
  if(u.origin===location.origin||e.request.url===LIB){
    e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(h=>{
      const f=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==="opaque"))caches.open(V).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>h);
      return h||f}));
  }
});
