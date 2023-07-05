"use strict";(self.webpackChunkshotit_frontend=self.webpackChunkshotit_frontend||[]).push([[645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_label:"Further Documentation",sidebar_position:2},i="Further Documentation",l={unversionedId:"FURTHER_DOCUMENTATION",id:"FURTHER_DOCUMENTATION",title:"Further Documentation",description:'// highlight-next-line and // highlight-start etc. are called "magic comments", because they will be parsed and removed, and their purposes are to add metadata to the next line, or the section that the pair of start- and end-comments enclose.',source:"@site/docs/FURTHER_DOCUMENTATION.md",sourceDirName:".",slug:"/FURTHER_DOCUMENTATION",permalink:"/shotit-frontend/ja/docs/FURTHER_DOCUMENTATION",draft:!1,editUrl:"https://github.com/shotit/shotit-frontend/tree/main/docs/FURTHER_DOCUMENTATION.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Further Documentation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/shotit-frontend/ja/docs/GET_STARTED"},next:{title:"API Usages",permalink:"/shotit-frontend/ja/docs/api_usage"}},s={},c=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=p("Tabs"),m=p("TabItem"),u=p("BrowserWindow"),h={toc:c},g="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"further-documentation"},"Further Documentation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"// highlight-next-line")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"// highlight-start"),' etc. are called "magic comments", because they will be parsed and removed, and their purposes are to add metadata to the next line, or the section that the pair of start- and end-comments enclose.'),(0,o.kt)("p",null,"You can declare custom magic comments through theme config. For example, you can register another magic comment that adds a ",(0,o.kt)("inlineCode",{parentName:"p"},"code-block-error-line")," class name:"),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(m,{value:"docusaurus.config.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  themeConfig: {\n    prism: {\n      magicComments: [\n        // Remember to extend the default highlight class name as well!\n        {\n          className: 'theme-code-block-highlighted-line',\n          line: 'highlight-next-line',\n          block: { start: 'highlight-start', end: 'highlight-end' },\n        },\n        // highlight-start\n        {\n          className: 'code-block-error-line',\n          line: 'This will error',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"))),(0,o.kt)(m,{value:"src/css/custom.css",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".code-block-error-line {\n  background-color: #ff000020;\n  display: block;\n  margin: 0 calc(-1 * var(--ifm-pre-padding));\n  padding: 0 var(--ifm-pre-padding);\n  border-left: 3px solid #ff000080;\n}\n"))),(0,o.kt)(m,{value:"myDoc.md",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"In JavaScript, trying to access properties on `null` will error.\n\n```js\nconst name = null;\n// This will error\nconsole.log(name.toUpperCase());\n// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')\n```\n")))),(0,o.kt)(u,{mdxType:"BrowserWindow"},(0,o.kt)("p",null,"In JavaScript, trying to access properties on ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," will error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const name = null;\n// This will error\nconsole.log(name.toUpperCase());\n// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')\n"))))}f.isMDXComponent=!0}}]);