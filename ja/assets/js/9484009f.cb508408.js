"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66057],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),m=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=m(t),s=r,d=y["".concat(o,".").concat(s)]||y[s]||g[s]||l;return t?n.createElement(d,i(i({ref:a},u),{},{components:t})):n.createElement(d,i({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[y]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},13709:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=t(58168),r=(t(96540),t(15680));const l={title:"StatefulSet",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","Apps","StatefulSet"]},i=void 0,p={unversionedId:"resource/kubernetes/Apps/StatefulSet",id:"resource/kubernetes/Apps/StatefulSet",title:"StatefulSet",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/kubernetes/Apps/StatefulSet.mdx",sourceDirName:"resource/kubernetes/Apps",slug:"/resource/kubernetes/Apps/StatefulSet",permalink:"/ja/docs/resource/kubernetes/Apps/StatefulSet",draft:!1,tags:[{label:"Kubernetes",permalink:"/ja/docs/tags/kubernetes"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"Apps",permalink:"/ja/docs/tags/apps"},{label:"StatefulSet",permalink:"/ja/docs/tags/stateful-set"}],version:"current",sidebarPosition:0,frontMatter:{title:"StatefulSet",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","Apps","StatefulSet"]},sidebar:"mySidebar",previous:{title:"Deployment",permalink:"/ja/docs/resource/kubernetes/Apps/Deployment"},next:{title:"AutoScaling",permalink:"/ja/docs/category/autoscaling"}},o={},m=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],u={toc:m},y="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(y,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,r.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/apps-stateful_set.png"}),(0,r.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,r.yg)("p",null,"Pod \u30bb\u30c3\u30c8\u306e\u30c7\u30d7\u30ed\u30a4\u3068\u62e1\u5f35\u3092\u7ba1\u7406\u3057\u3001\u3053\u308c\u3089\u306e Pod \u306e\u9806\u5e8f\u3068\u56fa\u6709\u6027\u306b\u5bfe\u3059\u308b\u4fdd\u8a3c\u3092\u63d0\u4f9b\u3059\u308b\u30af\u30d0\u30cd\u30c6\u30a3\u30b9 \u30ea\u30bd\u30fc\u30b9\u3067\u3059\u3002"),(0,r.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,r.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Base/Cluster"},(0,r.yg)("strong",{parentName:"a"},"Cluster"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Core/Namespace"},(0,r.yg)("strong",{parentName:"a"},"Namespace")))),(0,r.yg)("h3",{id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"},"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Core/ConfigMap"},(0,r.yg)("strong",{parentName:"a"},"ConfigMap"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Core/Service"},(0,r.yg)("strong",{parentName:"a"},"Service"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Core/PersistentVolumeClaim"},(0,r.yg)("strong",{parentName:"a"},"PersistentVolumeClaim")))),(0,r.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"service_name")," : StatefulSet \u30ea\u30bd\u30fc\u30b9\u540d")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"namespace")," : StatefulSet \u30ea\u30bd\u30fc\u30b9\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"annotations")," : \u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30b7\u30b9\u30c6\u30e0\u3067\u5fc5\u8981\u306a\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b key-value")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"labels")," : \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u533a\u5207\u308b\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u304c\u4efb\u610f\u306b\u5e0c\u671b\u3059\u308b\u5024\u3092\u6307\u5b9a")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"template_labels")," : Pod \u306b\u8a2d\u5b9a\u3055\u308c\u308b Label")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"pod_management_policy")," : Node \u3067\u30d1\u30c9\u3092\u4ea4\u63db\u307e\u305f\u306f\u7e2e\u5c0f\u3059\u308b\u3068\u304d\u306b\u30d1\u30c9\u304c\u751f\u6210\u3055\u308c\u308b\u65b9\u6cd5\u3092\u5236\u5fa1 - ",(0,r.yg)("inlineCode",{parentName:"p"},"Parallel"),",",(0,r.yg)("inlineCode",{parentName:"p"},"OrderedReady"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"revision_history_limit")," : StatefulSet \u306e\u6539\u8a02\u8a18\u9332\u306b\u7dad\u6301\u3055\u308c\u308b\u6700\u5927\u6539\u8a02\u6570\u3001\u65e2\u5b9a\u5024\u306f 10")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"service_name")," : statefulset \u3092\u7ba1\u7406\u3059\u308b Headless \u30b5\u30fc\u30d3\u30b9\u540d")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"replicas")," : \u5e0c\u671b\u306e Pod \u30ec\u30d7\u30ea\u30ab\u306e\u6570\u3001\u57fa\u672c\u5024\u306f 1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"containers")," : \u30d5\u30a1\u30fc\u30c9\u306b\u5c5e\u3059\u308b\u30b3\u30f3\u30c6\u30ca\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u5b9a\u7fa9"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"name")," : \u30b3\u30f3\u30c6\u30ca\u306e\u540d\u524d\u3092\u5b9a\u7fa9"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"image")," : \u4f7f\u7528\u3059\u308b Docker \u30a4\u30e1\u30fc\u30b8\u540d")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"args")," : \u30b3\u30f3\u30c6\u30ca\u5185\u3067\u5b9f\u884c\u3055\u308c\u308b\u30b3\u30de\u30f3\u30c9")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"command")," : \u30b3\u30f3\u30c6\u30ca\u5185\u3067\u5b9f\u884c\u3055\u308c\u308b\u30b3\u30de\u30f3\u30c9")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"port")," : \u30b3\u30f3\u30c6\u30ca\u304b\u3089\u9732\u51fa\u3059\u308b\u30dd\u30fc\u30c8\u306e\u30ea\u30b9\u30c8")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"resources")," : \u30b3\u30f3\u30c6\u30ca\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0 \u30ea\u30bd\u30fc\u30b9\u306e\u91cf\u3092\u6307\u5b9a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : \u6700\u5c0f/\u6700\u5927\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30ea\u30bd\u30fc\u30b9\u306e\u91cf\u3092\u6307\u5b9a - ",(0,r.yg)("inlineCode",{parentName:"li"},"Limits"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"requests")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"cpu")," : cpu(m)\u306e\u91cf\u3092\u6307\u5b9a"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"memory")," : \u30e1\u30e2\u30ea(Mi)\u306e\u91cf\u3092\u6307\u5b9a"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"probe")," : Pod \u306e\u72b6\u614b\u3092\u8a3a\u65ad\u3059\u308b\u65b9\u6cd5\u306e\u5b9a\u7fa9"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : Probe \u65b9\u6cd5\u3092\u9078\u629e - ",(0,r.yg)("inlineCode",{parentName:"li"},"startup"),",",(0,r.yg)("inlineCode",{parentName:"li"},"liveness"),",",(0,r.yg)("inlineCode",{parentName:"li"},"readiness")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"http_get_path")," : HTTP \u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u30d1\u30b9"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"http_get_port")," : \u30b3\u30f3\u30c6\u30ca\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3059\u308b\u30dd\u30fc\u30c8\u756a\u53f7"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"http_header")," : \u30ea\u30af\u30a8\u30b9\u30c8\u306b\u8a2d\u5b9a\u3059\u308b\u30ab\u30b9\u30bf\u30e0 \u30d8\u30c3\u30c0\u30fc"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"initial_delay_seconds")," : \u30b3\u30f3\u30c6\u30ca\u304c\u59cb\u307e\u3063\u3066\u304b\u3089\u30d7\u30ed\u30fc\u30d6\u304c\u59cb\u307e\u308b\u307e\u3067\u306e\u6642\u9593(\u79d2)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"period_seconds")," : \u30d7\u30ed\u30fc\u30d6\u3092\u884c\u3046\u983b\u5ea6(\u79d2)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"env")," : \u30b3\u30f3\u30c6\u30ca\u74b0\u5883\u306b\u8a2d\u5b9a\u3059\u308b key-value \u30da\u30a2\u306e\u30d6\u30ed\u30c3\u30af"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : env \u5909\u6570\u540d"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"value")," : env \u5909\u6570\u3067\u8a2d\u5b9a\u3059\u308b\u5024"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"volume_mount")," : \u30b3\u30f3\u30c6\u30ca\u306e\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u306b\u30de\u30a6\u30f3\u30c8\u3059\u308b\u30d5\u30a1\u30c3\u30c9\u30dc\u30ea\u30e5\u30fc\u30e0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : \u30dc\u30ea\u30e5\u30fc\u30e0\u30de\u30a6\u30f3\u30c8\u540d\u306e\u8a2d\u5b9a"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"path"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"mount_path")," : \u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u30de\u30a6\u30f3\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u30b3\u30f3\u30c6\u30ca\u5185\u306e\u30d1\u30b9"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"sub_path")," : \u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u30de\u30a6\u30f3\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u30b3\u30f3\u30c6\u30ca\u5185\u306e\u30d1\u30b9"))))))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"volume")," : \u30d5\u30a1\u30c3\u30c9\u306b\u5c5e\u3059\u308b\u30b3\u30f3\u30c6\u30ca\u304c\u642d\u8f09\u3067\u304d\u308b\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u30ea\u30b9\u30c8"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : volume \u540d",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"type")," : \u30de\u30a6\u30f3\u30c8\u3059\u308b\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u30bf\u30a4\u30d7 - ",(0,r.yg)("inlineCode",{parentName:"li"},"EmptyDir"),",",(0,r.yg)("inlineCode",{parentName:"li"},"ConfigMap"),",",(0,r.yg)("inlineCode",{parentName:"li"},"PersistentVolumeClaim")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"target_name")," : \u6c38\u4e45\u30dc\u30ea\u30e5\u30fc\u30e0\u30af\u30ec\u30fc\u30e0\u306e\u540d\u524d"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"default_mode")," : \u751f\u6210\u3055\u308c\u305f\u30d5\u30a1\u30a4\u30eb\u306b\u4f7f\u7528\u3059\u308b\u30e2\u30fc\u30c9 - 0 ~ 0777 \u306e\u9593\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306f 0644"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ead_only")," : true \u306e\u5834\u5408\u306f\u8aad\u307f\u53d6\u308a\u5c02\u7528\u306b\u30de\u30a6\u30f3\u30c8\u3055\u308c\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\u8aad\u307f\u53d6\u308a/\u66f8\u304d\u8fbc\u307f\u304c\u53ef\u80fd"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"image_pull_secrets")," : Container \u3067\u4f7f\u7528\u3059\u308b\u30a4\u30e1\u30fc\u30b8\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u6a29\u9650\u304c\u542b\u307e\u308c\u305f\u540c\u3058\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306b\u3042\u308b Secret"))),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet(Kubernetes)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/stateful_set"},"StatefulSet(Terraform)"))))}g.isMDXComponent=!0}}]);