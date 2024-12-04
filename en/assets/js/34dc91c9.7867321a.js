"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38939],{15680:(e,r,a)=>{a.d(r,{xA:()=>u,yg:()=>d});var t=a(96540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),p=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},u=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||o;return a?t.createElement(d,i(i({ref:r},u),{},{components:a})):t.createElement(d,i({ref:r},u))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56061:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=a(58168),n=(a(96540),a(15680));const o={title:"Postgresql",sidebar_position:4,tags:["Azure","Resource","Database","Postgresql"]},i=void 0,s={unversionedId:"resource/azure/Database/Postgresql",id:"resource/azure/Database/Postgresql",title:"Postgresql",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/azure/Database/Postgresql.mdx",sourceDirName:"resource/azure/Database",slug:"/resource/azure/Database/Postgresql",permalink:"/en/docs/resource/azure/Database/Postgresql",draft:!1,tags:[{label:"Azure",permalink:"/en/docs/tags/azure"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Database",permalink:"/en/docs/tags/database"},{label:"Postgresql",permalink:"/en/docs/tags/postgresql"}],version:"current",sidebarPosition:4,frontMatter:{title:"Postgresql",sidebar_position:4,tags:["Azure","Resource","Database","Postgresql"]},sidebar:"mySidebar",previous:{title:"MysqlFlexible",permalink:"/en/docs/resource/azure/Database/MysqlFlexible"},next:{title:"PostgresqlFlexible",permalink:"/en/docs/resource/azure/Database/PostgresqlFlexible"}},l={},p=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:p},c="wrapper";function g(e){let{components:r,...a}=e;return(0,n.yg)(c,(0,t.A)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/azureImg/database-postgresql.png"}),(0,n.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.yg)("p",null,"Azure Database for PostgreSQL is a fully managed relational database service provided by Microsoft Azure, based on the widely used open-source PostgreSQL database engine.\nIt allows you to easily deploy, manage, and scale PostgreSQL databases in the cloud without worrying about the underlying infrastructure.\nWith Azure Database for PostgreSQL, Microsoft handles tasks such as patching, backups, and monitoring, enabling you to create and manage PostgreSQL databases with minimal management overhead.\nAdditionally, you can take advantage of features like high availability, automatic backups, and point-in-time recovery."),(0,n.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,n.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Base/ResourceGroup"},(0,n.yg)("strong",{parentName:"a"},"Resource Group"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/azure/Network/Subnet"},"- [",(0,n.yg)("strong",{parentName:"a"},"Subnet"),"](https://docs.cstudio.app/en/docs/resource/azure/Network/Subnet)"))),(0,n.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"version")," : The version of PostgreSQL to use - ",(0,n.yg)("inlineCode",{parentName:"p"},"9.5"),", ",(0,n.yg)("inlineCode",{parentName:"p"}," 9.6"),",  ",(0,n.yg)("inlineCode",{parentName:"p"},"10")," , ",(0,n.yg)("inlineCode",{parentName:"p"},"10.0 "),", ",(0,n.yg)("inlineCode",{parentName:"p"}," 10.2"),",  ",(0,n.yg)("inlineCode",{parentName:"p"},"11"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"sku_name")," : The name of SKU for the PostgreSQL Server, Tier + compute generation + cores pattern - ",(0,n.yg)("inlineCode",{parentName:"p"},"azureDatabaseSku"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"storage_mb")," : Max storage allowed for a Server in MB - ",(0,n.yg)("inlineCode",{parentName:"p"},"5120"),"~",(0,n.yg)("inlineCode",{parentName:"p"},"16777216"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"create_mode")," : The creation mode for restoring or replicating existing Servers - ",(0,n.yg)("inlineCode",{parentName:"p"},"Default"),",",(0,n.yg)("inlineCode",{parentName:"p"},"Replica"),",",(0,n.yg)("inlineCode",{parentName:"p"},"GeoRestore"),",",(0,n.yg)("inlineCode",{parentName:"p"},"PointInTimeRestore"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"admin_username")," : If the creation mode is default, the administrator login for the MySQL Server, Only alphanumeric characters are allowed, Without the reserved words, 1 to 63 characters")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"admin_password")," : If the creation mode is default, the password associated with the administrator login, Contain 3 of the following: lowercase letters/uppercase letters/numbers/special characters, Cannot contain more than 3 consecutive alphanumeric characters in the login name, 8 to 128 characters")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"public_network_access_enabled")," : Allow public network access for the Server - ",(0,n.yg)("inlineCode",{parentName:"p"},"true")," , ",(0,n.yg)("inlineCode",{parentName:"p"},"false"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"ssl_enforcement_enabled")," : Enable SSL enforcement on the Server - ",(0,n.yg)("inlineCode",{parentName:"p"},"true")," , ",(0,n.yg)("inlineCode",{parentName:"p"},"false"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"minimal_tls_version")," : The minimum TLS version to support on the Server - ",(0,n.yg)("inlineCode",{parentName:"p"},"TLS1_2")," , ",(0,n.yg)("inlineCode",{parentName:"p"},"TLS1_1")," , ",(0,n.yg)("inlineCode",{parentName:"p"},"TLS1_0")," , ",(0,n.yg)("inlineCode",{parentName:"p"},"TLSEnforcementDisabled"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"database")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"charset")," : The charset for the PostgreSQL Database - ",(0,n.yg)("inlineCode",{parentName:"li"},"azurePostgresqlChartSet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"collation")," : The collation for the PostgreSQL Database - ",(0,n.yg)("inlineCode",{parentName:"li"},"azurePostgresqlCol")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"firewall_rule")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"start_ip_address")," : The Start IP Address asscociated with the Firewall Rule"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"end_ip_address")," : The End IP Address asscociated with the Firewall Rule"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"tag")," : A tag used to categorize resources, up to 512 characters, in the format ",(0,n.yg)("inlineCode",{parentName:"p"},"key:value"),"."))),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ko-kr/azure/postgresql/single-server/overview"},"Azure Postgresql(Microsoft)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://azure.microsoft.com/ko-kr/pricing/details/postgresql/server/"},"Azure Postgresql Price")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/postgresql_server"},"Azure Postgresql(Terraform)"))))}g.isMDXComponent=!0}}]);