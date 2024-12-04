"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73414],{15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>g});var r=n(96540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=r.createContext({}),p=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s=function(e){var a=p(e.components);return r.createElement(c.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=t,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:a},s),{},{components:n})):r.createElement(g,o({ref:a},s))}));function g(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[d]="string"==typeof e?e:t,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95441:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(58168),t=(n(96540),n(15680));const i={title:"PrivateLoadBalancer",sidebar_position:0,tags:["Azure","\ub9ac\uc18c\uc2a4","LoadBalancer","PrivateLoadBalancer"]},o=void 0,l={unversionedId:"resource/azure/LoadBalancer/PrivateLoadBalancer",id:"resource/azure/LoadBalancer/PrivateLoadBalancer",title:"PrivateLoadBalancer",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/azure/LoadBalancer/PrivateLoadBalancer.mdx",sourceDirName:"resource/azure/LoadBalancer",slug:"/resource/azure/LoadBalancer/PrivateLoadBalancer",permalink:"/en/docs/resource/azure/LoadBalancer/PrivateLoadBalancer",draft:!1,tags:[{label:"Azure",permalink:"/en/docs/tags/azure"},{label:"\ub9ac\uc18c\uc2a4",permalink:"/en/docs/tags/\ub9ac\uc18c\uc2a4"},{label:"LoadBalancer",permalink:"/en/docs/tags/load-balancer"},{label:"PrivateLoadBalancer",permalink:"/en/docs/tags/private-load-balancer"}],version:"current",sidebarPosition:0,frontMatter:{title:"PrivateLoadBalancer",sidebar_position:0,tags:["Azure","\ub9ac\uc18c\uc2a4","LoadBalancer","PrivateLoadBalancer"]},sidebar:"mySidebar",previous:{title:"LoadBalancer",permalink:"/en/docs/category/loadbalancer"},next:{title:"PublicLoadBalancer",permalink:"/en/docs/resource/azure/LoadBalancer/PublicLoadBalancer"}},c={},p=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],s={toc:p},d="wrapper";function u(e){let{components:a,...n}=e;return(0,t.yg)(d,(0,r.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("hr",null),(0,t.yg)("br",null),(0,t.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,t.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/azureImg/load_balancer-private_load_balancer.png"}),(0,t.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,t.yg)("p",null,"A Load Balancer refers to the efficient distribution of incoming network traffic across a group of backend resources or servers.\nAzure Load Balancer operates at Layer 4 of the OSI (Open Systems Interconnection) model, serving as a single point of contact for clients.\nThe Load Balancer distributes inbound traffic arriving at its front end to instances in the backend pool. This distribution is governed by configured load-balancing rules and health probes.\nBackend pool instances can be Azure Virtual Machines or instances from a Virtual Machine Scale Set.\nA Private Load Balancer is used when only a private IP address is required at the front end and is employed to distribute traffic within a virtual network.\nIn hybrid scenarios, access to the Load Balancer's front end from an on-premises network is possible."),(0,t.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,t.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Base/ResourceGroup"},(0,t.yg)("strong",{parentName:"a"},"Resource Group")))),(0,t.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"sku")," : The SKU to select the scale and features of the Azure Load Balancer - ",(0,t.yg)("inlineCode",{parentName:"p"},"standard"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"Basic"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"private_lb_frontend_ip_config")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"subnet_name")," : The name of Subnet which should be associated with the IP configuration"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"virtual_network_name")," : The name of Virtual Machine which forward traffic")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"backend_pool")," : Name of the Load Balancer's backend pool"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"linked_virtual_machine_names")," : Names of the virtual machines to which the Load Balancer will route traffic"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"health_probe")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"protocol")," : The type of Backend endpoint protocol which health probe uses - ",(0,t.yg)("inlineCode",{parentName:"li"},"Http"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"Https"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"Tcp")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"port")," : The port which health probe uses to check backend endpoint - ",(0,t.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,t.yg)("inlineCode",{parentName:"li"},"65535")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"request_path")," : The path to use for GET when using Http(s) probes"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"interval_in_seconds")," : Specifies the number of seconds between checking response of the backend pool instance by health probes - ",(0,t.yg)("inlineCode",{parentName:"li"},"5")," ~ ",(0,t.yg)("inlineCode",{parentName:"li"},"2147483646")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"rule")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"protocol")," : The transport protocol for the external endpoint - ",(0,t.yg)("inlineCode",{parentName:"li"},"Tcp"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"Udp"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"All")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"frontend_port")," : the port for the external endpoint - ",(0,t.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,t.yg)("inlineCode",{parentName:"li"},"65534")," - ",(0,t.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,t.yg)("inlineCode",{parentName:"li"},"65534")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"backend_port")," : The port used for internal connections on the endpoint, 0 ~ 65535 - ",(0,t.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,t.yg)("inlineCode",{parentName:"li"},"65535")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"disable_outbound_snat")," : Enable SNAT for outbound connections - ",(0,t.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"false")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"frontend_ip_configuration_name")," : The name of the frontend IP configuration to which the rule is associated"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"backend_pool_name")," : The name of the Backend Address Pool to which the Load Balancer will forward traffic"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"nat_rule")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"protocol")," : The transport protocol for the external endpoint - ",(0,t.yg)("inlineCode",{parentName:"li"},"Tcp"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"Udp"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"All")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"frontend_port")," : The port for the external endpoint, Range between 0 and 65534 - ",(0,t.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,t.yg)("inlineCode",{parentName:"li"},"65534")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"backend_port")," : The port used for internal connections on the endpoint, Range between 0 and 65535 - ",(0,t.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,t.yg)("inlineCode",{parentName:"li"},"65535")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"frontend_ip_configuration_name")," : The name of the frontend IP configuration to which the nat rule is associated"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"tag")," : Tag to categorize resources - up to 512 characters, ",(0,t.yg)("inlineCode",{parentName:"p"},"key"),":",(0,t.yg)("inlineCode",{parentName:"p"},"value")))),(0,t.yg)("hr",null),(0,t.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ko-kr/azure/load-balancer/load-balancer-overview"},"Azure PrivateLoadBalancer(Microsoft)")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/load-balancer/"},"Azure PrivateLoadBalancer Price")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb"},"Azure PrivateLoadBalancer(Terraform)"))))}u.isMDXComponent=!0}}]);