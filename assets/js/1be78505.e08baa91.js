"use strict";(self.webpackChunkevergood_docs=self.webpackChunkevergood_docs||[]).push([[514],{9086:(e,t,l)=>{l.d(t,{Z:()=>N});var a=l(7462),n=l(7294),c=l(6010),i=l(3768),s=l(107),r=l(4639),o=l(3702),m=l(8259),d=l(9003),u=l(1689),p=l(3699),b=l(7325),g=l(1048),v=l(3707),_=l(1954);function E(e){let{children:t}=e;return n.createElement("span",{style:{paddingRight:"10px",display:"flex"}},n.createElement(_.JO,{icon:t,height:"20",style:{verticalAlign:"-0.35em"}}))}function k(e){let{categoryLabel:t,onClick:l}=e;return n.createElement("button",{"aria-label":(0,b.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:l})}function f(e){let{item:t,onItemClick:l,activePath:b,level:_,index:f,...h}=e;const{items:C,label:Z,collapsible:y,className:I,href:N}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,s.L)(),L=function(e){const t=(0,g.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,m.Wl)(e):void 0),[e,t])}(t),A=(0,m._F)(t,b),F=(0,d.Mg)(N,b),{collapsed:P,setCollapsed:S}=(0,r.u)({initialState:()=>!!y&&(!A&&t.collapsed)}),{expandedItem:D,setExpandedItem:w}=(0,u.f)(),M=function(e){void 0===e&&(e=!P),w(e?null:f),S(e)};!function(e){let{isActive:t,collapsed:l,updateCollapsed:a}=e;const c=(0,i.D9)(t);(0,n.useEffect)((()=>{t&&!c&&l&&a(!1)}),[t,c,l,a])}({isActive:A,collapsed:P,updateCollapsed:M}),(0,n.useEffect)((()=>{y&&null!=D&&D!==f&&x&&S(!0)}),[y,D,f,S,x]);const z=1==_&&"sidebar-intro"!=I?n.createElement("div",{className:"sidebar-category-separator"}):n.createElement(n.Fragment,null);return n.createElement(n.Fragment,null,z,n.createElement("li",{className:(0,c.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(_),"menu__list-item",{"menu__list-item--collapsed":P},I)},n.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":F})},n.createElement(p.Z,(0,a.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":y,"menu__link--sublist-caret":!N&&y,"menu__link--active":A}),onClick:y?e=>{null==l||l(t),N?M(!1):(e.preventDefault(),M())}:()=>{null==l||l(t)},"aria-current":F?"page":void 0,"aria-expanded":y?!P:void 0,href:y?L??"#":L},h),n.createElement(E,null,null!=t.customProps?t.customProps.badge:void 0),Z),N&&y&&n.createElement(k,{categoryLabel:Z,onClick:e=>{e.preventDefault(),M()}})),n.createElement(r.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:P},n.createElement(v.Z,{items:C,tabIndex:P?-1:0,onItemClick:l,activePath:b,level:_+1}))))}var h=l(2735),C=l(4082);const Z="menuExternalLink_NnFM";function y(e){let{item:t,onItemClick:l,activePath:i,level:s,index:r,...d}=e;const{href:u,label:b,className:g,autoAddBaseUrl:v}=t,_=(0,m._F)(t,i),k=(0,h.Z)(u),f=1==s&&"sidebar-intro"!=g?n.createElement("div",{className:"sidebar-category-separator"}):n.createElement(n.Fragment,null);return n.createElement(n.Fragment,null,f,n.createElement("li",{className:(0,c.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",g),key:b},n.createElement(p.Z,(0,a.Z)({className:(0,c.Z)("menu__link",!k&&Z,{"menu__link--active":_}),autoAddBaseUrl:v,"aria-current":_?"page":void 0,to:u},k&&{onClick:l?()=>l(t):void 0},d),n.createElement(E,null,null!=t.customProps?t.customProps.badge:void 0),b,!k&&n.createElement(C.Z,null))))}var I=l(6913);function N(e){let{item:t,...l}=e;switch(t.type){case"category":return n.createElement(f,(0,a.Z)({item:t},l));case"html":return n.createElement(I.Z,(0,a.Z)({item:t},l));default:return n.createElement(y,(0,a.Z)({item:t},l))}}}}]);