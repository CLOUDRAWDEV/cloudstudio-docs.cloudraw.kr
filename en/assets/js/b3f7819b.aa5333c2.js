"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5231],{15680:(e,r,a)=>{a.d(r,{xA:()=>p,yg:()=>y});var n=a(96540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=n.createContext({}),s=function(e){var r=n.useContext(u),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=t,y=c["".concat(u,".").concat(d)]||c[d]||g[d]||l;return a?n.createElement(y,i(i({ref:r},p),{},{components:a})):n.createElement(y,i({ref:r},p))}));function y(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[c]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57098:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(58168),t=(a(96540),a(15680));const l={title:"NetworkFirewallRuleGroup",sidebar_position:0,tags:["AWS","Resource","Vpc","NetworkFirewallRuleGroup"]},i=void 0,o={unversionedId:"resource/aws/Vpc/NetworkFirewallRuleGroup",id:"resource/aws/Vpc/NetworkFirewallRuleGroup",title:"NetworkFirewallRuleGroup",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Vpc/NetworkFirewallRuleGroup.mdx",sourceDirName:"resource/aws/Vpc",slug:"/resource/aws/Vpc/NetworkFirewallRuleGroup",permalink:"/en/docs/resource/aws/Vpc/NetworkFirewallRuleGroup",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Vpc",permalink:"/en/docs/tags/vpc"},{label:"NetworkFirewallRuleGroup",permalink:"/en/docs/tags/network-firewall-rule-group"}],version:"current",sidebarPosition:0,frontMatter:{title:"NetworkFirewallRuleGroup",sidebar_position:0,tags:["AWS","Resource","Vpc","NetworkFirewallRuleGroup"]},sidebar:"mySidebar",previous:{title:"NetworkFirewallPolicy",permalink:"/en/docs/resource/aws/Vpc/NetworkFirewallPolicy"},next:{title:"Route Table",permalink:"/en/docs/resource/aws/Vpc/RouteTable"}},u={},s=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],p={toc:s},c="wrapper";function g(e){let{components:r,...a}=e;return(0,t.yg)(c,(0,n.A)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("hr",null),(0,t.yg)("br",null),(0,t.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,t.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/vpc-network_firewall_rule_group.png"}),(0,t.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,t.yg)("p",null,"A reusable set of criteria for inspecting and handling network traffic"),(0,t.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,t.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/Region"},(0,t.yg)("strong",{parentName:"a"},"Region")))),(0,t.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Vpc/NetworkFirewallPolicy"},(0,t.yg)("strong",{parentName:"a"},"Network Firewall Policy")))),(0,t.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"description")," : Rule group type"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"rule_group_type")," : Rule group type - ",(0,t.yg)("inlineCode",{parentName:"li"},"STATEFUL"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"STATELESS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"generated_rules_type")," : Rule group format - ",(0,t.yg)("inlineCode",{parentName:"li"},"StandardStatefulRules"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DomainList"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"SuricataRuleStrings")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"rule_evaluation_order")," : The way that your stateful rules are ordered for evaluation - ",(0,t.yg)("inlineCode",{parentName:"li"},"STRICT_ORDER"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DEFAULT_ACTION_ORDER")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"capacity")," : The number of rules expected to have in this rule group during its lifetime - ",(0,t.yg)("inlineCode",{parentName:"li"},"1-30000")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ip_set")," : IP set variable name",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name")," : IP set variable name"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"cidrs")," : Values of the IP set variable"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"port_set")," : Port variable name",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name")," : Name of the port set variable"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"cidrs")," : Standard stateful rule"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"stateful_rule")," : Standard stateful rule name",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name")," : Name of the standard stateful rule"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"protocol")," : Transport protocols to inspect for - ",(0,t.yg)("inlineCode",{parentName:"li"},"IP"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"TCP"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"UDP"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"ICMP"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"HTTP")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"source_ip_or_cidr")," : The source IP addresses and address ranges to inspect for"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"source_port")," : Source port or port range to inspect"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"target_ip_or_cidr")," : Target IP address and address range to inspect"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"traffic_direction")," : The traffic direction to inspect for - ",(0,t.yg)("inlineCode",{parentName:"li"},"ANY"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"FORWARD")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"action")," : Action that a network firewall will do when a packet matches the rule settings - ",(0,t.yg)("inlineCode",{parentName:"li"},"ALERT"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"DROP"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"PASS"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"REJECT")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"encryption_configuration"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"enabled_custom_configuration")," : Encrypt data using AWS-managed key - ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"true"))))),(0,t.yg)("hr",null),(0,t.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups.html"},"NetworkFirewallRuleGroup(AWS)")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/networkfirewall_rule_group"},"NetworkFirewallRuleGroup(Terraform)"))))}g.isMDXComponent=!0}}]);