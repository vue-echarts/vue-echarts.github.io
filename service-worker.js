/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3a48451e3bdc9492b39629b7fa68c183"
  },
  {
    "url": "assets/css/0.styles.335c8287.css",
    "revision": "b131306c540d04ced381f11b301601d7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c33b2302.js",
    "revision": "de93684f6a082567fe24f72f267e6307"
  },
  {
    "url": "assets/js/10.c368a764.js",
    "revision": "f0f23224b1915814cdac1904ef3b1898"
  },
  {
    "url": "assets/js/11.eb1b4fb2.js",
    "revision": "72493dad5efae972dfc431b973f54537"
  },
  {
    "url": "assets/js/12.8a26a1b4.js",
    "revision": "6f2a5997a3bf09d669ba2718567e5c48"
  },
  {
    "url": "assets/js/13.cc8d1f97.js",
    "revision": "2517c9f176c6c1f894a195f89bf01e88"
  },
  {
    "url": "assets/js/14.212ae3f7.js",
    "revision": "0231895650bdc3079e73ef3c9c3e7226"
  },
  {
    "url": "assets/js/15.36c31ad1.js",
    "revision": "d561405ffe38e990674bdab95f2b5ffd"
  },
  {
    "url": "assets/js/16.e2efc028.js",
    "revision": "93d42b222e9e197e2a15c5b2eab8b0f8"
  },
  {
    "url": "assets/js/17.e6dbc177.js",
    "revision": "d927ba064ec195d9491953543ce3bced"
  },
  {
    "url": "assets/js/18.1b1d40bc.js",
    "revision": "e2271bfd8557cf30a5d2d8e82d8eb626"
  },
  {
    "url": "assets/js/19.fcd7a3f7.js",
    "revision": "21428bb13ed1fdcfeec5e01cb01b7011"
  },
  {
    "url": "assets/js/2.b5c254f6.js",
    "revision": "a5ead091750bc9f3f7b4307d3b16de07"
  },
  {
    "url": "assets/js/20.138349ba.js",
    "revision": "b0bc9e17074306593225ebb300d3b175"
  },
  {
    "url": "assets/js/21.e05fa7d3.js",
    "revision": "5e4b384c308355c1fd437bc5b4d23cad"
  },
  {
    "url": "assets/js/3.f7b78d35.js",
    "revision": "4d01660ad0cddae0c3f57fc7390c169e"
  },
  {
    "url": "assets/js/4.71439f96.js",
    "revision": "15f6438b4237edd56e834450c087b2c9"
  },
  {
    "url": "assets/js/5.4da93f01.js",
    "revision": "7df33dee350a1d1fb425893e8ac7ec7e"
  },
  {
    "url": "assets/js/6.89601d84.js",
    "revision": "c5170d322f11b8e345856689f293f80c"
  },
  {
    "url": "assets/js/7.464ca73f.js",
    "revision": "8401a762245960a1ad61743d0862ea42"
  },
  {
    "url": "assets/js/8.911ac19d.js",
    "revision": "4f7a53ca2c1c1a2afab659917939a67d"
  },
  {
    "url": "assets/js/9.e3b80125.js",
    "revision": "5394e05ff3e4a02f3db826afb5716246"
  },
  {
    "url": "assets/js/app.c8fda1a3.js",
    "revision": "94692042ec6b9bb6e5f8c4f012f11066"
  },
  {
    "url": "chart-lib/index.min.js",
    "revision": "8e43ef89a7b1471e634c03ada35c2a04"
  },
  {
    "url": "chart-lib/style.min.css",
    "revision": "49314a599419baa1a15726fcb66e5175"
  },
  {
    "url": "en/guide/data.html",
    "revision": "dad65bb80952dc6a2620046c786c7019"
  },
  {
    "url": "en/guide/event.html",
    "revision": "f3a4632ea158c252ba82497d17e5501a"
  },
  {
    "url": "en/guide/format.html",
    "revision": "2a6bef529e3fb99208ba8f28f85dbb82"
  },
  {
    "url": "en/guide/index.html",
    "revision": "6382d9efa29618af46aeba637b0ab6cb"
  },
  {
    "url": "en/guide/line.html",
    "revision": "937c9779e436feff4cb989859f67e4b1"
  },
  {
    "url": "en/guide/props.html",
    "revision": "21cd98445c435dcd390fede437c856d5"
  },
  {
    "url": "en/guide/start.html",
    "revision": "8c9f6710cd0d7907f5f0dcc32f5631ab"
  },
  {
    "url": "en/index.html",
    "revision": "4f8e84687205f09a36f8b655b74cb6da"
  },
  {
    "url": "guide/data.html",
    "revision": "d8a2d3fc98b1f8ae66f311df6d885cd9"
  },
  {
    "url": "guide/event.html",
    "revision": "1afb90ad565b272f9b34c09039fbf57f"
  },
  {
    "url": "guide/format.html",
    "revision": "99c277bb21d18f956eccb4788bb75b22"
  },
  {
    "url": "guide/index.html",
    "revision": "3457c7f4884dfcfa7d4463459580d498"
  },
  {
    "url": "guide/line.html",
    "revision": "7fe21a1000d32a12483640f7b4af4468"
  },
  {
    "url": "guide/props.html",
    "revision": "c3eba6652a7337c2dd1e73d0fd775c18"
  },
  {
    "url": "guide/start.html",
    "revision": "b254c446099b7689b8ea365c0abcf680"
  },
  {
    "url": "index.html",
    "revision": "e033778c4b6a4c9320f9e930e5a8ec9a"
  },
  {
    "url": "index.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "style.css",
    "revision": "ba1ca5861c9869a2362f5daa175e8f0b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
