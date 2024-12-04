"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88348],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>g});var r=n(96540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,r,i=function(e,a){if(null==e)return{};var n,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var a=r.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var n=e.components,i=e.mdxType,t=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),y=i,g=m["".concat(o,".").concat(y)]||m[y]||s[y]||t;return n?r.createElement(g,l(l({ref:a},p),{},{components:n})):r.createElement(g,l({ref:a},p))}));function g(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var t=n.length,l=new Array(t);l[0]=y;var u={};for(var o in a)hasOwnProperty.call(a,o)&&(u[o]=a[o]);u.originalType=e,u[m]="string"==typeof e?e:i,l[1]=u;for(var c=2;c<t;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3069:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>t,metadata:()=>u,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const t={title:"LinuxVirtualMachineScaleSet",sidebar_position:3,tags:["Azure","\u30ea\u30bd\u30fc\u30b9","Compute","LinuxVirtualMachineScaleSet"]},l=void 0,u={unversionedId:"resource/azure/Compute/LinuxVirtualMachineScaleSet",id:"resource/azure/Compute/LinuxVirtualMachineScaleSet",title:"LinuxVirtualMachineScaleSet",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/azure/Compute/LinuxVirtualMachineScaleSet.mdx",sourceDirName:"resource/azure/Compute",slug:"/resource/azure/Compute/LinuxVirtualMachineScaleSet",permalink:"/ja/docs/resource/azure/Compute/LinuxVirtualMachineScaleSet",draft:!1,tags:[{label:"Azure",permalink:"/ja/docs/tags/azure"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"Compute",permalink:"/ja/docs/tags/compute"},{label:"LinuxVirtualMachineScaleSet",permalink:"/ja/docs/tags/linux-virtual-machine-scale-set"}],version:"current",sidebarPosition:3,frontMatter:{title:"LinuxVirtualMachineScaleSet",sidebar_position:3,tags:["Azure","\u30ea\u30bd\u30fc\u30b9","Compute","LinuxVirtualMachineScaleSet"]},sidebar:"mySidebar",previous:{title:"LinuxVirtualMachine",permalink:"/ja/docs/resource/azure/Compute/LinuxVirtualMachine"},next:{title:"WindowsserverVirtualMachine",permalink:"/ja/docs/resource/azure/Compute/WindowsserverVirtualMachine"}},o={},c=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],p={toc:c},m="wrapper";function s(e){let{components:a,...n}=e;return(0,i.yg)(m,(0,r.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("hr",null),(0,i.yg)("br",null),(0,i.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,i.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/azureImg/compute-linux_virtual_machine_scale_set.png"}),(0,i.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,i.yg)("p",null,"Azure Linux Virtual Machine Scale Set \u306f Linux \u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3092\u5b9f\u884c\u3059\u308b\u540c\u4e00\u306e\u4eee\u60f3\u30de\u30b7\u30f3\u30b0\u30eb\u30fc\u30d7\u3067\u3042\u308a\u3001 \u5fc5\u8981\u306b\u5fdc\u3058\u3066\u81ea\u52d5\u7684\u306b\u62e1\u5f35\u307e\u305f\u306f\u7e2e\u5c0f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\nScale Set \u306e VM \u6570\u3092\u624b\u52d5\u3067\u8abf\u6574\u3059\u308b\u304b\u3001\u30ea\u30bd\u30fc\u30b9\u4f7f\u7528\u91cf\uff08\u4f8b:CPU\u3001\u30e1\u30e2\u30ea\u8981\u6c42\u91cf\u3001\u307e\u305f\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\uff09\u306b\u5fdc\u3058\u3066\u81ea\u52d5\u7684\u306b\u30b5\u30a4\u30ba\u3092\u8abf\u6574\u3059\u308b\u30eb\u30fc\u30eb\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002\n\u3053\u308c\u306b\u3088\u308a\u3001Azure \u8ca0\u8377\u5206\u6563\u88c5\u7f6e\u3067 Scale Set \u306e VM \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u5206\u6563\u3057\u307e\u3059\u3002"),(0,i.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,i.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/azure/Network/VirtualNetwork"},(0,i.yg)("strong",{parentName:"a"},"Virtual Network")))),(0,i.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"included_vnet_name")," : Subnet \u304c\u542b\u307e\u308c\u3066\u3044\u308b Virtual Network \u540d"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"orchestration_mode")," : Scale Set \u306b\u3088\u3063\u3066 VM \u304c\u7ba1\u7406\u3055\u308c\u308b\u304b\u3069\u3046\u304b\u3092\u6c7a\u5b9a\u3059\u308b\u30aa\u30fc\u30b1\u30b9\u30c8\u30ec\u30fc\u30b7\u30e7\u30f3\u65b9\u5f0f"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"platform_fault_domain_count")," : \u5171\u901a\u96fb\u6e90\u304a\u3088\u3073\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30b9\u30a4\u30c3\u30c1\u3092\u5171\u6709\u3059\u308b VM \u306e\u30b0\u30eb\u30fc\u30d7\u6570"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"vmss_sku")," : Virtual Machine Scale Set \u306e\u4fa1\u683c\u8a2d\u5b9a\u968e\u5c64"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"instances")," : Scale Set \u306e\u4eee\u60f3\u30de\u30b7\u30f3\u6570 ",(0,i.yg)("inlineCode",{parentName:"li"},"1"),"~",(0,i.yg)("inlineCode",{parentName:"li"},"1000")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"source_image"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"enabled_custom_image")," : \u30e6\u30fc\u30b6\u30fc\u30a4\u30e1\u30fc\u30b8 ID \u306e\u4f7f\u7528\u6709\u7121 - ",(0,i.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"false")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"image_id")," : VM \u751f\u6210\u306e\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u30a4\u30e1\u30fc\u30b8\u306e ID"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"publisher")," : VM \u751f\u6210\u306e\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Offer")," : VM \u751f\u6210\u306e\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u30a4\u30e1\u30fc\u30b8\u306e ID"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"sku")," : VM \u751f\u6210\u306e\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u30a4\u30e1\u30fc\u30b8\u306e\u4fa1\u683c\u8a2d\u5b9a\u968e\u5c64"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"enable_ssh_key_authentication")," : \u7ba1\u7406\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306b ssh \u30ad\u30fc\u3092\u4f7f\u7528"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"admin_username")," : VM \u306b\u5bfe\u3059\u308b\u7ba1\u7406\u8005\u30e6\u30fc\u30b6\u30fc\u540d"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"admin_password")," : VM \u306b\u5bfe\u3059\u308b\u7ba1\u7406\u8005\u30d1\u30b9\u30ef\u30fc\u30c9"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"os_disk_caching")," : \u5185\u90e8 OS Disk \u4f7f\u7528\u306e\u305f\u3081\u306e caching \u30bf\u30a4\u30d7 - ",(0,i.yg)("inlineCode",{parentName:"li"},"ReadWrite"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"ReadOnly"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"None")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"storage_account_type")," : \u5185\u90e8 OS Disk \u3092\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3059\u308b\u305f\u3081\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u30bf\u30a4\u30d7 - ",(0,i.yg)("inlineCode",{parentName:"li"},"Standard_LRS"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"StandardSSD_LRS"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"Premium_LRS")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"disk_size_gb")," : \u5185\u90e8 OS Disk \u306e\u30b5\u30a4\u30ba(GB) - ",(0,i.yg)("inlineCode",{parentName:"li"},"1")," ~ ",(0,i.yg)("inlineCode",{parentName:"li"},"11400")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"primary_network_interface_name")," : Virtual Machine \u304c\u63a5\u7d9a\u3055\u308c\u305f Network Interface \u540d"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"tag")," : \u30ea\u30bd\u30fc\u30b9\u3092\u30ab\u30c6\u30b4\u30ea\u306b\u5206\u985e\u3059\u308b\u305f\u3081\u306e\u30bf\u30b0 - \u6700\u5927 512 \u6587\u5b57, ",(0,i.yg)("inlineCode",{parentName:"li"},"key"),":",(0,i.yg)("inlineCode",{parentName:"li"},"value"))),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ko-kr/azure/virtual-machines/overview"},"Azure LinuxVirtualMachine(Microsoft)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/"},"Azure LinuxVirtualMachine \uac00\uaca9")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine"},"Azure LinuxVirtualMachine(Terraform)"))))}s.isMDXComponent=!0}}]);