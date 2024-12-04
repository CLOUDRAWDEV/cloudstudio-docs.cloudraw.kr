"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55830],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,g=p["".concat(u,".").concat(d)]||p[d]||y[d]||o;return t?a.createElement(g,i(i({ref:r},l),{},{components:t})):a.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22253:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(58168),n=(t(96540),t(15680));const o={title:"NatGateway",sidebar_position:4,tags:["Azure","Resource","Network","NatGateway"]},i=void 0,s={unversionedId:"resource/azure/Network/NatGateway",id:"resource/azure/Network/NatGateway",title:"NatGateway",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/azure/Network/NatGateway.mdx",sourceDirName:"resource/azure/Network",slug:"/resource/azure/Network/NatGateway",permalink:"/en/docs/resource/azure/Network/NatGateway",draft:!1,tags:[{label:"Azure",permalink:"/en/docs/tags/azure"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Network",permalink:"/en/docs/tags/network"},{label:"NatGateway",permalink:"/en/docs/tags/nat-gateway"}],version:"current",sidebarPosition:4,frontMatter:{title:"NatGateway",sidebar_position:4,tags:["Azure","Resource","Network","NatGateway"]},sidebar:"mySidebar",previous:{title:"Firewall",permalink:"/en/docs/resource/azure/Network/Firewall"},next:{title:"NetworkDdosProtectionPlan",permalink:"/en/docs/resource/azure/Network/NetworkDdosProtectionPlan"}},u={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],l={toc:c},p="wrapper";function y(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,a.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/azureImg/network-nat_gateway.png"}),(0,n.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.yg)("p",null,"Azure NAT (Network Address Translation) Gateway is a managed networking service provided by Microsoft Azure that enables resources within a Virtual Network (VNet) to access the internet while keeping their source IP addresses hidden.\nBy using Azure NAT Gateway, you can provide internet connectivity to resources within a VNet without exposing their private IP addresses to the internet.\nThis helps enhance security by preventing direct access to the resources from the internet.\nAdditionally, it can help reduce the number of public IP addresses required for accessing resources within the VNet."),(0,n.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,n.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Base/ResourceGroup"},(0,n.yg)("strong",{parentName:"a"},"Resource Group")))),(0,n.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/azure/Network/Subnet"},"- [",(0,n.yg)("strong",{parentName:"a"},"Subnet"),"](https://docs.cstudio.app/en/docs/resource/azure/Network/Subnet)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Network/PublicIp"},(0,n.yg)("strong",{parentName:"a"},"Public Ip")))),(0,n.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"linked_subnet_name")," : The name of Subnet to which to attach the Nat gateway")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"linked_public_ip_name")," : The Public IP name to connect to Nat Gateway")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"idle_timeout_in_minutes")," : The idle timeout in minutes - ",(0,n.yg)("inlineCode",{parentName:"p"},"4"),"~ ",(0,n.yg)("inlineCode",{parentName:"p"},"120"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"tag")," : Tag to categorize resources - up to 512 characters, ",(0,n.yg)("inlineCode",{parentName:"p"},"key"),":",(0,n.yg)("inlineCode",{parentName:"p"},"value")))),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview"},"Azure NatGateway(Microsoft)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/virtual-network/"},"Azure NatGateway Price")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/nat_gateway"},"Azure NatGateway(Terraform)"))))}y.isMDXComponent=!0}}]);