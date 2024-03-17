"use strict";(self.webpackChunkevergood_docs=self.webpackChunkevergood_docs||[]).push([[5233],{7901:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var i=s(4848),r=s(8453);const n={sidebar_label:"Items",sidebar_position:2,id:"items",title:"Items",description:"Adding Items",slug:"/docs/chassis/items"},o=void 0,c={id:"chassis/items",title:"Items",description:"Adding Items",source:"@site/docs/chassis/items.mdx",sourceDirName:"chassis",slug:"/docs/chassis/items",permalink:"/docs/chassis/items",draft:!1,unlisted:!1,editUrl:"https://github.com/EvergoodTeam/evergoodteam.github.io/tree/main/docs/chassis/items.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Items",sidebar_position:2,id:"items",title:"Items",description:"Adding Items",slug:"/docs/chassis/items"},sidebar:"docs",previous:{title:"Blocks",permalink:"/docs/chassis/blocks"},next:{title:"Configuration",permalink:"/docs/chassis/configuration"}},a={},d=[{value:"Creating your Item",id:"creating-your-item",level:3},{value:"Registering",id:"registering",level:3},{value:"Result",id:"result",level:3}];function l(e){const t={br:"br",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"creating-your-item",children:"Creating your Item"}),"\n",(0,i.jsxs)(t.p,{children:["Similarly to how a Block can be created, you can create an Item through the ",(0,i.jsx)(t.code,{children:"ItemBase"})," class.",(0,i.jsx)(t.br,{}),"\n","You can customize it through ",(0,i.jsx)(t.code,{children:"FabricItemSettings()"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"public static final Item RUBY = new ItemBase(YOURMOD_GROUP);\r\npublic static final Item YOURMOD_ITEM = new ItemBase(new FabricItemSettings());\n"})}),"\n",(0,i.jsx)(t.h3,{id:"registering",children:"Registering"}),"\n",(0,i.jsxs)(t.p,{children:["Registering is done with the ",(0,i.jsx)(t.code,{children:"RegistryHandler"})," class."]}),"\n",(0,i.jsxs)(t.p,{children:["You can register your Item with ",(0,i.jsx)(t.code,{children:"registerGeneratedItem()"})," if it represents a generic item, or ",(0,i.jsx)(t.code,{children:"registerHandheldItem()"})," if it represents a tool."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'RegistryHandler.registerGeneratedItem("yourmodid", "ruby", RUBY);\n'})}),"\n",(0,i.jsx)(t.h3,{id:"result",children:"Result"}),"\n",(0,i.jsx)(t.p,{children:"Your code should now look something like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:'title="MyMod.java"',children:'public static final Block RUBY_ORE = new BlockBase(Material.STONE, 2.5f, 7.0f, BlockSoundGroup.STONE);\r\n\r\npublic static final ItemGroup YOURMOD_GROUP = new ItemGroupBase("yourmodid", "itemgroup", RUBY_ORE).group;\r\n\r\npublic static final Item RUBY = new ItemBase(YOURMOD_GROUP);\r\n\r\n@Override\r\npublic void onInitialize() {\r\n\r\n    RegistryHandler.registerBlockAndItem("yourmodid", "ruby_ore", RUBY_ORE, YOURMOD_GROUP);\r\n    RegistryHandler.registerGeneratedItem("yourmodid", "ruby", RUBY);\r\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var i=s(6540);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);