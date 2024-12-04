"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10674],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>d});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},g=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||y[m]||l;return a?t.createElement(d,i(i({ref:n},g),{},{components:a})):t.createElement(d,i({ref:n},g))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17659:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const l={title:"Postgresql",sidebar_position:0,tags:["AWS","\u30ea\u30bd\u30fc\u30b9","Rds","Postgresql"]},i=void 0,o={unversionedId:"resource/aws/Rds/Postgresql",id:"resource/aws/Rds/Postgresql",title:"Postgresql",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/aws/Rds/Postgresql.mdx",sourceDirName:"resource/aws/Rds",slug:"/resource/aws/Rds/Postgresql",permalink:"/ja/docs/resource/aws/Rds/Postgresql",draft:!1,tags:[{label:"AWS",permalink:"/ja/docs/tags/aws"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"Rds",permalink:"/ja/docs/tags/rds"},{label:"Postgresql",permalink:"/ja/docs/tags/postgresql"}],version:"current",sidebarPosition:0,frontMatter:{title:"Postgresql",sidebar_position:0,tags:["AWS","\u30ea\u30bd\u30fc\u30b9","Rds","Postgresql"]},sidebar:"mySidebar",previous:{title:"Oracle",permalink:"/ja/docs/resource/aws/Rds/Oracle"},next:{title:"Route53",permalink:"/ja/docs/category/route53"}},s={},p=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],g={toc:p},u="wrapper";function y(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,r.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/rds-postgresql.png"}),(0,r.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,r.yg)("p",null,"AWS \u3067 PostgreSQL \u3092\u4f7f\u7528\u3057\u3066 RDS \u3092\u69cb\u7bc9\u3059\u308b\u3068\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u904b\u55b6\u3068\u7ba1\u7406\u304c\u5bb9\u6613\u306b\u306a\u308a\u3001\u62e1\u5f35\u6027\u304c\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002\n\u307e\u305f\u3001RDS \u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u5bfe\u3059\u308b\u81ea\u52d5\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u304a\u3088\u3073\u5fa9\u5143\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3001\u30c7\u30fc\u30bf\u640d\u5931\u3092\u9632\u6b62\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001AWS \u304c\u63d0\u4f9b\u3059\u308b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u6a5f\u80fd\u3067\u30c7\u30fc\u30bf\u306e\u5b89\u5168\u6027\u3092\u4fdd\u969c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,r.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/aws/Vpc/Subnet"},(0,r.yg)("strong",{parentName:"a"},"Subnet")))),(0,r.yg)("h3",{id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"},"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/aws/Rds/Postgresql"},(0,r.yg)("strong",{parentName:"a"},"PostgreSQL")))),(0,r.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"database_name")," : \u521d\u671f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u540d"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"engine_version")," : RDS \u306b\u4f7f\u7528\u3059\u308b PostgreSQL \u306e\u30d0\u30fc\u30b8\u30e7\u30f3"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"instance_class")," : RDS DB \u306e\u4fa1\u683c\u6e2c\u5b9a\u968e\u5c64"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"storage_type")," : RDS \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e Storage Type - ",(0,r.yg)("inlineCode",{parentName:"li"},"gp2"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"io1"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"standard")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"allocated_storage")," : RDS Insatance Storage \u306e\u5bb9\u91cf(Gigabytes)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"max_allocated_storage")," : Amazon RDS \u304c DB \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u81ea\u52d5\u7684\u306b\u62e1\u5f35\u3067\u304d\u308b\u4e0a\u9650\u7dda"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"multi_az_enabled")," : \u30de\u30eb\u30c1 AZ \u6d3b\u6027\u5316 - ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"false")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"username")," : RDS \u306e\u30e6\u30fc\u30b6\u30fc\u540d"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"password")," : RDS \u306e\u30e6\u30fc\u30b6\u30fc\u30d1\u30b9\u30ef\u30fc\u30c9"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"skip_final_snapshot")," : DB \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u524a\u9664\u3055\u308c\u308b\u524d\u306b\u3001\u6700\u7d42 DB \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u304b\u3069\u3046\u304b\u306e\u53ef\u5426"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"included_subnet_names")," : RDS Subnet \u30b0\u30eb\u30fc\u30d7\u306b\u63a5\u7d9a\u3059\u308b Subnet \u540d"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"backup_retention_period")," : \u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3059\u308b\u671f\u9593"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"storage_encrypted")," : DB \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u6697\u53f7\u5316\u53ef\u5426\u3092\u6307\u5b9a - ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"false")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"publicly_accessible")," : \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b public access \u304c\u53ef\u80fd\u304b\u3069\u3046\u304b\u306e\u53ef\u5426 - ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"false")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"monitoring"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"performance_insights_enabled")," : \uc131\ub2a5 \uc778\uc0ac\uc774\ud2b8 \ud65c\uc131\ud654"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"encryption"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"storage_encrypted")," : DB \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u6697\u53f7\u5316\u53ef\u5426\u3092\u6307\u5b9a - ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"false")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"kms_key_name")," : \u6697\u53f7\u5316\u306b\u4f7f\u7528\u3059\u308b KMS \u30ad\u30fc\u540d"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"backup"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"backup_retention_period")," : \u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u30c7\u30fc\u30bf\u3092\u4fdd\u6301\u3059\u308b\u671f\u9593 - ",(0,r.yg)("inlineCode",{parentName:"li"},"1"),"~",(0,r.yg)("inlineCode",{parentName:"li"},"35")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"final_snapshot_enabled")," : DB \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u524a\u9664\u3055\u308c\u308b\u524d\u306b\u3001\u6700\u7d42 DB \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u304b\u3069\u3046\u304b\u306e\u53ef\u5426 - ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"false")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"final_snapshot_name")," : \u6700\u7d42\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u540d - ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"false"))))),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/rds/postgresql/"},"Amazon RDS for PostgreSQL(Amazon RDS)(AWS)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/rds/postgresql/what-is-postgresql/"},"What is PostgreSQL?(AWS)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/rds/postgresql/pricing/"},"Amazon RDS for PostgreSQL \u6599\u91d1"))))}y.isMDXComponent=!0}}]);