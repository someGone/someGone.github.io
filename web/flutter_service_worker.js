'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b291c9014c1f9a47cab7a106833b820a",
"index.html": "17f913f0fca74076d41aab8bd1608ac5",
"/": "17f913f0fca74076d41aab8bd1608ac5",
"main.dart.js": "23ea558b2a2ff123a01761858bc46da6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/logo512.png": "c2f09b28b7b4e6db47efa4d25079907e",
"icons/logo192.png": "e4053c409fd2f48aa96233fd8159e55d",
"manifest.json": "ee648e3f23e9355750562b75f352cb27",
"assets/AssetManifest.json": "e2b02d9a708c9eddeb273b5ef93e89cc",
"assets/NOTICES": "d96190658e51d64c27ecdfa41883d9d1",
"assets/image/login_phone.png": "309b71b96773ab48709533eab97cb499",
"assets/image/gray_close.png": "e5f6a2497c996377534c2294004beb7b",
"assets/image/more_white.png": "e27a3024da8ff38f0a056fba51272b19",
"assets/image/navi_back_black.png": "b9602ae451b6979db78499e35ce337b3",
"assets/image/arrow_bottom_black.png": "4fd12c6462ff0938cb73bd6afe7a0eb0",
"assets/image/login_pwd.png": "4cffd396ebabad41f7da37527836b0c6",
"assets/image/logo.png": "ba4f6b9c1bafbc0a949d0916ca097373",
"assets/image/about_1.png": "3109230e02eca5a04f7bb1ccf6481afb",
"assets/image/about_0.png": "d835483d4901b8470ae6f20d88983163",
"assets/image/about_2.png": "e80261fa7dff90b4c567e10efcdcee8a",
"assets/image/more_black.png": "12fddd2f0e2474361abaf3b01923e90c",
"assets/image/about_3.png": "0e1eda71f640de3a0ca8c1a581588206",
"assets/image/circle_left.png": "7922fbad1cd14a8929e8c4e603cc563f",
"assets/image/circle_right.png": "e07138eec55ea39cc8d4cc60f186ea12",
"assets/image/page_back.png": "8a0f26b6078462432cc95d356e9d21f7",
"assets/image/arrow_top_black.png": "9f66901814e3262b41094e9a00732a67",
"assets/image/circle_input.png": "a632b2c6fab9f3b8667e0b042622ad64",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "56606fe1a09d4ff8a2cac18771828f44"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
