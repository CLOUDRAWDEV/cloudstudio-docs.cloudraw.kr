"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[70475],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),y=o,g=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return t?r.createElement(g,c(c({ref:n},u),{},{components:t})):r.createElement(g,c({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=y;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},16993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const i={title:"Dx Connection",sidebar_position:0,tags:["AWS","Resource","DirectConnection","DxConnection"]},c=void 0,a={unversionedId:"resource/aws/DirectConnect/DxConnection",id:"resource/aws/DirectConnect/DxConnection",title:"Dx Connection",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/DirectConnect/DxConnection.mdx",sourceDirName:"resource/aws/DirectConnect",slug:"/resource/aws/DirectConnect/DxConnection",permalink:"/en/docs/resource/aws/DirectConnect/DxConnection",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"DirectConnection",permalink:"/en/docs/tags/direct-connection"},{label:"DxConnection",permalink:"/en/docs/tags/dx-connection"}],version:"current",sidebarPosition:0,frontMatter:{title:"Dx Connection",sidebar_position:0,tags:["AWS","Resource","DirectConnection","DxConnection"]},sidebar:"mySidebar",previous:{title:"Direct Connect",permalink:"/en/docs/category/direct-connect"},next:{title:"DxGateway",permalink:"/en/docs/resource/aws/DirectConnect/DxGateway"}},s={},l=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,o.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/direct_connect-dx_connection.png"}),(0,o.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,o.yg)("p",null,"AWS Direct Connect allows you to connect your internal network to an AWS Direct Connect location via standard Ethernet fiber optic cables.\nOne end of the cable connects to your router, while the other end connects to an AWS Direct Connect router. This connection enables you to create virtual interfaces that bypass the Internet Service Provider for public AWS network paths, providing direct access to services (e.g., Amazon S3) or Amazon VPC.\nThe AWS Direct Connect location offers access to AWS public regions using a single connection or to AWS GovCloud (US) and other public AWS regions."),(0,o.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,o.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/Region"},(0,o.yg)("strong",{parentName:"a"},"Region")))),(0,o.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"bandwidth"),": The bandwidth of the connection - ",(0,o.yg)("inlineCode",{parentName:"li"},"50Mbps"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"100Mbps"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"200Mbps"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"300Mbps"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"400Mbps"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"500Mbps"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"1Gbps"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"2Gbps"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"5Gbps"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"10Gbps"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"100Gbps")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"location"),": The AWS Direct Connect location where the connection is located")),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/directconnect/latest/UserGuide/Welcome.html"},"Amazon Direct Connect(AWS)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/directconnect/pricing/?nc2=type_a"},"Amazon Direct Connect Price(AWS)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dx_connection"},"Amazon Direct Connect(Terraform)"))))}d.isMDXComponent=!0}}]);