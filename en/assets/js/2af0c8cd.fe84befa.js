"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68746],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?t.createElement(y,o(o({ref:r},c),{},{components:n})):t.createElement(y,o({ref:r},c))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20277:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=n(58168),a=(n(96540),n(15680));const i={title:"PrivateDnsZone",sidebar_position:1,tags:["Azure","Resource","Dns","PrivateDnsZone"]},o=void 0,l={unversionedId:"resource/azure/Dns/PrivateDnsZone",id:"resource/azure/Dns/PrivateDnsZone",title:"PrivateDnsZone",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/azure/Dns/PrivateDnsZone.mdx",sourceDirName:"resource/azure/Dns",slug:"/resource/azure/Dns/PrivateDnsZone",permalink:"/en/docs/resource/azure/Dns/PrivateDnsZone",draft:!1,tags:[{label:"Azure",permalink:"/en/docs/tags/azure"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Dns",permalink:"/en/docs/tags/dns"},{label:"PrivateDnsZone",permalink:"/en/docs/tags/private-dns-zone"}],version:"current",sidebarPosition:1,frontMatter:{title:"PrivateDnsZone",sidebar_position:1,tags:["Azure","Resource","Dns","PrivateDnsZone"]},sidebar:"mySidebar",previous:{title:"DnsZone",permalink:"/en/docs/resource/azure/Dns/DnsZone"},next:{title:"KeyVault",permalink:"/en/docs/category/keyvault"}},s={},u=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],c={toc:u},p="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/azureImg/dns-private_dns_zone.png"}),(0,a.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,a.yg)("p",null,"Azure Private DNS provides a reliable and trustworthy DNS service that allows you to manage and resolve domain names within a virtual network without the need to add a custom DNS solution.\nBy using private DNS zones, you can use your own custom domain names instead of the default names provided by Azure. Records in a private DNS zone cannot be resolved from the internet.\nDNS resolution for private DNS zones only works within the connected virtual networks."),(0,a.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,a.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Base/ResourceGroup"},(0,a.yg)("strong",{parentName:"a"},"Resource Group")))),(0,a.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Network/VirtualNetwork"},(0,a.yg)("strong",{parentName:"a"},"Virtual Network")))),(0,a.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"private_dns_a_record")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ttl")," : The Time To Live of the DNS record in seconds - ",(0,a.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,a.yg)("inlineCode",{parentName:"li"},"2147483647")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"records")," : The list of values that make up the NS record"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"private_dns_aaaa_record")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ttl")," : The Time To Live of the DNS record in seconds - ",(0,a.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,a.yg)("inlineCode",{parentName:"li"},"2147483647")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"records")," : The list of values that make up the NS record"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"private_dns_cname_record")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ttl")," : The Time To Live of the DNS record in seconds - ",(0,a.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,a.yg)("inlineCode",{parentName:"li"},"2147483647")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"records")," :The list of values that make up the NS record"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"private_dns_ptr_record")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ttl")," : The Time To Live of the DNS record in seconds - ",(0,a.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,a.yg)("inlineCode",{parentName:"li"},"2147483647")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"records")," : The list of values that make up the NS record"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"private_dns_txt_record")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ttl")," : The Time To Live of the DNS record in seconds - ",(0,a.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,a.yg)("inlineCode",{parentName:"li"},"2147483647")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"records")," : The list of values that make up the NS record"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"vnet_link")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"linked_vnet_name")," : Name of the linked virtual network"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"tag")," : Tag to categorize resources - up to 512 characters, ",(0,a.yg)("inlineCode",{parentName:"p"},"key:value")))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ko-kr/azure/dns/private-dns-overview"},"Azure PrivateDnsZone(Microsoft)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/dns/"},"Azure PrivateDnsZone Price")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/private_dns_zone"},"Azure PrivateDnsZone(Terraform)"))))}d.isMDXComponent=!0}}]);