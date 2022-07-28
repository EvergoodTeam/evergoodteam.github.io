"use strict";(self.webpackChunkevergood_docs=self.webpackChunkevergood_docs||[]).push([[49],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(4137));const i={sidebar_label:"Configuration",id:"configuration",title:"Configuration",description:"Giving the user control with configs",slug:"/chassis/configuration"},a=void 0,l={unversionedId:"chassis/configuration",id:"chassis/configuration",title:"Configuration",description:"Giving the user control with configs",source:"@site/docs/chassis/configuration.mdx",sourceDirName:"chassis",slug:"/chassis/configuration",permalink:"/docs/chassis/configuration",draft:!1,editUrl:"https://github.com/EvergoodTeam/evergoodteam.github.io/tree/main/docs/chassis/configuration.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Configuration",id:"configuration",title:"Configuration",description:"Giving the user control with configs",slug:"/chassis/configuration"},sidebar:"docs",previous:{title:"Items",permalink:"/docs/chassis/items"},next:{title:"Resources / Assets",permalink:"/docs/chassis/resources"}},s={},p=[{value:"Creating your configs",id:"creating-your-configs",level:3},{value:"Adding properties",id:"adding-properties",level:3},{value:"Using properties",id:"using-properties",level:3},{value:"Result",id:"result",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Configs can be very useful to the player, since they can be used to customize variables and behaviours present in a mod.",(0,o.kt)("br",{parentName:"p"}),"\n","A simple example can be creating a toggle for a block being added to the game."),(0,o.kt)("h3",{id:"creating-your-configs"},"Creating your configs"),(0,o.kt)("p",null,"First we have to declare our Configs, which we can do using ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigBase"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static final ConfigBase YOURMOD_CONFIGS = new ConfigBase("yourmodid");\n')),(0,o.kt)("p",null,"Once that is done, a folder with your ",(0,o.kt)("inlineCode",{parentName:"p"},"modid")," will be created in the game's ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory, and in that folder will be located all the other files necessary for both ",(0,o.kt)("strong",{parentName:"p"},"resources")," as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"yourmodid.properties")," file."),(0,o.kt)("p",null,"Such a file can look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# yourmodid Configs\n# Sat Jul 31 15:05:00 CET 2022\n\n# Lock yourmodid configs from being regenerated\nyourmodidConfigLocked = true\n# Lock yourmodid resources from being regenerated\nyourmodidResourceLocked = true\n")),(0,o.kt)("p",null,"The first 2 properties will always be autogenerated with ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigBase")," and are used to determine, respectively, if the config files and if the resource files are locked (no need to regenerate them on startup)."),(0,o.kt)("p",null,"This can also be utilized by the user, especially when an unintentional edit was made to the config files.",(0,o.kt)("br",{parentName:"p"}),"\n","Simply editing the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," will have those specific files be regenerated at startup and the property reset back to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"adding-properties"},"Adding properties"),(0,o.kt)("p",null,"Using our ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigBase")," object we can call different methods, one of which is ",(0,o.kt)("inlineCode",{parentName:"p"},"addProperty()"),", used to add properties to both our object and the ",(0,o.kt)("inlineCode",{parentName:"p"},"yourmodid.properties")," file.",(0,o.kt)("br",{parentName:"p"}),"\n","You can provide a comment to the property, which will appear in the config file, or simply not have one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'YOURMOD_CONFIGS.addProperty("enableRubyOre", true, "Enables the Ruby Ore block")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'YOURMOD_CONFIGS.addProperty("enableRubyItem", true)\n')),(0,o.kt)("p",null,"To register a property we have to follow it up with the method ",(0,o.kt)("inlineCode",{parentName:"p"},"registerProperties()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'YOURMOD_CONFIGS.addProperty("enableRubyOre", true, "Enables the Ruby Ore block").registerProperties();\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can concatenate multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"addProperty()")," and have the method ",(0,o.kt)("inlineCode",{parentName:"p"},"registerProperties()")," at the end."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'YOURMOD_CONFIGS.addProperty("enableRubyOre", true, "Enables the Ruby Ore block")\n    .addProperty("enableRubyItem", true)\n    .registerProperties();\n'))),(0,o.kt)("p",null,"Now your ",(0,o.kt)("inlineCode",{parentName:"p"},"yourmodid.properties")," file will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# yourmodid Configs\n# Sat Jul 31 15:10:00 CET 2022\n\n# Lock yourmodid configs from being regenerated\nyourmodidConfigLocked = true\n# Lock yourmodid resources from being regenerated\nyourmodidResourceLocked = true\n\n# Enables the Ruby Ore block\nenableRubyOre = true\nenableRubyItem = true\n")),(0,o.kt)("h3",{id:"using-properties"},"Using properties"),(0,o.kt)("p",null,"Interacting with your ",(0,o.kt)("inlineCode",{parentName:"p"},"yourmodid.properties")," file can be done through the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigHandler")," class.",(0,o.kt)("br",{parentName:"p"}),"\n","One of the available methods is ",(0,o.kt)("inlineCode",{parentName:"p"},"getBooleanOption()"),", which returns the Boolean value of the specified property from the config file, or the default value if it isn't present."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'if (ConfigHandler.getBooleanOption(YOURMOD_CONFIGS, "enableRubyOre", true)){\n    // Do something \n}\n')),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("p",null,"Your code should now look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MyMod.java"',title:'"MyMod.java"'},'public static final ConfigBase YOURMOD_CONFIGS = new ConfigBase("yourmodid");\n\n@Override\npublic void onInitialize() {\n\n    YOURMOD_CONFIGS.addProperty("enableRubyOre", true, "Enables the Ruby Ore block")\n        .registerProperties();\n\n    if (ConfigHandler.getBooleanOption(YOURMOD_CONFIGS, "enableRubyOre", true)){\n        // Do something \n    }\n}\n')))}c.isMDXComponent=!0}}]);