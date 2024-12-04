"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15456],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>g});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),p=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=t,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(g,i(i({ref:n},u),{},{components:a})):r.createElement(g,i({ref:n},u))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:t,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17736:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(58168),t=(a(96540),a(15680));const o={title:"CosmosdbTable",sidebar_position:4,tags:["Azure","Resource","Cosmosdb","CosmosdbTable"]},i=void 0,l={unversionedId:"resource/azure/Cosmosdb/CosmosdbTable",id:"resource/azure/Cosmosdb/CosmosdbTable",title:"CosmosdbTable",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/azure/Cosmosdb/CosmosdbTable.mdx",sourceDirName:"resource/azure/Cosmosdb",slug:"/resource/azure/Cosmosdb/CosmosdbTable",permalink:"/en/docs/resource/azure/Cosmosdb/CosmosdbTable",draft:!1,tags:[{label:"Azure",permalink:"/en/docs/tags/azure"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Cosmosdb",permalink:"/en/docs/tags/cosmosdb"},{label:"CosmosdbTable",permalink:"/en/docs/tags/cosmosdb-table"}],version:"current",sidebarPosition:4,frontMatter:{title:"CosmosdbTable",sidebar_position:4,tags:["Azure","Resource","Cosmosdb","CosmosdbTable"]},sidebar:"mySidebar",previous:{title:"CosmodbSql",permalink:"/en/docs/resource/azure/Cosmosdb/CosmosdbSql"},next:{title:"CostManagement",permalink:"/en/docs/category/costmanagement"}},s={},p=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:p},m="wrapper";function c(e){let{components:n,...a}=e;return(0,t.yg)(m,(0,r.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("hr",null),(0,t.yg)("br",null),(0,t.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,t.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/azureImg/cosmosdb-cosmosdb_table.png"}),(0,t.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,t.yg)("p",null,"The Cosmos DB Table API is a NoSQL database service provided on Microsoft\u2019s Azure platform.\nIt allows developers to use tables as the fundamental data storage concept, enabling them to store and query vast amounts of semi-structured or structured data.\nThe Cosmos DB Table API supports features such as automatic indexing, global distribution, and high availability, making it suitable for a variety of use cases, including IoT telemetry and game leaderboards."),(0,t.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Base/ResourceGroup"},(0,t.yg)("strong",{parentName:"a"},"Resource Group")))),(0,t.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"capabilities_list")," : List of the Cosmos DB API which should be used - ",(0,t.yg)("inlineCode",{parentName:"p"},"EnableServerless"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"EnableAggregationPipeline"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"enable_multiple_write_locations")," : Enable multi-region writes to leverage provisioned throughput across global databases and containers - ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"false"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"public_network_access_enabled")," : Enable connection to the account by public IP address or service endpoint - ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"false"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"enable_automatic_failover")," : Enable automatic failover for the account - ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"false"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"virtual_network_filter_enabled")," : Enable filters so that only certain Subnets in the Virtual network can access the account - ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"false"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"network_acl_bypass_for_azure_services")," :Allow ACL bypass for Azure service - ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"false"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"geo_location")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"failover_priority")," : The failover priority of the region - ",(0,t.yg)("inlineCode",{parentName:"li"},"0"),"~ ",(0,t.yg)("inlineCode",{parentName:"li"},"0")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"zone_redundant")," : Enable the zone redundancy in case of an error - ",(0,t.yg)("inlineCode",{parentName:"li"},"true"),"~ ",(0,t.yg)("inlineCode",{parentName:"li"},"false")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"consistency_policy")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"consistency_level")," : The consistency level of Cassandra DB to set availability and performance of database - ",(0,t.yg)("inlineCode",{parentName:"li"},"Eventual"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"Session"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"Strong"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"ConsistentPrefix"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"BoundedStaleness")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"max_interval_in_seconds")," : If using Bounded Staleness, the time amount of staleness tolerated in seconds - ",(0,t.yg)("inlineCode",{parentName:"li"},"5"),"~ ",(0,t.yg)("inlineCode",{parentName:"li"},"86400")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"max_staleness_prefix")," : If using Bounded Staleness, the number of stale requests tolerated - ",(0,t.yg)("inlineCode",{parentName:"li"},"10"),"~",(0,t.yg)("inlineCode",{parentName:"li"},"2147483647")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"backup")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"type")," : The type of backup - ",(0,t.yg)("inlineCode",{parentName:"li"},"Continuous"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"Periodic")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"interval_in_minutes")," : The interval of backup in minutes, Between 60 and 1440 - ",(0,t.yg)("inlineCode",{parentName:"li"},"60"),"~ ",(0,t.yg)("inlineCode",{parentName:"li"},"1440")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"retention_in_hours")," : The time in hours that the backup is retained, Between 8 and 720 - ",(0,t.yg)("inlineCode",{parentName:"li"},"8"),"~",(0,t.yg)("inlineCode",{parentName:"li"},"720")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"table")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"throughput")," : The throughput of the Cosmos DB Table - ",(0,t.yg)("inlineCode",{parentName:"li"},"Continuous"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"Periodic")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"enable_autoscale")," : Whether to apply auto scaling to Cassandra keyspace - ",(0,t.yg)("inlineCode",{parentName:"li"},"60"),"~ ",(0,t.yg)("inlineCode",{parentName:"li"},"1440")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"tag")," : Tag to categorize resources - up to 512 characters, ",(0,t.yg)("inlineCode",{parentName:"p"},"key:value")))),(0,t.yg)("hr",null),(0,t.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ko-kr/azure/cosmos-db/introduction"},"Azure Cosmosdb(Microsoft)")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/cosmos-db/autoscale-provisioned/"},"Azure Cosmosdb Price")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/cosmosdb_account"},"Azure Cosmosdb(Terraform)"))))}c.isMDXComponent=!0}}]);