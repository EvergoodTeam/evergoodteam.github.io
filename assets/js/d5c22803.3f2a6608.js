(self.webpackChunkevergood_docs=self.webpackChunkevergood_docs||[]).push([[337,918],{6202:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/chassisBanner.e25ed57.640.png 640w,"+a.p+"assets/ideal-img/chassisBanner.3685840.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/chassisBanner.e25ed57.640.png",width:640,height:346},{path:a.p+"assets/ideal-img/chassisBanner.3685840.1030.png",width:1030,height:557}],src:a.p+"assets/ideal-img/chassisBanner.e25ed57.640.png",toString:function(){return a.p+"assets/ideal-img/chassisBanner.e25ed57.640.png"},placeholder:void 0,width:640,height:346},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVQImWOI3d78P3l/1/+kvZ3/k/d1/o/b0wbGIDZYbH/Xf5AahsQ97f/TDvX+Tz3Y8z/lYPf/2tPz/tedngdmg8RAciA1DAm72yCKDnT/Tz7Q/X/Lg2P/dz06/T/1QDdYDCSXsKsN1cTkg93/y0/M+l95cjamiXFobozf0/4/Hs2NIDUAAkeHOLmGhFwAAAAASUVORK5CYII="}},425:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var s=a(7294),n=a(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return s.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,r),hidden:a},t)}},4259:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var s=a(7462),n=a(7294),o=a(6010),r=a(1048),i=a(3609),l=a(1943),c=a(2957);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,a;const{lazy:r,block:m,defaultValue:p,values:h,groupId:g,className:b}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((e=>{let{props:{value:t,label:a,attributes:s}}=e;return{value:t,label:a,attributes:s}})),k=(0,i.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const A=null===p?p:null!=(t=null!=p?p:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==A&&!f.some((e=>e.value===A)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,l.U)(),[y,C]=(0,n.useState)(A),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=g){const e=w[g];null!=e&&e!==y&&f.some((t=>t.value===e))&&C(e)}const Z=e=>{const t=e.currentTarget,a=N.indexOf(t),s=f[a].value;s!==y&&(E(t),C(s),null!=g&&T(g,String(s)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var s;const t=N.indexOf(e.currentTarget)+1;a=null!=(s=N[t])?s:N[0];break}case"ArrowLeft":{var n;const t=N.indexOf(e.currentTarget)-1;a=null!=(n=N[t])?n:N[N.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},b)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return n.createElement("li",(0,s.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:Z,onClick:Z},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":y===t})}),null!=a?a:t)}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,r.Z)();return n.createElement(m,(0,s.Z)({key:String(t)},e))}},3919:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(7294),n=a(7230),o=a(3902),r=a(9065);function i(e){let{project:t,version:a}=e;const i="https://raw.githubusercontent.com/EvergoodTeam/Changelogs/main/"+t+"/"+a.split(".").join("")+".md";return s.createElement(r.Z,{summary:s.createElement("summary",null,a," Changelog")},s.createElement(n.Request,{url:i},((e,t,a,n,r)=>null!=t?s.createElement("div",null,s.createElement(o.Z,{showLineNumbers:!0},t.data)):null)))}},5986:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var s=a(7294),n=a(9001);function o(e){let{type:t,project:a}=e;var o="Currently only available on [**Curseforge**]("+("https://www.curseforge.com/minecraft/"+t+"/"+a)+")";return s.createElement(n.D,{children:o})}},9065:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var s=a(7462),n=a(7294),o=a(6010),r=a(7712);const i="details_r1OI";function l(e){let{...t}=e;return n.createElement(r.P,(0,s.Z)({},t,{className:(0,o.Z)("alert alert--info",i,t.className)}))}},9393:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>h});var s=a(7462),n=(a(7294),a(4137)),o=a(3919),r=a(5986),i=a(5944),l=a(4259),c=a(425);const d={sidebar_label:"Chassis",sidebar_position:1,id:"chassis",title:"Chassis",description:"Information on the Chassis library",slug:"/mods/chassis"},u=void 0,m={unversionedId:"mods/chassis",id:"mods/chassis",title:"Chassis",description:"Information on the Chassis library",source:"@site/docs/mods/chassis.mdx",sourceDirName:"mods",slug:"/mods/chassis",permalink:"/docs/mods/chassis",draft:!1,editUrl:"https://github.com/EvergoodTeam/evergoodteam.github.io/tree/main/docs/mods/chassis.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Chassis",sidebar_position:1,id:"chassis",title:"Chassis",description:"Information on the Chassis library",slug:"/mods/chassis"},sidebar:"docs",previous:{title:"Compressor",permalink:"/docs/mods/compressor"},next:{title:"Evergood Utilities",permalink:"/docs/mods/utilities"}},p={},h=[{value:"\ud83d\udcd1 Description",id:"description",level:2},{value:"\ud83d\udcd6 Documentation",id:"documentation",level:2},{value:"\ud83d\udd27 Installation",id:"installation",level:2},{value:"\ud83d\udcf0 Changelogs",id:"changelogs",level:2},{value:"\ud83d\udce5 Downloads",id:"downloads",level:2},{value:"\ud83d\uddc2\ufe0f License",id:"license",level:2}],g={toc:h};function b(e){let{components:t,...d}=e;return(0,n.kt)("wrapper",(0,s.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{img:a(6202),mdxType:"Image"}),(0,n.kt)("h2",{id:"description"},"\ud83d\udcd1 Description"),(0,n.kt)("p",null,"Chassis is a Library providing utilities for dynamic asset generation (Blockstates, Models, Tags, Recipes, Loot Tables, Textures) and simple configuration."),(0,n.kt)("p",null,"A showcase of the available features can be found (commented) in the source code or in ",(0,n.kt)("a",{parentName:"p",href:"https://www.curseforge.com/minecraft/mc-mods/compressor"},(0,n.kt)("strong",{parentName:"a"},"Compressor")),"."),(0,n.kt)("h2",{id:"documentation"},"\ud83d\udcd6 Documentation"),(0,n.kt)("admonition",{title:"Note",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This documentation assumes you have a decent understanding of how to set up and work on a ",(0,n.kt)("a",{parentName:"p",href:"https://fabricmc.net/wiki"},(0,n.kt)("strong",{parentName:"a"},"Fabric Mod")),"!")),(0,n.kt)("p",null,"The documentation for utilizing Chassis in your own project can be found ",(0,n.kt)("a",{parentName:"p",href:"/docs/chassis"},(0,n.kt)("strong",{parentName:"a"},"here")),"."),(0,n.kt)("h2",{id:"installation"},"\ud83d\udd27 Installation"),(0,n.kt)("p",null,"Requirements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fabricmc.net/"},(0,n.kt)("strong",{parentName:"a"},"Fabric ModLoader"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.curseforge.com/minecraft/mc-mods/fabric-api"},(0,n.kt)("strong",{parentName:"a"},"Fabric API")))),(0,n.kt)("h2",{id:"changelogs"},"\ud83d\udcf0 Changelogs"),(0,n.kt)(l.Z,{className:"chassis-tabs",mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"1.2.x",label:"1.2.x (1.19.x)",default:!0,mdxType:"TabItem"},(0,n.kt)(o.Z,{project:"chassis",version:"1.2.1",mdxType:"Changelog"}),(0,n.kt)(o.Z,{project:"chassis",version:"1.2.0",mdxType:"Changelog"})),(0,n.kt)(c.Z,{value:"1.1.x",label:"1.1.x (1.18.2)",mdxType:"TabItem"},(0,n.kt)(o.Z,{project:"chassis",version:"1.1.0",mdxType:"Changelog"})),(0,n.kt)(c.Z,{value:"1.0.x",label:"1.0.x (1.18.1)",mdxType:"TabItem"})),(0,n.kt)("h2",{id:"downloads"},"\ud83d\udce5 Downloads"),(0,n.kt)(r.Z,{type:"mc-mods",project:"chassis",mdxType:"Download"}),(0,n.kt)("h2",{id:"license"},"\ud83d\uddc2\ufe0f License"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/EvergoodTeam/Compressor/blob/1.18.1/LICENSE"},"GNU Lesser General Public License v2.1")))}b.isMDXComponent=!0}}]);