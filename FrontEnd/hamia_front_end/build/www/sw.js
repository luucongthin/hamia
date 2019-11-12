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
    "revision": "11b6f6a437fc5e6452c286d9631bf8ca"
  },
  {
    "url": "app/app-ce786cd862.js",
    "revision": "6ef3f3fa6f3361f7caa7724b33cb9925"
  },
  {
    "url": "app/vendor-dccef94930.js",
    "revision": "d017c077a7c9368891f2d827b643e5b5"
  },
  {
    "url": "content/css/main-f03e1d0543.css",
    "revision": "316b7804fa7aa30f840d72ac48507b3b"
  },
  {
    "url": "content/css/vendor-1b1032498d.css",
    "revision": "e1cede9e9147ffde80c3965992a527e8"
  },
  {
    "url": "content/fonts/fontawesome-webfont-acf3dcb7ff.svg",
    "revision": "acf3dcb7ff752b5296ca23ba2c7c2606"
  },
  {
    "url": "content/fonts/glyphicons-halflings-regular-8988968814.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "content/fonts/ionicons-c037dbbc0e.svg",
    "revision": "c037dbbc0e6790f30e824a50010df5fb"
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
    "revision": "e5899216dc69e2f2fa5856c6e0feb7b8"
  },
  {
    "url": "i18n/en/audits.json",
    "revision": "b93b3be1191f42cf030ff9d7ccc37f6a"
  },
  {
    "url": "i18n/en/configuration.json",
    "revision": "0565ffc12ea2a16795fdeb3a3c4710dd"
  },
  {
    "url": "i18n/en/error.json",
    "revision": "52ab55bb0dd60fb1ba5a93429f2e3240"
  },
  {
    "url": "i18n/en/gateway.json",
    "revision": "ffa19369162419dd0ee5c92bde0a453e"
  },
  {
    "url": "i18n/en/global.json",
    "revision": "6a8c45d6ff3ebb835442dcff05af793b"
  },
  {
    "url": "i18n/en/health.json",
    "revision": "28984c55ae7d86bdad0e28768b9072a8"
  },
  {
    "url": "i18n/en/home.json",
    "revision": "b8e42d863c2e24124f25b1a79875bb73"
  },
  {
    "url": "i18n/en/login.json",
    "revision": "0decda09117f03f3edec557df353fcbb"
  },
  {
    "url": "i18n/en/logs.json",
    "revision": "e65dd44e8e675e47c4417556e0963ef1"
  },
  {
    "url": "i18n/en/metrics.json",
    "revision": "0438409b6319184408e1b71feb6e9b29"
  },
  {
    "url": "i18n/en/password.json",
    "revision": "a3ac8c1ce53bf0a935f8cb6b16f7d21a"
  },
  {
    "url": "i18n/en/register.json",
    "revision": "823fccad2a3c1d31f1c9c8eefd94132c"
  },
  {
    "url": "i18n/en/reset.json",
    "revision": "7c2d58684e66def37e34754d530b67b0"
  },
  {
    "url": "i18n/en/sessions.json",
    "revision": "95ea8bf37d849745ca8f787f59946a70"
  },
  {
    "url": "i18n/en/settings.json",
    "revision": "9c5ab771ab95ab56fdd7c2f29fd161ea"
  },
  {
    "url": "i18n/en/user-management.json",
    "revision": "46c9ae4ec790bba36da240b9c17b2a2c"
  },
  {
    "url": "index.html",
    "revision": "c5d457af8e654a5e6c49b3a1ead333a5"
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
    "revision": "47e6bba5ad726092a650c3e9575d1453"
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
