"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[434],{4785:(e,t,n)=>{n.d(t,{Z:()=>a});const a=function(){return null}},6085:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(3236);const r="iconExternalLink_2lHm";const l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return a.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},2434:(e,t,n)=>{n.d(t,{Z:()=>ke});var a=n(3236),r=n(1626),l=n(7115),o=n(3799),c=n(5700);const i="skipToContent_A5PG";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){var e=(0,a.useRef)(null),t=(0,l.k6)().action;return(0,c.SL)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var m=n(2245),d=n(5903),v=["width","height","color","strokeWidth","className"];function f(e){var t=e.width,n=void 0===t?21:t,r=e.height,l=void 0===r?21:r,o=e.color,c=void 0===o?"currentColor":o,i=e.strokeWidth,s=void 0===i?1.2:i,u=(e.className,(0,d.Z)(e,v));return a.createElement("svg",(0,m.Z)({viewBox:"0 0 15 15",width:n,height:l},u),a.createElement("g",{stroke:c,strokeWidth:s},a.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}const h="announcementBar_2iEa",g="announcementBarPlaceholder_1mdF",b="announcementBarClose_1WAQ",E="announcementBarContent_2E0Z";const p=function(){var e=(0,c.nT)(),t=e.isActive,n=e.close,l=(0,c.LU)().announcementBar;if(!t)return null;var i=l.content,s=l.backgroundColor,u=l.textColor,m=l.isCloseable;return a.createElement("div",{className:h,style:{backgroundColor:s,color:u},role:"banner"},m&&a.createElement("div",{className:g}),a.createElement("div",{className:E,dangerouslySetInnerHTML:{__html:i}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",b),onClick:n,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(f,{width:14,height:14,strokeWidth:3.1})):null)};var k=n(4785),Z=n(4336);const _={toggle:"toggle_EKWT",toggleScreenReader:"toggleScreenReader_2p84",toggleDisabled:"toggleDisabled_9dBg",toggleTrack:"toggleTrack_3Lgd",toggleTrackCheck:"toggleTrackCheck_2SFi",toggleChecked:"toggleChecked_1dIX",toggleTrackX:"toggleTrackX_3xqt",toggleTrackThumb:"toggleTrackThumb_12JE",toggleFocused:"toggleFocused_2tiq",toggleIcon:"toggleIcon_2Q-W"};var N=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(_.toggleIcon,_.dark),style:n},t)},w=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(_.toggleIcon,_.light),style:n},t)},y=(0,a.memo)((function(e){var t,n=e.className,l=e.icons,o=e.checked,c=e.disabled,i=e.onChange,s=(0,a.useState)(o),u=s[0],m=s[1],d=(0,a.useState)(!1),v=d[0],f=d[1],h=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)(_.toggle,n,(t={},t[_.toggleChecked]=u,t[_.toggleFocused]=v,t[_.toggleDisabled]=c,t))},a.createElement("div",{className:_.toggleTrack,role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=h.current)?void 0:e.click()}},a.createElement("div",{className:_.toggleTrackCheck},l.checked),a.createElement("div",{className:_.toggleTrackX},l.unchecked),a.createElement("div",{className:_.toggleTrackThumb})),a.createElement("input",{ref:h,checked:u,type:"checkbox",className:_.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return m(!u)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=h.current)||t.click())}}))}));function C(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,i=(0,Z.Z)();return a.createElement(y,(0,m.Z)({disabled:!i,icons:{checked:a.createElement(N,{icon:n,style:r}),unchecked:a.createElement(w,{icon:l,style:o})}},e))}var I=n(4650);const T=function(e){var t=(0,a.useState)(e),n=t[0],r=t[1],l=(0,a.useRef)(!1),o=(0,a.useRef)(0),i=(0,a.useCallback)((function(e){null!==e&&(o.current=e.getBoundingClientRect().height)}),[]);return(0,c.RF)((function(t,n){if(e){var a=t.scrollY;if(a<o.current)r(!0);else if(l.current)l.current=!1;else{var c=null==n?void 0:n.scrollY,i=document.documentElement.scrollHeight-o.current,s=window.innerHeight;c&&a>=c?r(!1):a+s<i&&r(!0)}}})),(0,c.SL)((function(t){if(e)return t.location.hash?(l.current=!0,void r(!1)):void r(!0)})),{navbarRef:i,isNavbarVisible:n}};const L=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])};var D=n(4545),S=n(5838),B=n(994),A=n(1175),x=["width","height","className"];const M=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,l=void 0===r?30:r,o=e.className,c=(0,d.Z)(e,x);return a.createElement("svg",(0,m.Z)({className:o,width:n,height:l,viewBox:"0 0 30 30","aria-hidden":"true"},c),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},R={toggle:"toggle_2NiH",navbarHideable:"navbarHideable_2PgR",navbarHidden:"navbarHidden_3DDQ",navbarSidebarToggle:"navbarSidebarToggle_SZ5l"};var H="right";function P(){return(0,c.LU)().navbar.items}function U(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,I.Z)(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?l():r()}),[r,l]),disabled:e}}function W(e){var t=e.sidebarShown,n=e.toggleSidebar;L(t);var l=P(),i=U(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),o=(0,c.D9)(l),i=(0,a.useState)((function(){return!1})),s=i[0],u=i[1];(0,a.useEffect)((function(){l&&!o&&u(!0)}),[l,o]);var m=!!l;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(A.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&a.createElement(C,{className:R.navbarSidebarToggle,checked:i.isDarkTheme,onChange:i.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(f,{color:"var(--ifm-color-emphasis-600)",className:R.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(B.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}const F=function(){var e,t=(0,c.LU)().navbar,n=t.hideOnScroll,l=t.style,o=function(){var e=(0,D.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],l=n[1];(0,c.Rb)((function(){if(r)return l(!1),!1}));var o=(0,a.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:o,shown:r}}(),i=U(),s=(0,S.gA)(),u=T(n),d=u.navbarRef,v=u.isNavbarVisible,f=P(),h=f.some((function(e){return"search"===e.type})),g=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:H)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:H)}))}}(f),b=g.leftItems,E=g.rightItems;return a.createElement("nav",{ref:d,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":o.shown},e[R.navbarHideable]=n,e[R.navbarHidden]=n&&!v,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==f?void 0:f.length)>0||s)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:o.toggle,onKeyDown:o.toggle},a.createElement(M,null)),a.createElement(A.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),b.map((function(e,t){return a.createElement(B.Z,(0,m.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},E.map((function(e,t){return a.createElement(B.Z,(0,m.Z)({},e,{key:t}))})),!i.disabled&&a.createElement(C,{className:R.toggle,checked:i.isDarkTheme,onChange:i.toggle}),!h&&a.createElement(k.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:o.toggle}),o.shouldRender&&a.createElement(W,{sidebarShown:o.shown,toggleSidebar:o.toggle}))};var V=n(6510),z=n(4990),O=n(7414);const G="footerLogoLink_pMcf";var Q=n(8919),q=n(6085),K=["to","href","label","prependBaseUrlToHref"];function X(e){var t=e.to,n=e.href,r=e.label,l=e.prependBaseUrlToHref,o=(0,d.Z)(e,K),c=(0,z.Z)(t),i=(0,z.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(V.Z,(0,m.Z)({className:"footer__link-item"},n?{href:l?i:n}:{to:c},o),n&&!(0,O.Z)(n)?a.createElement("span",null,r,a.createElement(q.Z,null)):r)}var j=function(e){var t=e.sources,n=e.alt;return a.createElement(Q.Z,{className:"footer__logo",alt:n,sources:t})};const J=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,i=t.logo,s=void 0===i?{}:i,u={light:(0,z.Z)(s.src),dark:(0,z.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(X,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(V.Z,{href:s.href,className:G},a.createElement(j,{alt:s.alt,sources:u})):a.createElement(j,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null};var Y=n(7089),$=(0,c.WA)("theme"),ee="light",te="dark",ne=function(e){return e===te?te:ee},ae=function(e){(0,c.WA)("theme").set(ne(e))};const re=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,l=(0,a.useState)(function(e){return Y.Z.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e)}(t)),o=l[0],i=l[1],s=(0,a.useCallback)((function(){i(ee),ae(ee)}),[]),u=(0,a.useCallback)((function(){i(te),ae(te)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",ne(o))}),[o]),(0,a.useEffect)((function(){if(!n)try{var e=$.get();null!==e&&i(ne(e))}catch(t){console.error(t)}}),[n,i]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?te:ee)}))}),[n,r]),{isDarkTheme:o===te,setLightTheme:s,setDarkTheme:u}};var le=n(1497);const oe=function(e){var t=re(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(le.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)};var ce="docusaurus.tab.";const ie=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ce)){var n=t.substring(ce.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}};const se=(0,a.createContext)(void 0);const ue=function(e){var t=ie(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(se.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function me(e){var t=e.children;return a.createElement(oe,null,a.createElement(c.pl,null,a.createElement(ue,null,a.createElement(c.OC,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t))))))}var de=n(4701),ve=n(3997);function fe(e){var t=e.locale,n=e.version,r=e.tag;return a.createElement(de.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var he=n(3556);function ge(){var e=(0,ve.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,c.l5)();return a.createElement(de.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function be(e){var t=e.permalink,n=(0,ve.Z)().siteConfig.url,r=function(){var e=(0,ve.Z)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,z.Z)(t)}(),o=t?""+n+t:r;return a.createElement(de.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function Ee(e){var t=(0,ve.Z)(),n=t.siteConfig.favicon,r=t.i18n,l=r.currentLocale,o=r.localeConfigs,i=(0,c.LU)(),s=i.metadatas,u=i.image,d=e.title,v=e.description,f=e.image,h=e.keywords,g=e.searchMetadatas,b=(0,z.Z)(n),E=(0,c.pe)(d),p=l,k=o[l].direction;return a.createElement(a.Fragment,null,a.createElement(de.Z,null,a.createElement("html",{lang:p,dir:k}),n&&a.createElement("link",{rel:"shortcut icon",href:b}),a.createElement("title",null,E),a.createElement("meta",{property:"og:title",content:E}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&a.createElement(he.Z,{image:u}),f&&a.createElement(he.Z,{image:f}),a.createElement(he.Z,{description:v,keywords:h}),a.createElement(be,null),a.createElement(ge,null),a.createElement(fe,(0,m.Z)({tag:c.HX,locale:l},g)),a.createElement(de.Z,null,s.map((function(e,t){return a.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}const pe=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const ke=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return pe(),a.createElement(me,null,a.createElement(Ee,e),a.createElement(u,null),a.createElement(p,null),a.createElement(F,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(J,null))}},1175:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(2245),r=n(5903),l=n(3236),o=n(6510),c=n(8919),i=n(4990),s=n(3997),u=n(5700),m=["imageClassName","titleClassName"];const d=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,d=n.title,v=n.logo,f=void 0===v?{src:""}:v,h=e.imageClassName,g=e.titleClassName,b=(0,r.Z)(e,m),E=(0,i.Z)(f.href||"/"),p={light:(0,i.Z)(f.src),dark:(0,i.Z)(f.srcDark||f.src)},k=l.createElement(c.Z,{sources:p,alt:f.alt||d||t});return l.createElement(o.Z,(0,a.Z)({to:E},b,f.target&&{target:f.target}),f.src&&(h?l.createElement("div",{className:h},k):l.createElement(l.Fragment,null,k)),null!=d&&l.createElement("b",{className:g},d))}},6617:(e,t,n)=>{n.d(t,{O:()=>g,Z:()=>p});var a=n(2245),r=n(5903),l=n(3236),o=n(1626),c=n(6510),i=n(4990),s=n(6085),u=n(7414),m=n(994),d=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["className","isDropdownItem"],f=["className","isDropdownItem"],h=["mobile","position"];function g(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,m=e.to,v=e.href,f=e.label,h=e.activeClassName,g=void 0===h?"":h,b=e.prependBaseUrlToHref,E=(0,r.Z)(e,d),p=(0,i.Z)(m),k=(0,i.Z)(n),Z=(0,i.Z)(v,{forcePrependBaseUrl:!0}),_=f&&v&&!(0,u.Z)(v),N="dropdown__link--active"===g;return l.createElement(c.Z,(0,a.Z)({},v?{href:b?Z:v}:Object.assign({isNavLink:!0,activeClassName:null!=(t=E.className)&&t.includes(g)?"":g,to:p},n||o?{isActive:function(e,t){return o?new RegExp(o).test(t.pathname):t.pathname.startsWith(k)}}:null),E),_?l.createElement("span",null,f,l.createElement(s.Z,N&&{width:12,height:12})):f)}function b(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,i=(0,r.Z)(e,v),s=l.createElement(g,(0,a.Z)({className:(0,o.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},i));return c?l.createElement("li",null,s):s}function E(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return l.createElement("li",{className:"menu__list-item"},l.createElement(g,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}const p=function(e){var t,n=e.mobile,o=void 0!==n&&n,c=(e.position,(0,r.Z)(e,h)),i=o?E:b;return l.createElement(i,(0,a.Z)({},c,{activeClassName:null!=(t=c.activeClassName)?t:(0,m.E)(o)}))}},9271:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(2245),r=n(5903),l=n(3236),o=n(6617),c=n(5838),i=n(1626),s=n(994),u=n(5700),m=n(8344),d=["docId","label","docsPluginId"];function v(e){var t,n=e.docId,v=e.label,f=e.docsPluginId,h=(0,r.Z)(e,d),g=(0,c.Iw)(f),b=g.activeVersion,E=g.activeDoc,p=(0,u.J)(f).preferredVersion,k=(0,c.yW)(f),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([b,p,k].filter(Boolean)),n),_=(0,s.E)(h.mobile);return l.createElement(o.Z,(0,a.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(t={},t[_]=(null==E?void 0:E.sidebar)&&E.sidebar===Z.sidebar,t)),activeClassName:_,label:null!=v?v:Z.id,to:Z.path}))}},6257:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(2245),r=n(5903),l=n(3236),o=n(6617),c=n(7818),i=n(5838),s=n(5700),u=n(3799),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function v(e){var t,n,v=e.mobile,f=e.docsPluginId,h=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,E=(0,r.Z)(e,m),p=(0,i.Iw)(f),k=(0,i.gB)(f),Z=(0,i.yW)(f),_=(0,s.J)(f),N=_.preferredVersion,w=_.savePreferredVersionName;var y,C=(y=k.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){w(e.name)}}})),[].concat(g,y,b)),I=null!=(t=null!=(n=p.activeVersion)?n:N)?t:Z,T=v&&C?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):I.label,L=v&&C?void 0:d(I).path;return C.length<=1?l.createElement(o.Z,(0,a.Z)({},E,{mobile:v,label:T,to:L,isActive:h?function(){return!1}:void 0})):l.createElement(c.Z,(0,a.Z)({},E,{mobile:v,label:T,to:L,items:C,isActive:h?function(){return!1}:void 0}))}},6501:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(2245),r=n(5903),l=n(3236),o=n(6617),c=n(5838),i=n(5700),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,s),v=(0,c.zu)(m),f=(0,i.J)(m).preferredVersion,h=(0,c.yW)(m),g=null!=(t=null!=v?v:f)?t:h,b=null!=n?n:g.label,E=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:b,to:E}))}},7818:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(2245),r=n(5903),l=n(3236),o=n(1626),c=n(5700),i=n(6617),s=n(994),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function v(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function f(e){var t,n=e.items,c=e.position,m=e.className,d=(0,r.Z)(e,u),v=(0,l.useRef)(null),f=(0,l.useRef)(null),h=(0,l.useState)(!1),g=h[0],b=h[1];return(0,l.useEffect)((function(){var e=function(e){v.current&&!v.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[v]),l.createElement("div",{ref:v,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":g})},l.createElement(i.O,(0,a.Z)({className:(0,o.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!g))}}),null!=(t=d.children)?t:d.label),l.createElement("ul",{ref:f,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var a=v.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),f=(0,c.be)(),h=v(n,f),g=(0,c.uR)({initialState:function(){return!h}}),b=g.collapsed,E=g.toggleCollapsed,p=g.setCollapsed;return(0,l.useEffect)((function(){h&&p(!h)}),[f,h,p]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(i.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),E()}}),null!=(t=d.children)?t:d.label),l.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}const g=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),o=n?h:f;return l.createElement(o,a)}},994:(e,t,n)=>{n.d(t,{Z:()=>k,E:()=>p});var a=n(5903),r=n(3236),l=n(6617),o=n(7818),c=n(2245),i=["width","height"];const s=function(e){var t=e.width,n=void 0===t?20:t,l=e.height,o=void 0===l?20:l,s=(0,a.Z)(e,i);return r.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:o,"aria-hidden":"true"},s),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var u=n(3997),m=n(5700);const d="iconLanguage_ushw";var v=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,i=(0,a.Z)(e,v),f=(0,u.Z)().i18n,h=f.currentLocale,g=f.locales,b=f.localeConfigs,E=(0,m.l5)();function p(e){return b[e].label}var k=g.map((function(e){var t="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,k,l),_=t?"Languages":p(h);return r.createElement(o.Z,(0,c.Z)({},i,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(s,{className:d}),r.createElement("span",null,_)),items:Z}))}var h=n(4785);function g(e){return e.mobile?null:r.createElement(h.Z,null)}var b=["type"],E={default:function(){return l.Z},localeDropdown:function(){return f},search:function(){return g},dropdown:function(){return o.Z},docsVersion:function(){return n(6501).Z},docsVersionDropdown:function(){return n(6257).Z},doc:function(){return n(9271).Z}};var p=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,a.Z)(e,b),l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),o=function(e){var t=E[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(l);return r.createElement(o,n)}},1497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(3236).createContext(void 0)},8919:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(2245),r=n(5903),l=n(3236),o=n(1626),c=n(4336),i=n(4650);const s={themedImage:"themedImage_Bny_","themedImage--light":"themedImage--light_yMsF","themedImage--dark":"themedImage--dark_1FNQ"};var u=["sources","className","alt"];const m=function(e){var t=(0,c.Z)(),n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,v=e.alt,f=void 0===v?"":v,h=(0,r.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,g.map((function(e){return l.createElement("img",(0,a.Z)({key:e,src:m[e],alt:f,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},4650:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(3236),r=n(1497);const l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);