"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[428],{8729:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var n=r(3236);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,d=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return r?n.createElement(d,s(s({ref:t},f),{},{components:r})):n.createElement(d,s({ref:t},f))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},794:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,toc:()=>f,default:()=>m});var n=r(2245),a=r(5903),o=(r(3236),r(8729)),s=["components"],i={id:"platform-fastify",title:"Platform Fastify"},l="@ogma/platform-fastify",p={unversionedId:"nestjs/http/platform-fastify",id:"nestjs/http/platform-fastify",isDocsHomePage:!1,title:"Platform Fastify",description:"The FastifyInterceptorParser parser for the OgmaInterceptor. This plugin class parses Fastify request and response object to be able to successfully log the data about the request. For more information, check out the @ogma/nestjs-module documentation.",source:"@site/docs/nestjs/http/platform-fastify.md",sourceDirName:"nestjs/http",slug:"/nestjs/http/platform-fastify",permalink:"/docs/nestjs/http/platform-fastify",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/nestjs/http/platform-fastify.md",tags:[],version:"current",lastUpdatedBy:"Jay McDoniel",lastUpdatedAt:1665685620,formattedLastUpdatedAt:"10/13/2022",frontMatter:{id:"platform-fastify",title:"Platform Fastify"},sidebar:"mySidebar",previous:{title:"Platform Express",permalink:"/docs/nestjs/http/platform-express"},next:{title:"GraphQL Overview",permalink:"/docs/nestjs/graphql/overview"}},f=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],c={toc:f};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ogmaplatform-fastify"},"@ogma/platform-fastify"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FastifyInterceptorParser")," parser for the ",(0,o.kt)("inlineCode",{parentName:"p"},"OgmaInterceptor"),". This plugin class parses Fastify request and response object to be able to successfully log the data about the request. For more information, check out the ",(0,o.kt)("a",{parentName:"p",href:"../module"},"@ogma/nestjs-module")," documentation."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Nothing special, standard ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i @ogma/platform-fastify")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @ogma/platform-fastify")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This plugin is to be used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"OgmaInterceptorOptions")," portion of the ",(0,o.kt)("inlineCode",{parentName:"p"},"OgmaModule")," during ",(0,o.kt)("inlineCode",{parentName:"p"},"forRoot")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"forRootAsync")," registration. It can be used like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Module(\n  OgmaModule.forRoot({\n    interceptor: {\n      http: FastifyParser\n    }\n  })\n)\nexport class AppModule {}\n")))}m.isMDXComponent=!0}}]);