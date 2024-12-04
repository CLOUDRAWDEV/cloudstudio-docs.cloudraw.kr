"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87482],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,y=p["".concat(l,".").concat(d)]||p[d]||f[d]||s;return t?a.createElement(y,o(o({ref:r},u),{},{components:t})):a.createElement(y,o({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21205:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(58168),n=(t(96540),t(15680));const s={title:"Waf Ipset",sidebar_position:0,tags:["AWS","Resource","Waf","WafIpset"]},o=void 0,i={unversionedId:"resource/aws/Waf/WafIpset",id:"resource/aws/Waf/WafIpset",title:"Waf Ipset",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Waf/WafIpset.mdx",sourceDirName:"resource/aws/Waf",slug:"/resource/aws/Waf/WafIpset",permalink:"/en/docs/resource/aws/Waf/WafIpset",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Waf",permalink:"/en/docs/tags/waf"},{label:"WafIpset",permalink:"/en/docs/tags/waf-ipset"}],version:"current",sidebarPosition:0,frontMatter:{title:"Waf Ipset",sidebar_position:0,tags:["AWS","Resource","Waf","WafIpset"]},sidebar:"mySidebar",previous:{title:"Waf",permalink:"/en/docs/category/waf"},next:{title:"Waf Rule Group",permalink:"/en/docs/resource/aws/Waf/WafRuleGroup"}},l={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:c},p="wrapper";function f(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/waf-waf_ipset.png"}),(0,n.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.yg)("p",null,"An AWS WAF IPSet is a list of IP addresses used by the Web Application Firewall (WAF) on Amazon Web Services.\nIt allows users to create and manage access rules for specified IP addresses.\nBy using an IPSet, you can enhance web application security by allowing or blocking requests from specific IP addresses."),(0,n.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,n.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/"},(0,n.yg)("strong",{parentName:"a"},"Region"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/"},(0,n.yg)("strong",{parentName:"a"},"Base")))),(0,n.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"scope"),": Specifies whether this is for an AWS CloudFront distribution or for a regional application - ",(0,n.yg)("inlineCode",{parentName:"li"},"REGIONAL"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"CLOUDFRONT")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"ip_address_version"),": Specify IPV4 or IPV6 - ",(0,n.yg)("inlineCode",{parentName:"li"},"IPV4"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"IPV6")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"addresses"),": Contains an array of strings that specify one or more IP addresses or blocks of IP addresses in Classless Inter-Domain Routing (CIDR) notation")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/waf/features/"},"AWS WAF Function(AWS)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/waf/pricing/?nc2=type_a"},"AWS WAF Price(AWS)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/waf_ipset"},"aws_waf_ipset(Terraform)"))))}f.isMDXComponent=!0}}]);