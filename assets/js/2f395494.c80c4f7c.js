(self.webpackChunkevergood_docs=self.webpackChunkevergood_docs||[]).push([[81],{9886:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/compressorBanner.580cbe1.640.png 640w,"+r.p+"assets/ideal-img/compressorBanner.a6bff32.1030.png 1030w",images:[{path:r.p+"assets/ideal-img/compressorBanner.580cbe1.640.png",width:640,height:551},{path:r.p+"assets/ideal-img/compressorBanner.a6bff32.1030.png",width:1030,height:887}],src:r.p+"assets/ideal-img/compressorBanner.580cbe1.640.png",toString:function(){return r.p+"assets/ideal-img/compressorBanner.580cbe1.640.png"},placeholder:void 0,width:640,height:551},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVQYlR3D+UrCAADA4b1hf1QeJaaWbtnmteWmTZvH3EQzj0ZSajMqiZKww4geIeiVfkEffMLnQ4fXucvKd1j5LZbTBo/jKh9Ti/XE4u2qyvqmjjCqyaj7m9SKIr1mEaeawz5RsEtpDHmPkhKjX88heI6KY8r/7ZJEwxCxy2lcM824q3Hh5pkPDYSFV2bW07ju5OmbSRwtipXdwdaiDKwU3XIcv51DGFVEzOQWFSmIKQVQYxscSyEMOUL2IEAmsU1LTyK0zUNUKYwuR9DlXTQpTD4ZQBWDFFIBCmIIp5xCuPUMug2R89YRQ1ehU5OwinEqhQS6EsVQIgzqMsLi0sRzMjxNmnw/j3i/P+PFd1nOWtx5p/x+jflZj/kD8MXHNAurR0IAAAAASUVORK5CYII="}},425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(7294),s=r(6010);const a="tabItem_Ymn6";function n(e){let{children:t,hidden:r,className:n}=e;return o.createElement("div",{role:"tabpanel",className:(0,s.Z)(a,n),hidden:r},t)}},3992:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var o=r(7462),s=r(7294),a=r(6010),n=r(6775),l=r(5238),c=r(3609),i=r(2560);function u(e){return function(e){var t;return(null==(t=s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:s}}=e;return{value:t,label:r,attributes:o,default:s}}))}function m(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:r}=e;const o=(0,n.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=m(e),[n,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[c,u]=d({queryString:r,groupId:o}),[k,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,i.Nk)(r);return[o,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:o}),g=(()=>{const e=c??k;return p({value:e,tabValues:a})?e:null})();(0,s.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:n,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,a]),tabValues:a}}var h=r(2957),g=r(1048);const b="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,h.o5)(),m=e=>{const t=e.currentTarget,r=i.indexOf(t),o=c[r].value;o!==n&&(u(t),l(o))},p=e=>{var t;let r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}null==(t=r)||t.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return s.createElement("li",(0,o.Z)({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:e=>i.push(e),onKeyDown:p,onClick:m},l,{className:(0,a.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":n===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=k(e);return s.createElement("div",{className:(0,a.Z)("tabs-container",b)},s.createElement(v,(0,o.Z)({},e,t)),s.createElement(y,(0,o.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return s.createElement(w,(0,o.Z)({key:String(t)},e))}},2366:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(7294),s=r(7230),a=r(9065);const n=JSON.parse('{"modpacks":{"evergood":{"id":"398982","0296":"2021-10-25","0297":"2022-01-06"},"refabricated":{"id":"554271","010":"N/A"},"reforged":{"id":"552385","011":"2022-07-26"}},"mods":{"chassis":{"100":"2022-06-06","110":"2022-06-09","120":"2022-06-10","121":"2022-08-05","122":"2022-08-09","123":"2023-05-14","id":"596615"},"compressor":{"id":"563438","010":"2022-01-06","011":"2022-03-31","012":"2022-06-06","020":"2022-06-09","030":"2022-06-11","031":"2022-08-05","032":"2023-05-14"},"utilities":{"id":"523308","010":"2021-09-09","011":"2021-12-24"}}}');var l=r(9001);function c(e){let{type:t,project:r,version:c}=e;const i=c.split(".").join(""),u=`https://raw.githubusercontent.com/EvergoodTeam/Changelogs/main${`/${r}/${i}.md`}`;var m=n[t][r][i];return null==m&&(m="N/A"),o.createElement(a.Z,{summary:o.createElement("summary",null,o.createElement("em",null,o.createElement("strong",null,c)," - ",m))},o.createElement(s.Request,{url:u},((e,t,r,s,a)=>null!=t?o.createElement("div",null,o.createElement(l.D,{children:t.data})):null)))}},5986:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,Q:()=>a});var o=r(7294);function s(e,t){return o.createElement("a",{href:t},o.createElement("div",{className:"card card-button"},o.createElement("div",{className:"card__header"},o.createElement("span",{className:"download-"+e}))))}function a(e){let{type:t,project:r}=e;return s("curseforge","https://www.curseforge.com/minecraft/"+t+"/"+r)}function n(e){let{type:t,project:r}=e;return s("modrinth","https://modrinth.com/"+t+"/"+r)}},4389:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(7294),s=r(9001);function a(e){let{project:t}=e;var r="You can find the source code on [**GitHub**]("+("https://github.com/EvergoodTeam/"+t)+")";return o.createElement(s.D,{children:r})}},9065:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(7462),s=r(7294),a=r(6010),n=r(7712);const l="details_r1OI";function c(e){let{...t}=e;return s.createElement(n.P,(0,o.Z)({},t,{className:(0,a.Z)("alert alert--info",l,t.className)}))}},9330:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>v,frontMatter:()=>d,metadata:()=>h,toc:()=>b});var o=r(7462),s=r(7294),a=r(4137),n=r(3992),l=r(425),c=r(2366),i=r(4389),u=r(5944);function m(e){let{row:t,col:r}=e;const o=28,a={background:"url(/utils/compressorSprite.png)",filter:"drop-shadow(0 0 2px #464649)",display:"inline-block",marginBottom:"1px",verticalAlign:"middle",backgroundSize:"112px 112px",height:o,width:o,backgroundPosition:`-${o*r}px -${o*t}px`};return s.createElement("span",{style:{padding:"5px",class:"item shadow--tl"}},s.createElement("span",{style:a}))}var p=r(5986);const d={sidebar_label:"Compressor",sidebar_position:0,id:"compressor",title:"Compressor",description:"\ud83e\uddf1 Compressed Blocks for common resources",slug:"/mods/compressor"},k=void 0,h={unversionedId:"mods/compressor",id:"mods/compressor",title:"Compressor",description:"\ud83e\uddf1 Compressed Blocks for common resources",source:"@site/docs/mods/compressor.mdx",sourceDirName:"mods",slug:"/mods/compressor",permalink:"/docs/mods/compressor",draft:!1,editUrl:"https://github.com/EvergoodTeam/evergoodteam.github.io/tree/main/docs/mods/compressor.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Compressor",sidebar_position:0,id:"compressor",title:"Compressor",description:"\ud83e\uddf1 Compressed Blocks for common resources",slug:"/mods/compressor"},sidebar:"docs",previous:{title:"Mods",permalink:"/docs/mods"},next:{title:"Chassis",permalink:"/docs/mods/chassis"}},g={},b=[{value:"\ud83d\udcd1 Description",id:"description",level:2},{value:"\ud83d\udd8a\ufe0f Translations ",id:"translations",level:2},{value:"\ud83d\udcf0 Changelogs",id:"changelogs",level:2},{value:"\ud83d\udd27 Installation",id:"installation",level:2},{value:"\ud83d\udce5 Downloads",id:"downloads",level:2},{value:"\ud83d\uddc2\ufe0f License",id:"license",level:2}],f={toc:b};function v(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{content:"Compressor",property:"og:title"}),(0,a.kt)("meta",{content:"Evergood Team",property:"og:site_name"}),(0,a.kt)("meta",{content:"\ud83e\uddf1 8x Compressed Blocks for commonly found resources, allowing you to store up to 43,046,721 blocks in a single one!",property:"og:description"}),(0,a.kt)("meta",{content:"https://evergoodteam.github.io/docs/mods/compressor",property:"og:url"}),(0,a.kt)("meta",{content:"https://evergoodteam.github.io/img/compressorIcon.png",property:"og:image"}),(0,a.kt)("meta",{content:"#e3caa5","data-react-helmet":"true",name:"theme-color"}),(0,a.kt)("meta",{name:"twitter:card",content:"app"})),(0,a.kt)(u.Z,{img:r(9886),mdxType:"Image"}),(0,a.kt)("h2",{id:"description"},"\ud83d\udcd1 Description"),(0,a.kt)("p",null,"Compressor is a Minecraft Mod that introduces compressed blocks (up to 8x compressed variants!) for commonly found resources.\nThis allows the user to store millions of blocks (",(0,a.kt)("strong",{parentName:"p"},"43,046,721")," blocks for an octuple compressed block) in a single one!"),(0,a.kt)("p",null,"Out of the box you will be provided with ",(0,a.kt)("strong",{parentName:"p"},"recipes")," to craft and uncraft compressed blocks, as well as ",(0,a.kt)("strong",{parentName:"p"},"global tags")," for each entry to create your very own custom recipes."),(0,a.kt)("p",null,"Currently Compressor is only available for the ",(0,a.kt)("strong",{parentName:"p"},"Fabric ModLoader")," and requires the ",(0,a.kt)("a",{parentName:"p",href:"/docs/mods/chassis"},(0,a.kt)("strong",{parentName:"a"},"Chassis"))," library."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you'd like to suggest a block to be supported, you can do so over at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/EvergoodTeam/Compressor/issues/new"},"GitHub"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("strong",null,"Currently supported resources list")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)(m,{row:"2",col:"0",mdxType:"Block"}),"Stone"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"1",col:"0",mdxType:"Block"}),"Granite"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"3",col:"1",mdxType:"Block"}),"Diorite"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"2",col:"1",mdxType:"Block"}),"Andesite"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"2",col:"3",mdxType:"Block"}),"Cobblestone"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"1",col:"1",mdxType:"Block"}),"Gravel"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"1",col:"2",mdxType:"Block"}),"Sand"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"0",col:"0",mdxType:"Block"}),"Dirt"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"0",col:"2",mdxType:"Block"}),"Netherrack"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"2",col:"2",mdxType:"Block"}),"Basalt"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"3",col:"0",mdxType:"Block"}),"Deepslate"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"1",col:"3",mdxType:"Block"}),"Cobbled Deepslate"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"0",col:"3",mdxType:"Block"}),"Blackstone"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"0",col:"1",mdxType:"Block"}),"End Stone"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"3",col:"2",mdxType:"Block"}),"Tuff"),(0,a.kt)("li",null,(0,a.kt)(m,{row:"3",col:"3",mdxType:"Block"}),"Calcite"))),(0,a.kt)(i.Z,{project:"Compressor",mdxType:"Source"}),(0,a.kt)("h2",{id:"translations"},"\ud83d\udd8a\ufe0f Translations ",(0,a.kt)("a",{parentName:"h2",href:"https://crowdin.com/project/compressor"},(0,a.kt)("img",{parentName:"a",src:"https://badges.crowdin.net/compressor/localized.svg",alt:null}))),(0,a.kt)("p",null,"You can contribute to the mod's translation in other languages over at ",(0,a.kt)("a",{parentName:"p",href:"https://crowdin.com/project/compressor"},(0,a.kt)("strong",{parentName:"a"},"Crowdin")),"!"),(0,a.kt)("h2",{id:"changelogs"},"\ud83d\udcf0 Changelogs"),(0,a.kt)(n.Z,{className:"compressor-tabs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"0.3.2",label:"0.3.2 (1.19.2)",mdxType:"TabItem"},(0,a.kt)(c.Z,{type:"mods",project:"compressor",version:"0.3.2",mdxType:"Changelog"})),(0,a.kt)(l.Z,{value:"0.3.x",label:"0.3.x (1.19.x)",mdxType:"TabItem"},(0,a.kt)(c.Z,{type:"mods",project:"compressor",version:"0.3.1",mdxType:"Changelog"}),(0,a.kt)(c.Z,{type:"mods",project:"compressor",version:"0.3.0",mdxType:"Changelog"})),(0,a.kt)(l.Z,{value:"0.2.x",label:"0.2.x (1.18.2)",mdxType:"TabItem"},(0,a.kt)(c.Z,{type:"mods",project:"compressor",version:"0.2.0",mdxType:"Changelog"})),(0,a.kt)(l.Z,{value:"0.1.x",label:"0.1.x (1.18.1)",mdxType:"TabItem"},(0,a.kt)(c.Z,{type:"mods",project:"compressor",version:"0.1.2",mdxType:"Changelog"}),(0,a.kt)(c.Z,{type:"mods",project:"compressor",version:"0.1.1",mdxType:"Changelog"}))),(0,a.kt)("h2",{id:"installation"},"\ud83d\udd27 Installation"),(0,a.kt)("p",null,"Requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fabricmc.net/"},(0,a.kt)("strong",{parentName:"a"},"Fabric ModLoader"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/mods/chassis"},(0,a.kt)("strong",{parentName:"a"},"Chassis"))," library (for versions above 0.1.1)")),(0,a.kt)("h2",{id:"downloads"},"\ud83d\udce5 Downloads"),(0,a.kt)("div",{className:"download-div"},(0,a.kt)(p.Q,{type:"mc-mods",project:"compressor",mdxType:"Curseforge"}),(0,a.kt)(p.A,{type:"mod",project:"compressor",mdxType:"Modrinth"})),(0,a.kt)("h2",{id:"license"},"\ud83d\uddc2\ufe0f License"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/EvergoodTeam/Compressor/blob/1.18.1/LICENSE"},"GNU Lesser General Public License v2.1")))}v.isMDXComponent=!0}}]);