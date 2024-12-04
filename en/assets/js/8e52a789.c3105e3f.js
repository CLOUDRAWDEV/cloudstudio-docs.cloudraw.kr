"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91598],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var a=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||n;return t?a.createElement(m,l(l({ref:r},u),{},{components:t})):a.createElement(m,l({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=g;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},63112:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=t(58168),o=(t(96540),t(15680));const n={title:"Log",sidebar_position:0,tags:["AWS","Resource","Cloudwatch","Log"]},l=void 0,i={unversionedId:"resource/aws/Cloudwatch/Log",id:"resource/aws/Cloudwatch/Log",title:"Log",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Cloudwatch/Log.mdx",sourceDirName:"resource/aws/Cloudwatch",slug:"/resource/aws/Cloudwatch/Log",permalink:"/en/docs/resource/aws/Cloudwatch/Log",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Cloudwatch",permalink:"/en/docs/tags/cloudwatch"},{label:"Log",permalink:"/en/docs/tags/log"}],version:"current",sidebarPosition:0,frontMatter:{title:"Log",sidebar_position:0,tags:["AWS","Resource","Cloudwatch","Log"]},sidebar:"mySidebar",previous:{title:"Cloudwatch",permalink:"/en/docs/category/cloudwatch"},next:{title:"Metric",permalink:"/en/docs/resource/aws/Cloudwatch/Metric"}},s={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,o.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/cloudwatch-log.png"}),(0,o.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,o.yg)("p",null,"Amazon CloudWatch Logs allows you to monitor, store, and access system, application, and custom log files from sources such as Amazon Elastic Compute Cloud (Amazon EC2) instances, AWS CloudTrail, Route 53, and other sources.\nCloudWatch Logs centralizes logs from all systems, applications, and AWS services in a highly scalable single service.\nYou can then easily view the logs, search for specific error codes or patterns, filter based on specific fields, or securely store them for future analysis.\nWith CloudWatch Logs, you can view all logs as a consistent, time-ordered stream of events regardless of the source, query and sort based on different dimensions, group by specific fields, create custom calculations with a powerful query language, and visualize log data."),(0,o.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,o.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/Region"},(0,o.yg)("strong",{parentName:"a"},"Region")))),(0,o.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"retention_in_days"),": How long the log group is storing logs"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"kms_key_name"),": The name of the KMS key to use to encrypt log data"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"log_stream_name"),": Name of Log Stream"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"metric_filter"),": The name of the metric filter for the log group, up to 512 characters",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"pattern"),": A valid CloudWatch Logs filter pattern for extracting metric data out of ingested log events"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"metric_name"),": The name of the CloudWatch metric to which the monitored log information should be published, Specify up to 255 characters, all characters are valid except colon (:), asterisk (*), dollar sign ($), and space ( )"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"metric_namespace"),": The destination namespace of the CloudWatch metric, Specify up to 255 characters, all characters are valid except colon (:), asterisk (*), dollar sign ($), and space ( )"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"metric_value"),": What to publish to the metric, Valid metric values are floating-point numbers (1, 99.9, etc.), numeric field identifiers (1 USD, 2 USD, etc.), or named field identifiers (such as $requestSize in a symbol-delimited filter pattern, or $ in a JSON-based filter pattern. status - a dollar sign ($) or a dollar sign and a dot ($.) followed by alphanumeric and/or underscore (_) characters)")))),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/AmazonCloudWatchLogs/latest/APIReference/Welcome.html"},"Amazon CloudWatch Log(AWS)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/cloudwatch/pricing/?nc2=type_a"},"Amazon CloudWatch Price(AWS)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_data_protection_policy"},"Amazon CloudWatch Log(Terraform)"))))}p.isMDXComponent=!0}}]);