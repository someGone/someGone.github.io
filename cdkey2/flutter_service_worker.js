'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "402e1b4fadb9ce5488c7934cd7e59236",
"index.html": "4630b82c3d7aa25b975056d867f1242b",
"/": "7626674272a38c50f95c35cbb2487f61",
"main.dart.js": "05fb45486cf7c12d4fbaa3aa015b5ca9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "72591f7a4f81331fe21928b810faf4c2",
".git/config": "f074046216a0e1b9aa2030e27f51ae63",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3b/ec123cbbc356b0730e13806570575c6f53bb82": "0c7606339f583e11c75283d133cd7e06",
".git/objects/34/228f1fa1c6b8dc070a397f9c6c5236c321fbaf": "b344b7300f9e185268ac9384bf184bd2",
".git/objects/5f/1b89508ed8449b9bf14c667f9b945281b6777d": "bf815477b5142124921eae8774e0b67d",
".git/objects/33/cdde684428a87056910b84d18f6bc3d6369ab7": "6aa04478efa2d019b53ef9d7fe1673c1",
".git/objects/9d/312bc6bde75b89de633cd23bfd8ee3e5026ef8": "80640774ffceda8b2399ca91506db408",
".git/objects/02/44d7908865c8c93b62858a89ef2bd47bd9f6ee": "22fe843d2808a1849eb6e4478ea52ea8",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/ad/8e96bda58db8ff18d4b0cc39ce1c4a68e3114b": "6d68605cf7acc3a3ed6367736904fc30",
".git/objects/d0/c095a63bb5d1550871632cc5d78f37e07d7924": "87a9b1b2779e073c4c0c447cdb319730",
".git/objects/da/4bcb89396ea72aa18c2cb5390f21305ab25ae9": "f526afc93532058dc30ee80cb06ba5de",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/e90b23ee4e22dd2495f1fa3279f8866f980626": "edbcaca9f28d4c39b0c8daab34e46caf",
".git/objects/f5/bf1a9bcff0f062ae311dc001dc9762eeda5315": "9b297f0ca6855ea1fe419432a8fc8945",
".git/objects/ed/5e04f51d105171b3fa1e247c5477f159e39423": "3242ba72e5463ea4c779a636bb78d5a3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/c6644486198cf8a3c623cee5c65172ee747c6d": "a1630e9e7a1caaf2c923eee2b45c29f5",
".git/objects/18/56266c8940ce746943b61219c4f03eececaa08": "4f4c46c79b4293a67484f20aec31f848",
".git/objects/4b/96aa1c150532108e2b949f4d968566878854ea": "9331a3f462722144c836bc7a55608c52",
".git/objects/87/88ad3a0b909c11054b83fc6ba83d52eb47abec": "076795691fa2ea385b073a2bf4a4ce49",
".git/objects/80/5d12e4653ebc45df063a064876f46887e10160": "c14c65c75730fae3c28dea7292fa4343",
".git/objects/17/cc50e7413157c2ce2e3789db2c634bb4222d33": "3992b34b75d08b76a76cfa35725f9056",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2f/d4eb236cdd6631d9de24cdc5fc3a38014148bb": "b3d5fe9deba46a7103c84d8ef90879c7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/36f9b71b23e9580df36c7dc92f7c7b49f8d2ff": "02f4b8ede7de9f96d78e80d20ba37ef5",
".git/objects/06/37a088a01e8ddab3bf3fa98dbe804cbde1a0dc": "2fedb3e87c69aac3dea537cfcd7943b2",
".git/objects/06/81ae2856ad24366116bf55197c805a217dafc0": "99de29fa7a14f1e1194303577a09349c",
".git/objects/6c/1ddffa63f8502989be4ffb2ba00ebe124cc359": "81a1878b48183f22045d5471759edb26",
".git/objects/64/833386b3c23d56f4bf01e257f9ba6bc626c289": "97713052abcdc43c45aee1d5731c41fc",
".git/objects/aa/2e5ab971e5c305c0632b6b8a8d5f83763f141a": "dabb4bb47e797ac47811d2d8c3243ee1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/31447300ef9a1bf3b65710bcb3c7403767089d": "398542b2c6d3e58216b602fc4647adf4",
".git/objects/b0/640b64cb9cb1d6b462c241c97459a84d6f4994": "c9f2c3915355416a6dc8a4a7fbe2312e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f9/1c1f4b09c721da1efb077cbef9372cda52587d": "10f5566c5bcf15a3fcc848e2d25eca55",
".git/objects/f9/235088a9679d84e5823cf3f35cbd55a8991a88": "8af8f907c243e3b81ed54a008db16af1",
".git/objects/fa/4c0748cbfc0c7f381b7dff829a50a3938962be": "c419169cd6d3beb4d486aee31a7da293",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/cb/64d9932ea2f667dca67cfda4c7688505732ed9": "304693564dd99e547e882e34fc1fbe82",
".git/objects/e0/fd4592fc6686cd03b50f03f27e87af4068b6d1": "a36d2de4ab782588d7d80ab0e67708c4",
".git/objects/46/e05c6de24e8809d089939b7e2077386c0f5da6": "2a1bf4f25c4284af6c868fb9fff57188",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/e416b2b1537cee9a43d67698dc584c921bac22": "ed8a566ab456635f5144785b07071c72",
".git/objects/70/d8b7ebf4d05af8613aed15648c5e3facb95877": "418791a0ba360bc4631118028eec0f97",
".git/objects/1e/804debb5593065e7d59ac038b995569cefe747": "4a03168051c1eff73ff45569f8dc1ef1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/9047822990cc322f4c74e038630c281c05b6aa": "d7964b71d3de61797b32e2a769b3c748",
".git/objects/15/2658634ac9d1dc773d068803028b13ed75ca81": "9d5079b2688735299478bc4e3d042b42",
".git/objects/12/d4b343a6274d9b826e6771fd5f9c8555fda0a5": "bd42b75a8d1c6a344e7155fb4f1c7606",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2b/3d9e7b9db7fbe7085c7d63e433f3d5c214a73e": "bbd9f1447102809eaf7b037baabc52ae",
".git/objects/78/889185b4962826266dd4243e27e3c6b5cd3069": "760586734dd865ef4c5d6c4f5fc5d62a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8a3090b46b65871206bfcd35264f73ae",
".git/logs/refs/heads/master": "8a3090b46b65871206bfcd35264f73ae",
".git/logs/refs/remotes/build/master": "1ddec53b9f0057e5f1da685ec1345588",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "ef542b8a3353f828fb3bf87116ddb6f5",
".git/refs/remotes/build/master": "ef542b8a3353f828fb3bf87116ddb6f5",
".git/index": "80e6e7b3d363c0a34229cd06b30abf1e",
".git/COMMIT_EDITMSG": "588e209f698255999f059a7bfca72b37",
"assets/AssetManifest.json": "71b4fce2b4f390deeff53a7d0e8981da",
"assets/NOTICES": "6b3faa2ffd598c5401241bcb2d167e38",
"assets/image/exchange.png": "49b71acb7a0ec1947d2207838952f89c",
"assets/image/msg_fail.png": "3acdd56978dc7b163ae1933ca07bb7e3",
"assets/image/gray_close.png": "e5f6a2497c996377534c2294004beb7b",
"assets/image/toApp.png": "46eeb970e85a649895457d0a4049c596",
"assets/image/mark_select.png": "b694180e9f085df2e03c4dcfd5d4b391",
"assets/image/hello.png": "861e7ad752d57d1d34d982f8c0e5b7cf",
"assets/image/msg_info.png": "0f529c8fac4e4b3905ca2dbf5c131c5c",
"assets/image/main_back.png": "d48c7c86bc0202b60308ea0b9038ae60",
"assets/image/msg_success.png": "65d777b78975c65eb5aa8a1f92a339cf",
"assets/image/mark_normal.png": "16d5eb22ff6a406bfd49dc739e3462d9",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/shaders/ink_sparkle.frag": "56606fe1a09d4ff8a2cac18771828f44",
"cdkey/version.json": "402e1b4fadb9ce5488c7934cd7e59236",
"cdkey/index.html": "7626674272a38c50f95c35cbb2487f61",
"cdkey/main.dart.js": "03469f6490b572a283cfa31bb9ed0795",
"cdkey/flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"cdkey/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"cdkey/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"cdkey/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"cdkey/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"cdkey/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"cdkey/manifest.json": "72591f7a4f81331fe21928b810faf4c2",
"cdkey/assets/AssetManifest.json": "71b4fce2b4f390deeff53a7d0e8981da",
"cdkey/assets/NOTICES": "6b3faa2ffd598c5401241bcb2d167e38",
"cdkey/assets/image/exchange.png": "49b71acb7a0ec1947d2207838952f89c",
"cdkey/assets/image/msg_fail.png": "3acdd56978dc7b163ae1933ca07bb7e3",
"cdkey/assets/image/gray_close.png": "e5f6a2497c996377534c2294004beb7b",
"cdkey/assets/image/toApp.png": "46eeb970e85a649895457d0a4049c596",
"cdkey/assets/image/mark_select.png": "b694180e9f085df2e03c4dcfd5d4b391",
"cdkey/assets/image/hello.png": "861e7ad752d57d1d34d982f8c0e5b7cf",
"cdkey/assets/image/msg_info.png": "0f529c8fac4e4b3905ca2dbf5c131c5c",
"cdkey/assets/image/main_back.png": "d48c7c86bc0202b60308ea0b9038ae60",
"cdkey/assets/image/msg_success.png": "65d777b78975c65eb5aa8a1f92a339cf",
"cdkey/assets/image/mark_normal.png": "16d5eb22ff6a406bfd49dc739e3462d9",
"cdkey/assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"cdkey/assets/shaders/ink_sparkle.frag": "56606fe1a09d4ff8a2cac18771828f44",
"cdkey/canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"cdkey/canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"cdkey/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"cdkey/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
