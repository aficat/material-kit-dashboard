(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{EOym:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a("q1tI"),o=a.n(n),r=a("ofer"),i=o.a.createElement;function c(e){return i(r.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}},GIek:function(e,t,a){"use strict";function n(e,t){"function"===typeof e?e(t):e&&(e.current=t)}a.d(t,"a",(function(){return n}))},NqtD:function(e,t,a){"use strict";function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}a.d(t,"a",(function(){return n}))},"R/WZ":function(e,t,a){"use strict";var n=a("wx14"),o=a("RD7I"),r=a("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(e,Object(n.a)({defaultTheme:r.a},t))}},Z79C:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("q1tI"),o=a("i8i4"),r=!0,i=!1,c=null,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){e.metaKey||e.altKey||e.ctrlKey||(r=!0)}function d(){r=!1}function u(){"hidden"===this.visibilityState&&i&&(r=!0)}function p(e){var t=e.target;try{return t.matches(":focus-visible")}catch(a){}return r||function(e){var t=e.type,a=e.tagName;return!("INPUT"!==a||!l[t]||e.readOnly)||("TEXTAREA"===a&&!e.readOnly||!!e.isContentEditable)}(t)}function h(){i=!0,window.clearTimeout(c),c=window.setTimeout((function(){i=!1}),100)}function f(){return{isFocusVisible:p,onBlurVisible:h,ref:n.useCallback((function(e){var t,a=o.findDOMNode(e);null!=a&&((t=a.ownerDocument).addEventListener("keydown",s,!0),t.addEventListener("mousedown",d,!0),t.addEventListener("pointerdown",d,!0),t.addEventListener("touchstart",d,!0),t.addEventListener("visibilitychange",u,!0))}),[])}}},bfFb:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),o=a("GIek");function r(e,t){return n.useMemo((function(){return null==e&&null==t?null:function(a){Object(o.a)(e,a),Object(o.a)(t,a)}}),[e,t])}},hlie:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("NqtD"),l=a("H2TA"),s=a("Z79C"),d=a("bfFb"),u=a("ofer"),p=r.forwardRef((function(e,t){var a=e.classes,l=e.className,p=e.color,h=void 0===p?"primary":p,f=e.component,m=void 0===f?"a":f,g=e.onBlur,y=e.onFocus,b=e.TypographyClasses,v=e.underline,O=void 0===v?"hover":v,j=e.variant,x=void 0===j?"inherit":j,w=Object(o.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),N=Object(s.a)(),k=N.isFocusVisible,T=N.onBlurVisible,M=N.ref,A=r.useState(!1),E=A[0],C=A[1],R=Object(d.a)(t,M);return r.createElement(u.a,Object(n.a)({className:Object(i.a)(a.root,a["underline".concat(Object(c.a)(O))],l,E&&a.focusVisible,"button"===m&&a.button),classes:b,color:h,component:m,onBlur:function(e){E&&(T(),C(!1)),g&&g(e)},onFocus:function(e){k(e)&&C(!0),y&&y(e)},ref:R,variant:x},w))}));t.a=Object(l.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},iuhU:function(e,t,a){"use strict";function n(e){var t,a,o="";if(e)if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(a=n(t))&&(o&&(o+=" "),o+=a);else"boolean"===typeof e||e.call||(o&&(o+=" "),o+=e);return o}t.a=function(){for(var e,t=0,a="";t<arguments.length;)(e=n(arguments[t++]))&&(a&&(a+=" "),a+=e);return a}},lPD2:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Orders",function(){return a("ud12")}])},ofer:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("NqtD"),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=r.forwardRef((function(e,t){var a=e.align,c=void 0===a?"inherit":a,d=e.classes,u=e.className,p=e.color,h=void 0===p?"initial":p,f=e.component,m=e.display,g=void 0===m?"initial":m,y=e.gutterBottom,b=void 0!==y&&y,v=e.noWrap,O=void 0!==v&&v,j=e.paragraph,x=void 0!==j&&j,w=e.variant,N=void 0===w?"body1":w,k=e.variantMapping,T=void 0===k?s:k,M=Object(o.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),A=f||(x?"p":T[N]||s[N])||"span";return r.createElement(A,Object(n.a)({className:Object(i.a)(d.root,u,"inherit"!==N&&d[N],"initial"!==h&&d["color".concat(Object(l.a)(h))],O&&d.noWrap,b&&d.gutterBottom,x&&d.paragraph,"inherit"!==c&&d["align".concat(Object(l.a)(c))],"initial"!==g&&d["display".concat(Object(l.a)(g))]),ref:t},M))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},ud12:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("hlie"),i=a("R/WZ"),c=a("Ff2n"),l=a("wx14"),s=(a("17x9"),a("iuhU")),d=a("H2TA");var u=n.createContext(),p=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,i=void 0===r?"table":r,d=e.padding,p=void 0===d?"default":d,h=e.size,f=void 0===h?"medium":h,m=e.stickyHeader,g=void 0!==m&&m,y=Object(c.a)(e,["classes","className","component","padding","size","stickyHeader"]),b=n.useMemo((function(){return{padding:p,size:f,stickyHeader:g}}),[p,f,g]);return n.createElement(u.Provider,{value:b},n.createElement(i,Object(l.a)({ref:t,className:Object(s.a)(a.root,o,g&&a.stickyHeader)},y)))})),h=Object(d.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(p);var f=n.createContext(),m={variant:"body"},g=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,i=void 0===r?"tbody":r,d=Object(c.a)(e,["classes","className","component"]);return n.createElement(f.Provider,{value:m},n.createElement(i,Object(l.a)({className:Object(s.a)(a.root,o),ref:t},d)))})),y=Object(d.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(g),b=a("NqtD"),v=a("ye/S"),O=n.forwardRef((function(e,t){var a,o=e.align,r=void 0===o?"inherit":o,i=e.classes,d=e.className,p=e.component,h=e.padding,m=e.scope,g=e.size,y=e.sortDirection,v=e.variant,O=Object(c.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),j=n.useContext(u),x=n.useContext(f);a=p||(x&&"head"===x.variant?"th":"td");var w=m;!w&&x&&"head"===x.variant&&(w="col");var N=h||(j&&j.padding?j.padding:"default"),k=g||(j&&j.size?j.size:"medium"),T=v||x&&x.variant,M=null;return y&&(M="asc"===y?"ascending":"descending"),n.createElement(a,Object(l.a)({ref:t,className:Object(s.a)(i.root,i[T],d,"inherit"!==r&&i["align".concat(Object(b.a)(r))],"default"!==N&&i["padding".concat(Object(b.a)(N))],"medium"!==k&&i["size".concat(Object(b.a)(k))],"head"===T&&j&&j.stickyHeader&&i.stickyHeader),"aria-sort":M,scope:w},O))})),j=Object(d.a)((function(e){return{root:Object(l.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(v.e)(Object(v.c)(e.palette.divider,1),.88):Object(v.a)(Object(v.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(O),x={variant:"head"},w=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,i=void 0===r?"thead":r,d=Object(c.a)(e,["classes","className","component"]);return n.createElement(f.Provider,{value:x},n.createElement(i,Object(l.a)({className:Object(s.a)(a.root,o),ref:t},d)))})),N=Object(d.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(w),k=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.component,i=void 0===r?"tr":r,d=e.hover,u=void 0!==d&&d,p=e.selected,h=void 0!==p&&p,m=Object(c.a)(e,["classes","className","component","hover","selected"]),g=n.useContext(f);return n.createElement(i,Object(l.a)({ref:t,className:Object(s.a)(a.root,o,g&&{head:a.head,footer:a.footer}[g.variant],u&&a.hover,h&&a.selected)},m))})),T=Object(d.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected,&$selected:hover":{backgroundColor:Object(v.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(k),M=a("EOym");a.d(t,"default",(function(){return B}));var A=o.a.createElement;function E(e,t,a,n,o,r){return{id:e,date:t,name:a,shipTo:n,paymentMethod:o,amount:r}}var C=[E(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),E(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),E(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),E(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),E(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function R(e){e.preventDefault()}var S=Object(i.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function B(){var e=S();return A(o.a.Fragment,null,A(M.default,null,"Recent Orders"),A(h,{size:"small"},A(N,null,A(T,null,A(j,null,"Date"),A(j,null,"Name"),A(j,null,"Ship To"),A(j,null,"Payment Method"),A(j,{align:"right"},"Sale Amount"))),A(y,null,C.map((function(e){return A(T,{key:e.id},A(j,null,e.date),A(j,null,e.name),A(j,null,e.shipTo),A(j,null,e.paymentMethod),A(j,{align:"right"},e.amount))})))),A("div",{className:e.seeMore},A(r.a,{color:"primary",href:"#",onClick:R},"See more orders")))}}},[["lPD2",0,1,2]]]);