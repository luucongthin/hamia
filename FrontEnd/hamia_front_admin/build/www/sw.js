importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "6f2c6888e9f517bf8389b3622a5fcea7"
  },
  {
    "url": "app/app-19f7a8b704.js",
    "revision": "35038bedaf8dffaa54c4560fbd692749"
  },
  {
    "url": "app/vendor-568b4c23ef.js",
    "revision": "df24fb05214490dd982f5705ec6948c4"
  },
  {
    "url": "content/css/main-86482c2808.css",
    "revision": "e50330b9032327d172a921951a447073"
  },
  {
    "url": "content/css/vendor-bac433deed.css",
    "revision": "230e177ae3465f3986003db09aeb8eca"
  },
  {
    "url": "content/fonts/fontawesome-webfont-912ec66d75.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "content/fonts/glyphicons-halflings-regular-8988968814.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "content/fonts/ionicons-621bd38684.svg",
    "revision": "621bd386841f74e0053cb8e67f8a0604"
  },
  {
    "url": "content/images/hipster-ca854e6d07.png",
    "revision": "ca854e6d0785ba4b9d715049c0bdbcb3"
  },
  {
    "url": "content/images/hipster2x-1cd3a1d782.png",
    "revision": "1cd3a1d782e85ba37677c1a2099bc002"
  },
  {
    "url": "content/images/logo-jhipster-a30deb26b4.png",
    "revision": "a30deb26b4eb1521433021e326cbcc2c"
  },
  {
    "url": "i18n/angular-locale_en.js",
    "revision": "151556949d3a84a9b745591f620fcfea"
  },
  {
    "url": "i18n/en/activate.json",
    "revision": "fefc60d18b985c72bbd2b3c287f1059f"
  },
  {
    "url": "i18n/en/audits.json",
    "revision": "fbf45e7d75b61b2f6b48b52aebd98f0c"
  },
  {
    "url": "i18n/en/configuration.json",
    "revision": "7a11f8b97f1bae59520175d4e62022db"
  },
  {
    "url": "i18n/en/error.json",
    "revision": "5393de118a79be6397832910e1a534ec"
  },
  {
    "url": "i18n/en/gateway.json",
    "revision": "91b31ba48ec5878791eecadb44fe2727"
  },
  {
    "url": "i18n/en/global.json",
    "revision": "91c307237dee91a8b73779099efc1e80"
  },
  {
    "url": "i18n/en/health.json",
    "revision": "34ca6ef6a3d64e768a3b64367b855c7d"
  },
  {
    "url": "i18n/en/home.json",
    "revision": "5530fc82cf53c9598d259477bd4b6b2d"
  },
  {
    "url": "i18n/en/login.json",
    "revision": "56d48dd6606c503b91851723177cce85"
  },
  {
    "url": "i18n/en/logs.json",
    "revision": "42d21e975c5364bc620fa8b3e3adf453"
  },
  {
    "url": "i18n/en/metrics.json",
    "revision": "06f0a4be46f5fccf198a8639bdb212f3"
  },
  {
    "url": "i18n/en/password.json",
    "revision": "f88f329664bb04dc1cb70e6bd9035103"
  },
  {
    "url": "i18n/en/register.json",
    "revision": "9f5aadfe7ddc0d56a8184f465c70a98d"
  },
  {
    "url": "i18n/en/reset.json",
    "revision": "ef869205b05cdb318ea890f1ee743327"
  },
  {
    "url": "i18n/en/sessions.json",
    "revision": "ae088d7b5ac64cd4e6a863b46a423409"
  },
  {
    "url": "i18n/en/settings.json",
    "revision": "222e46dee7bf25104287e7e1160c20c8"
  },
  {
    "url": "i18n/en/user-management.json",
    "revision": "67c1e1be708eb76c212d2b7b8eef56be"
  },
  {
    "url": "index.html",
    "revision": "de9f80ebd9e6af02fe5cbb04e436a282"
  },
  {
    "url": "swagger-ui/css/print.css",
    "revision": "147d3ac3615a6b65be3ca7e6468e55d9"
  },
  {
    "url": "swagger-ui/css/reset.css",
    "revision": "721a281d71126476ef38ef785005ad0b"
  },
  {
    "url": "swagger-ui/css/screen.css",
    "revision": "568b2a77ecca19f1052f4af3387b6ca8"
  },
  {
    "url": "swagger-ui/css/style.css",
    "revision": "5fbd413229a0be36a732b1022680a9ff"
  },
  {
    "url": "swagger-ui/css/typography.css",
    "revision": "a61e5d4baafcb82421f0ab9559ab0812"
  },
  {
    "url": "swagger-ui/images/collapse.gif",
    "revision": "c3e148dd2d1a907d71de64f115fea341"
  },
  {
    "url": "swagger-ui/images/expand.gif",
    "revision": "303308eaa9c72e817d843a21fff7c363"
  },
  {
    "url": "swagger-ui/images/explorer_icons.png",
    "revision": "73d1f93d362fce5a26f1b1ac4ad93570"
  },
  {
    "url": "swagger-ui/images/favicon-16x16.png",
    "revision": "7cbb45c776f9416332ed4e2f20625d78"
  },
  {
    "url": "swagger-ui/images/favicon-32x32.png",
    "revision": "52df2d0533f3cf7491308432475a302e"
  },
  {
    "url": "swagger-ui/images/logo_small.png",
    "revision": "7212b5e621350942ecbf8f1a3834fa2c"
  },
  {
    "url": "swagger-ui/images/pet_store_api.png",
    "revision": "1dd69a040ebe4d74c45e4d3d141c34a9"
  },
  {
    "url": "swagger-ui/images/throbber.gif",
    "revision": "bfefe70e3951f1883a84e7bc4033fe97"
  },
  {
    "url": "swagger-ui/images/wordnik_api.png",
    "revision": "86c91314ec1a9958bb1d9951589c5073"
  },
  {
    "url": "swagger-ui/index.html",
    "revision": "f8e9f134d4370180581564b13e326dd8"
  },
  {
    "url": "swagger-ui/lang/en.js",
    "revision": "7c440affb98a62ab84e94ea5d8d83ccd"
  },
  {
    "url": "swagger-ui/lang/es.js",
    "revision": "71562ebdf329f0ebd7a22aa9ec79b1bf"
  },
  {
    "url": "swagger-ui/lang/fr.js",
    "revision": "5c3d6a0b6880665ed1942659055f5c4b"
  },
  {
    "url": "swagger-ui/lang/geo.js",
    "revision": "4df0e6af60a452dc64a50539a5c6f68a"
  },
  {
    "url": "swagger-ui/lang/it.js",
    "revision": "7f30ec6957dcf6d657e7b47ceba0f479"
  },
  {
    "url": "swagger-ui/lang/ja.js",
    "revision": "3fe74190f8406d60b044a838b4744933"
  },
  {
    "url": "swagger-ui/lang/ko-kr.js",
    "revision": "9166d3fae95e9a7cd4a1c61391daebcd"
  },
  {
    "url": "swagger-ui/lang/pl.js",
    "revision": "389b5ed50d756a6d72ab0c59aa2d174a"
  },
  {
    "url": "swagger-ui/lang/pt.js",
    "revision": "728b749a4eeaf63cb35a175ce4fc4dd2"
  },
  {
    "url": "swagger-ui/lang/ru.js",
    "revision": "8a7f3436c41865c036f25dd3200bd57d"
  },
  {
    "url": "swagger-ui/lang/tr.js",
    "revision": "755acffd181528cd33d83585b07f8d55"
  },
  {
    "url": "swagger-ui/lang/translator.js",
    "revision": "3bdb38d11a62f37f58be90aca1932b68"
  },
  {
    "url": "swagger-ui/lang/zh-cn.js",
    "revision": "bd6bf4ffb7b327be8976e5df36d4db6b"
  },
  {
    "url": "swagger-ui/lib/backbone-min.js",
    "revision": "3aa65f4d5feaf64d0bf0083e2a018ba3"
  },
  {
    "url": "swagger-ui/lib/es5-shim.js",
    "revision": "50bbaee56efbbd61d55b22db8eb80b1f"
  },
  {
    "url": "swagger-ui/lib/handlebars-2.0.0.js",
    "revision": "501c421a9bc201f50c76c8d28af0cb36"
  },
  {
    "url": "swagger-ui/lib/highlight.9.1.0.pack_extended.js",
    "revision": "8eca7ce2cdeeff20f120cf79a391659f"
  },
  {
    "url": "swagger-ui/lib/highlight.9.1.0.pack.js",
    "revision": "2021d18497fe2c196b4bfc0098ea85c9"
  },
  {
    "url": "swagger-ui/lib/jquery-1.8.0.min.js",
    "revision": "3a728460147fb9af7faf0e587b9fbf42"
  },
  {
    "url": "swagger-ui/lib/jquery.ba-bbq.min.js",
    "revision": "07c72646c76932834219ef6827451df3"
  },
  {
    "url": "swagger-ui/lib/jquery.slideto.min.js",
    "revision": "0860d2328e5a333731cf95de440f4356"
  },
  {
    "url": "swagger-ui/lib/jquery.wiggle.min.js",
    "revision": "7438b3ef10b182042dfa722f99ef2574"
  },
  {
    "url": "swagger-ui/lib/js-yaml.min.js",
    "revision": "0670caa509582618b12106144c32d53f"
  },
  {
    "url": "swagger-ui/lib/jsoneditor.min.js",
    "revision": "d4e890d92f40df14dbe4ed373a99b72a"
  },
  {
    "url": "swagger-ui/lib/lodash.min.js",
    "revision": "990f2d765417b750b9be905df44906f4"
  },
  {
    "url": "swagger-ui/lib/marked.js",
    "revision": "314b30dbc1b056c36d790e5b23fa4283"
  },
  {
    "url": "swagger-ui/lib/object-assign-pollyfill.js",
    "revision": "66ed782a40e6afae0c9be3252229b0f3"
  },
  {
    "url": "swagger-ui/lib/swagger-oauth.js",
    "revision": "ba93a9de85593a3cd64c6871f9fef32c"
  },
  {
    "url": "swagger-ui/lib/swagger-ui.min.js",
    "revision": "7204a454a504edc04def96c875aa0457"
  },
  {
    "url": "swagger-ui/o2c.html",
    "revision": "8c4d9a124473eb88319a4e2051b06b75"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
