'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cf50063bd1845008d6517fc11c9caecd",
".git/config": "750514018961d2b55995582612eb09a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "aa68ab5480086dc25bd069aa11c3222e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "88341a2d657f438d5ed9fe8fdbdaa44b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a30433dce3fea16acb39c1d7c549f20a",
".git/logs/refs/heads/latest": "c5a235cb2c504c480e3afc0afe055c87",
".git/logs/refs/heads/master": "7a0412093e7910341ec9ac37cbee54f6",
".git/logs/refs/remotes/origin/latest": "04d613d0cf3ac97d31463728cd3d7761",
".git/objects/08/38218f5ed335517159b2fb3032e6806eec6c57": "8a2d9530bd94f6ca52d773eb7ad9a918",
".git/objects/08/a090d1677dcf077a6a2e30a17094f9921774b1": "f6a9fffbdf15b8aed4a65bfb5b41b0fa",
".git/objects/0a/d9c2d5e0f9285a9fc1f78d18ae28a765732717": "8c781a8de08837e6a466a0b1ad38af38",
".git/objects/0f/cd79e6c168671f3701e879373c69df22527a22": "294fa5c191da51c95cc4497f6e242222",
".git/objects/11/ad958e2bdc9fc92a4435dd19dff88a0b8d4726": "ab0e10af2cb61eaeb7311d09c7789dd7",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/73aee0e89d571343369a9c813dbbc347f7fbc3": "9c38b9832eb545b243149c7f8bc82d6a",
".git/objects/25/4c86408b9961fb66ebb242d9a9ff11ee718294": "431080fdaea14e6bbb2dea7090e7d390",
".git/objects/2b/09d215609af21d2bf719cecd7b4bdbfa579ead": "0e34237cd3c5f55f831f4cb5b3fdbf9d",
".git/objects/36/b7fcf1df25622f970f44bc9d88cd64fb7db2f2": "2862b06807f4b27c3f9752d0c8dbe99a",
".git/objects/38/6bcbf495cdfa6a27ba87824e405cad0ecafdfd": "78e56f6a8559615d39aa4a928d14ff54",
".git/objects/3e/9c2c29c2c797ff013b32afc482b4ae6a44d780": "6a6e308bd6332040197896bfffba127a",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/cad43386f08ec3f1a58e32dc0f8001a756ff17": "106923ac97f62b7d397fb96d318b04a3",
".git/objects/44/76ad202c369a860209c24fde0994e58ddf8836": "b59974c27309feb2a6a1459c108a7b16",
".git/objects/4a/8104df0b57a5f2d0601fe39c2de4a9c94ae933": "e6f03b438782959b6ebba813404b10d5",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/1fd136a7ce505152563a142a0d17164dab4e00": "8b803a7f788c94afe91b393cd20c9710",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/65/8e38b9266efc16b4814776673e0cfe3b59ba0f": "1363be30cb4704cff3b2cbd9e96ae497",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "58482343b41314a5c576148308f722ac",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "07b620207e0d1fea8c677d47bfc777a0",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/a016afcf7e82bac5f72e7d7eca94774c5ab799": "179992944d7a053d1ca570bcf4226ced",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "88bf3ff855f2fc6a4845f4e9e4d0417a",
".git/objects/7b/40bd940f12d6cf6bdc5e36ec4c46909ac4b2d5": "fc4ce8a03b7b56c4a2aed7f6cbec415e",
".git/objects/7f/d7056f19ecd4d759071c03e996f48363622a45": "046a951e5fbbb958599952fe9395e322",
".git/objects/80/1e754ba933763bc732c998ace181aa1a7574ed": "15f713e780916fe28a2db258519af567",
".git/objects/82/b7018934650e60eabab1c5855aef8df8c0c312": "771ff21b7a9d10506224dc26ca9c49ec",
".git/objects/83/589c70eb7b8b79ae32ddec226473553fa6b89d": "eeb1e7cd44ca7baa0683fff5601b16d4",
".git/objects/86/125990ffbdcd0b983091780da678d62126834f": "cf6a7465ab7fb6171403f6d12790d1b4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/98851cc636d3cdeb1da95a5428a16c44ee347c": "f77a5dc55765dc6339eb0070d9c99590",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/91/9237969a52ef3b89e533f6c8c0b0a0b7994d9e": "4330f8605bd06b4ce0b384685d1a3973",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a3/ce392682c1fed24cdf1f1c81d534c4b2d12fda": "204273a233a9b976c2c2dd0a1b154592",
".git/objects/a5/3c2128088eeca224d039b8466687c85f978a9e": "efa045b28996ba276baf12635a8fa446",
".git/objects/ac/da25a8b41b066b46587b569e5d1d15a31e7d82": "4fc0d660938ece71dd0b973018a5f7e8",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/af/af9fb52c4bd0fa2f40060981022faf5ac85eb8": "7bb79b0f4c01259ea13c2de2d46bcaa4",
".git/objects/b3/e6bc979fe64ba72d74abd560546c36807d6409": "cd2e8b7c77ef7aeff1bcc0551a4b4dca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c1/b05a76032fe113cd4bc59f9f7dc7af65430843": "cc74a93b7658d5e044d1267304a0b934",
".git/objects/c2/d32e183c3f4725bd936e9c8cd2b19b7e00ea1b": "6ad43af4dfabbcecdd0b0c7b461b2a05",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d3/3315b294d7282a0eb8a75be47f088f7f12dd6a": "97453641aa9fb950a1ce65a3768308c2",
".git/objects/d3/3644b57a094895532bcfd11495c44aa8f70a3c": "fb2590e5040883e2fe6abf632b4cf853",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/c1a101454c8402594db5554df5a8fc9cced50d": "2acb9d9ef27336150df6f77a59b335bb",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "475387042fa2b2200081e4284ce80c58",
".git/objects/e8/0fe53425ef73031d9d37d37028d4162a2d7ce0": "5009554d2c456751ed2ace99f21a2059",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/be11f595cfaef9998151e06b00995297a3757e": "c9ab696fdca0dae69e307bf4cd4b8d10",
".git/refs/heads/latest": "4c7cd1abd0e6177de6aab40158c4715e",
".git/refs/heads/master": "4c7cd1abd0e6177de6aab40158c4715e",
".git/refs/remotes/origin/latest": "4c7cd1abd0e6177de6aab40158c4715e",
"assets/AssetManifest.bin": "11343e1bea3a84f03e534d7570769bcd",
"assets/AssetManifest.bin.json": "c453e081d20524091cf4f4c44ec7f146",
"assets/AssetManifest.json": "3e5754db0f9032532d824e85da9bf7a9",
"assets/assets/fonts/Eina01-Bold.ttf": "95ff0758e02d8174b79e430029e9bb65",
"assets/assets/fonts/Eina01-Regular.ttf": "ad0a757022c4b1b6a5926399bb41efa3",
"assets/assets/fonts/Eina01-SemiBold.ttf": "2e2580c23f01362b1798de6af5d1d55a",
"assets/assets/images/Dl-AppStoreButton.png": "a62591c6ce327890eb070efdccc1851c",
"assets/assets/images/Dl-PlayButton.png": "d25274deb248dff818c5db84deafa5ec",
"assets/assets/images/huawei.png": "04bc761ca6d7a5df2bf0a90bca608c15",
"assets/assets/images/Inline%2520Logo%2520Blue.svg": "96a6f0e08c979995067a423bd9e4b869",
"assets/assets/images/Inline%2520Logo%2520Grey.svg": "8fe4060d27151238eea49dac7627cb22",
"assets/assets/images/logo.svg": "57f48b27776f382ceb4a507d41acd00a",
"assets/assets/images/Stacked%2520Logo%2520Blue.svg": "0b433f74ff1aa3e56b4b9d3b52630db5",
"assets/assets/images/Stacked%2520Logo%2520Grey.svg": "ed473cf5091308a9ef1b7e8b033d584c",
"assets/FontManifest.json": "3a68a57ecd9d92e7748d0988d670f975",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "09932ea98d514ea37da4931e9d9b774a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-micro.ttf": "21f1ecde07d9270e97ed40c42c589dfa",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-mini.ttf": "14878b620bbc5842623b4bbb31d16f19",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-outline.ttf": "15e94d4b5dff16f661fda5b6f581fcfb",
"assets/packages/heroicons_flutter/assets/fonts/heroicons-solid.ttf": "cd611115d6a10a04276552f59aecb67b",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "3f711a2e54f881493ee0c6e1e1a91d0e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f404917265c29ee4b2ecaa635e0b6dd6",
"/": "f404917265c29ee4b2ecaa635e0b6dd6",
"main.dart.js": "133b0c47a83ebc54f7522b0aa46c0e98",
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
