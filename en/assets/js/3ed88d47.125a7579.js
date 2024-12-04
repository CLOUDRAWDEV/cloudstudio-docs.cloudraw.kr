"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30988],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>g});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,g=p["".concat(s,".").concat(d)]||p[d]||y[d]||l;return t?a.createElement(g,i(i({ref:r},u),{},{components:t})):a.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64471:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(58168),n=(t(96540),t(15680));const l={title:"NetworkFirewallPolicy",sidebar_position:0,tags:["AWS","Resource","Vpc","NetworkFirewallPolicy"]},i=void 0,o={unversionedId:"resource/aws/Vpc/NetworkFirewallPolicy",id:"resource/aws/Vpc/NetworkFirewallPolicy",title:"NetworkFirewallPolicy",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Vpc/NetworkFirewallPolicy.mdx",sourceDirName:"resource/aws/Vpc",slug:"/resource/aws/Vpc/NetworkFirewallPolicy",permalink:"/en/docs/resource/aws/Vpc/NetworkFirewallPolicy",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Vpc",permalink:"/en/docs/tags/vpc"},{label:"NetworkFirewallPolicy",permalink:"/en/docs/tags/network-firewall-policy"}],version:"current",sidebarPosition:0,frontMatter:{title:"NetworkFirewallPolicy",sidebar_position:0,tags:["AWS","Resource","Vpc","NetworkFirewallPolicy"]},sidebar:"mySidebar",previous:{title:"NetworkFirewall",permalink:"/en/docs/resource/aws/Vpc/NetworkFirewall"},next:{title:"NetworkFirewallRuleGroup",permalink:"/en/docs/resource/aws/Vpc/NetworkFirewallRuleGroup"}},s={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:c},p="wrapper";function y(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/vpc-network_firewall_policy.png"}),(0,n.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.yg)("p",null,"The AWS Network Firewall Policy defines the monitoring and protection actions for the Network Firewall."),(0,n.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,n.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/Region"},(0,n.yg)("strong",{parentName:"a"},"Region")))),(0,n.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Vpc/NetworkFirewall"},(0,n.yg)("strong",{parentName:"a"},"Network Firewall"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Vpc/NetworkFirewallRuleGroup"},(0,n.yg)("strong",{parentName:"a"},"Network Firewall Rule Group")))),(0,n.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"description")," : Description of the firewall policy"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"stream_exception_policy")," : Describes how to treat traffic which has broken midstream - ",(0,n.yg)("inlineCode",{parentName:"li"},"drop"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"continue"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"reject")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"stateless_default_action")," : stateless default action setting",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"enabled_fragment_packet_action")," : Whether to enable fragment packet action - ",(0,n.yg)("inlineCode",{parentName:"li"},"false"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"true")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"default_action")," : Set of actions to take on a packet if it does not match any of the stateless rules in the policy - ",(0,n.yg)("inlineCode",{parentName:"li"},"aws:drop"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"aws:pass"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"aws:forward_to_sfe")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"stateless_rule_group_names")," : The stateless rule groups that are used in the policy"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"stateful_default_action")," : Configuration of stateful default action",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"rule_evaluation_order")," : Indicates how to manage the order of stateful rule evaluation for the policy"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"default_actions")," : Set of actions to take on a packet if it does not match any of the stateful rules in the policy - ",(0,n.yg)("inlineCode",{parentName:"li"},"aws:drop_strict"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"aws:drop_established"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"aws:alert_strict"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"aws:alert_established")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"strict_stateful_rule_group_names")," : The strict stateful rule groups name that are used in the policy"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"rule_variables")," : Variables that you can use to override default Suricata settings in your firewall policy"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"encryption_configuration"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"enabled_custom_configuration")," : Encrypt data using AWS-managed key - ",(0,n.yg)("inlineCode",{parentName:"li"},"false"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"true"))))),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-policies.html"},"NetworkFirewallPolicy(AWS)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/networkfirewall_firewall_policy"},"NetworkFirewallPolicy(Terraform)"))))}y.isMDXComponent=!0}}]);