"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99649],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>d});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),y=a,d=p["".concat(s,".").concat(y)]||p[y]||g[y]||l;return t?n.createElement(d,o(o({ref:r},c),{},{components:t})):n.createElement(d,o({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},51317:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=t(58168),a=(t(96540),t(15680));const l={title:"Role",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","RBAC","Role"]},o=void 0,i={unversionedId:"resource/kubernetes/Rbac/Role",id:"resource/kubernetes/Rbac/Role",title:"Role",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/kubernetes/Rbac/Role.mdx",sourceDirName:"resource/kubernetes/Rbac",slug:"/resource/kubernetes/Rbac/Role",permalink:"/ja/docs/resource/kubernetes/Rbac/Role",draft:!1,tags:[{label:"Kubernetes",permalink:"/ja/docs/tags/kubernetes"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"RBAC",permalink:"/ja/docs/tags/rbac"},{label:"Role",permalink:"/ja/docs/tags/role"}],version:"current",sidebarPosition:0,frontMatter:{title:"Role",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","RBAC","Role"]},sidebar:"mySidebar",previous:{title:"ClusterRoleBinding",permalink:"/ja/docs/resource/kubernetes/Rbac/ClusterRoleBinding"},next:{title:"RoleBinding",permalink:"/ja/docs/resource/kubernetes/Rbac/RoleBinding"}},s={},u=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],c={toc:u},p="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/rbac-role.png"}),(0,a.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,a.yg)("p",null,"\u6307\u5b9a\u3055\u308c\u305f\u540d\u524d\u7a7a\u9593\u306b\u306e\u307f\u9069\u7528\u3055\u308c\u308b\u5f79\u5272\u3092\u751f\u6210\u3059\u308b\u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Base/Cluster"},(0,a.yg)("strong",{parentName:"a"},"Cluster"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Core/Namespace"},(0,a.yg)("strong",{parentName:"a"},"Namespace")))),(0,a.yg)("h3",{id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"},"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Rbac/RoleBinding"},(0,a.yg)("strong",{parentName:"a"},"RoleBinding")))),(0,a.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"service_name")," : Role \u30ea\u30bd\u30fc\u30b9\u540d"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"namespace")," : Role \u30ea\u30bd\u30fc\u30b9\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"annotations")," : \u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30b7\u30b9\u30c6\u30e0\u3067\u5fc5\u8981\u306a\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b key-value"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"labels")," : \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u533a\u5207\u308b\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u304c\u4efb\u610f\u306b\u5e0c\u671b\u3059\u308b\u5024\u3092\u6307\u5b9a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"rule")," : \u5f53\u8a72 Cluster Role \u306b\u5bfe\u3059\u308b\u30dd\u30ea\u30b7\u30fc\u306e\u5f79\u5272",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name")," : rule \u540d"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"api_groups")," : \u4f5c\u696d\u3092\u8a31\u53ef\u3059\u308b\u30ea\u30bd\u30fc\u30b9\u3092\u542b\u3080 API Group"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"resources")," : \u3053\u306e\u30eb\u30fc\u30eb\u304c\u9069\u7528\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\u306e\u30ea\u30b9\u30c8"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"resource_names")," : \u5bfe\u5fdc\u3059\u308b\u30ea\u30bd\u30fc\u30b9\u306e\u500b\u5225\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068\u3057\u3066\u9078\u629e\u3059\u308b\u5834\u5408\u306f\u6307\u5b9a - \u7a7a\u304d\u5024\u306e\u5834\u5408\u306f\u3001\u5bfe\u5fdc\u3059\u308b\u30ea\u30bd\u30fc\u30b9\u5168\u4f53\u3092\u542b\u3081\u307e\u3059"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"verbs")," : Rule \u306b\u542b\u307e\u308c\u308b\u3059\u3079\u3066\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u9069\u7528\u3055\u308c\u308b\u52d5\u8a5e\u30ea\u30b9\u30c8")))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"},"Role(kubernetes)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/role"},"Role(Terraform)"))))}g.isMDXComponent=!0}}]);