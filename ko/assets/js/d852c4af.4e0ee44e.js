"use strict";(self.webpackChunkshotit_frontend=self.webpackChunkshotit_frontend||[]).push([[350],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>j,contentTitle:()=>P,default:()=>E,frontMatter:()=>I,metadata:()=>q,toc:()=>S});var n=a(3117),r=a(7294),l=a(3905),o=a(6010),i=a(2466),s=a(6550),p=a(1980),u=a(7392),m=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=k({queryString:a,groupId:n}),[u,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=s??u;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),d(e)}),[p,d,l]),tabValues:l}}var g=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function x(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==l&&(m(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:d},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(x,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(f,(0,n.Z)({key:String(t)},e))}const T={tabItem:"tabItem_Ymn6"};function w(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(T.tabItem,n),hidden:a},t)}const I={sidebar_label:"API Usages",sidebar_position:3},P="API Usages",q={unversionedId:"api_usage",id:"api_usage",title:"API Usages",description:"Shotit API provides a HTTP interface for developers to interact with Shotit programmatically.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api_usage.mdx",sourceDirName:".",slug:"/api_usage",permalink:"/shotit-frontend/ko/docs/api_usage",draft:!1,editUrl:"https://github.com/shotit/shotit-frontend/tree/main/docs/api_usage.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"API Usages",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Further Documentation",permalink:"/shotit-frontend/ko/docs/FURTHER_DOCUMENTATION"},next:{title:"Account and Limits",permalink:"/shotit-frontend/ko/docs/account_and_limits"}},j={},S=[{value:"/search",id:"search",level:2},{value:"Search by image URL",id:"search-by-image-url",level:3},{value:"Search by image upload",id:"search-by-image-upload",level:3},{value:"Search by FORM POST (multipart/form-data)",id:"search-by-form-post-multipartform-data",level:3},{value:"Cut Black Borders",id:"cut-black-borders",level:3},{value:"Filter by imdb ID",id:"filter-by-imdb-id",level:3},{value:"Search Image Format",id:"search-image-format",level:3},{value:"Response format",id:"response-format",level:3},{value:"Error codes",id:"error-codes",level:3},{value:"Media Preview",id:"media-preview",level:3},{value:"/me",id:"me",level:2},{value:"Using the API with API Keys",id:"using-the-api-with-api-keys",level:2},{value:"Using API Keys in HTTP header",id:"using-api-keys-in-http-header",level:3},{value:"Using API Keys in query string",id:"using-api-keys-in-query-string",level:3}],C={toc:S},O="wrapper";function E(e){let{components:t,...a}=e;return(0,l.kt)(O,(0,n.Z)({},C,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-usages"},"API Usages"),(0,l.kt)("p",null,"Shotit API provides a HTTP interface for developers to interact with ",(0,l.kt)("inlineCode",{parentName:"p"},"Shotit")," programmatically."),(0,l.kt)("p",null,"Using the API, you can develop programs such as: chat bots, browser plugins, video tagging / deduplication applications, games or whatever scripts that you need to know the video info from a screenshot."),(0,l.kt)("admonition",{title:"My tip",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Please replace ",(0,l.kt)("inlineCode",{parentName:"p"},"api.yourendpoints.domain")," with your own shotit api service domain.")),(0,l.kt)("h2",{id:"search"},"/search"),(0,l.kt)("h3",{id:"search-by-image-url"},"Search by image URL"),(0,l.kt)(v,{mdxType:"Tabs"},(0,l.kt)(w,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://api.yourendpoints.domain/search?url=https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png"\n'))),(0,l.kt)(w,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await fetch(\n  `https://api.yourendpoints.domain/search?url=${encodeURIComponent(\n    'https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png'\n  )}`\n).then((e) => e.json());\n"))),(0,l.kt)(w,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nimport urllib.parse\nrequests\n.get("https://api.yourendpoints.domain/search?url={}"\n  .format(urllib.parse.quote_plus("https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png"))\n).json()\n'))),(0,l.kt)(w,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod "https://api.yourendpoints.domain/search?url=https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png"\n')))),(0,l.kt)("p",null,"This method is the easiest if your image is already hosted somewhere in public. Otherwise, you must upload the image."),(0,l.kt)("h3",{id:"search-by-image-upload"},"Search by image upload"),(0,l.kt)(v,{mdxType:"Tabs"},(0,l.kt)(w,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --data-binary "@demo.jpg" https://api.yourendpoints.domain/search\n'))),(0,l.kt)(w,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// For nodejs only\nimport fs from 'fs';\nimport fetch from 'node-fetch';\nawait fetch('https://api.yourendpoints.domain/search', {\n  method: 'POST',\n  body: fs.readFileSync('demo.jpg'),\n  headers: { 'Content-type': 'image/jpeg' },\n}).then((e) => e.json());\n"))),(0,l.kt)(w,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nrequests.post("https://api.yourendpoints.domain/search",\n  data=open("demo.jpg", "rb"),\n  headers={"Content-Type": "image/jpeg"}\n).json()\n'))),(0,l.kt)(w,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-RestMethod -Method Post -InFile .\\demo.jpg https://api.yourendpoints.domain/search\n")))),(0,l.kt)("p",null,"Supported Content-Types are ",(0,l.kt)("inlineCode",{parentName:"p"},"image/*"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"video/*"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"application/octet-stream")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,l.kt)("p",null,"File size is limited to 25MB. The server would throw HTTP 413 Payload Too Large if it is too large."),(0,l.kt)("h3",{id:"search-by-form-post-multipartform-data"},"Search by FORM POST (multipart/form-data)"),(0,l.kt)(v,{mdxType:"Tabs"},(0,l.kt)(w,{value:"html",label:"HTML",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<form\n  action="https://api.yourendpoints.domain/search"\n  method="POST"\n  enctype="multipart/form-data"\n>\n  <input type="file" name="image" />\n  <input type="submit" />\n</form>\n'))),(0,l.kt)(w,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -F "image=@demo.jpg" https://api.yourendpoints.domain/search\n'))),(0,l.kt)(w,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// For web browsers only\nconst formData = new FormData();\nformData.append('image', imageBlob);\nawait fetch('https://api.yourendpoints.domain/search', {\n  method: 'POST',\n  body: formData,\n}).then((e) => e.json());\n"))),(0,l.kt)(w,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nrequests.post("https://api.yourendpoints.domain/search",\n  files={"image": open("demo.jpg", "rb")}\n).json()\n'))),(0,l.kt)(w,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'// Requires PowerShell 7.x\nInvoke-RestMethod -Method Post -Form @{image=Get-Item -Path "demo.jpg"} https://api.yourendpoints.domain/search\n')))),(0,l.kt)("p",null,"File size is limited to 25MB. The server would throw HTTP 413 Payload Too Large if it is too large."),(0,l.kt)("h3",{id:"cut-black-borders"},"Cut Black Borders"),(0,l.kt)("p",null,"shotit can detect black borders automatically and cut away unnecessary parts of the images that would affect search results accuracy. This is useful if your image is a screencap from a smartphone or iPad that contains black bars."),(0,l.kt)("p",null,"To enable black border crop, add ",(0,l.kt)("inlineCode",{parentName:"p"},"cutBorders")," to the query string. e.g."),(0,l.kt)(v,{mdxType:"Tabs"},(0,l.kt)(w,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://api.yourendpoints.domain/search?cutBorders&url=https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png"\n'))),(0,l.kt)(w,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await fetch(\n  `https://api.yourendpoints.domain/search?cutBorders&url=${encodeURIComponent(\n    'https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png'\n  )}`\n).then((e) => e.json());\n"))),(0,l.kt)(w,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nimport urllib.parse\nrequests\n.get("https://api.yourendpoints.domain/search?cutBorders&url={}"\n  .format(urllib.parse.quote_plus("https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png"))\n).json()\n'))),(0,l.kt)(w,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod "https://api.yourendpoints.domain/search?cutBorders&url=https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png"\n')))),(0,l.kt)("h3",{id:"filter-by-imdb-id"},"Filter by imdb ID"),(0,l.kt)("p",null,"You can search for a matching scene only in a particular anime by imdb ID. This is useful when you are certain about the anime name but cannot remember which episode."),(0,l.kt)("p",null,"First you have to look for the imdb ID of your anime from ",(0,l.kt)("a",{parentName:"p",href:"https://imdb.co/"},"imdb")," first. Then add ",(0,l.kt)("inlineCode",{parentName:"p"},"imdbID=1")," to the query string. e.g. imdb ID of Cowboy Bebop is 1"),(0,l.kt)(v,{mdxType:"Tabs"},(0,l.kt)(w,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://api.yourendpoints.domain/search?imdbID=1&url=https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png"\n'))),(0,l.kt)(w,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await fetch(\n  `https://api.yourendpoints.domain/search?imdbID=1&url=${encodeURIComponent(\n    'https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png'\n  )}`\n).then((e) => e.json());\n"))),(0,l.kt)(w,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nimport urllib.parse\nrequests\n.get("https://api.yourendpoints.domain/search?imdbID=1&url={}"\n  .format(urllib.parse.quote_plus("https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png"))\n).json()\n'))),(0,l.kt)(w,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod "https://api.yourendpoints.domain/search?imdbID=1&url=https://i.ibb.co/KGwVkqy/big-buck-bunny-10.png"\n')))),(0,l.kt)("h3",{id:"search-image-format"},"Search Image Format"),(0,l.kt)("p",null,"shotit support any media format that can be decoded by ",(0,l.kt)("a",{parentName:"p",href:"https://www.ffmpeg.org/"},"ffmpeg"),", including video and gif. When using video / gif, only the 1st frame would be extracted for searching."),(0,l.kt)("p",null,"Your image / video must be smaller than 25MB. Otherwise it would fail with HTTP 413 (Request Entity Too Large)."),(0,l.kt)("p",null,"The recommended resolution is 640 x 360px, higher resolution doesn't yield better search results. The algorithm is also resistant to jpeg artifacts, so you don't have to use uncompressed formats like png."),(0,l.kt)("h3",{id:"response-format"},"Response format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "frameCount": 745506,\n  "error": "",\n  "result": [\n    {\n      "imdb": 99939,\n      "filename": "Nekopara - OVA (BD 1280x720 x264 AAC).mp4",\n      "episode": null,\n      "from": 97.75,\n      "to": 98.92,\n      "similarity": 0.9440424588727485,\n      "video": "https://media.shotit/video/99939/Nekopara%20-%20OVA%20(BD%201280x720%20x264%20AAC).mp4?t=98.335&now=1653892514&token=xxxxxxxxxxxxxx",\n      "image": "https://media.shotit/image/99939/Nekopara%20-%20OVA%20(BD%201280x720%20x264%20AAC).mp4.jpg?t=98.335&now=1653892514&token=xxxxxxxxxxxxxx"\n    }\n  ]\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"frameCount"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of frames searched"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"Search results (see table below)"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of Objects")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"imdb"),(0,l.kt)("td",{parentName:"tr",align:null},"The matching imdb ID or imdb info"),(0,l.kt)("td",{parentName:"tr",align:null},"number or object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filename"),(0,l.kt)("td",{parentName:"tr",align:null},"The filename of file where the match is found"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"episode"),(0,l.kt)("td",{parentName:"tr",align:null},"The extracted episode number from filename"),(0,l.kt)("td",{parentName:"tr",align:null},"Refer to ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/soruly/aniep"},"aniep"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"Starting time of the matching scene (seconds)"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"Ending time of the matching scene (seconds)"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"similarity"),(0,l.kt)("td",{parentName:"tr",align:null},"Similarity compared to the search image"),(0,l.kt)("td",{parentName:"tr",align:null},"number (0 to 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"video"),(0,l.kt)("td",{parentName:"tr",align:null},"URL to the preview video of the matching scene"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"URL to the preview image of the matching scene"),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Results are sorted from most similar to least similar"),(0,l.kt)("li",{parentName:"ul"},"Similarity lower than 90% are most likely incorrect results. It's up to you to judge what is a match and what is just visually similar."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"episode")," can be null because it is just a result of parsing the ",(0,l.kt)("inlineCode",{parentName:"li"},"filename")," with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/soruly/aniep"},"aniep"))),(0,l.kt)("p",null,"By default, it only returns imdb ID for search results. To get more anime info, make a second query to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/imdb/ApiV2-GraphQL-Docs"},"imdb API"),". If you need chinese-translated titles, take a look at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/soruly/imdb-chinese"},"imdb-chinese")),(0,l.kt)("h3",{id:"error-codes"},"Error codes"),(0,l.kt)("p",null,"Example Error response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error": "Concurrency limit exceeded"\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Causes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid image url / Failed to process image / OpenCV: Failed to detect and cut borders")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"402"),(0,l.kt)("td",{parentName:"tr",align:null},"Search quota depleted / Concurrency limit exceeded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid API key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"405"),(0,l.kt)("td",{parentName:"tr",align:null},"Method Not Allowed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"Internal Server Error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503"),(0,l.kt)("td",{parentName:"tr",align:null},"Search queue is full / Database is not responding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"504"),(0,l.kt)("td",{parentName:"tr",align:null},"Server is overloaded")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'the "error" value is empty string when there\'s no error')),(0,l.kt)("h3",{id:"media-preview"},"Media Preview"),(0,l.kt)("p",null,"The url you obtained from ",(0,l.kt)("inlineCode",{parentName:"p"},"image")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"video")," from search result is served by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/soruly/shotit-media"},"shotit-media")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"These urls would expire in 300 seconds (5 minutes)")),(0,l.kt)("p",null,"It can generate image or video preview of 3 sizes by appending ",(0,l.kt)("inlineCode",{parentName:"p"},"size=l")," (large), ",(0,l.kt)("inlineCode",{parentName:"p"},"size=m")," (medium, default) or ",(0,l.kt)("inlineCode",{parentName:"p"},"size=s")," (small) at the end of the url. e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://media.shotit/image/xxx/xxxxxx.mp4.jpg?t=0&now=1653892514&token=xxxxx&size=s\nhttps://media.shotit/video/xxx/xxxxxx.mp4?t=0&now=1653892514&token=xxxxx&size=s\n")),(0,l.kt)("p",null,"For video preview, it can generate a video with sound (default), or a muted video by appending ",(0,l.kt)("inlineCode",{parentName:"p"},"mute")," to the end of url. e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://media.shotit/video/xxx/xxxxxx.mp4?t=0&now=1653892514&token=xxxxx&mute\nhttps://media.shotit/video/xxx/xxxxxx.mp4?t=0&now=1653892514&token=xxxxx&size=s&mute\n")),(0,l.kt)("p",null,"The media server would detect boundaries of the scene and cut videos at the boundaries. You cannot specify the length of video preview."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Do not attempt to parse and modify the urls except documented above. The urls are not permanent and may change without notice.")),(0,l.kt)("p",null,"Error codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"OK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid url param")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"File not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"410"),(0,l.kt)("td",{parentName:"tr",align:null},"Token Expired")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">=500"),(0,l.kt)("td",{parentName:"tr",align:null},"Server Error (Maybe broken video or overloaded)")))),(0,l.kt)("h2",{id:"me"},"/me"),(0,l.kt)("p",null,"Let you check the search quota and limit for your account (with API key) or IP address (without API key)."),(0,l.kt)(v,{mdxType:"Tabs"},(0,l.kt)(w,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://api.yourendpoints.domain/me"\n'))),(0,l.kt)(w,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await fetch('https://api.yourendpoints.domain/me').then((e) => e.json());\n"))),(0,l.kt)(w,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nrequests.get("https://api.yourendpoints.domain/me").json()\n'))),(0,l.kt)(w,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod "https://api.yourendpoints.domain/me"\n')))),(0,l.kt)("p",null,"Example Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "127.0.0.1",\n  "priority": 0,\n  "concurrency": 1,\n  "quota": 1000,\n  "quotaUsed": 43\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"IP address (guest) or email address (user)"),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"priority"),(0,l.kt)("td",{parentName:"tr",align:null},"Your priority in search queue"),(0,l.kt)("td",{parentName:"tr",align:null},"number (0: lowest)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"concurrency"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of parallel search requests you can make"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quota"),(0,l.kt)("td",{parentName:"tr",align:null},"Search quota you have for this month"),(0,l.kt)("td",{parentName:"tr",align:null},"number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quotaUsed"),(0,l.kt)("td",{parentName:"tr",align:null},"Search quota you have used this month"),(0,l.kt)("td",{parentName:"tr",align:null},"number")))),(0,l.kt)("h2",{id:"using-the-api-with-api-keys"},"Using the API with API Keys"),(0,l.kt)("p",null,"If you have an API Key that grants you more search quota and limits, put your API key in either HTTP header ",(0,l.kt)("inlineCode",{parentName:"p"},"x-trace-key")," or query string ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,l.kt)("p",null,"When searching with API Keys, it would count towards your account quota and limits. When searching without an API Key, you search as guests using your IP address."),(0,l.kt)("h3",{id:"using-api-keys-in-http-header"},"Using API Keys in HTTP header"),(0,l.kt)(v,{mdxType:"Tabs"},(0,l.kt)(w,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "x-trace-key: xxxxxxxxxxxxxxxxxxxxxxx" "https://api.yourendpoints.domain/me"\n'))),(0,l.kt)(w,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await fetch('https://api.yourendpoints.domain/me', {\n  headers: {\n    'x-trace-key': 'xxxxxxxxxxxxxxxxxxxxxxx',\n  },\n}).then((e) => e.json());\n"))),(0,l.kt)(w,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nrequests.get("https://api.yourendpoints.domain/me", headers={\n  "x-trace-key": "xxxxxxxxxxxxxxxxxxxxxxx"\n}).json()\n'))),(0,l.kt)(w,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Headers @{"x-trace-key" = "xxxxxxxxxxxxxxxxxxxxxxx"} https://api.yourendpoints.domain/me\n')))),(0,l.kt)("h3",{id:"using-api-keys-in-query-string"},"Using API Keys in query string"),(0,l.kt)("p",null,"If you're lazy and don't mind your API Key being exposed to browser history or logs. Just put your key in key in query string"),(0,l.kt)(v,{mdxType:"Tabs"},(0,l.kt)(w,{value:"bash",label:"cURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://api.yourendpoints.domain/me?key=xxxxxxxxxxxxxxxxxxxxxxx"\n'))),(0,l.kt)(w,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await fetch(\n  'https://api.yourendpoints.domain/me?key=xxxxxxxxxxxxxxxxxxxxxxx'\n).then((e) => e.json());\n"))),(0,l.kt)(w,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nrequests.get("https://api.yourendpoints.domain/me?key=xxxxxxxxxxxxxxxxxxxxxxx").json()\n'))),(0,l.kt)(w,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod "https://api.yourendpoints.domain/me?key=xxxxxxxxxxxxxxxxxxxxxxx"\n')))))}E.isMDXComponent=!0}}]);