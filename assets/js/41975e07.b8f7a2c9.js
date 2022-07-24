"use strict";(self.webpackChunkevergood_docs=self.webpackChunkevergood_docs||[]).push([[765],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const i={sidebar_label:"Installation",id:"installation",title:"Installation",description:"Setting up the basics to use Chassis",slug:"/chassis/installation"},o=void 0,s={unversionedId:"chassis/installation",id:"chassis/installation",title:"Installation",description:"Setting up the basics to use Chassis",source:"@site/docs/chassis/installation.mdx",sourceDirName:"chassis",slug:"/chassis/installation",permalink:"/docs/chassis/installation",draft:!1,editUrl:"https://github.com/EvergoodTeam/evergoodteam.github.io/tree/main/docs/chassis/installation.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installation",id:"installation",title:"Installation",description:"Setting up the basics to use Chassis",slug:"/chassis/installation"},sidebar:"docs",previous:{title:"Premise",permalink:"/docs/chassis/premise"},next:{title:"Blocks",permalink:"/docs/chassis/blocks"}},l={},p=[{value:"Requirements",id:"requirements",level:3},{value:"How our versions work",id:"how-our-versions-work",level:3},{value:"<code>build.gradle</code>",id:"buildgradle",level:3},{value:"<code>fabric.mod.json</code>",id:"fabricmodjson",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Currently Chassis is only available for the ",(0,r.kt)("strong",{parentName:"p"},"Fabric ModLoader"),", so the following instructions will be focused on getting you started with your own Fabric project.\nThis also means that we're dependent on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.curseforge.com/minecraft/mc-mods/fabric-api"},(0,r.kt)("strong",{parentName:"a"},"Fabric API")),", so make sure it is included as a dependency in your project."),(0,r.kt)("p",null,"A port to the ",(0,r.kt)("strong",{parentName:"p"},"Forge ModLoader")," will be coming in the future."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java 17+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.curseforge.com/minecraft/mc-mods/fabric-api"},(0,r.kt)("strong",{parentName:"a"},"Fabric API")))),(0,r.kt)("h3",{id:"how-our-versions-work"},"How our versions work"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This version system could be changed in the near future")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EvergoodTeam/Chassis/releases"},"GitHub Releases")," include different Builds of the project, spanning\nfrom those in active development to final ones."),(0,r.kt)("p",null,"Each version name is composed of two main parts: a ",(0,r.kt)("strong",{parentName:"p"},"version number")," (",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.34"),") and a ",(0,r.kt)("strong",{parentName:"p"},"\nsuffix")," (",(0,r.kt)("inlineCode",{parentName:"p"},"-suffix"),")."),(0,r.kt)("p",null,"Different ",(0,r.kt)("strong",{parentName:"p"},"suffixes")," are used to highlight the nature and state of a Build:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-dev"),": in active development, likely unstable and temporary."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-pre"),": in the final stages of development, next to being finalised and released officially."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"no suffix"),": final releases, can be found on ",(0,r.kt)("a",{parentName:"li",href:"https://www.curseforge.com/minecraft/mc-mods/chassis"},"Curseforge")," and as a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/EvergoodTeam/Chassis/releases"},"GitHub Release"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Version numbers")," are grouped together based on Minecraft's Versions: this\nmeans that Builds from the same group are compatible only with that specific Minecraft\nVersion and that they're interchangeable with one another."),(0,r.kt)("p",null,"The table below summarizes the supported Minecraft Versions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Minecraft Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"th"},"1.12.2")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"th"},"1.18.1")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"th"},"1.18.2")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"th"},"1.19")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"th"},"1.19.1")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Support"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udea7"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2754")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Chassis Version"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udea7"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0.x")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.1.x")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.2.x")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2754")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Fabric ModLoader"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2754")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Forge ModLoader"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udea7"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2754"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2754"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2754"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2754")))),(0,r.kt)("h3",{id:"buildgradle"},(0,r.kt)("inlineCode",{parentName:"h3"},"build.gradle")),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle"),", add Chassis as a dependency using JitPack"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"repositories {\n    maven { url 'https://jitpack.io' }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n    //Chassis\n    modImplementation 'com.github.evergoodteam:chassis:<releaseVersion>'\n}\n")),(0,r.kt)("p",null,"Don't forget to change ",(0,r.kt)("inlineCode",{parentName:"p"},"<releaseVersion>")," to an appropriate version, as explained ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#how-versions-work"},"before")),".",(0,r.kt)("br",{parentName:"p"}),"\n","We recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"${project.chassis_version}")," and specifying the version in your ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle.properties")," for easier access"),(0,r.kt)("h3",{id:"fabricmodjson"},(0,r.kt)("inlineCode",{parentName:"h3"},"fabric.mod.json")),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"fabric.mod.json"),", add Chassis as a dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/src/main/resources/fabric.mod.json"',title:'"/src/main/resources/fabric.mod.json"'},'"depends": {\n    "chassis": "1.x.x"\n},\n')))}d.isMDXComponent=!0}}]);