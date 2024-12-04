"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74919],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>h});var a=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return t?a.createElement(h,i(i({ref:r},u),{},{components:t})):a.createElement(h,i({ref:r},u))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1776:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=t(58168),o=(t(96540),t(15680));const n={title:"Metric",sidebar_position:0,tags:["AWS","Resource","Cloudwatch","Metric"]},i=void 0,s={unversionedId:"resource/aws/Cloudwatch/Metric",id:"resource/aws/Cloudwatch/Metric",title:"Metric",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Cloudwatch/Metric.mdx",sourceDirName:"resource/aws/Cloudwatch",slug:"/resource/aws/Cloudwatch/Metric",permalink:"/en/docs/resource/aws/Cloudwatch/Metric",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Cloudwatch",permalink:"/en/docs/tags/cloudwatch"},{label:"Metric",permalink:"/en/docs/tags/metric"}],version:"current",sidebarPosition:0,frontMatter:{title:"Metric",sidebar_position:0,tags:["AWS","Resource","Cloudwatch","Metric"]},sidebar:"mySidebar",previous:{title:"Log",permalink:"/en/docs/resource/aws/Cloudwatch/Log"},next:{title:"OamMonitoringAccount",permalink:"/en/docs/resource/aws/Cloudwatch/OamMonitoringAccount"}},c={},l=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:l},d="wrapper";function p(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,o.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/cloudwatch-metric.png"}),(0,o.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,o.yg)("p",null,"AWS CloudWatch Metrics are name-value pairs that represent measurements collected from monitored resources.\nFor example, metrics such as CPU utilization, network input, and output can be collected from EC2 instances.\nThese metrics are stored as CloudWatch Metrics and are used for dashboards, alerts, and analysis.\nAdditionally, you can create custom metrics to monitor data collected from your applications and services.\nCloudWatch Metrics are integrated with various services provided by AWS."),(0,o.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,o.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/Region"},(0,o.yg)("strong",{parentName:"a"},"Region")))),(0,o.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"comparison_operator"),": The arithmetic operation to use when comparing the specified Statistic and Threshold"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"evaluation_periods"),": The number of periods over which data is compared to the specified threshold"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"metric_name"),": The name for the alarm's associated metric"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"namespace"),": The namespace for the alarm's associated metric"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"period"),": The period in seconds over which the specified statistic is applied"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"statistic"),": The statistic to apply to the alarm's associated metric"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"threshold"),": The value against which the specified statistic is compared"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"alarm_description"),": The description for the alarm"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"insufficient_data_actions"),": SNS list to send alarms for data shortage indicators")),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"},"Amazon CloudWatch(AWS)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/cloudwatch/pricing/?nc2=type_a"},"Amazon CloudWatch Price(AWS)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_metric_alarm"},"Amazon CloudWatch Metric(Terraform)"))))}p.isMDXComponent=!0}}]);