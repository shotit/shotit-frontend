"use strict";(self.webpackChunkshotit_frontend=self.webpackChunkshotit_frontend||[]).push([[660],{8735:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var n=a(7294),l=a(7961),r=a(1100);const o={demoContainer:"demoContainer_ryNF",searchBarContainer:"searchBarContainer_jUod",leftDemoSide:"leftDemoSide_MgLx",rightDemoSide:"rightDemoSide_e2SL",skeleton:"skeleton_U82o",searching:"searching_hC35",resultArea:"resultArea_LlqA",resultBox:"resultBox_lQJA",filename:"filename_asqc",thumbnail:"thumbnail_SaY7",metainfo:"metainfo_cmrU",loadingSvg:"loadingSvg_jZrn",searchingText:"searchingText_sLVQ",dropEffect:"dropEffect_eBLf",dropping:"dropping_urYM"},s=a.p+"assets/images/default-e894fa7bf526d9c350ad8843efa9a729.png",{searchBar:i,searchBarContent:c,formControls:m,formControlsFocus:h,sampleModalContainer:p,sampleModalContent:u,sampleModalText:d,sampleModalGroup:g,sampleModalItem:b,sampleModalItemLeft:f,sampleModalItemRight:v,imageUrlInput:E,closeSvgContainer:C,closeSvg:S,file:w}={searchBar:"searchBar_bJRy",greet:"greet_xPw8",searchBarContent:"searchBarContent_g7aL",sampleModalContainer:"sampleModalContainer_YZth",sampleModalContent:"sampleModalContent_h1XT",sampleModalText:"sampleModalText_L87D",sampleModalGroup:"sampleModalGroup_srvv",sampleModalItem:"sampleModalItem_jRW7",sampleModalItemLeft:"sampleModalItemLeft_woSj",sampleModalItemRight:"sampleModalItemRight_KOFY",formControls:"formControls_u4_8",formControlsFocus:"formControlsFocus_FXSW",imageUrlInput:"imageUrlInput_DZN9",anilistFilterInput:"anilistFilterInput_KOFE",closeSvgContainer:"closeSvgContainer_LsGX",closeSvg:"closeSvg_MVH7",file:"file_VYY3",iconCheck:"iconCheck_Gn9r",iconCross:"iconCross_mlZi",iconSearch:"iconSearch_RUFK",cutBordersBtn:"cutBordersBtn_d3zU",searchBtn:"searchBtn_yjcE"},y=[{name:"Elephant's Dream",thumbnail:"https://i.ibb.co/n8ysJ6B/elephant-s-dream.png",url:"https://i.ibb.co/Fq1bTmX/elephant-s-dream.png"},{name:"Big Buck Bunny",thumbnail:"https://i.ibb.co/8mrXQmZ/big-buck-bunny.png",url:"https://i.ibb.co/HKtX9K8/big-buck-bunny.png"},{name:"Sintel",thumbnail:"https://i.ibb.co/MnDFJZQ/sintel.png",url:"https://i.ibb.co/1ZfF47j/sintel.png"},{name:"Tears of Steel",thumbnail:"https://i.ibb.co/5nRRLnp/tears-of-steel.png",url:"https://i.ibb.co/rcwwHc8/tears-of-steel.png"},{name:"Caminandes 2 gran dillama",thumbnail:"https://i.ibb.co/jDqwp8P/Caminandes-2-Gran-Dillama.png",url:"https://i.ibb.co/zZC2kmT/Caminandes-2-Gran-Dillama.png"},{name:"Cosmos Laundromat: First Cycle",thumbnail:"https://i.ibb.co/wgrvtHr/Cosmos-Laundromat-First-Cycle.png",url:"https://i.ibb.co/sRJB7SJ/Cosmos-Laundromat-First-Cycle.png"},{name:"Glass Half",thumbnail:"https://i.ibb.co/z5Wm5p9/glass-half.png",url:"https://i.ibb.co/TTDwT6j/glass-half.png"},{name:"Agent 327",thumbnail:"https://i.ibb.co/NKjsJGG/agent-327.png",url:"https://i.ibb.co/dD2rVHH/agent-327.png"},{name:"Caminandes 3 Llamigos",thumbnail:"https://i.ibb.co/JBDBnTC/Caminandes-3-Llamigos.png",url:"https://i.ibb.co/yfHf0CV/Caminandes-3-Llamigos.png"},{name:"The Daily Dweebs",thumbnail:"https://i.ibb.co/5YqFSdk/The-Daily-Dweebs.png",url:"https://i.ibb.co/cbzLZPw/The-Daily-Dweebs.png"},{name:"HERO",thumbnail:"https://i.ibb.co/J2bFQYD/HERO.png",url:"https://i.ibb.co/4MDgdbh/HERO.png"},{name:"Spring",thumbnail:"https://i.ibb.co/ZNCPSmp/spring.png",url:"https://i.ibb.co/M9L4f6x/spring.png"},{name:"Coffee Run",thumbnail:"https://i.ibb.co/zXpzGwY/coffee-run.png",url:"https://i.ibb.co/Ht6jnQs/coffee-run.png"},{name:"Sprite Fright",thumbnail:"https://i.ibb.co/gRPTvBB/Sprite-Fright.png",url:"https://i.ibb.co/G5t2sbb/Sprite-Fright.png"},{name:"CHARGE",thumbnail:"https://i.ibb.co/3SZksRN/charge.png",url:"https://i.ibb.co/frwQSDp/charge.png"}];function _(e){let{imageURL:t,clearImageURL:a,handleURLpaste:l,handleFileSelect:r}=e;const[o,s]=(0,n.useState)(!1);(0,n.useEffect)((()=>{y.map((e=>{(new Image).src=e.thumbnail,(new Image).src=e.url}))}),[]);const _=(0,n.useCallback)((()=>{s(!0)}),[]);const L=(0,n.useRef)(null);var D;return D=L,(0,n.useEffect)((()=>{function e(e){D.current&&!D.current.contains(e.target)&&s(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[D]),n.createElement("div",{className:i},n.createElement("div",{className:c,ref:L},n.createElement("div",{className:o?`${m} ${h}`:`${m}`},n.createElement("form",null,n.createElement("input",{type:"text",pattern:"https?://.+",required:!0,name:"imageURL",className:E,placeholder:"Paste screenshot URL or drop your screenshot below",value:t.startsWith("http")?t:"",onChange:e=>{l(e),s(!1)},onPaste:()=>{s(!1)},onClick:_}),n.createElement("input",{type:"submit"}),t.startsWith("http")&&n.createElement("div",{className:C,onClick:a},n.createElement("span",{className:S})),n.createElement("div",{className:w},n.createElement("input",{type:"file",name:"files[]",accept:"image/*",onChange:e=>{r(e),s(!1)}})))),o&&n.createElement("div",{className:p},n.createElement("div",{className:u},n.createElement("div",{className:d},n.createElement("strong",null,"Sample Screenshots")),n.createElement("div",{className:g},y.map((e=>{let{name:r,thumbnail:o,url:i}=e;return n.createElement("div",{key:i,className:b,onClick:()=>{t!==i&&(a(),l(i)),s(!1)}},n.createElement("div",{className:f},n.createElement("img",{src:o,alt:r})),n.createElement("div",{className:v},n.createElement("span",null,r)))})))))))}const L={resultBox:"resultBox_Z4xm",filename:"filename_uQLr",thumbnail:"thumbnail_FIAx",metainfo:"metainfo_Hj5_"},D=e=>{const t=parseInt(e,10),a=Math.floor(t/3600),n=Math.floor((t-3600*a)/60),l=t-3600*a-60*n;return[a<10?`0${a}`:a,n<10?`0${n}`:n,l<10?`0${l}`:l].join(":")},N=(e,t)=>D(String(e))===D(String(t))?D(String(e)):`${D(String(e))} - ${D(String(t))}`;function x(e){let{filename:t,from:a,to:l,imdb:r,similarity:o,image:s,video:i,index:c,activeIndex:m,clickToIndex:h}=e;return n.createElement("div",{onClick:()=>h(c),className:`${L.resultBox}`,style:{boxShadow:""+(c===m?"0 0 15px 5px rgba(13, 110, 253, 0.2)":"0 2px 12px 0 rgba(0,0,0,.2)")}},n.createElement("div",{className:`${L.filename}`},t),n.createElement("div",{className:`${L.thumbnail}`},c===m&&n.createElement("video",{src:i,poster:s,volume:"0",muted:!0,autoPlay:!0,loop:!0,playsInline:!0,onContextMenu:e=>{e.preventDefault()}}),c!==m&&n.createElement("img",{src:s})),n.createElement("div",{className:`${L.metainfo}`},n.createElement("div",null,N(a,l)),n.createElement("div",null,"Similarity: ",`~${(100*o).toFixed(2)}%`),n.createElement("div",null,"IMDB:\xa0",n.createElement("a",{href:`https://www.imdb.com/title/${r}/`,target:"_blank",rel:"noopener noreferrer"},r,n.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))))}const{dropping:B}=o;async function k(e,t){void 0===t&&(t={});const{timeout:a=8e3}=t,n=new AbortController,l=setTimeout((()=>n.abort()),a),r=await fetch(e,{...t,signal:n.signal});return clearTimeout(l),r}const I=function(e,t,a){return new Promise((n=>{let l=new Image;l.crossOrigin="anonymous",l.onload=e=>{let l=document.createElement("canvas");l.crossOrigin="anonymous",l.height=720,"VIDEO"===e.target.nodeName?l.width=e.target.videoWidth/e.target.videoHeight*l.height:l.width=e.target.width/e.target.height*l.height,l.getContext("2d").drawImage(e.target,0,0,l.width,l.height),l.toBlob((function(e){R(e).then((e=>{n(e)})).catch((e=>{console.log(e),a(!0),setTimeout((()=>{a(!1),t()}),1e3)}))}),"image/jpeg",.8)},l.src=e}))},R=async e=>{try{const t=new FormData;t.append("image",e);const a=await k("https://shotit-api.boost-art.net/search?cutBorders=&=",{method:"POST",body:t});return await a.json()}catch(t){throw new Error(t)}},M=async e=>{try{const t=await k(`https://shotit-api.boost-art.net/search?cutBorders=&url=${e}`);return await t.json()}catch(t){throw new Error(t)}};function T(){const[e,t]=(0,n.useState)(""),[a,i]=(0,n.useState)(""),[c,m]=(0,n.useState)([]),[h,p]=(0,n.useState)(0),[u,d]=(0,n.useState)(!1);(0,n.useEffect)((()=>{document.querySelector("footer").setAttribute("style","display: none;");const e=new URLSearchParams(location.search);e.has("url")&&t(e.get("url"));const a=e=>{console.log("image paste");const a=e.clipboardData?.items;if(!a)return;const n=Array.from(a).find((e=>e.type.startsWith("image")));n&&(b(),t(URL.createObjectURL(n.getAsFile())),e.preventDefault())};return window.addEventListener("paste",a,!1),()=>{window.removeEventListener("paste",a)}}),[]),(0,n.useEffect)((()=>{e&&(e.startsWith("blob:")?I(e,b,d).then((e=>{console.log("toBlob");const{result:t=[]}=e;m(t)})):M(e).then((e=>{console.log("urlSearch");const{result:t=[]}=e;m(t)})).catch((e=>{console.log(e),d(!0),setTimeout((()=>{d(!1),b()}),1e3)})))}),[e]);const g=(0,n.useCallback)((e=>{console.log("clickToIndex"),p(e)}),[]),b=(0,n.useCallback)((()=>{console.log("clearImageURL"),t(""),m([]),p(0)}),[]),f=(0,n.useCallback)((e=>(console.log("handleURLpaste"),String(e).startsWith("http")?(b(),t(e),void history.replaceState(null,null,`/shotit-frontend/demo?url=${encodeURIComponent(e)}`)):e.target.value.length?void(e.target.parentNode.checkValidity()?(b(),t(e.target.value),history.replaceState(null,null,`/shotit-frontend/demo?url=${encodeURIComponent(e.target.value)}`)):e.target.parentNode.querySelector("input[type=submit]").click()):(b(),void history.replaceState(null,null,"/shotit-frontend/demo")))),[]),v=(0,n.useCallback)((e=>{console.log("handleFileSelect"),e.stopPropagation(),e.preventDefault();const a=e.dataTransfer?e.dataTransfer.files[0]:e.target.files[0];return a&&a.type.match("image.*")?(b(),t(URL.createObjectURL(a)),""):"Error: File is not an image"}),[]);return n.createElement(l.Z,null,n.createElement("div",{className:o.demoContainer},n.createElement("div",{className:"row"},n.createElement("div",{className:`col col--12 ${o.searchBarContainer}`},n.createElement(_,{imageURL:e,clearImageURL:b,handleURLpaste:f,handleFileSelect:v}))),n.createElement("div",{className:"row"},n.createElement("div",{className:`col col--6 ${o.leftDemoSide}`},n.createElement("img",{src:e||s,alt:""}),n.createElement("div",{className:o.dropEffect,onDrop:e=>{const t=v(e);t?i(t):e.target.classList.remove(B)},onDragOver:e=>{e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},onDragEnter:e=>{e.target.classList.add(B),i("Drop image here")},onDragLeave:e=>{e.target.classList.remove(B)}},a)),e&&0===c.length&&!u&&n.createElement("div",{className:`col col--6 ${o.rightDemoSide} ${o.searching}`},n.createElement("div",null,n.createElement("div",{className:o.loadingSvg}),n.createElement("p",{className:o.searchingText},"Searching..."))),e&&0===c.length&&u&&n.createElement("div",{className:`col col--6 ${o.rightDemoSide} ${o.searching}`},n.createElement("div",null,n.createElement("div",{className:o.loadingSvg}),n.createElement("p",{className:o.searchingText},"Error!"))),e&&c.length>0&&n.createElement("div",{className:`col col--6 ${o.rightDemoSide} ${o.resultArea}`},c.map(((e,t)=>{let{filename:a,from:l,to:r,imdb:o,similarity:s,image:i,video:c}=e;return n.createElement(x,{key:`${Date.now()}${s}`,filename:a,from:l,to:r,imdb:o,similarity:s,image:i,video:c,index:t,activeIndex:h,clickToIndex:g})}))),!e&&n.createElement("div",{className:`col col--6 ${o.rightDemoSide} ${o.skeleton}`},n.createElement(r.Z,{paragraph:{rows:2}}),n.createElement(r.Z.Avatar,{size:100,shape:"square"}),n.createElement(r.Z,{paragraph:{rows:4}})))))}}}]);