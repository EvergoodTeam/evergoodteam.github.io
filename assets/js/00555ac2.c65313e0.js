"use strict";(self.webpackChunkevergood_docs=self.webpackChunkevergood_docs||[]).push([[680],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(4137));const a={sidebar_label:"Blocks",sidebar_position:1,id:"blocks",title:"Blocks",description:"Adding blocks",slug:"/chassis/blocks"},i=void 0,l={unversionedId:"chassis/blocks",id:"chassis/blocks",title:"Blocks",description:"Adding blocks",source:"@site/docs/chassis/blocks.mdx",sourceDirName:"chassis",slug:"/chassis/blocks",permalink:"/docs/chassis/blocks",draft:!1,editUrl:"https://github.com/EvergoodTeam/evergoodteam.github.io/tree/main/docs/chassis/blocks.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Blocks",sidebar_position:1,id:"blocks",title:"Blocks",description:"Adding blocks",slug:"/chassis/blocks"}},c={},s=[{value:"Block",id:"block",level:4},{value:"ItemGroup",id:"itemgroup",level:4},{value:"Registering",id:"registering",level:4},{value:"Result",id:"result",level:4}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"block"},"Block"),(0,o.kt)("p",null,"Block objects can be created through the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockBase")," class.",(0,o.kt)("br",{parentName:"p"}),"\n","You can customize your Block from the ground up using ",(0,o.kt)("inlineCode",{parentName:"p"},"FabricBlockSettings"),", or use available methods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public static final Block RUBY_ORE = new BlockBase(Material.STONE, 2.5f, 7.0f, BlockSoundGroup.STONE);\n")),(0,o.kt)("p",null,"You could also provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," to which add a Block as soon as its object is created. This can be useful to later register all your blocks, since you'll just have to cycle through its contents."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public static final List<Block> BLOCKS = new ArrayList<>();\n\npublic static final Block RUBY_ORE = new BlockBase(BLOCKS, Material.STONE, 2.5f, 7.0f, BlockSoundGroup.STONE);\n")),(0,o.kt)("h4",{id:"itemgroup"},"ItemGroup"),(0,o.kt)("p",null,"With this Block we can create an ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemGroup"),", a.k.a. a Tab in the Creative menu, to which you can add all your additions."),(0,o.kt)("p",null,"To do so we can utilize the the ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemGroupBase")," class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static final ItemGroup YOURMOD_GROUP = new ItemGroupBase("yourmodid", "itemgroup", RUBY_ORE).group;\n')),(0,o.kt)("h4",{id:"registering"},"Registering"),(0,o.kt)("p",null,"Now we can register this Block and give it an Item form that player can hold in their inventory with ",(0,o.kt)("inlineCode",{parentName:"p"},"registerBlockAndItem()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'registerBlockAndItem("yourmodid", "ruby_ore", RUBY_ORE, YOURMOD_GROUP);\n')),(0,o.kt)("h4",{id:"result"},"Result"),(0,o.kt)("p",null,"Your code should now look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MyMod.java"',title:'"MyMod.java"'},'public static final Block RUBY_ORE = new BlockBase(Material.STONE, 2.5f, 7.0f, BlockSoundGroup.STONE);\n\npublic static final ItemGroup YOURMOD_GROUP = new ItemGroupBase("yourmodid", "itemgroup", RUBY_ORE).group;\n\n@Override\npublic void onInitialize() {\n\n    registerBlockAndItem("yourmodid", "ruby_ore", RUBY_ORE, YOURMOD_GROUP);\n}\n')))}p.isMDXComponent=!0}}]);