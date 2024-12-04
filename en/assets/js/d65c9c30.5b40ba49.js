"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79480],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>m});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64850:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(58168),a=(t(96540),t(15680));const o={title:"HorizontalPodAutoscaling",sidebar_position:0,tags:["Kubernetes","Resource","AutoScaling","HorizontalPodAutoscaling"]},i=void 0,l={unversionedId:"resource/kubernetes/AutoScaling/HorizontalPodAutoscaling",id:"resource/kubernetes/AutoScaling/HorizontalPodAutoscaling",title:"HorizontalPodAutoscaling",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/kubernetes/AutoScaling/HorizontalPodAutoscaling.mdx",sourceDirName:"resource/kubernetes/AutoScaling",slug:"/resource/kubernetes/AutoScaling/HorizontalPodAutoscaling",permalink:"/en/docs/resource/kubernetes/AutoScaling/HorizontalPodAutoscaling",draft:!1,tags:[{label:"Kubernetes",permalink:"/en/docs/tags/kubernetes"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"AutoScaling",permalink:"/en/docs/tags/auto-scaling"},{label:"HorizontalPodAutoscaling",permalink:"/en/docs/tags/horizontal-pod-autoscaling"}],version:"current",sidebarPosition:0,frontMatter:{title:"HorizontalPodAutoscaling",sidebar_position:0,tags:["Kubernetes","Resource","AutoScaling","HorizontalPodAutoscaling"]},sidebar:"mySidebar",previous:{title:"AutoScaling",permalink:"/en/docs/category/autoscaling"},next:{title:"Base",permalink:"/en/docs/category/base-3"}},s={},u=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],c={toc:u},p="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/auto_scaling-horizontal_pod_autoscaling.png"}),(0,a.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,a.yg)("p",null,"A Kubernetes resource that automatically scales the number of Pods in a Deployment, ReplicaSet, or StatefulSet based on observed CPU usage."),(0,a.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,a.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Base/Cluster"},(0,a.yg)("strong",{parentName:"a"},"Cluster"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Core/Namespace"},(0,a.yg)("strong",{parentName:"a"},"Namespace")))),(0,a.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Apps/Deployment"},(0,a.yg)("strong",{parentName:"a"},"Deployment"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Apps/StatefulSet"},(0,a.yg)("strong",{parentName:"a"},"StatefulSet")))),(0,a.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"service_name")," : HPA resource name"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"namespace")," : Namespace where HPA resources will be deployed"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"annotations")," : A key-value used to display necessary information in the Kubernetes system"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"labels")," : To distinguish objects, the user arbitrarily specifies the desired value"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"min_replicas")," : Minimum number of Pods that can be set in HPA - default is 1"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"max_replicas")," : Maximum number of Pods that can be set in HPA"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"target_cpu_utilization_percentage")," : Target average CPU utilization (represented as a percentage of requested CPU) over all the pods"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"scale_target_ref")," : Reference to extended resources",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name")," : Referenced resource name"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"kind")," : Referenced resource type - ",(0,a.yg)("inlineCode",{parentName:"li"},"Deployment"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"StatefulSet"))))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://kubernetes.io/en/docs/tasks/run-application/horizontal-pod-autoscale/"},"Horizontal Pod Autoscaling(Kubernetes)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/en/docs/resources/horizontal_pod_autoscaler"},"Horizontal Pod Autoscaling(Terraform)"))))}g.isMDXComponent=!0}}]);