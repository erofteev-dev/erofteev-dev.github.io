if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const f=e=>i(e,o),r={module:{uri:o},exports:c,require:f};s[o]=Promise.all(a.map((e=>r[e]||f(e)))).then((e=>(n(...e),c)))}}define(["./workbox-8deae47f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"sw"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"9f06b153cac20fb86cae88eb9279bc31"},{url:"assets/css/main.css",revision:"79f7e88a2d088fb9052cd4f6d5aaa399"},{url:"assets/fonts/Manrope/Manrope-Bold.ttf",revision:"69258532ce99ef9abf8220e0276fff04"},{url:"assets/fonts/Manrope/Manrope-ExtraBold.ttf",revision:"8541582abce817ab8857c51ae0a35ca9"},{url:"assets/fonts/Manrope/Manrope-ExtraLight.ttf",revision:"100308b8ce2da4b67f4850e9b9252b26"},{url:"assets/fonts/Manrope/Manrope-Light.ttf",revision:"9e353f65739cc41a37bed272850cf92e"},{url:"assets/fonts/Manrope/Manrope-Medium.ttf",revision:"aa9897f9fa37c84d7b9d3d05a8a6bc07"},{url:"assets/fonts/Manrope/Manrope-Regular.ttf",revision:"f8105661cf5923464f0db8290746d2f9"},{url:"assets/fonts/Manrope/Manrope-SemiBold.ttf",revision:"4410f0d144bea752f9bfb5f33909e0c5"},{url:"assets/fonts/NAMU-Pro.woff2",revision:"9d55d8fdb6d073438f9d3af8b528c908"},{url:"assets/images/icons/144x144.png",revision:"9f333f1d6d7cd7af1d4b21d5ce7315d5"},{url:"assets/images/icons/180x180.png",revision:"9d4e89971dca052a03840db48babb47f"},{url:"assets/images/icons/192x192.png",revision:"8a50866e5347c915d34e9b445a0883b7"},{url:"assets/images/icons/256x256.png",revision:"52b297f190b88f7bc1b43993f7326b27"},{url:"assets/images/icons/512x512.png",revision:"c948767dfe5ee8aca3cc2a776d5264d3"},{url:"assets/images/icons/96x96.png",revision:"99f2009da152006f086df83d73d4b6a0"},{url:"assets/images/icons/apple-icon-114x114.png",revision:"008a20f66fc4638bb09a1f644ce01b48"},{url:"assets/images/icons/apple-icon-120x120.png",revision:"40009de0f1677654a7a4ad96075f1c51"},{url:"assets/images/icons/apple-icon-152x152.png",revision:"674c11c67c661e8eb6b0574bb180e314"},{url:"assets/images/icons/apple-icon-57x57.png",revision:"82f468cb8b14a7ebad224fc4f5f375bb"},{url:"assets/images/icons/apple-icon-60x60.png",revision:"3bf2a2b811fbda61e1cee416fc3768f9"},{url:"assets/images/icons/apple-icon-72x72.png",revision:"e7c5cf2b64e64c47074f0f648752456c"},{url:"assets/images/icons/apple-icon-76x76.png",revision:"57ae0a5d8e0d046bd8040287dc3fd2e3"},{url:"assets/images/icons/favicon-16x16.png",revision:"029a3ece8f54beebf54d5c96df87179d"},{url:"assets/images/icons/favicon-32x32.png",revision:"90537c7dfb45175b9227af3da3465834"},{url:"assets/images/icons/maskable.png",revision:"c948767dfe5ee8aca3cc2a776d5264d3"},{url:"assets/js/main.js",revision:"b99e919be48309574698f072256c4886"},{url:"favicon.ico",revision:"2ee25a53c1d6196e385a01d29b1ca9c1"},{url:"index.html",revision:"b3326ad5c90ed9ee47022cd5c73e961b"},{url:"lokalnyj-server-php-i-mysql-s-pomoshhyu-docker-compose/index.html",revision:"d2d42f371065f7291584c4fddfe5ff10"},{url:"manifest.json",revision:"1986d601a53e63989101459a29068e0e"},{url:"privacy/index.html",revision:"dae47ab12b77cc12eadc4c1865737473"},{url:"search.json",revision:"e9da4dfc939005508ebd0e0dc37c77df"},{url:"tag/backend/index.html",revision:"e0786cc8968f05f8f61f7cbe37dea00e"}],{}),e.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=sw.js.map
