"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5464],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>g});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,g=p["".concat(l,".").concat(d)]||p[d]||y[d]||c;return t?n.createElement(g,a(a({ref:r},s),{},{components:t})):n.createElement(g,a({ref:r},s))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61528:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=t(58168),o=(t(96540),t(15680));const c={title:"ServiceAccount",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","Core","ServiceAccount"]},a=void 0,i={unversionedId:"resource/kubernetes/Core/ServiceAccount",id:"resource/kubernetes/Core/ServiceAccount",title:"ServiceAccount",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/kubernetes/Core/ServiceAccount.mdx",sourceDirName:"resource/kubernetes/Core",slug:"/resource/kubernetes/Core/ServiceAccount",permalink:"/ja/docs/resource/kubernetes/Core/ServiceAccount",draft:!1,tags:[{label:"Kubernetes",permalink:"/ja/docs/tags/kubernetes"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"Core",permalink:"/ja/docs/tags/core"},{label:"ServiceAccount",permalink:"/ja/docs/tags/service-account"}],version:"current",sidebarPosition:0,frontMatter:{title:"ServiceAccount",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","Core","ServiceAccount"]},sidebar:"mySidebar",previous:{title:"Service",permalink:"/ja/docs/resource/kubernetes/Core/Service"},next:{title:"Helm",permalink:"/ja/docs/category/helm"}},l={},u=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],s={toc:u},p="wrapper";function y(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,o.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/core-service_account.png"}),(0,o.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,o.yg)("p",null,"\u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30af\u30e9\u30b9\u30bf\u30fc\u5185\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30b5\u30fc\u30d3\u30b9\u304c\u30af\u30e9\u30b9\u30bf\u30fc \u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u3059\u3002"),(0,o.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,o.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Base/Cluster"},(0,o.yg)("strong",{parentName:"a"},"Cluster")))),(0,o.yg)("h3",{id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"},"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"),(0,o.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"service_name")," : ServiceAccount \u30ea\u30bd\u30fc\u30b9\u540d"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"namespace")," : ServiceAccount \u30ea\u30bd\u30fc\u30b9\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"annotations")," : \u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30b7\u30b9\u30c6\u30e0\u3067\u5fc5\u8981\u306a\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b key-value"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"labels")," : \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u533a\u5207\u308b\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u304c\u4efb\u610f\u306b\u5e0c\u671b\u3059\u308b\u5024\u3092\u6307\u5b9a"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"secret")," : \u3053\u306e\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u53c2\u7167\u3059\u308b\u30d5\u30a1\u30c3\u30c9\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u8a31\u53ef\u3055\u308c\u3066\u3044\u308b secrets \u30ea\u30b9\u30c8"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"image_pull_secrets")," : \u3053\u306e\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u53c2\u7167\u3059\u308b\u30d5\u30a1\u30c3\u30c9\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u540c\u4e00\u306e\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306e secrets \u30ea\u30b9\u30c8")),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/security/service-accounts/"},"ServiceAccount(Kubernetes)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/service_account"},"ServiceAccount(Terraform)"))))}y.isMDXComponent=!0}}]);