"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11694],{15680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>g});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,g=p["".concat(c,".").concat(y)]||p[y]||d[y]||l;return n?t.createElement(g,i(i({ref:r},s),{},{components:n})):t.createElement(g,i({ref:r},s))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=y;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},25690:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var t=n(58168),o=(n(96540),n(15680));const l={title:"Network Acl",sidebar_position:0,tags:["Ncloud","Resource","Security","NetworkAcl"]},i=void 0,a={unversionedId:"resource/ncloud/Security/NetworkAcl",id:"resource/ncloud/Security/NetworkAcl",title:"Network Acl",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/ncloud/Security/NetworkAcl.mdx",sourceDirName:"resource/ncloud/Security",slug:"/resource/ncloud/Security/NetworkAcl",permalink:"/en/docs/resource/ncloud/Security/NetworkAcl",draft:!1,tags:[{label:"Ncloud",permalink:"/en/docs/tags/ncloud"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Security",permalink:"/en/docs/tags/security"},{label:"NetworkAcl",permalink:"/en/docs/tags/network-acl"}],version:"current",sidebarPosition:0,frontMatter:{title:"Network Acl",sidebar_position:0,tags:["Ncloud","Resource","Security","NetworkAcl"]},sidebar:"mySidebar",previous:{title:"AccessControlGroup",permalink:"/en/docs/resource/ncloud/Security/AccessControlGroup"},next:{title:"Storage",permalink:"/en/docs/category/storage-1"}},c={},u=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],s={toc:u},p="wrapper";function d(e){let{components:r,...n}=e;return(0,o.yg)(p,(0,t.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,o.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/ncloudImg/security-network_acl.png"}),(0,o.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,o.yg)("p",null,"This service provides network security management for subnets."),(0,o.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,o.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/ncloud/Networking/Vpc"},(0,o.yg)("strong",{parentName:"a"},"Vpc")))),(0,o.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"included_vpc_name")," : The name of VPC to create ACL"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"nacl_description")," : Description of ACL"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"inbound_rule"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"priority")," : The priority of inbound rule, 0 to 199"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"protocol")," : The protocol of inbound traffic - ",(0,o.yg)("inlineCode",{parentName:"li"},"TCP"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"UDP"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"ICMP")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"rule_action")," : Allow or deny inbound traffic - ",(0,o.yg)("inlineCode",{parentName:"li"},"ALLOW"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"DROP")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ip_block")," : The source of inbound traffic, the CIDR block"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"port_range")," : The range of ports to apply, 1 to 65535"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"outbound_rule"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"priority")," : The priority of outbound rule, 0 to 199"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"protocol")," : The protocol of outbound traffic - ",(0,o.yg)("inlineCode",{parentName:"li"},"TCP"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"UDP"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"ICMP")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"rule_action")," : Allow or deny outbound traffic - ",(0,o.yg)("inlineCode",{parentName:"li"},"ALLOW"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"DROP")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ip_block")," : The destination of outbound traffic, the CIDR block"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"port_range")," : The range of ports to apply, 1 to 65535 (When setting range: 100-200)")))),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://guide.ncloud-docs.com/docs/vpc-nacl-vpc"},"Network ACL(Ncloud)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/NaverCloudPlatform/ncloud/latest/docs/resources/network_acl"},"ncloud_network_acl(Terraform)"))))}d.isMDXComponent=!0}}]);