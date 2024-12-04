"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1047],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>g});var n=t(96540);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(t),y=s,g=p["".concat(i,".").concat(y)]||p[y]||d[y]||l;return t?n.createElement(g,o(o({ref:r},c),{},{components:t})):n.createElement(g,o({ref:r},c))}));function g(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var l=t.length,o=new Array(l);o[0]=y;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a[p]="string"==typeof e?e:s,o[1]=a;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},149:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=t(58168),s=(t(96540),t(15680));const l={title:"ClusterRole",sidebar_position:0,tags:["Kubernetes","Resource","RBAC","ClusterRole"]},o=void 0,a={unversionedId:"resource/kubernetes/Rbac/ClusterRole",id:"resource/kubernetes/Rbac/ClusterRole",title:"ClusterRole",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/kubernetes/Rbac/ClusterRole.mdx",sourceDirName:"resource/kubernetes/Rbac",slug:"/resource/kubernetes/Rbac/ClusterRole",permalink:"/en/docs/resource/kubernetes/Rbac/ClusterRole",draft:!1,tags:[{label:"Kubernetes",permalink:"/en/docs/tags/kubernetes"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"RBAC",permalink:"/en/docs/tags/rbac"},{label:"ClusterRole",permalink:"/en/docs/tags/cluster-role"}],version:"current",sidebarPosition:0,frontMatter:{title:"ClusterRole",sidebar_position:0,tags:["Kubernetes","Resource","RBAC","ClusterRole"]},sidebar:"mySidebar",previous:{title:"Rbac",permalink:"/en/docs/category/rbac"},next:{title:"ClusterRoleBinding",permalink:"/en/docs/resource/kubernetes/Rbac/ClusterRoleBinding"}},i={},u=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],c={toc:u},p="wrapper";function d(e){let{components:r,...t}=e;return(0,s.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("hr",null),(0,s.yg)("br",null),(0,s.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,s.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/rbac-cluster_role.png"}),(0,s.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,s.yg)("p",null,"A Kubernetes resource that creates roles applicable at the cluster level and across all namespaces"),(0,s.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,s.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Base/Cluster"},(0,s.yg)("strong",{parentName:"a"},"Cluster")))),(0,s.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Rbac/ClusterRolebinding"},(0,s.yg)("strong",{parentName:"a"},"ClusterRolebinding")))),(0,s.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"service_name"),": Name of the ClusterRole resource"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"annotations"),": Key-value pairs used to display necessary information in the Kubernetes system"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"labels"),": User-specified values to distinguish objects"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"rule"),": Policy role for the ClusterRole",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"name"),": Name of the policy role"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"api_groups"),": API groups that include the resources allowed by this policy"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"resources"),": List of resources to which this rule applies"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"resource_names"),": Specifies individual instances of the resource if selected - if empty, includes all instances of the resource"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"non_resource_urls"),": Used for specifying rules in URL format rather than as resources - can specify URLs for health checks"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"verbs"),": List of verbs applied to all resources included in the rule")))),(0,s.yg)("hr",null),(0,s.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"},"ClusterRole(kubernetes)")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/cluster_role"},"ClusterRole(Terraform)"))))}d.isMDXComponent=!0}}]);