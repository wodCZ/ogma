"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[303],{8729:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(3236);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,d=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3726:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>m,default:()=>u});var n=a(2245),r=a(5903),o=(a(3236),a(8729)),i=["components"],s={id:"platform-graphql-fastify",title:"Platform GraphQL Fastify"},l="@ogma/platform-graphql-fastify",p={unversionedId:"nestjs/graphql/platform-graphql-fastify",id:"nestjs/graphql/platform-graphql-fastify",isDocsHomePage:!1,title:"Platform GraphQL Fastify",description:"If you are using @nestjs/apollo make sure you are using fastify v3 and @nestjs/commonversion 8. If you are using@nestjs/mercuriusyou may use fastify v4 and@nestjs/common` version 9.",source:"@site/docs/nestjs/graphql/platform-graphql-fastify.md",sourceDirName:"nestjs/graphql",slug:"/nestjs/graphql/platform-graphql-fastify",permalink:"/docs/nestjs/graphql/platform-graphql-fastify",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/nestjs/graphql/platform-graphql-fastify.md",tags:[],version:"current",lastUpdatedBy:"Jay McDoniel",lastUpdatedAt:1665685620,formattedLastUpdatedAt:"10/13/2022",frontMatter:{id:"platform-graphql-fastify",title:"Platform GraphQL Fastify"},sidebar:"mySidebar",previous:{title:"Platform GraphQL",permalink:"/docs/nestjs/graphql/platform-graphql"},next:{title:"RPC Overview",permalink:"/docs/nestjs/rpc/overview"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ogmaplatform-graphql-fastify"},"@ogma/platform-graphql-fastify"),(0,o.kt)("p",null,"::: info"),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/apollo")," make sure you are using fastify v3 and @nestjs/common",(0,o.kt)("inlineCode",{parentName:"p"},"version 8. If you are using"),"@nestjs/mercurius",(0,o.kt)("inlineCode",{parentName:"p"},"you may use fastify v4 and"),"@nestjs/common` version 9."),(0,o.kt)("p",null,":::"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLFastifyParser")," parser for the ",(0,o.kt)("inlineCode",{parentName:"p"},"OgmaInterceptor"),". This plugin class parses GraphQL request and response object to be able to successfully log the data about the request. For more information, check out the ",(0,o.kt)("a",{parentName:"p",href:"../module"},"@ogma/nestjs-module")," documentation."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Nothing special, standard ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i @ogma/platform-graphql-fastify")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @ogma/platform-graphql-fastify")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This plugin is to be used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"OgmaInterceptorOptions")," portion of the ",(0,o.kt)("inlineCode",{parentName:"p"},"OgmaModule")," during ",(0,o.kt)("inlineCode",{parentName:"p"},"forRoot")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"forRootAsync")," registration. It can be used like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Module(\n  OgmaModule.forRoot({\n    interceptor: {\n      gql: GraphQLFastifyParser\n    }\n  })\n)\nexport class AppModule {}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Due to the nature of subscriptions and the data available from the base ones, it is not possible at this time to log what subscriptions are made in the Ogma fashion."))),(0,o.kt)("p",null,"Because the interceptor needs access to the request and response objects, when configuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphqlModule")," from Nest, you need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"reply")," to the GraphQL context. to do this, while configuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphqlModule"),", set the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," property as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"GraphqlModule.forRoot({\n  context: ({ request, reply }) => ({ request, reply })\n});\n")))}u.isMDXComponent=!0}}]);