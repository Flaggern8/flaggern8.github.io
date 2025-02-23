'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5f7112b3b10e4f50e3fb6801e58851c7",
"assets/AssetManifest.bin.json": "9e7abf749c17326407d73efd5fe9798b",
"assets/AssetManifest.json": "5a279a379056982390d34bed55c6babe",
"assets/assets/fonts/Eina01-Bold.ttf": "95ff0758e02d8174b79e430029e9bb65",
"assets/assets/fonts/Eina01-Regular.ttf": "ad0a757022c4b1b6a5926399bb41efa3",
"assets/assets/fonts/Eina01-SemiBold.ttf": "2e2580c23f01362b1798de6af5d1d55a",
"assets/assets/images/1713989773829.jpeg": "a383ef9dd2783397effa64468c6318dc",
"assets/assets/images/1726042234429.jpeg": "526c05fa9f73990fbdc8e5ad9501b249",
"assets/assets/images/428392810_122093613518224893_1465345216879625887_n.jpg": "44b0c399ff9e097f020b4939ea2e418e",
"assets/assets/images/AdobeStock_632308245.png": "b6fbc0db0fdc1867f1a46bf338a12e4b",
"assets/assets/images/Asset%25201.png": "b50be1c18e187a1caece47b9e416ced2",
"assets/assets/images/Asset%25202.png": "49b23efd7beb09e4c9861bfde36139c0",
"assets/assets/images/Asset%25203.png": "1d54634c228497e6e80101bd732c47ae",
"assets/assets/images/attachment%2520-%2520Copy.jpeg": "1bf5d031c52713709082f9c5bb6aed51",
"assets/assets/images/attachment.jpeg": "a794d10322c28bfa7bbd48cb23557d10",
"assets/assets/images/attachmenttt.jpeg": "1bf5d031c52713709082f9c5bb6aed51",
"assets/assets/images/banner%2520mobile.png": "0099e1d5880dcc28a03f192a4d64c97f",
"assets/assets/images/Banner.png": "664439df40c8330ffbd32387072019ac",
"assets/assets/images/Business%2520Fees.png": "23db8f2bf8b3b0ee56b4c250b07a9b31",
"assets/assets/images/business.jpg": "834178499f00ee531d9cf48bedaa433d",
"assets/assets/images/cashless-payment-hands-new-normal.png": "8280f1d3c67a2885c9c7e7b0bf6ca940",
"assets/assets/images/DeltaPay%2520Trolly%2520Dash.jpg": "50f755aa137edfc79068d0e3df2aefcc",
"assets/assets/images/Dl-AppStoreButton.png": "a62591c6ce327890eb070efdccc1851c",
"assets/assets/images/Dl-PlayButton.png": "d25274deb248dff818c5db84deafa5ec",
"assets/assets/images/downloads%2520mockup.png": "fa47b31dceef30d906b1d90a44a7cd65",
"assets/assets/images/Downloads.svg": "fdcd2531f6bf4da5ccb08d567b951098",
"assets/assets/images/Download_on_the_App_Store_Badge.svg.png": "0136a720388928d8e475f051feb44530",
"assets/assets/images/Earn%2520with%2520Cash%2520Withdrawals.jpeg": "ba34e478491e0c752d134d142df9a2b1",
"assets/assets/images/facebook.svg": "0cce5f60f9435bf347c66ab5940bdbb9",
"assets/assets/images/family.png": "49e4de03b743f34b40d9ac5a63bfa2a5",
"assets/assets/images/fee%2520business%2520business.png": "684310ba0cab9dcf7951165cec0812a6",
"assets/assets/images/Fee%2520personal%2520desktop.png": "19c708249eeca282a6f09b69d42dbf48",
"assets/assets/images/fees%2520business.png": "ff4ee86231a4d8a7e0129b66aa0f4a41",
"assets/assets/images/Fingerprint-bro.png": "3bdef2a8dc1e98399aca9921c5df3a20",
"assets/assets/images/Frame%25209-mobile.png": "6d5f88d5f5da0180ea8d822b0dae7f3d",
"assets/assets/images/Frame%25209.png": "b9a512966d399bc95538a75a75560c1a",
"assets/assets/images/Get%2520Rewarded%2520for%2520Spending.png": "74d3526a4a47147d55ea0614561b0eab",
"assets/assets/images/girl_on_phone.png": "3d9c829a22dea199d7d32965838a419d",
"assets/assets/images/Go%2520cashless.png": "b01b4a8f03bb8cba00eff3b8f802d3bf",
"assets/assets/images/Going%2520Shopping%2520No%2520Fees%2520No%2520Stress.png": "d33a42e1126b7e2f294c1434fae9cb99",
"assets/assets/images/Google-play-logo.png": "499d4b0b7f0af0e198401c83b7b4b9a0",
"assets/assets/images/gradient%2520mobile.png": "494bfd87cfa3d8d72f53de54e4fdbf23",
"assets/assets/images/Gradient.png": "1e11c9ec0cab665c0867bef276283948",
"assets/assets/images/home_section_five-UZUmAvL3.png": "3c22cd53013937d3d1cccdb4aca37932",
"assets/assets/images/huawei.png": "04bc761ca6d7a5df2bf0a90bca608c15",
"assets/assets/images/Inline%2520Logo%2520Blue.svg": "96a6f0e08c979995067a423bd9e4b869",
"assets/assets/images/Inline%2520Logo%2520Grey.svg": "8fe4060d27151238eea49dac7627cb22",
"assets/assets/images/INSTACASH_LOGO%25201.png": "cb1883815240795224637b3d0c46595b",
"assets/assets/images/instagram.svg": "de8ede34729251731cead944d027f208",
"assets/assets/images/Join%2520Us%2520on%2520Our%2520Journey.webp": "edae0cb5e65226d2cb7580515cc091f8",
"assets/assets/images/Keep%2520Customers%2520Coming%2520Back.jpeg": "471fe6a5daba80023b9d3f165451f241",
"assets/assets/images/Keep%2520Tabs%2520on%2520Your%2520Money%2520c.png": "05fcf14377206ce08875c3c726cc0418",
"assets/assets/images/Keep%2520Tabs%2520on%2520Your%2520Money.png": "0cc2d0280a2bbc206a8ca3b10bbb8ccb",
"assets/assets/images/LinkedIn.svg": "5dae6f834a916ce7743dc87eec0b21f9",
"assets/assets/images/Logo%2520Adaden.webp": "2c23678096b64901dc7b2e53441a8aa3",
"assets/assets/images/Manage%2520Your%2520Business%2520Like%2520a%2520Pro.jpeg": "9d6d8d0862431be06ac3ea42d01efde2",
"assets/assets/images/Mobile%2520login-bro.png": "d979dffadc2e7a1db0c57c9f559f5944",
"assets/assets/images/Mulasport%2520logo.png": "84fb976ecb81a91ae3039f2a912b0e53",
"assets/assets/images/notifications%2520desktop.png": "cad166875b1659bd8bf8175fa4e57fb0",
"assets/assets/images/notifications%2520mobile.png": "ba4c3e6d2deaf212a2dabc7ffe8d818d",
"assets/assets/images/person-paying-with-nfc-technology-restaurant.jpg": "06cf3223b3d9123c1e4e3da4bc571a7e",
"assets/assets/images/Personal%2520Fees.png": "2083ba59ac09845e403ec41e61b9df80",
"assets/assets/images/personal%2520user%2520pdf.png": "ce47f3784bd9ce1af3b84ce3a37f0f09",
"assets/assets/images/phones%2520shadow.png": "7c20a93b83e90fdb3164f2e2c815489a",
"assets/assets/images/QR_code_for_mobile_English_Wikipedia.svg.png": "eea65005b0be6beb161d59b2c07f9fb3",
"assets/assets/images/scan%2520pay%2520done.png": "2005dd8c4d35474a7fb1f68136008f9e",
"assets/assets/images/Scan%2520shadow.png": "52946d481c0f1d8c822b662d764b9c0f",
"assets/assets/images/Security%2520You%2520Can%2520Trust%25201.png": "51941de7422b3d2315dae9f41de681cf",
"assets/assets/images/simple-iphone-15-pro-max%2520cropped.png": "4b31bd47681784ab38ca9c6717f3e8a3",
"assets/assets/images/simple-iphone-15-pro-max.png": "7c36f3b5cab77dae9937d004484badc7",
"assets/assets/images/Stacked%2520Logo%2520Blue.svg": "0b433f74ff1aa3e56b4b9d3b52630db5",
"assets/assets/images/Stacked%2520Logo%2520Grey.svg": "ed473cf5091308a9ef1b7e8b033d584c",
"assets/assets/images/TikTok.svg": "0967cd3461b10a4039db3705a9043796",
"assets/assets/images/Twitter.svg": "88e71c9dedc20e8a42b2cd0235c20913",
"assets/assets/images/Two%2520factor%2520authentication-rafiki.png": "e1504464a4b9278276bdda298a39d75a",
"assets/assets/images/yuri-krupenin-S2FVm0tOv1w-unsplash.jpg": "317caa4fa803cfe5f83e2f38810edbe4",
"assets/FontManifest.json": "3a68a57ecd9d92e7748d0988d670f975",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "940055a5889d42429589e4f8b2df8f41",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-micro.ttf": "21f1ecde07d9270e97ed40c42c589dfa",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-mini.ttf": "14878b620bbc5842623b4bbb31d16f19",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-outline.ttf": "15e94d4b5dff16f661fda5b6f581fcfb",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-solid.ttf": "cd611115d6a10a04276552f59aecb67b",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "976a74fe5218f3b621d7fd7734ae0d8c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e7620784b88fae9eaea3ead0141c6e42",
"/": "e7620784b88fae9eaea3ead0141c6e42",
"main.dart.js": "0e3b3a21243a6529640c6ddf3c36c468",
"manifest.json": "515b59ed46917613a3b73582e9a27cda",
"version.json": "f68b9ee4e66a5a6b658d115c6bcfb849"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
