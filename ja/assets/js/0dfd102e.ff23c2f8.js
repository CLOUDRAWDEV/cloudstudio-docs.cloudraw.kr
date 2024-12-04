"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28093],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>g});var i=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=i.createContext({}),s=function(e){var n=i.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),y=t,g=c["".concat(p,".").concat(y)]||c[y]||u[y]||r;return a?i.createElement(g,l(l({ref:n},m),{},{components:a})):i.createElement(g,l({ref:n},m))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:t,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}y.displayName="MDXCreateElement"},80776:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=a(58168),t=(a(96540),a(15680));const r={title:"EcsTaskDefinition",sidebar_position:0,tags:["AWS","\u30ea\u30bd\u30fc\u30b9","Ecs","EcsTaskDefinition"]},l=void 0,o={unversionedId:"resource/aws/Ecs/EcsTaskDefinition",id:"resource/aws/Ecs/EcsTaskDefinition",title:"EcsTaskDefinition",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/aws/Ecs/EcsTaskDefinition.mdx",sourceDirName:"resource/aws/Ecs",slug:"/resource/aws/Ecs/EcsTaskDefinition",permalink:"/ja/docs/resource/aws/Ecs/EcsTaskDefinition",draft:!1,tags:[{label:"AWS",permalink:"/ja/docs/tags/aws"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"Ecs",permalink:"/ja/docs/tags/ecs"},{label:"EcsTaskDefinition",permalink:"/ja/docs/tags/ecs-task-definition"}],version:"current",sidebarPosition:0,frontMatter:{title:"EcsTaskDefinition",sidebar_position:0,tags:["AWS","\u30ea\u30bd\u30fc\u30b9","Ecs","EcsTaskDefinition"]},sidebar:"mySidebar",previous:{title:"EcsCluster",permalink:"/ja/docs/resource/aws/Ecs/EcsCluster"},next:{title:"Efs",permalink:"/ja/docs/category/efs"}},p={},s=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],m={toc:s},c="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,i.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("hr",null),(0,t.yg)("br",null),(0,t.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,t.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/ecs-ecs_task_definition.png"}),(0,t.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,t.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,t.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/aws/Base/Region"},(0,t.yg)("strong",{parentName:"a"},"Region")))),(0,t.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"app_environment")," : \u4f5c\u696d\u306b\u5fc5\u8981\u306a\u958b\u59cb\u30bf\u30a4\u30d7 - ",(0,t.yg)("inlineCode",{parentName:"p"},"EC2"),",",(0,t.yg)("inlineCode",{parentName:"p"},"Fargate"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"os_architecture")," : \u30bf\u30b9\u30af\u5b9a\u7fa9\u306e\u767b\u9332\u306b\u4f7f\u7528\u3059\u308b\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u306e\u88fd\u54c1\u30e9\u30a4\u30f3")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"task_cpu")," : \u4f5c\u696d\u3067\u4f7f\u7528\u3059\u308b CPU \u5358\u4f4d\u306e\u6570")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"task_memory")," : \u4f5c\u696d\u3067\u4f7f\u7528\u3059\u308b\u30e1\u30e2\u30ea\u91cf(MiB)")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"network_mode")," : \u30bf\u30b9\u30af\u306e\u30b3\u30f3\u30c6\u30ca\u306b\u4f7f\u7528\u3059\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0 \u30e2\u30fc\u30c9 - ",(0,t.yg)("inlineCode",{parentName:"p"},"awsvpc"),",",(0,t.yg)("inlineCode",{parentName:"p"},"none"),",",(0,t.yg)("inlineCode",{parentName:"p"},"bridge"),",",(0,t.yg)("inlineCode",{parentName:"p"},"host"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"container")," : ECS Cluster \u3067\u52d5\u4f5c\u3059\u308b Container \u306e\u540d\u524d"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"image_url")," : ECS Cluster \u3067\u52d5\u4f5c\u3059\u308b Container \u306e\u30a4\u30e1\u30fc\u30b8"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"essential_enabled")," : Container \u304c\u52d5\u4f5c\u3092\u505c\u6b62\u3057\u305f\u5834\u5408\u3001container \u95a2\u9023\u306e\u4ed6\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3082\u4e00\u7dd2\u306b\u52d5\u4f5c\u3092\u505c\u6b62\u3059\u308b\u304b\u6b63\u5e38\u306b\u52d5\u4f5c\u3059\u308b\u304b\u306e\u53ef\u5426 - ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),",",(0,t.yg)("inlineCode",{parentName:"li"},"true")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"port_mapping")," : \u30dd\u30fc\u30c8\u30de\u30c3\u30d4\u30f3\u30b0\u540d",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name")," : "),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"container_port")," : Container \u304c Host Container Instance \u306b\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u9001\u4fe1\u307e\u305f\u306f\u53d7\u4fe1\u3059\u308b\u3068\u304d\u306b\u4f7f\u7528\u3059\u308b\u30dd\u30fc\u30c8\u756a\u53f7"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"protocol")," : \u30dd\u30fc\u30c8\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u306b\u4f7f\u7528\u3059\u308b\u30d7\u30ed\u30c8\u30b3\u30eb - ",(0,t.yg)("inlineCode",{parentName:"li"},"tcp"),",",(0,t.yg)("inlineCode",{parentName:"li"},"udp")))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"container.port_mapping.app_protocol")," : \u30b5\u30fc\u30d3\u30b9\u63a5\u7d9a\u306b\u4f7f\u7528\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d7\u30ed\u30c8\u30b3\u30eb - ",(0,t.yg)("inlineCode",{parentName:"li"},"http"),",",(0,t.yg)("inlineCode",{parentName:"li"},"http2"),",",(0,t.yg)("inlineCode",{parentName:"li"},"grpc"),",",(0,t.yg)("inlineCode",{parentName:"li"},"none")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"cpu")," : ECS Cluster \u3067\u52d5\u4f5c\u3059\u308b Container \u306e CPU \u5bb9\u91cf"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"memory")," : ECS Cluster \u3067\u52d5\u4f5c\u3059\u308b Container \u306e Memory \u5bb9\u91cf"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"volume")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name")," : Task Definition \u306b\u63a5\u7d9a\u3059\u308b Volume \u540d"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"volume_mount")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name")," : Task Definition \u306b\u63a5\u7d9a\u3059\u308b Volume \u540d"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"container_name")," : Volume \u3092\u30de\u30a6\u30f3\u30c8\u3059\u308b Container \u540d"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"volume_name")," : \u30de\u30a6\u30f3\u30c8\u3059\u308b Volume \u540d"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"container_path")," : Volume \u3092\u30de\u30a6\u30f3\u30c8\u3059\u308b\u30b3\u30f3\u30c6\u30ca\u3078\u306e\u30d1\u30b9"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"read_only")," : Container \u304c Volume \u306b read-only \u30a2\u30af\u30bb\u30b9\u306e\u307f\u53ef\u80fd\u304b\u3069\u3046\u304b\u306e\u53ef\u5426 - ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),",",(0,t.yg)("inlineCode",{parentName:"li"},"true"))))),(0,t.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/task_definitions.html"},"Amazon Ecs Task Definition(AWS)")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition"},"Amazon Ecs Task Definition(Terraform)"))))}u.isMDXComponent=!0}}]);