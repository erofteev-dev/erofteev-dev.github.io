if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const d=e=>i(e,c),r={module:{uri:c},exports:o,require:d};s[c]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-8deae47f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"sw"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"e98091d046e61eebdf1aea10fd273f99"},{url:"assets/css/main.css",revision:"db1174dae63bd8504c7be813c56ba9f1"},{url:"assets/images/icons/144x144.png",revision:"9f333f1d6d7cd7af1d4b21d5ce7315d5"},{url:"assets/images/icons/180x180.png",revision:"9d4e89971dca052a03840db48babb47f"},{url:"assets/images/icons/192x192.png",revision:"8a50866e5347c915d34e9b445a0883b7"},{url:"assets/images/icons/256x256.png",revision:"52b297f190b88f7bc1b43993f7326b27"},{url:"assets/images/icons/512x512.png",revision:"c948767dfe5ee8aca3cc2a776d5264d3"},{url:"assets/images/icons/96x96.png",revision:"99f2009da152006f086df83d73d4b6a0"},{url:"assets/images/icons/apple-icon-114x114.png",revision:"008a20f66fc4638bb09a1f644ce01b48"},{url:"assets/images/icons/apple-icon-120x120.png",revision:"40009de0f1677654a7a4ad96075f1c51"},{url:"assets/images/icons/apple-icon-152x152.png",revision:"674c11c67c661e8eb6b0574bb180e314"},{url:"assets/images/icons/apple-icon-57x57.png",revision:"82f468cb8b14a7ebad224fc4f5f375bb"},{url:"assets/images/icons/apple-icon-60x60.png",revision:"3bf2a2b811fbda61e1cee416fc3768f9"},{url:"assets/images/icons/apple-icon-72x72.png",revision:"e7c5cf2b64e64c47074f0f648752456c"},{url:"assets/images/icons/apple-icon-76x76.png",revision:"57ae0a5d8e0d046bd8040287dc3fd2e3"},{url:"assets/images/icons/favicon-16x16.png",revision:"029a3ece8f54beebf54d5c96df87179d"},{url:"assets/images/icons/favicon-32x32.png",revision:"90537c7dfb45175b9227af3da3465834"},{url:"assets/images/icons/maskable.png",revision:"c948767dfe5ee8aca3cc2a776d5264d3"},{url:"assets/js/main.js",revision:"9cc341557e140c1e61e6594d8c1fc2c6"},{url:"eshhyo-odna-stazapis-v-bloge/images/cat.jpg",revision:"ecee4736b9b06923f86ecf93db0d5723"},{url:"eshhyo-odna-stazapis-v-bloge/images/cat.webp",revision:"1c842ad19e565ec8904a2e081fbfede3"},{url:"eshhyo-odna-stazapis-v-bloge/images/cat@2x.jpg",revision:"0ae9fbc791dda3b88e4ac6c7e09d3d78"},{url:"eshhyo-odna-stazapis-v-bloge/images/cat@2x.webp",revision:"1fb8a5bca5393556f075d5773a987f4b"},{url:"eshhyo-odna-stazapis-v-bloge/index.html",revision:"56fe478d91af0940d057f8f9450bae84"},{url:"hello-world/index.html",revision:"c6dcd05937445932841a868005061ed9"},{url:"index.html",revision:"8f15b8abbda6df9cee2acf4679bb2157"},{url:"manifest.json",revision:"3ebe9362f1846ff00ca127ccd8ffcce2"},{url:"privacy/index.html",revision:"0a8d85f3cf47eb934863d56070c336c7"},{url:"search.json",revision:"b99da5f63c1ea0f1398692679e37bae9"},{url:"tags/blog/index.html",revision:"48a0edc4254b4c89243a50a30a8505b6"},{url:"tags/index.html",revision:"da0e6aeb157327a814a5317160da3937"}],{}),e.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=sw.js.map
