"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92098],{15680:(e,r,n)=>{n.d(r,{xA:()=>g,yg:()=>m});var t=n(96540);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=t.createContext({}),u=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},g=function(e){var r=u(e.components);return t.createElement(o.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=u(n),y=s,m=c["".concat(o,".").concat(y)]||c[y]||p[y]||a;return n?t.createElement(m,l(l({ref:r},g),{},{components:n})):t.createElement(m,l({ref:r},g))}));function m(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=y;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[c]="string"==typeof e?e:s,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},84220:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=n(58168),s=(n(96540),n(15680));const a={title:"IngressClass",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","Networking","IngressClass"]},l=void 0,i={unversionedId:"resource/kubernetes/Networking/IngressClass",id:"resource/kubernetes/Networking/IngressClass",title:"IngressClass",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/kubernetes/Networking/IngressClass.mdx",sourceDirName:"resource/kubernetes/Networking",slug:"/resource/kubernetes/Networking/IngressClass",permalink:"/ja/docs/resource/kubernetes/Networking/IngressClass",draft:!1,tags:[{label:"Kubernetes",permalink:"/ja/docs/tags/kubernetes"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"Networking",permalink:"/ja/docs/tags/networking"},{label:"IngressClass",permalink:"/ja/docs/tags/ingress-class"}],version:"current",sidebarPosition:0,frontMatter:{title:"IngressClass",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","Networking","IngressClass"]},sidebar:"mySidebar",previous:{title:"Ingress",permalink:"/ja/docs/resource/kubernetes/Networking/Ingress"},next:{title:"Rbac",permalink:"/ja/docs/category/rbac"}},o={},u=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],g={toc:u},c="wrapper";function p(e){let{components:r,...n}=e;return(0,s.yg)(c,(0,t.A)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("hr",null),(0,s.yg)("br",null),(0,s.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,s.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/networking-ingress_class.png"}),(0,s.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,s.yg)("p",null,"Ingress \u304c\u4f7f\u7528\u3059\u308b\u30a4\u30f3\u30b0\u30ec\u30b9\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u3092\u9078\u629e\u3059\u308b\u305f\u3081\u306e\u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30ea\u30bd\u30fc\u30b9"),(0,s.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,s.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Base/Cluster"},(0,s.yg)("strong",{parentName:"a"},"Cluster")))),(0,s.yg)("h3",{id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"},"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Networking/Ingress"},(0,s.yg)("strong",{parentName:"a"},"Ingress")))),(0,s.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"service_name")," : IngressClass \u30ea\u30bd\u30fc\u30b9\u540d"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"annotations")," : \u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30b7\u30b9\u30c6\u30e0\u3067\u5fc5\u8981\u306a\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b key-value"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"labels")," : \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u533a\u5207\u308b\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u304c\u4efb\u610f\u306b\u5e0c\u671b\u3059\u308b\u5024\u3092\u6307\u5b9a"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"controller")," : IngressClass \u3092\u51e6\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u540d"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"parameters")," : \u53c2\u7167\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\u306e\u60c5\u5831",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"name")," : \u53c2\u7167\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\u540d"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"kind")," : \u53c2\u7167\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9 \u30bf\u30a4\u30d7"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"namespace")," : \u53c2\u7167\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\u306e\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"scope")," : \u30ea\u30bd\u30fc\u30b9\u306e\u7bc4\u56f2\u3092\u793a\u3057\u307e\u3059 - \u30af\u30e9\u30b9\u30bf\u30fc\u307e\u305f\u306f\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"api_group")," : \u53c2\u7167\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\u306b\u95a2\u3059\u308b\u30b0\u30eb\u30fc\u30d7")))),(0,s.yg)("hr",null),(0,s.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class"},"IngressClass(kubernetes)")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/ingress_class"},"IngressClass(Terraform)"))))}p.isMDXComponent=!0}}]);