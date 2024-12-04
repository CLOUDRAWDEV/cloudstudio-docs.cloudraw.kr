"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87834],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>d});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,d=p["".concat(l,".").concat(y)]||p[y]||m[y]||s;return t?n.createElement(d,o(o({ref:r},u),{},{components:t})):n.createElement(d,o({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},79281:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const s={title:"IstioGateway",sidebar_position:0,tags:["Kubernetes","Resource","Helm","IstioGateway"]},o=void 0,i={unversionedId:"resource/kubernetes/Helm/IstioGateway",id:"resource/kubernetes/Helm/IstioGateway",title:"IstioGateway",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/kubernetes/Helm/IstioGateway.mdx",sourceDirName:"resource/kubernetes/Helm",slug:"/resource/kubernetes/Helm/IstioGateway",permalink:"/en/docs/resource/kubernetes/Helm/IstioGateway",draft:!1,tags:[{label:"Kubernetes",permalink:"/en/docs/tags/kubernetes"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Helm",permalink:"/en/docs/tags/helm"},{label:"IstioGateway",permalink:"/en/docs/tags/istio-gateway"}],version:"current",sidebarPosition:0,frontMatter:{title:"IstioGateway",sidebar_position:0,tags:["Kubernetes","Resource","Helm","IstioGateway"]},sidebar:"mySidebar",previous:{title:"IstioCrds",permalink:"/en/docs/resource/kubernetes/Helm/IstioCrds"},next:{title:"Istiod",permalink:"/en/docs/resource/kubernetes/Helm/Istiod"}},l={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/helm-istio_gateway.png"}),(0,a.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,a.yg)("p",null,"Helm chart for Istio Gateway."),(0,a.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,a.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Base/Cluster"},(0,a.yg)("strong",{parentName:"a"},"Cluster"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Core/Namespace"},(0,a.yg)("strong",{parentName:"a"},"Namespace")))),(0,a.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,a.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"service_name")," : Istio Gateway Helm Chart Release Name"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"namespace")," : Namespace where Istio Ingress Helm Chart resources will be deployed"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"version")," : Specifies the version of the Istio Ingress Helm chart"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"set")," : Dynamically change values of Istio Ingress default chart")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/istio-official/gateway"},"Helm install(Istio gateway)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/helm/latest/docs"},"Helm Provider(Terraform)"))))}m.isMDXComponent=!0}}]);