'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8c155dc87c9bb56d8bf0eba5a4912a87",
".git/config": "07a5af9cae768a0785abb3e372095729",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "521f5a37322846753a47ba9b02222b17",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dfd1b583aee0471b9776f1ba76ec24e2",
".git/logs/refs/heads/master": "dfd1b583aee0471b9776f1ba76ec24e2",
".git/objects/00/e19c6871b73e74229dfd8e074b1f9d93af647f": "4def2059bb08abcb8f6bf509d8a03525",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/2c6e6a5a92c82806208bbead253577b5d022fa": "2d96633e72bf5ada9e1cf9ba8a2e0ecd",
".git/objects/08/a090d1677dcf077a6a2e30a17094f9921774b1": "f6a9fffbdf15b8aed4a65bfb5b41b0fa",
".git/objects/0a/d9c2d5e0f9285a9fc1f78d18ae28a765732717": "8c781a8de08837e6a466a0b1ad38af38",
".git/objects/0f/87ee2644f6bc23d8d1adb70375297464a41c54": "a1639a3e22c7feec7be9ee2218834446",
".git/objects/0f/8ad3b78287f6996f69f8b10be6330d3b77cf33": "bf9e77c450060e762a1e804294fc7965",
".git/objects/11/ad958e2bdc9fc92a4435dd19dff88a0b8d4726": "ab0e10af2cb61eaeb7311d09c7789dd7",
".git/objects/11/b7790c9e1429f96b4791e86958b2d9bf24e9f3": "ee9e41043be1d3ee30305cc3e342deeb",
".git/objects/12/6ccd45cfeedbc338ba9a0d0d25d242801fd89b": "b696957c8461a348c27ed422a0d53062",
".git/objects/13/0c1e142aed203e5b6fb7a170c47c8d3c3daee0": "07505640713ca3621349c64de1565319",
".git/objects/16/cd17f38f8e0d0c26d3ae2807a86e93f92cef5f": "ba09f7dee4a88c015be524bc070253e7",
".git/objects/17/a06a085e9f55e8a76445f9f980b071daeb8145": "1a74fcdb33705fe1a0952061d9cb8b5d",
".git/objects/18/a5de24a92aebb73c2c8c6eb686713ae7efeb3a": "407cd51fa13f2e9d17d85f3a2eae271e",
".git/objects/1b/9054a53dc95eb79d110f3587affc4afd46be5a": "d8682e354e96d00ec00c496248ceefcc",
".git/objects/1c/29ff31fcaea2a781b3fed0afb5807e3eb4bc6c": "7356369cfc1d80bb1fb7a7e4b9c92bcf",
".git/objects/1c/73aee0e89d571343369a9c813dbbc347f7fbc3": "9c38b9832eb545b243149c7f8bc82d6a",
".git/objects/1e/05af126795ebd18529b1c598513146f0a6c060": "499e313c03a86ea3beb0fb62e04019fe",
".git/objects/1e/47712593409f187d4f912218cf17ee37d6bc93": "03480d95ca0da7ea826d489ad6df8746",
".git/objects/1f/ecd78f54f7427dba4397d711d3bf9e22b8f461": "49165e40aff089d4b2cc531a344d13e9",
".git/objects/20/aae1c130648cc47558ecb245eec452583d2831": "8c3e39cf5ce93e47efbdb792f345a2db",
".git/objects/24/6eb70f153ca9a6afa9da4332c37762548236f4": "48ab50e8351eefb6bf12d5bd17dca964",
".git/objects/24/d4aa5b60bc8617f9c8d061130d35a474242837": "dc965e81e17af934c74ca2c860cefd5d",
".git/objects/25/4c86408b9961fb66ebb242d9a9ff11ee718294": "431080fdaea14e6bbb2dea7090e7d390",
".git/objects/26/63bf07228a0cab9bf4da50558356ab0089ab53": "ad606f380e6a69e31f3eacac7348e6c3",
".git/objects/27/667eb6d79a11ea3ff7a874b9d67f4e423389f0": "7a5b00d1ca6972f5cbc001416e35b73d",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/9611f274cf62b8ba82319a1d9d8b20d458f309": "f3fecba2c83a91997b93dd1fae0a0d28",
".git/objects/34/bebef0b87256165559f9361974ed81968c067c": "443e426325070e3adabde5da05cf49dd",
".git/objects/36/b7fcf1df25622f970f44bc9d88cd64fb7db2f2": "2862b06807f4b27c3f9752d0c8dbe99a",
".git/objects/39/90a0d82965559ae2fe75e4f51f61875788c29f": "7817e5a7859f34f4033ec6d6cbda71f3",
".git/objects/3e/4e4b0c7f7bb179a25b0c47ab4a5df1e08e9048": "f47296292a9136e1570519c97c127a32",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/45e6af80c73b78afb2c17291908bc954ed9227": "06af7de8539356bc742f92c625679139",
".git/objects/43/a33236f982ef3602ad050874280c4b3493762b": "497de557316f3996f426a3895208838b",
".git/objects/44/f628338b5be43975b67323102ee38f16d747c5": "c72f08f33038eea756de36bddbec495b",
".git/objects/47/50c2ad448739016d166a277ba06b232ded2709": "3f3747a1161383a446337bda546df808",
".git/objects/4a/8104df0b57a5f2d0601fe39c2de4a9c94ae933": "e6f03b438782959b6ebba813404b10d5",
".git/objects/4c/a050b08e04d9d5093a21994376898c066bca92": "5cb23823d4c19f9c0ae05ff8ac8677aa",
".git/objects/4d/60d617f068cb06626d9a0f7a515d8e4f5087cf": "26b3b41a87b0fa27af5b4c16e796359f",
".git/objects/4e/f8a7d16bdd7049968fe8eefb5de11c089501a3": "7f9a75a48531f8768e6b97e361eea712",
".git/objects/51/6d588dafa1737cebf349fb04795a294217ef94": "76347355b0159673558e4b53f24ad12c",
".git/objects/53/2fe1f90e30bd3d39c4a27eab074053cc549d5f": "1037322f4e76a98761d64dd29ada5f62",
".git/objects/58/28caf0bc867ea54a29a4f01eb161bcf61bd1c0": "f80d084d45c762483067ae4ad098f28c",
".git/objects/5b/2b216515f026dbd9cc2120ac573135ea6433c8": "aadbadba5b1bb424e99e9e7fa5d11798",
".git/objects/5d/2be1ff4cb3ee2298cf7df54a4b654678ac1f6c": "81cb80199f49b1f371cc471e61cc26e6",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/8a462224541b81943c6814e4c1615fdc756890": "27218eaf7127b5c8d40501bbe39fec2a",
".git/objects/63/d7ec8c3329322a0c1df177bd1d7fa1b865a53e": "f12e9594cd1d523e99d3ec83a6a8b3a4",
".git/objects/63/dfeb1119b2bdc1a671c9907f93f58586e26b61": "7a40670ca92731156ed19670f20faf5c",
".git/objects/65/77f67ae1d4288aa1f8a406fa6739383240570b": "27b1378c854fc8ee31af37778fdbcd00",
".git/objects/65/8e38b9266efc16b4814776673e0cfe3b59ba0f": "1363be30cb4704cff3b2cbd9e96ae497",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "58482343b41314a5c576148308f722ac",
".git/objects/6b/523756156635cbd1dd8ff87d4077bc0edc9708": "7d5b2a4423f416722a65f3a8589413a3",
".git/objects/6c/f17b91f1d92dee1ebe2411441122e0f7ce123c": "8b58c3b2b5a5eda3b73ce50d81f4bb59",
".git/objects/6d/0e2306e5fae657272ae4af5792d66d70449758": "a2065323d94d2a65f73188b5dca1e844",
".git/objects/6d/2537db43f12a41c499d62217ca6ee9c165adba": "11ed31f7694d894fefedb5b941aaeed7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "07b620207e0d1fea8c677d47bfc777a0",
".git/objects/6f/c1975b39585f6b2a87a31b4e0f3eb58ae038fe": "7e3b43f51397c44c769d2715c265f7a9",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/e0134698819e8c3fd27a4ce53646d23fd1c1a6": "64dc535fdb27741e3b2c5aae6d009050",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/1366b14f561e21282c1ba6e8ae0ba3106a0ee9": "879a4635ffe14f5195a7f2c153b82e4f",
".git/objects/77/3a3d6334c4b2d7f37663cff33c58f23d8acf76": "8546ff26dd71169a3bd0fbf431e2d8b1",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "88bf3ff855f2fc6a4845f4e9e4d0417a",
".git/objects/7b/40bd940f12d6cf6bdc5e36ec4c46909ac4b2d5": "fc4ce8a03b7b56c4a2aed7f6cbec415e",
".git/objects/7c/090160fc65d7e7c444e5b9351277d785069050": "fc1d3453d4e92de94b7d58dbcc7e0885",
".git/objects/7f/a40596b9e7b138b7891ac258fd93957921483b": "80f4a5dff9f043ce46531adfbcc0c8d2",
".git/objects/7f/c7599f4fdd918bba42574106785e17a3f6b870": "b333ac7403f6ee28e4f6ac2bfe75985b",
".git/objects/7f/d7056f19ecd4d759071c03e996f48363622a45": "046a951e5fbbb958599952fe9395e322",
".git/objects/80/1e754ba933763bc732c998ace181aa1a7574ed": "15f713e780916fe28a2db258519af567",
".git/objects/80/4405c51ba1f353d91313d1d97081ff1cb94f44": "861ac4ae9e8986c4e43a4c6cb55c91b0",
".git/objects/81/fc4abd8b1ff7dd0b9b5a1e3a0cb17ed565d52e": "641cd0d7b1fad3911153dbedf5617893",
".git/objects/82/96c7f11f9e3b6566850c4fe77275839988e89d": "c072abe9ba29e921918519ff1efc5015",
".git/objects/82/b7018934650e60eabab1c5855aef8df8c0c312": "771ff21b7a9d10506224dc26ca9c49ec",
".git/objects/83/589c70eb7b8b79ae32ddec226473553fa6b89d": "eeb1e7cd44ca7baa0683fff5601b16d4",
".git/objects/85/f3b14a6dedbee22810fc754cab15978305a67f": "43131fe3b2e8139c9c86770f96affd73",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/98851cc636d3cdeb1da95a5428a16c44ee347c": "f77a5dc55765dc6339eb0070d9c99590",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/4206cbdc36efe83ba93c7f4a8141f8f638f6dc": "e33e14eb2c0cd7cb2d875c454a530cae",
".git/objects/91/9237969a52ef3b89e533f6c8c0b0a0b7994d9e": "4330f8605bd06b4ce0b384685d1a3973",
".git/objects/93/6c0e51c39dde5cec6fc8c87858f6ec45949f98": "e9e6ea9962d4f364ed7011a4a69eaf12",
".git/objects/95/4fe717867c29963899d86e0dc1e5d521d00233": "b2b6e98b7b3491f78bf27bb70c0c1dc0",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/c50d503f6d4990b83c1892e41f2ba3b5be71dd": "e1fcd4af8bbda37a06a402946a9ede4e",
".git/objects/98/0cd6176b74abd95584976aca67c029b2dfabdd": "42a34a4360b4110ac46662fe5ae97afe",
".git/objects/a3/ce392682c1fed24cdf1f1c81d534c4b2d12fda": "204273a233a9b976c2c2dd0a1b154592",
".git/objects/a4/0e3cda6b003984d7ffecce4df4161fa0def945": "5977db0460ce5a86d96af20dfacb9e48",
".git/objects/a5/3c2128088eeca224d039b8466687c85f978a9e": "efa045b28996ba276baf12635a8fa446",
".git/objects/a5/d01b3169b9d9b45585379b0d2d00614b21692f": "8cae838b3fde004817adab0169918c24",
".git/objects/a6/eba91ec4991e049ec3ea852ff9afa9a164a842": "47d7ce160f3539d971abaf11d5d5af0b",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/af9fb52c4bd0fa2f40060981022faf5ac85eb8": "7bb79b0f4c01259ea13c2de2d46bcaa4",
".git/objects/b0/0b4853471e6e380923dffff270d08484414680": "0f57e4d679b2e323874b8bf3cff34004",
".git/objects/b0/5fc4a101f3e6b493f1097296ee57343d28935a": "330ef3b6045c292a3cb4b93f3a9791a2",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/ad1c9a05c89602084170a970be3f7b89a420bc": "64b367f34dadd2a544d9aee2d54e3ff6",
".git/objects/b3/e6bc979fe64ba72d74abd560546c36807d6409": "cd2e8b7c77ef7aeff1bcc0551a4b4dca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9817ea77bf36c63c9ac4c5e29582215e48d5a8": "19c2c9850bae043a058c794ef05d6e36",
".git/objects/c1/ae16d7dfaf9dca1b08bdfc1ec97d0df3169674": "f4361cc3c75359e601357b1fef7ffc0a",
".git/objects/c1/b05a76032fe113cd4bc59f9f7dc7af65430843": "cc74a93b7658d5e044d1267304a0b934",
".git/objects/c2/d32e183c3f4725bd936e9c8cd2b19b7e00ea1b": "6ad43af4dfabbcecdd0b0c7b461b2a05",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/e2c28a867eee30d5ac9393df47c979796a2559": "b9dd776ab665b5087ecdcfa3e3a0087e",
".git/objects/c5/226cb356ca7acdf4e5d5659f3c15cb1aaf2fa3": "1024e95f9898c86ec9bbb1017656ac55",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/2e793ebd09f3eb1c734ab7d9f4fed09cb823fd": "5b8fd6a411eeaa0afd8c5661b891372e",
".git/objects/cc/612afbb336f6ed183c58f37284b7f6a5367600": "5c4078d35555bc1f90d82db80f77b7f1",
".git/objects/cf/0c573c615b26a86839c4fd800739c33dc625c6": "6b6f3793cd8e134f6d3f0476cc8e5d26",
".git/objects/d0/4bddbe52183b68002e000ed69b4f68b69c44b5": "60c0658039e9a8b811160f6bc2f8eb49",
".git/objects/d0/af83fee63f7026e339f4cc1b5c7c860202e6d4": "5d0e4c361a3c846bd555cb0259fbe364",
".git/objects/d2/8afe0fdf20411146b425f73ebbefd876ffa8c7": "dc6326b046000614b974d4356ccd1561",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d9dcfd4506606863971bc5d6cdc87387c798d4": "d4b58b6e61808d1ace0c356873df113a",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/d5bb3d517991b6427cec807f1cb25222b456d0": "51e7db5b43e41468eac34546945fc907",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/fad3dc19450416680696e199431721a4eb5880": "c83e976a4ca630301808778006bd0f0f",
".git/objects/e0/c1a101454c8402594db5554df5a8fc9cced50d": "2acb9d9ef27336150df6f77a59b335bb",
".git/objects/e2/f4f38dc91294057e0147d7b10a706e30411750": "6a9b73105d7104204650bf703abfd1cf",
".git/objects/e3/156c83ca22e30bc05a20dd0b4fe2e8f740b327": "6969b5ea196c6bfd40c524bc684c03b2",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "475387042fa2b2200081e4284ce80c58",
".git/objects/e4/959aa2de2e1f401ec8705f6812cd14a810e3d0": "3bf31d85fa96f82b7269919388dd1f28",
".git/objects/e7/3db0dd4a830ac27792c9ca3e5040c137c8bb08": "c10730c7efa099cc82670d921da14833",
".git/objects/e8/0fe53425ef73031d9d37d37028d4162a2d7ce0": "5009554d2c456751ed2ace99f21a2059",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/2dd0443d281a9025384c0f2ad9f4ab67480242": "06ac32c42fa8f7d71c496ebe72d0052c",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/41b57da3b5dd5922936d1d4e21d57341de7744": "e00a0a3ca2a60134c9bf2d752e89c392",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/7b576d7fadae74ee5e541f9603de93aa459d8e": "044648f49180680836158c7d242a372a",
".git/objects/f8/3ed041b9b0e74b12e41668c33b3f03b9b8c180": "c098ef405d9357032ecb2cbd9dc9395a",
".git/objects/f8/f39c5b9726911e86344693ea1472e85eee1bb9": "a9030b5cde6494d4bc457a62e7ddb0f6",
".git/objects/fe/32ce280115077de454636645e6e9605277e93d": "3b21cbabfa4bf4667ed547d2823abd16",
".git/refs/heads/master": "b883aadd3fca09e8dffffca6da643d44",
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
"assets/NOTICES": "2f2e39ff39276ba606ec2f9e0f02caa7",
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
"flutter_bootstrap.js": "bb4615412726c904f8f993d364805304",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aafeb50942c072764943270e6971a12e",
"/": "aafeb50942c072764943270e6971a12e",
"main.dart.js": "a9584fdff8aa1c8ab02298ee13e31f0f",
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
