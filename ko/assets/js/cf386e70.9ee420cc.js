"use strict";(self.webpackChunkshotit_frontend=self.webpackChunkshotit_frontend||[]).push([[938],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=s(r),c=a,h=p["".concat(u,".").concat(c)]||p[c]||m[c]||l;return r?n.createElement(h,i(i({ref:e},d),{},{components:r})):n.createElement(h,i({ref:e},d))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[p]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5309:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(3117),a=(r(7294),r(3905));const l={sidebar_label:"Account and Limits",sidebar_position:4},i="Account and Limits",o={unversionedId:"account_and_limits",id:"account_and_limits",title:"Account and Limits",description:"HTTP Rate Limits",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/account_and_limits.md",sourceDirName:".",slug:"/account_and_limits",permalink:"/shotit-frontend/ko/docs/account_and_limits",draft:!1,editUrl:"https://github.com/shotit/shotit-frontend/tree/main/docs/account_and_limits.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Account and Limits",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"API Usages",permalink:"/shotit-frontend/ko/docs/api_usage"},next:{title:"Code of Conduct",permalink:"/shotit-frontend/ko/docs/CODE_OF_CONDUCT"}},u={},s=[{value:"HTTP Rate Limits",id:"http-rate-limits",level:2},{value:"API Search Quota and Limits",id:"api-search-quota-and-limits",level:2},{value:"Sponsor tiers",id:"sponsor-tiers",level:3},{value:"Search Quota",id:"search-quota",level:3},{value:"Concurrency",id:"concurrency",level:3},{value:"Priority",id:"priority",level:3}],d={toc:s},p="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"account-and-limits"},"Account and Limits"),(0,a.kt)("h2",{id:"http-rate-limits"},"HTTP Rate Limits"),(0,a.kt)("p",null,"The API server has a global request rate limit of 60/min per IP address. Regardless of which url endpoint you're calling. This is always counted by IP address, even if you request with an API Key."),(0,a.kt)("p",null,"The rate limit info is included in the HTTP header. If you hit this HTTP rate limit, request would fail with HTTP 429 (Too Many Requests)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"x-ratelimit-limit: 60\nx-ratelimit-remaining: 59\nx-ratelimit-reset: 1620537960\n")),(0,a.kt)("p",null,"This limit also applies to to other HTTP servers."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Server"),(0,a.kt)("th",{parentName:"tr",align:null},"Hostname"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Rate Limit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Web server"),(0,a.kt)("td",{parentName:"tr",align:null},"shotit"),(0,a.kt)("td",{parentName:"tr",align:null},"600/min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"API server"),(0,a.kt)("td",{parentName:"tr",align:null},"api.shotit"),(0,a.kt)("td",{parentName:"tr",align:null},"60/min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Media server"),(0,a.kt)("td",{parentName:"tr",align:null},"media.shotit"),(0,a.kt)("td",{parentName:"tr",align:null},"60/min")))),(0,a.kt)("h2",{id:"api-search-quota-and-limits"},"API Search Quota and Limits"),(0,a.kt)("h3",{id:"sponsor-tiers"},"Sponsor tiers"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Sponsor tiers"),(0,a.kt)("th",{parentName:"tr",align:null},"monthly quota"),(0,a.kt)("th",{parentName:"tr",align:null},"concurrency"),(0,a.kt)("th",{parentName:"tr",align:null},"priority"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"free"),(0,a.kt)("td",{parentName:"tr",align:null},"1000"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0 (lowest)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$1"),(0,a.kt)("td",{parentName:"tr",align:null},"1000"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$5"),(0,a.kt)("td",{parentName:"tr",align:null},"5000"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$10"),(0,a.kt)("td",{parentName:"tr",align:null},"10000"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$20"),(0,a.kt)("td",{parentName:"tr",align:null},"20000"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$50"),(0,a.kt)("td",{parentName:"tr",align:null},"50000"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$100"),(0,a.kt)("td",{parentName:"tr",align:null},"100000"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"6 (highest)")))),(0,a.kt)("p",null,"free tier (non-sponsors) has no account and has no API Key. But they can still use the API without and API Key. They would be identified by IP address. Any unique IP address would be considered as one unique user."),(0,a.kt)("h3",{id:"search-quota"},"Search Quota"),(0,a.kt)("p",null,"If you are a sponsor, you can still use the API without an API Key. This grant you extra quota in addition to free tiers. Which means if your program use the API Key in a tricky way, you could get 1000 (without API Key) + 1000 (with API Key) = 2000 monthly quota."),(0,a.kt)("p",null,"Search quota only deducts when server has successfully returned the results (HTTP 200). It doesn't count failed search requests, including HTTP 4xx and 5xx. So you don't have to worry about wasting quota on malformed requests, broken images, throttled requests or database errors."),(0,a.kt)("p",null,"Search Quota reset every 1st of each month. It you have reached your monthly quota, search request would fail with HTTP 402."),(0,a.kt)("h3",{id:"concurrency"},"Concurrency"),(0,a.kt)("p",null,"Concurrency only applies to the /search endpoint."),(0,a.kt)("p",null,"Concurrency is the number of simultaneous (parallel) requests you can make to the API server."),(0,a.kt)("p",null,"If your concurrency is 1, you should send your request one after another. If you send a second request before the first request respond, it would fail with HTTP 402. If your concurrency is 2, your 3rd request would fail when server is already processing 2 of your previous requests. If you have a very popular chat bot that handles multiple requests at the same time, you would hit this limit very often."),(0,a.kt)("p",null,"Tips and solutions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ask the API server to do less stuff for you. Avoid using image url and the ",(0,a.kt)("inlineCode",{parentName:"li"},"cutBorders"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"imdbInfo")," params. These features takes some time for the server to download and process. And the longer the requests takes, the higher chance it would block your next request."),(0,a.kt)("li",{parentName:"ul"},"if your program is a distributed app like mobile app, send the API request directly from your clients without using API Key."),(0,a.kt)("li",{parentName:"ul"},"if your program is async (e.g. webhook/bots), implement a queue that send search requests one after another"),(0,a.kt)("li",{parentName:"ul"},"or simply retry a few times when fails. (it's fine unless you retry like forever)"),(0,a.kt)("li",{parentName:"ul"},"also consider to donate more to get more concurrency limit.")),(0,a.kt)("h3",{id:"priority"},"Priority"),(0,a.kt)("p",null,"With limited processing power available, the server has priority queue to handle requests."),(0,a.kt)("p",null,"The server has multiple priority queues with a fixed total queue length. If the queue is full, upcoming new requests would be rejected with HTTP 503. If you have priority 5, server would only reject your request only when queue 6 and queue 5 is full, regardless of the queues below you. If you have priority 0, you'll only have your request processed when all the queue has empty slots left."),(0,a.kt)("p",null,"Assume the max queue length is 8:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Current queue"),(0,a.kt)("th",{parentName:"tr",align:null},"Acceptable request"),(0,a.kt)("th",{parentName:"tr",align:null},"Rejecting request"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udfe6\ud83d\udfe6\ud83d\udfe6\ud83d\udfe6\ud83d\udfe6\ud83d\udfe6\ud83d\udfe6\ud83d\udfe6"),(0,a.kt)("td",{parentName:"tr",align:null},"0\ufe0f\u20e32\ufe0f\u20e35\ufe0f\u20e36\ufe0f\u20e3"),(0,a.kt)("td",{parentName:"tr",align:null},"(none)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6\ufe0f\u20e35\ufe0f\u20e32\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e3\ud83d\udfe6"),(0,a.kt)("td",{parentName:"tr",align:null},"0\ufe0f\u20e32\ufe0f\u20e35\ufe0f\u20e36\ufe0f\u20e3"),(0,a.kt)("td",{parentName:"tr",align:null},"(none)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e35\ufe0f\u20e32\ufe0f\u20e32\ufe0f\u20e32\ufe0f\u20e30\ufe0f\u20e3"),(0,a.kt)("td",{parentName:"tr",align:null},"2\ufe0f\u20e35\ufe0f\u20e36\ufe0f\u20e3"),(0,a.kt)("td",{parentName:"tr",align:null},"0\ufe0f\u20e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e35\ufe0f\u20e32\ufe0f\u20e32\ufe0f\u20e32\ufe0f\u20e32\ufe0f\u20e3"),(0,a.kt)("td",{parentName:"tr",align:null},"5\ufe0f\u20e36\ufe0f\u20e3"),(0,a.kt)("td",{parentName:"tr",align:null},"0\ufe0f\u20e32\ufe0f\u20e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e35\ufe0f\u20e35\ufe0f\u20e3"),(0,a.kt)("td",{parentName:"tr",align:null},"6\ufe0f\u20e3"),(0,a.kt)("td",{parentName:"tr",align:null},"0\ufe0f\u20e32\ufe0f\u20e35\ufe0f\u20e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e36\ufe0f\u20e3"),(0,a.kt)("td",{parentName:"tr",align:null},"(none)"),(0,a.kt)("td",{parentName:"tr",align:null},"0\ufe0f\u20e32\ufe0f\u20e35\ufe0f\u20e36\ufe0f\u20e3")))),(0,a.kt)("p",null,"Whether there would be a queue or not depends on traffic conditions. You may take a look at the server traffic at https://shotit/about to guess when you would encounter a traffic jam."))}m.isMDXComponent=!0}}]);