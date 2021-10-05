"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[5222],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var o=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1498:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var o=r(98),n=r(6862),i=(r(9496),r(9613)),a=["components"],c={title:"How to add a chatbot - GMetri XR Platform",description:"Made using the GMetri XR platform, this app demonstrates the compatibility of the GMetri platform with external services like chatbot.",hide_title:!0,sidebar_label:"Chatbot Integration",sidebar_position:3},l="Chatbot",s={unversionedId:"features/chatbot",id:"features/chatbot",isDocsHomePage:!1,title:"How to add a chatbot - GMetri XR Platform",description:"Made using the GMetri XR platform, this app demonstrates the compatibility of the GMetri platform with external services like chatbot.",source:"@site/docs/03-features/03_chatbot.md",sourceDirName:"03-features",slug:"/features/chatbot",permalink:"/docs/features/chatbot",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/03-features/03_chatbot.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"How to add a chatbot - GMetri XR Platform",description:"Made using the GMetri XR platform, this app demonstrates the compatibility of the GMetri platform with external services like chatbot.",hide_title:!0,sidebar_label:"Chatbot Integration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Green Screen Color Selection",permalink:"/docs/features/greenscreen/green_screen_color_selection"},next:{title:"QR Code Scanner",permalink:"/docs/features/qr_code"}},p=[{value:"Description",id:"description",children:[]},{value:"Get The Embed Code For The Chatbot",id:"get-the-embed-code-for-the-chatbot",children:[]},{value:"Add The Embed Code in the editor",id:"add-the-embed-code-in-the-editor",children:[]},{value:"Test",id:"test",children:[]}],h={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chatbot"},"Chatbot"),(0,i.kt)("iframe",{src:"https://view.gmetri.com/v5/gmetri/example_chatbot",width:"100%",height:"400px"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"A chatbot allows you to interact with users. GMetri platform allows experience creators to add third-party chat bots to the XR experiences."),(0,i.kt)("p",null,"This simple experience demonstrates chatbot integration on GMetri."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This sample experience is available to all ",(0,i.kt)("a",{parentName:"li",href:"https://view.gmetri.com/v4/gmetri/example_chatbot"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"We use ",(0,i.kt)("a",{parentName:"li",href:"https://landbot.io/"},"Landbot.io")," as the external service for the chatbot in this tutorial, but you can use any chatbot of your choice.")),(0,i.kt)("h2",{id:"get-the-embed-code-for-the-chatbot"},"Get The Embed Code For The Chatbot"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/landbot_embed.png.jpg#boxShadow",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the code provided by the chatbot service.")),(0,i.kt)("h2",{id:"add-the-embed-code-in-the-editor"},"Add The Embed Code in the editor"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/custom_script.png.jpg#boxShadow",alt:null})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Head over to the editor."),(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"gear icon")," in the bottom of the Right Bar."),(0,i.kt)("li",{parentName:"ol"},"Paste the embed code in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Custom Script")," text area.")),(0,i.kt)("h2",{id:"test"},"Test"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"That's it! It's now time to test our chatbot right in the experience. You can do that by clicking the green ",(0,i.kt)("inlineCode",{parentName:"li"},"Play")," button in Right bar."),(0,i.kt)("li",{parentName:"ul"},"A QR Code will appear. You can view the experience either on your mobile by scanning the QR code, or by opening the experience in a new tab.")),(0,i.kt)("iframe",{src:"https://view.gmetri.com/v4/gmetri/example_chatbot",width:"100%",height:"400px"}))}d.isMDXComponent=!0}}]);