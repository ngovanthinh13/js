
$self.addEventListener("install", (event) => {
     const preCache = async () => {
       const cache = await caches.open(version).catch((error) => {
         console.error('Cache open failed:', error);
         preCache()
       });
         return Promise.all(
             urls.map(function (url) {
                 return cache.match(url)
                     .then(function (response) {
                         if (!response) {
                             return cache.add(url);
                         }
                     });
             })
         );
     };
     event.waitUntil(preCache());
 });
