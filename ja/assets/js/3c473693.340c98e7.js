"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74045],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,y=p["".concat(u,".").concat(d)]||p[d]||g[d]||o;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const o={title:"HorizontalPodAutoscaling",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","AutoScaling","HorizontalPodAutoscaling"]},l=void 0,i={unversionedId:"resource/kubernetes/AutoScaling/HorizontalPodAutoscaling",id:"resource/kubernetes/AutoScaling/HorizontalPodAutoscaling",title:"HorizontalPodAutoscaling",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/kubernetes/AutoScaling/HorizontalPodAutoscaling.mdx",sourceDirName:"resource/kubernetes/AutoScaling",slug:"/resource/kubernetes/AutoScaling/HorizontalPodAutoscaling",permalink:"/ja/docs/resource/kubernetes/AutoScaling/HorizontalPodAutoscaling",draft:!1,tags:[{label:"Kubernetes",permalink:"/ja/docs/tags/kubernetes"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"AutoScaling",permalink:"/ja/docs/tags/auto-scaling"},{label:"HorizontalPodAutoscaling",permalink:"/ja/docs/tags/horizontal-pod-autoscaling"}],version:"current",sidebarPosition:0,frontMatter:{title:"HorizontalPodAutoscaling",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","AutoScaling","HorizontalPodAutoscaling"]},sidebar:"mySidebar",previous:{title:"AutoScaling",permalink:"/ja/docs/category/autoscaling"},next:{title:"Base",permalink:"/ja/docs/category/base-3"}},u={},s=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],c={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,r.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/auto_scaling-horizontal_pod_autoscaling.png"}),(0,r.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,r.yg)("p",null,"\u89b3\u5bdf\u3055\u308c\u305f CPU \u4f7f\u7528\u7387\u306b\u57fa\u3065\u3044\u3066 Deployment\u3001Replicaset\u3001StatefulSet \u306e\u30dd\u30c3\u30c9\u6570\u3092\u81ea\u52d5\u7684\u306b\u62e1\u5f35\u3059\u308b kubernetes \u30ea\u30bd\u30fc\u30b9\u3067\u3059\u3002"),(0,r.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,r.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Base/Cluster"},(0,r.yg)("strong",{parentName:"a"},"Cluster"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Core/Namespace"},(0,r.yg)("strong",{parentName:"a"},"Namespace")))),(0,r.yg)("h3",{id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"},"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Apps/Deployment"},(0,r.yg)("strong",{parentName:"a"},"Deployment"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Apps/StatefulSet"},(0,r.yg)("strong",{parentName:"a"},"StatefulSet")))),(0,r.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"service_name")," : HPA \u30ea\u30bd\u30fc\u30b9\u540d"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"namespace")," : HPA \u30ea\u30bd\u30fc\u30b9\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"annotations")," : \u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30b7\u30b9\u30c6\u30e0\u3067\u5fc5\u8981\u306a\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b key-value"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"labels")," : \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u533a\u5207\u308b\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u304c\u4efb\u610f\u306b\u5e0c\u671b\u3059\u308b\u5024\u3092\u6307\u5b9a"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"min_replicas")," : HPA \u3067\u8a2d\u5b9a\u3067\u304d\u308b Pod \u306e\u6570\u306e\u6700\u5c0f\u5024 - \u57fa\u672c\u5024\u306f 1"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"max_replicas")," : HPA \u3067\u8a2d\u5b9a\u3067\u304d\u308b Pod \u306e\u6570\u306e\u6700\u5927\u5024"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"target_cpu_utilization_percentage")," : Pod \u306b\u5bfe\u3059\u308b\u76ee\u6a19\u5e73\u5747 CPU \u4f7f\u7528\u7387(\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u305f CPU \u306e\u5272\u5408\u3067\u8868\u793a)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"scale_target_ref")," : \u62e1\u5f35\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u53c2\u7167",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : \u30ea\u30bd\u30fc\u30b9\u306e\u540d\u524d"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"kind")," : \u30ea\u30bd\u30fc\u30b9\u306e\u7a2e\u985e - ",(0,r.yg)("inlineCode",{parentName:"li"},"Deployment"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"StatefulSet"))))),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Horizontal Pod Autoscaling(Kubernetes)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/horizontal_pod_autoscaler"},"Horizontal Pod Autoscaling(Terraform)"))))}g.isMDXComponent=!0}}]);