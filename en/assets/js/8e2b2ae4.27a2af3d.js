"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48462],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,y=u["".concat(o,".").concat(m)]||u[m]||g[m]||i;return t?r.createElement(y,s(s({ref:n},p),{},{components:t})):r.createElement(y,s({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const i={title:"Issuer",sidebar_position:0,tags:["Kubernetes","Resource","Manifest","Issuer"]},s=void 0,l={unversionedId:"resource/kubernetes/Manifest/Issuer",id:"resource/kubernetes/Manifest/Issuer",title:"Issuer",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/kubernetes/Manifest/Issuer.mdx",sourceDirName:"resource/kubernetes/Manifest",slug:"/resource/kubernetes/Manifest/Issuer",permalink:"/en/docs/resource/kubernetes/Manifest/Issuer",draft:!1,tags:[{label:"Kubernetes",permalink:"/en/docs/tags/kubernetes"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Manifest",permalink:"/en/docs/tags/manifest"},{label:"Issuer",permalink:"/en/docs/tags/issuer"}],version:"current",sidebarPosition:0,frontMatter:{title:"Issuer",sidebar_position:0,tags:["Kubernetes","Resource","Manifest","Issuer"]},sidebar:"mySidebar",previous:{title:"Manifest",permalink:"/en/docs/category/manifest"},next:{title:"Networking",permalink:"/en/docs/category/networking-1"}},o={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/manifest-issuer.png"}),(0,a.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,a.yg)("p",null,"A Kubernetes resource that accepts certificate signing requests and generates signed certificates from a Certificate Authority (CA)."),(0,a.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,a.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Base/Cluster"},(0,a.yg)("strong",{parentName:"a"},"Cluster"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Core/Namespace"},(0,a.yg)("strong",{parentName:"a"},"Namespace")))),(0,a.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,a.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"service_name")," : Name of the Issuer resource"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"acme")," : Defines the account registered on the ACME (Automated Certificate Management Environment) certification authority server",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"acme.server")," : Endpoint address of the ACME server"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"acme.email")," : An email address where Let's Encrypt will contact you regarding expiration or issues with your certificate"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"acme.private_key_secret_ref")," : Specifies the name of the Kubernetes Secret that stores the client key that will be used to communicate with the ACME server"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"solver_type")," : Defines the method for solving challenges for certificate issuance - ",(0,a.yg)("inlineCode",{parentName:"li"},"DNS"),",",(0,a.yg)("inlineCode",{parentName:"li"},"HTTP"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Solver-Type : DNS")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"dns_solvers")," : Define settings corresponding to when the solver is set to DNS")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"name")," : Name of the dns_solver configuration"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"provider")," : Select DNS-01 Challenge Type - ",(0,a.yg)("inlineCode",{parentName:"li"},"AzureDNS"),",",(0,a.yg)("inlineCode",{parentName:"li"},"Route53"),",",(0,a.yg)("inlineCode",{parentName:"li"},"ACMEDNS")," ")),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"AzureDNS"))),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"azure_dns")," : Specifies the settings when AzureDNS is selected among the DNS-01 challenge types",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name")," : Name of the AzureDNS configuration",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"client_id")," : Client ID of the Azure Service Principal application"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"client_secret_name")," : Azure Service Principal Specifies the name of the Kubernetes secret where the application's client secret is stored"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"client_secret_key")," : Specify the name of the key to be used in Secret"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"subscription_id")," : ID of your Azure subscription"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"tenant_id")," : Tenant ID for your Azure subscription"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"resource_group_name")," : Specify the resource group to which the Azure DNS Zone resource belongs"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"hosted_zone_name")," : Specify a hosted zone name for Azure DNS Zone")))))),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"Route53")),"        "),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"route_53")," : Specifies the settings when Route53 is selected among the DNS-01 challenge types",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name")," : Name of the Route53 configuration",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"region")," : Specifies the AWS Region in which the Route 53 service is used"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"access_key_id")," : AWS access key ID"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"access_key_secret_name")," : Specify a Kubernetes Secret name containing the AWS Secret access key value (can be omitted if you specified access_key_id)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"access_key_secret_key")," : Specifies the name of the key to use in Secret (can be omitted if access_key_id is specified)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"secret_access_key_secret_name")," : Specify a secret name that contains AWS Secret Access Key values"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"secret_access_key_secret_key")," : Specify a key name for the secret that contains the AWS Secret access key value"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"role")," : Specify AWS IAM role to manage Route53 DNS")))))),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"ACMEDNS")),"          "),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"acme_dns")," : Specifies the settings when ACMEDNS is selected among the DNS-01 challenge types",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name")," : Name of the ACMEDNS configuration",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"host")," : Endpoint address of the acme-dns server"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"account_secret_ref_name")," : Specifies the name of the Kubernetes Secret that stores account information for the acme-dns server"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"account_secret_ref_key")," : Specifies the name of the key to be used in the Kubernetes Secret that stores account information for the acme-dns server")))))))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Solver-Type : HTTP-01")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"http_solvers")," : Specify settings when selecting the HTTP challenge type")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"name")," : Name of the HTTP solver configuration"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"provider")," : Select DNS-01 Challenge Type - ",(0,a.yg)("inlineCode",{parentName:"li"},"Ingress"),",",(0,a.yg)("inlineCode",{parentName:"li"},"Gateway"))),(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"Ingress"))),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ingress")," : Settings for using Ingress as the HTTP-01 challenge solver",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"-   `name` : Name of the Ingress configuration for the HTTP-01 challenge\n    -   `ingress_class_name` : Specifies which Ingress class to use\n")),(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("em",{parentName:"strong"},"Gateway"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Gateway")," : Specifies the type to resolve the HTTP-01 challenge",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name")," : Settings when resolving HTTP-01 challenges using Gateway",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"namespace")," : Specifies the namespace to which the gateway resource to connect belongs")))))))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://cert-manager.io/docs/concepts/issuer/"},"Issuer(CertManager)"))))}g.isMDXComponent=!0}}]);