"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55169],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),g=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=g(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?i.createElement(y,o(o({ref:t},c),{},{components:n})):i.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var g=2;g<r;g++)o[g]=n[g];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>y,toc:()=>b});var i=n(58168),a=(n(96540),n(15680));const r=n.p+"assets/images/github01-a8769a2ebc0ccb57f78697043fb761b0.png",o=n.p+"assets/images/github02-e3d7a82673ae33ba19e6094786167a56.png",l=n.p+"assets/images/github03-ebdb098d11af69c61a04363097c276be.png",s=n.p+"assets/images/github04-eaa5fdaa17841096a1a3242610aac654.png";var g=n(64757);const c=n.p+"assets/images/github06-db5b5df6fee3e335e1db7481df6d185b.png",p=n.p+"assets/images/github07-803eb12a62227f4c6a7e1f0f0219cb9d.png";n(78056);const u={title:"Register with Github",sidebar_position:1,tags:["Plugin","plugin","git","github"],last_update:{date:"09/30/2024"}},d=void 0,y={unversionedId:"plugin/vcs/add-github",id:"plugin/vcs/add-github",title:"Register with Github",description:"last update: 2024.09.30",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/plugin/vcs/add-github.mdx",sourceDirName:"plugin/vcs",slug:"/plugin/vcs/add-github",permalink:"/en/docs/plugin/vcs/add-github",draft:!1,tags:[{label:"Plugin",permalink:"/en/docs/tags/plugin"},{label:"git",permalink:"/en/docs/tags/git"},{label:"github",permalink:"/en/docs/tags/github"}],version:"current",sidebarPosition:1,frontMatter:{title:"Register with Github",sidebar_position:1,tags:["Plugin","plugin","git","github"],last_update:{date:"09/30/2024"}},sidebar:"mySidebar",previous:{title:"VCS",permalink:"/en/docs/category/vcs"},next:{title:"Register with Gitlab",permalink:"/en/docs/plugin/vcs/add-gitlab"}},m={},b=[{value:"Register with Github",id:"register-with-github",level:2}],h={toc:b},f="wrapper";function v(e){let{components:t,...n}=e;return(0,a.yg)(f,(0,i.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("span",{className:"theme-doc-version-badge badge badge--secondary"},"last update: 2024.09.30"),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"register-with-github"},"Register with Github"),(0,a.yg)("p",null,"To manage the version of your canvas in Cloud Studio, integration with a Version Control System (VCS) is required.",(0,a.yg)("br",null),"\nAdditionally, VCS account integration must precede the linking of a Terraform Cloud account for project validation and deployment.",(0,a.yg)("br",null),"\nThis page explains how to register your Github account as a VCS"),(0,a.yg)("br",null),(0,a.yg)("details",null,(0,a.yg)("summary",null,"What is Github?"),(0,a.yg)("h5",null,"Github is a platform for hosting and managing software development projects.")),(0,a.yg)("p",null,"\xa0"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"After signing up and logging into ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/"},"Github"),", click on the Profile Icon - Settings in the top right corner.")),(0,a.yg)("img",{width:"100%",src:r,alt:"otp img"}),(0,a.yg)("p",null,"\xa0"),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Click on ",(0,a.yg)("inlineCode",{parentName:"li"},"Developer settings"),"at the bottom of the left sidebar.")),(0,a.yg)("img",{width:"100%",src:o,alt:"otp img"}),(0,a.yg)("p",null,"\xa0"),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"In the left sidebar, click on ",(0,a.yg)("inlineCode",{parentName:"li"},"Personal access tokens - Tokens (classic)"),",\nthen select ",(0,a.yg)("inlineCode",{parentName:"li"},"Generate new token - Generate new token (classic)")," on the right.")),(0,a.yg)("img",{width:"100%",src:l,alt:"otp img"}),(0,a.yg)("p",null,"\xa0"),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"In the ",(0,a.yg)("inlineCode",{parentName:"li"},"Select scopes")," section at the bottom, choose the ",(0,a.yg)("inlineCode",{parentName:"li"},"repo")," option to select the permissions for the Github token,\nand then click the ",(0,a.yg)("inlineCode",{parentName:"li"},"Generate token")," button at the bottom to create the token.")),(0,a.yg)("img",{width:"100%",src:s,alt:"otp img"}),(0,a.yg)("p",null,"\xa0"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"The issued token cannot be viewed again, so make sure to save it separately.")),(0,a.yg)("p",null,"\xa0"),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"In Cloud Studio, click on ",(0,a.yg)("inlineCode",{parentName:"li"},"My Page - Plugin"),", then click the ",(0,a.yg)("inlineCode",{parentName:"li"},"+")," button to link your Github account.")),(0,a.yg)("img",{width:"100%",src:g.A,alt:"otp img"}),(0,a.yg)("p",null,"\xa0"),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},"Enter your Github ",(0,a.yg)("inlineCode",{parentName:"li"},"Username")," and the issued ",(0,a.yg)("inlineCode",{parentName:"li"},"Token"),", then click the ",(0,a.yg)("inlineCode",{parentName:"li"},"Add")," button.")),(0,a.yg)("img",{width:"100%",src:c,alt:"otp img"}),(0,a.yg)("p",null,"\xa0"),(0,a.yg)("ol",{start:7},(0,a.yg)("li",{parentName:"ol"},"Once you have entered a valid Github ",(0,a.yg)("inlineCode",{parentName:"li"},"Username")," and the issued ",(0,a.yg)("inlineCode",{parentName:"li"},"Token"),", the Github integration will be successfully completed.")),(0,a.yg)("img",{width:"100%",src:p,alt:"otp img"}),(0,a.yg)("br",null),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"To integrate with the Github Enterprise version, additional inputs for the hosted ",(0,a.yg)("inlineCode",{parentName:"p"},"HTTP URL")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"API URL")," are required.")))}v.isMDXComponent=!0},78056:(e,t,n)=>{n.d(t,{A:()=>i});const i={imgWrap:"imgWrap_LCPB","tabs-container":"tabs-container_EwLu",caption:"caption_yGEz",caption_img:"caption_img_GAfQ",captionText:"captionText_Ag26",button:"button_tHl2",releaseWrap:"releaseWrap_EdcT",tag:"tag_PSRA",securityTable:"securityTable_SzzQ"}},64757:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/github05-78e0a8675a571b9a2d499cb951a30520.png"}}]);