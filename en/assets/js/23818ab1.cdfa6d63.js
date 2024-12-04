"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89681],{15680:(e,a,r)=>{r.d(a,{xA:()=>s,yg:()=>y});var n=r(96540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=n.createContext({}),u=function(e){var a=n.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},s=function(e){var a=u(e.components);return n.createElement(c.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=t,y=p["".concat(c,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(y,o(o({ref:a},s),{},{components:r})):n.createElement(y,o({ref:a},s))}));function y(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[p]="string"==typeof e?e:t,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5945:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(58168),t=(r(96540),r(15680));const i={title:"BackupPlan",sidebar_position:0,tags:["AWS","Resource","Backup","BackupPlan"]},o=void 0,l={unversionedId:"resource/aws/Backup/BackupPlan",id:"resource/aws/Backup/BackupPlan",title:"BackupPlan",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Backup/BackupPlan.mdx",sourceDirName:"resource/aws/Backup",slug:"/resource/aws/Backup/BackupPlan",permalink:"/en/docs/resource/aws/Backup/BackupPlan",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Backup",permalink:"/en/docs/tags/backup"},{label:"BackupPlan",permalink:"/en/docs/tags/backup-plan"}],version:"current",sidebarPosition:0,frontMatter:{title:"BackupPlan",sidebar_position:0,tags:["AWS","Resource","Backup","BackupPlan"]},sidebar:"mySidebar",previous:{title:"Backup",permalink:"/en/docs/category/backup"},next:{title:"BackupVault",permalink:"/en/docs/resource/aws/Backup/BackupVault"}},c={},u=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],s={toc:u},p="wrapper";function m(e){let{components:a,...r}=e;return(0,t.yg)(p,(0,n.A)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("hr",null),(0,t.yg)("br",null),(0,t.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,t.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/backup-backup_plan.png"}),(0,t.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,t.yg)("p",null,"This is a policy expression that defines when and how to back up AWS resources.\nYou can assign resources to a Backup Plan, and AWS Backup will automatically create and manage backups for those resources according to the Backup Plan."),(0,t.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/Region"},(0,t.yg)("strong",{parentName:"a"},"Region")))),(0,t.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,t.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"rule")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"rule_name")," : The name of Backup Plan's rule"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"backup_vault_name")," : The name of a logical container where backups are stored"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"frequency_type")," : The frequency timing about backup"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"frequency_hour")," : Determine the exact hour to initiate backup plan - ",(0,t.yg)("inlineCode",{parentName:"li"},"1 or more")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"start_time")," : The time to start initiating backup plan"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"start_after_minutes")," : The amount of time in minutes before beginning a backup - ",(0,t.yg)("inlineCode",{parentName:"li"},"60 or more")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"complete_after_minutes")," : The amount of time in minutes AWS Backup attempts a backup before canceling the job and returning an error - ",(0,t.yg)("inlineCode",{parentName:"li"},"121 or more")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"enabled_use_cold_storage")," : Whether to use cold storage"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"warm_storage_retention_days")," : Specifies the number of days after creation that a recovery point is moved to cold storage - ",(0,t.yg)("inlineCode",{parentName:"li"},"1 ~ 36410")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"cold_retention_days")," : Number of days after creation to delete recovery points - ",(0,t.yg)("inlineCode",{parentName:"li"},"91 ~ 36500")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"resource_assignment")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"iam_role_arn")," : The ARN of the IAM role that AWS Backup uses to authenticate when restoring and backing up the target resource"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"enabled_contain_all")," : Whether to contain all resources - ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"true"))))),(0,t.yg)("hr",null),(0,t.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/aws-backup/latest/devguide/creating-a-backup-plan.html"},"Amazon BackupPlan(AWS)")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/backup_plan"},"Amazon BackupPlan(Terraform)"))))}m.isMDXComponent=!0}}]);