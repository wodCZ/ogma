"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[997],{6510:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(5903),o=n(3236),i=n(1322),a=n(3997),u=n(7414),c=n(7089),s=(0,o.createContext)({collectLink:function(){}}),l=n(4990),f=n(8344),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){var t,n,v=e.isNavLink,p=e.to,g=e.href,m=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,E=(0,r.Z)(e,d),_=(0,a.Z)().siteConfig,P=_.trailingSlash,S=_.baseUrl,O=(0,l.C)().withBaseUrl,L=(0,o.useContext)(s),C=p||g,x=(0,u.Z)(C),k=null==C?void 0:C.replace("pathname://",""),j=void 0!==k?(n=k,w&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0;j&&x&&(j=(0,f.applyTrailingSlash)(j,{trailingSlash:P,baseUrl:S}));var A=(0,o.useRef)(!1),D=v?i.OL:i.rU,R=c.Z.canUseIntersectionObserver,T=(0,o.useRef)();(0,o.useEffect)((function(){return!R&&x&&null!=j&&window.docusaurus.prefetch(j),function(){R&&T.current&&T.current.disconnect()}}),[T,j,R,x]);var I=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,M=!j||!x||I;return j&&x&&!I&&!y&&L.collectLink(j),M?o.createElement("a",Object.assign({href:j},C&&!x&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(D,Object.assign({},E,{onMouseEnter:function(){A.current||null==j||(window.docusaurus.preload(j),A.current=!0)},innerRef:function(e){var t,n;R&&e&&x&&(t=e,n=function(){null!=j&&window.docusaurus.prefetch(j)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(t),T.current.disconnect(),n())}))})),T.current.observe(t))},to:j||""},v&&{isActive:h,activeClassName:m}))}},3799:(e,t,n)=>{n.d(t,{Z:()=>l,I:()=>s});var r=n(3236),o=/{\w+}/g,i="{}";function a(e,t){var n=[],a=e.replace(o,(function(e){var o=e.substr(1,e.length-2),a=null==t?void 0:t[o];if(void 0!==a){var u=r.isValidElement(a)?a:String(a);return n.push(u),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(i).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):a.split(i).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}var u=n(8379);function c(e){var t,n,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(n=null!==(t=u[null!=r?r:o])&&void 0!==t?t:o)&&void 0!==n?n:r}function s(e,t){return a(c({message:e.message,id:e.id}),t)}function l(e){var t=e.children,n=e.id,r=e.values;if(t&&"string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");return a(c({message:t,id:n}),r)}},9589:(e,t,n)=>{n.d(t,{m:()=>r});var r="default"},7414:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>o})},14:(e,t,n)=>{n.r(t),n.d(t,{BrowserRouter:()=>r.VK,HashRouter:()=>r.UT,Link:()=>r.rU,MemoryRouter:()=>r.VA,NavLink:()=>r.OL,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=n(1322)},4990:(e,t,n)=>{n.d(t,{C:()=>i,Z:()=>a});var r=n(3997),o=n(7414);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},1109:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i,useAllPluginInstancesData:()=>a,usePluginData:()=>u});var r=n(3997),o=n(9589);function i(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function a(e){var t=i()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function u(e,t){void 0===t&&(t=o.m);var n=a(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},4336:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(3236),o=n(6022);function i(){return(0,r.useContext)(o._)}},4556:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(14);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!(0,r.matchPath)(t,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for \""+t+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return i};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,n){var o=(0,t.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(n,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,n){var o,i,a=(0,t.getActiveVersion)(e,n),u=null==a?void 0:a.docs.find((function(e){return!!(0,r.matchPath)(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:u,alternateDocVersions:u?(o=u.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}};t.getDocVersionSuggestions=function(e,n){var r=(0,t.getLatestVersion)(e),o=(0,t.getActiveDocContext)(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},1768:(e,t,n)=>{t.Jo=t.Iw=t.zu=t.yW=t.gB=t.gA=t.zh=t._r=void 0;var r=n(4254),o=n(14),i=(0,r.__importStar)(n(1109)),a=n(4556),u={};t._r=function(){var e;return null!==(e=(0,i.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:u};t.zh=function(e){return(0,i.usePluginData)("docusaurus-plugin-content-docs",e)};t.gA=function(e){void 0===e&&(e={});var n=(0,t._r)(),r=(0,o.useLocation)().pathname;return(0,a.getActivePlugin)(n,r,e)};t.gB=function(e){return(0,t.zh)(e).versions};t.yW=function(e){var n=(0,t.zh)(e);return(0,a.getLatestVersion)(n)};t.zu=function(e){var n=(0,t.zh)(e),r=(0,o.useLocation)().pathname;return(0,a.getActiveVersion)(n,r)};t.Iw=function(e){var n=(0,t.zh)(e),r=(0,o.useLocation)().pathname;return(0,a.getActiveDocContext)(n,r)};t.Jo=function(e){var n=(0,t.zh)(e),r=(0,o.useLocation)().pathname;return(0,a.getDocVersionSuggestions)(n,r)}},3556:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(3236),o=n(4701),i=n(5700),a=n(4990);function u(e){var t=e.title,n=e.description,u=e.keywords,c=e.image,s=e.children,l=(0,i.pe)(t),f=(0,a.C)().withBaseUrl,d=c?f(c,{absolute:!0}):void 0;return r.createElement(o.Z,null,t&&r.createElement("title",null,l),t&&r.createElement("meta",{property:"og:title",content:l}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),u&&r.createElement("meta",{name:"keywords",content:Array.isArray(u)?u.join(","):u}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},5838:(e,t,n)=>{n.d(t,{Iw:()=>r.Iw,gA:()=>r.gA,zu:()=>r.zu,_r:()=>r._r,Jo:()=>r.Jo,zh:()=>r.zh,yW:()=>r.yW,gB:()=>r.gB});var r=n(1768)},4545:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(3236),o=n(7089),i="desktop",a="mobile",u="ssr";function c(){return o.Z.canUseDOM?window.innerWidth>996?i:a:u}const s=function(){var e=(0,r.useState)((function(){return c()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},5700:(e,t,n)=>{n.d(t,{pl:()=>me,zF:()=>N,HX:()=>g,PO:()=>X,L5:()=>ae,Cv:()=>ee,Cn:()=>K,OC:()=>Ce,kM:()=>le,WA:()=>s,os:()=>m,Mg:()=>b,_f:()=>l,bc:()=>p,l5:()=>d,nT:()=>he,uR:()=>D,J:()=>se,Rb:()=>be,be:()=>ye,SL:()=>C,g8:()=>$,D9:()=>L,RF:()=>je,DA:()=>Oe,Si:()=>Pe,LU:()=>o,pe:()=>w});var r=n(3997);function o(){return(0,r.Z)().siteConfig.themeConfig}var i="localStorage";function a(e){if(void 0===e&&(e=i),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),u=!0),null}var t}var u=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:t,set:t,del:t}}(e);var n=a(null==t?void 0:t.persistence);return null===n?c:{get:function(){return n.getItem(e)},set:function(t){return n.setItem(e,t)},del:function(){return n.removeItem(e)}}};function l(e){void 0===e&&(e=i);var t=a(e);if(!t)return[];for(var n=[],r=0;r<t.length;r+=1){var o=t.key(r);null!==o&&n.push(o)}return n}var f=n(7115);function d(){var e=(0,r.Z)(),t=e.siteConfig,n=t.baseUrl,o=t.url,i=e.i18n,a=i.defaultLocale,u=i.currentLocale,c=(0,f.TH)().pathname,s=u===a?n:n.replace("/"+u+"/","/"),l=c.replace(n,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===a?""+s:""+s+e+"/"}(t)+l}}}var v=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(v))||void 0===t?void 0:t[2])&&void 0!==n?n:""}var g="default";function m(e,t){return"docs-"+e+"-"+t}var h=n(5838),y=!!h._r,b=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)},w=function(e){var t=(0,r.Z)().siteConfig,n=t.title,o=t.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+n:n},E=n(3236),_=["zero","one","two","few","many","other"];function P(e){return _.filter((function(t){return e.includes(t)}))}P(["one","other"]);var S="undefined"!=typeof window?E.useLayoutEffect:E.useEffect;function O(e){var t=(0,E.useRef)(e);return S((function(){t.current=e}),[e]),(0,E.useCallback)((function(){return t.current.apply(t,arguments)}),[])}function L(e){var t=(0,E.useRef)();return S((function(){t.current=e})),t.current}function C(e){var t=(0,f.TH)(),n=L(t),r=O(e);(0,E.useEffect)((function(){r({location:t,previousLocation:n})}),[r,t,n])}var x=n(5903),k=n(7089),j=["collapsed"],A=["lazy"];function D(e){var t=e.initialState,n=(0,E.useState)(null!=t&&t),r=n[0],o=n[1],i=(0,E.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:i}}var R={display:"none",overflow:"hidden",height:"0px"},T={display:"block",overflow:"visible",height:"auto"};function I(e,t){var n=t?R:T;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function M(e){var t=e.collapsibleRef,n=e.collapsed,r=e.animation,o=(0,E.useRef)(!1);(0,E.useEffect)((function(){var e,i=t.current;function a(){var e,t,n=i.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}(n);return{transition:"height "+o+"ms "+(null!==(t=null==r?void 0:r.easing)&&void 0!==t?t:"ease-in-out"),height:n+"px"}}function u(){var e=a();i.style.transition=e.transition,i.style.height=e.height}if(!o.current)return I(i,n),void(o.current=!0);return i.style.willChange="height",e=requestAnimationFrame((function(){n?(u(),requestAnimationFrame((function(){i.style.height=R.height,i.style.overflow=R.overflow}))):(i.style.display="block",requestAnimationFrame((function(){u()})))})),function(){return cancelAnimationFrame(e)}}),[t,n,r])}function V(e){if(!k.Z.canUseDOM)return e?R:T}function Z(e){var t=e.as,n=void 0===t?"div":t,r=e.collapsed,o=e.children,i=e.animation,a=e.onCollapseTransitionEnd,u=e.className,c=e.disableSSRStyle,s=(0,E.useRef)(null);return M({collapsibleRef:s,collapsed:r,animation:i}),E.createElement(n,{ref:s,style:c?void 0:V(r),onTransitionEnd:function(e){"height"===e.propertyName&&(I(s.current,r),null==a||a(r))},className:u},o)}function B(e){var t=e.collapsed,n=(0,x.Z)(e,j),r=(0,E.useState)(!t),o=r[0],i=r[1];(0,E.useLayoutEffect)((function(){t||i(!0)}),[t]);var a=(0,E.useState)(t),u=a[0],c=a[1];return(0,E.useLayoutEffect)((function(){o&&c(t)}),[o,t]),o?E.createElement(Z,Object.assign({},n,{collapsed:u})):null}function N(e){var t=e.lazy,n=(0,x.Z)(e,A),r=t?B:Z;return E.createElement(r,Object.assign({},n))}var U=n(4336),z=n(1626);const H="details_NlI-",F="isBrowser_37rc",W="collapsibleContent_2rzy";var q=["summary","children"];function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function G(e,t){return!!e&&(e===t||G(e.parentElement,t))}const X=function(e){var t,n=e.summary,r=e.children,o=(0,x.Z)(e,q),i=(0,U.Z)(),a=(0,E.useRef)(null),u=D({initialState:!o.open}),c=u.collapsed,s=u.setCollapsed,l=(0,E.useState)(o.open),f=l[0],d=l[1];return E.createElement("details",Object.assign({},o,{ref:a,open:f,"data-collapsed":c,className:(0,z.Z)(H,(t={},t[F]=i,t),o.className),onMouseDown:function(e){J(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;J(t)&&G(t,a.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),n,E.createElement(N,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),d(!e)}},E.createElement("div",{className:W},r)))};var Y=(0,E.createContext)(null);function K(e){var t=e.children;return E.createElement(Y.Provider,{value:(0,E.useState)(null)},t)}function Q(){var e=(0,E.useContext)(Y);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function $(){var e=Q()[0];if(e){var t=e.component;return function(n){return E.createElement(t,Object.assign({},e.props,n))}}return function(){}}function ee(e){var t,n=e.component,r=e.props,o=Q()[1],i=(t=r,(0,E.useMemo)((function(){return t}),[].concat(Object.keys(t),Object.values(t))));return(0,E.useEffect)((function(){o({component:n,props:i})}),[o,n,i]),(0,E.useEffect)((function(){return function(){return o(null)}}),[o]),null}var te=function(e){return"docs-preferred-version-"+e};const ne={save:function(e,t,n){s(te(e),{persistence:t}).set(n)},read:function(e,t){return s(te(e),{persistence:t}).get()},clear:function(e,t){s(te(e),{persistence:t}).del()}};function re(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=ne.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(ne.clear(e,n),{preferredVersionName:null})}(e)})),o}function oe(){var e=(0,h._r)(),t=o().docs.versionPersistence,n=(0,E.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,E.useState)((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),i=r[0],a=r[1];return(0,E.useEffect)((function(){a(re({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[i,(0,E.useMemo)((function(){return{savePreferredVersion:function(e,n){ne.save(e,t,n),a((function(t){var r;return Object.assign({},t,((r={})[e]={preferredVersionName:n},r))}))}}}),[t])]}var ie=(0,E.createContext)(null);function ae(e){var t=e.children;return y?E.createElement(ue,null,t):E.createElement(E.Fragment,null,t)}function ue(e){var t=e.children,n=oe();return E.createElement(ie.Provider,{value:n},t)}var ce=n(9589);function se(e){void 0===e&&(e=ce.m);var t=(0,h.zh)(e),n=function(){var e=(0,E.useContext)(ie);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=n[0],o=n[1],i=r[e].preferredVersionName;return{preferredVersion:i?t.versions.find((function(e){return e.name===i})):null,savePreferredVersionName:(0,E.useCallback)((function(t){o.savePreferredVersion(e,t)}),[o,e])}}var le={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},fe=s("docusaurus.announcement.dismiss"),de=s("docusaurus.announcement.id"),ve=function(){return"true"===fe.get()},pe=function(e){return fe.set(String(e))},ge=(0,E.createContext)(null),me=function(e){var t=e.children,n=function(){var e=o().announcementBar,t=(0,U.Z)(),n=(0,E.useState)((function(){return!!t&&ve()})),r=n[0],i=n[1];(0,E.useEffect)((function(){i(ve())}),[]);var a=(0,E.useCallback)((function(){pe(!0),i(!0)}),[]);return(0,E.useEffect)((function(){if(e){var t=e.id,n=de.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;de.set(t),r&&pe(!1),!r&&ve()||i(!1)}}),[e]),(0,E.useMemo)((function(){return{isActive:!!e&&!r,close:a}}),[e,r,a])}();return E.createElement(ge.Provider,{value:n},t)},he=function(){var e=(0,E.useContext)(ge);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function ye(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}n(3799);function be(e){!function(e){var t=(0,f.k6)().block,n=(0,E.useRef)(e);(0,E.useEffect)((function(){n.current=e}),[e]),(0,E.useEffect)((function(){return t((function(e,t){return n.current(e,t)}))}),[t,n])}((function(t,n){if("POP"===n)return e(t,n)}))}function we(e){var t=e.getBoundingClientRect();return t.top===t.bottom?we(e.parentNode):t}function Ee(e,t){var n,r=t.anchorTopOffset,o=e.find((function(e){return we(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(we(o))?o:null!==(n=e[e.indexOf(o)-1])&&void 0!==n?n:null:e[e.length-1]}function _e(){var e=(0,E.useRef)(0),t=o().navbar.hideOnScroll;return(0,E.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const Pe=function(e){var t=(0,E.useRef)(void 0),n=_e();(0,E.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,i=e.minHeadingLevel,a=e.maxHeadingLevel;function u(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),u=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],o=t;o<=n;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),c=Ee(u,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){var r;n?(t.current&&t.current!==e&&(null===(r=t.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===s)}))}return document.addEventListener("scroll",u),document.addEventListener("resize",u),u(),function(){document.removeEventListener("scroll",u),document.removeEventListener("resize",u)}}),[e,n])};function Se(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=Se({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}function Oe(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,E.useMemo)((function(){return Se({toc:t,minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}var Le=(0,E.createContext)(void 0);function Ce(e){var t,n=e.children;return E.createElement(Le.Provider,{value:(t=(0,E.useRef)(!0),(0,E.useMemo)((function(){return{scrollEventsEnabledRef:t,enableScrollEvents:function(){t.current=!0},disableScrollEvents:function(){t.current=!1}}}),[]))},n)}function xe(){var e=(0,E.useContext)(Le);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var ke=function(){return k.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function je(e,t){void 0===t&&(t=[]);var n=xe().scrollEventsEnabledRef,r=(0,E.useRef)(ke()),o=O(e);(0,E.useEffect)((function(){var e=function(){if(n.current){var e=ke();o&&o(e,r.current),r.current=e}},t={passive:!0};return e(),window.addEventListener("scroll",e,t),function(){return window.removeEventListener("scroll",e,t)}}),[o,n].concat(t))}},6290:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,i=e.split(/[#?]/)[0],a="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,a)}},8344:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(6290);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(1280);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},1280:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1626:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})},4254:(e,t,n)=>{n.r(t),n.d(t,{__extends:()=>o,__assign:()=>i,__rest:()=>a,__decorate:()=>u,__param:()=>c,__metadata:()=>s,__awaiter:()=>l,__generator:()=>f,__createBinding:()=>d,__exportStar:()=>v,__values:()=>p,__read:()=>g,__spread:()=>m,__spreadArrays:()=>h,__spreadArray:()=>y,__await:()=>b,__asyncGenerator:()=>w,__asyncDelegator:()=>E,__asyncValues:()=>_,__makeTemplateObject:()=>P,__importStar:()=>O,__importDefault:()=>L,__classPrivateFieldGet:()=>C,__classPrivateFieldSet:()=>x,__classPrivateFieldIn:()=>k});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function u(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function v(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||u(e,t)}))})}function u(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,s):l(i[0][2],n)}catch(r){l(i[0][3],r)}var n}function c(e){u("next",e)}function s(e){u("throw",e)}function l(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}function E(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function P(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var S=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return S(t,e),t}function L(e){return e&&e.__esModule?e:{default:e}}function C(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function x(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function k(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}}}]);