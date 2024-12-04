"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63300],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),y=a,g=c["".concat(i,".").concat(y)]||c[y]||m[y]||l;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},27137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(58168),a=(r(96540),r(15680));const l={title:"PersistentVolumeClaim",sidebar_position:0,tags:["Kubernetes","\ub9ac\uc18c\uc2a4","Core","PersistentVolumeClaim"]},s=void 0,o={unversionedId:"resource/kubernetes/Core/PersistentVolumeClaim",id:"resource/kubernetes/Core/PersistentVolumeClaim",title:"PersistentVolumeClaim",description:"\ub9ac\uc18c\uc2a4 \uc544\uc774\ucf58",source:"@site/docs/resource/kubernetes/Core/PersistentVolumeClaim.mdx",sourceDirName:"resource/kubernetes/Core",slug:"/resource/kubernetes/Core/PersistentVolumeClaim",permalink:"/docs/resource/kubernetes/Core/PersistentVolumeClaim",draft:!1,tags:[{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"\ub9ac\uc18c\uc2a4",permalink:"/docs/tags/\ub9ac\uc18c\uc2a4"},{label:"Core",permalink:"/docs/tags/core"},{label:"PersistentVolumeClaim",permalink:"/docs/tags/persistent-volume-claim"}],version:"current",sidebarPosition:0,frontMatter:{title:"PersistentVolumeClaim",sidebar_position:0,tags:["Kubernetes","\ub9ac\uc18c\uc2a4","Core","PersistentVolumeClaim"]},sidebar:"mySidebar",previous:{title:"PersistentVolume",permalink:"/docs/resource/kubernetes/Core/PersistentVolume"},next:{title:"Pod",permalink:"/docs/resource/kubernetes/Core/Pod"}},i={},u=[{value:"\ub9ac\uc18c\uc2a4 \uc544\uc774\ucf58",id:"\ub9ac\uc18c\uc2a4-\uc544\uc774\ucf58",level:2},{value:"\ub9ac\uc18c\uc2a4 \uac1c\uc694",id:"\ub9ac\uc18c\uc2a4-\uac1c\uc694",level:2},{value:"\uc5f0\uad00 \ub9ac\uc18c\uc2a4",id:"\uc5f0\uad00-\ub9ac\uc18c\uc2a4",level:2},{value:"\uc0c1\uc704 \ub9ac\uc18c\uc2a4",id:"\uc0c1\uc704-\ub9ac\uc18c\uc2a4",level:3},{value:"\uc5f0\uacb0 \ub9ac\uc18c\uc2a4",id:"\uc5f0\uacb0-\ub9ac\uc18c\uc2a4",level:3},{value:"\ub9ac\uc18c\uc2a4 \uc124\uc815 \uac12",id:"\ub9ac\uc18c\uc2a4-\uc124\uc815-\uac12",level:2},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"\ub9ac\uc18c\uc2a4-\uc544\uc774\ucf58"},"\ub9ac\uc18c\uc2a4 \uc544\uc774\ucf58"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/core-persistent_volume_claim.png"}),(0,a.yg)("h2",{id:"\ub9ac\uc18c\uc2a4-\uac1c\uc694"},"\ub9ac\uc18c\uc2a4 \uac1c\uc694"),(0,a.yg)("p",null,"PV\ub97c \uc694\uccad\ud558\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub9ac\uc18c\uc2a4\uc785\ub2c8\ub2e4."),(0,a.yg)("h2",{id:"\uc5f0\uad00-\ub9ac\uc18c\uc2a4"},"\uc5f0\uad00 \ub9ac\uc18c\uc2a4"),(0,a.yg)("h3",{id:"\uc0c1\uc704-\ub9ac\uc18c\uc2a4"},"\uc0c1\uc704 \ub9ac\uc18c\uc2a4"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/kubernetes/Base/Cluster"},(0,a.yg)("strong",{parentName:"a"},"Cluster"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/kubernetes/Core/Namespace"},(0,a.yg)("strong",{parentName:"a"},"Namespace")))),(0,a.yg)("h3",{id:"\uc5f0\uacb0-\ub9ac\uc18c\uc2a4"},"\uc5f0\uacb0 \ub9ac\uc18c\uc2a4"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/kubernetes/Core/PersistentVolume"},(0,a.yg)("strong",{parentName:"a"},"PersistentVolume"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/kubernetes/Core/Pod"},(0,a.yg)("strong",{parentName:"a"},"Pod"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/kubernetes/Apps/Deployment"},(0,a.yg)("strong",{parentName:"a"},"Deployment"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/kubernetes/Core/DaemonSet"},(0,a.yg)("strong",{parentName:"a"},"DaemonSet"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/kubernetes/Apps/StatefulSet"},(0,a.yg)("strong",{parentName:"a"},"StatefulSet"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/kubernetes/Batch/Job"},(0,a.yg)("strong",{parentName:"a"},"Job"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/kubernetes/Batch/CronJob"},(0,a.yg)("strong",{parentName:"a"},"CronJob")))),(0,a.yg)("h2",{id:"\ub9ac\uc18c\uc2a4-\uc124\uc815-\uac12"},"\ub9ac\uc18c\uc2a4 \uc124\uc815 \uac12"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"service_name")," : PersistentVolumeClaim \ub9ac\uc18c\uc2a4 \uc774\ub984"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"namespace")," : PersistentVolume \ub9ac\uc18c\uc2a4\uac00 \ubc30\ud3ec\ub420 \ub124\uc784\uc2a4\ud398\uc774\uc2a4"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"annotations")," : \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ud544\uc694\ud55c \uc815\ubcf4\ub4e4\uc744 \ud45c\uc2dc\ud574 \uc8fc\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 key-value"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"labels")," : \uac1d\uccb4\ub97c \uad6c\ubd84\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\uc790\uac00 \uc784\uc758\ub85c \uc6d0\ud558\ub294 \uac12\uc744 \uc9c0\uc815"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec")," : PVC\uc758 \uad6c\uccb4\uc801\uc778 \uc2a4\ud399\uc744 \uc815\uc758",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.storage_class_name")," : \uc0ac\uc6a9\ud560 storageclass \uc774\ub984 \uc9c0\uc815"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.volume_name")," : PVC\ub85c \uc5f0\uacb0\ub420 PV \uc774\ub984"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.request_storage")," : PV\uc5d0 \uc694\uad6c\ud560 \uc2a4\ud1a0\ub9ac\uc9c0 \uc6a9\ub7c9"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.access_modes")," : PV\uc5d0 \uc788\uc5b4\uc57c \ud558\ub294 \uc6d0\ud558\ub294 \uc561\uc138\uc2a4 \ubaa8\ub4dc - (PV\uc758 \uc561\uc138\uc2a4 \ubaa8\ub4dc\ub97c \ud3ec\ud568\ud558\uac70\ub098 \uc77c\uce58\ud574\uc57c \ud569\ub2c8\ub2e4.) - ",(0,a.yg)("inlineCode",{parentName:"li"},"ReadOnlyMany"),",",(0,a.yg)("inlineCode",{parentName:"li"},"ReadWriteMany"),",",(0,a.yg)("inlineCode",{parentName:"li"},"ReadWriteOnce"))))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims"},"PersistentVolumeClaim(Kubernetes)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/persistent_volume_claim"},"PersistentVolumeClaim(Terraform)"))))}m.isMDXComponent=!0}}]);