"use strict";(self.webpackChunkogma=self.webpackChunkogma||[]).push([[558],{8729:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(3236);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(r),m=o,u=h["".concat(p,".").concat(m)]||h[m]||d[m]||a;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8883:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>l,toc:()=>c,default:()=>h});var n=r(2245),o=r(5903),a=(r(3236),r(8729)),i=["components"],s={id:"interceptor",title:"NestJS Interceptor"},p="@ogma/nestjs-module Interceptor",l={unversionedId:"nestjs/interceptor",id:"nestjs/interceptor",isDocsHomePage:!1,title:"NestJS Interceptor",description:"Now the interceptor is a pretty impressive piece of work with what all it does to gether information. At a very high level, the interceptor will create a unique id for the request based on the current time of the request and Math.random(). You can override the generateRequestId method to modify this if you would like.",source:"@site/docs/nestjs/interceptor.md",sourceDirName:"nestjs",slug:"/nestjs/interceptor",permalink:"/docs/nestjs/interceptor",editUrl:"https://github.com/jmcdo29/ogma/edit/main/apps/docs/docs/nestjs/interceptor.md",tags:[],version:"current",lastUpdatedBy:"Jay McDoniel",lastUpdatedAt:1665685620,formattedLastUpdatedAt:"10/13/2022",frontMatter:{id:"interceptor",title:"NestJS Interceptor"},sidebar:"mySidebar",previous:{title:"NestJS Service",permalink:"/docs/nestjs/service"},next:{title:"Configured Example",permalink:"/docs/nestjs/example"}},c=[{value:"What the Interceptor Does",id:"what-the-interceptor-does",children:[],level:2},{value:"Binding the Interceptor",id:"binding-the-interceptor",children:[],level:2},{value:"Interceptor Design Decisions",id:"interceptor-design-decisions",children:[],level:2},{value:"Demo",id:"demo",children:[],level:2}],d={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ogmanestjs-module-interceptor"},"@ogma/nestjs-module Interceptor"),(0,a.kt)("p",null,"Now the interceptor is a pretty impressive piece of work with what all it does to gether information. At a very high level, the interceptor will create a unique id for the request based on the current time of the request and ",(0,a.kt)("inlineCode",{parentName:"p"},"Math.random()"),". You can override the ",(0,a.kt)("inlineCode",{parentName:"p"},"generateRequestId")," method to modify this if you would like."),(0,a.kt)("h2",{id:"what-the-interceptor-does"},"What the Interceptor Does"),(0,a.kt)("p",null,"The interceptor is designed to be an intelligent request logger that logs the regular metadata Ogma providers along with information about the request such as the caller's IP address, the route hit, how long the request took to get through the interceptor, the protocol used, what request method was used, the status of the request, and the length of the returned content, along with setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," for each log to be the hit route handler class and route handler method. That's a lot of information to throw at you in words, so for an example, you may see something like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[2021-09-06T18:50:22.767Z] [INFO]  [jay-pop] [application] [138639] [1630954222762841] [HttpController#getHello] ::1 - GET / HTTP/1.1 200 3ms - 17\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Be aware that as this is an interceptor, any errors that happen in middleware, such as Passport's serialization/deserialization and authentication methods through the PassportStrategy will not be logged in the library. You can use an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/exception-filters"},"ExceptionFilter")," to manage that. The same goes for guards due to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/faq/request-lifecycle"},"request lifecycle")))),(0,a.kt)("h2",{id:"binding-the-interceptor"},"Binding the Interceptor"),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"@ogma/nestjs-module")," has the interceptor, it's still up to the developer to bind the interceptor to the server, so it can log the metadata about these requests. This can either be done using ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseInterceptors()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"app.useGlobalInterceptors"),", but the most reliable method, due to all of the injected dependencies for the interceptor, would be to use a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/fundamentals/custom-providers"},"custom provider")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_INTERCEPTOR")," like follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  imports: [OgmaModule.forRoot(ogmaModuleOptions)],\n  providers: [\n    {\n      provide: APP_INTERCEPTOR,\n      useClass: OgmaInterceptor\n    }\n  ]\n})\nexport class AppModule {}\n")),(0,a.kt)("h2",{id:"interceptor-design-decisions"},"Interceptor Design Decisions"),(0,a.kt)("p",null,"Due to the incredible complex nature of Nest and its DI system, there needed to be some sort of way to tell users at bootstrap that if the interceptor is to be used, which should be the default behavior, then it should have one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ogma/platform-*")," packages installed, ",(0,a.kt)("strong",{parentName:"p"},"or")," a custom parser should be provided. ",(0,a.kt)("strong",{parentName:"p"},"Every")," custom parser should ",(0,a.kt)("inlineCode",{parentName:"p"},"extend")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractInterceptorService")," to ensure that A) Typescript doesn't complain about mismatched types, and B) the ",(0,a.kt)("inlineCode",{parentName:"p"},"DelegatorService")," which handles the calls to each parser, can be sure it is getting back what it expects. If you are really, ",(0,a.kt)("em",{parentName:"p"},"really")," sure about what you are doing, you can always override the setting with ",(0,a.kt)("inlineCode",{parentName:"p"},"as any")," to remove the Typescript warnings, but use that at your own risk."),(0,a.kt)("p",null,"The interceptor was designed to be adaptable, and to be able to work with any context thrown at it, but only if the parser for that context type is installed. The most common parser would be ",(0,a.kt)("a",{parentName:"p",href:"./http/platform-express"},(0,a.kt)("inlineCode",{parentName:"a"},"@ogma/platform-express")),", which will work for HTTP requests with the Express server running under the hood (Nest's default). All other parsers provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ogma")," namespace follow a similar naming scheme, and are provided for what Nest can use out of the box (including microservices named in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/microservices/basics"},"microservices chapter")," of the Nest docs.)"),(0,a.kt)("p",null,"Now, for the reasoning that all parsers are defaulted to false is to A) ensure that the developer does not expect the interceptor to work out of the box, B) ensure that the developer is aware of what parser is being used, and C) ensure that the parser(s) being used are installed without being blindly used (this means Typescript will complain if the class doesn't exist, whereas with JavaScript it ",(0,a.kt)("em",{parentName:"p"},"may")," be okay if a linter is not installed)."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For more notes on extending the pre-built parsers, or for how to create your own parser, please view the ",(0,a.kt)("a",{parentName:"p",href:"./custom"},"custom parser")," section of the docs."))),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,"Below is what the ",(0,a.kt)("inlineCode",{parentName:"p"},"OgmaInterceptor")," ",(0,a.kt)("em",{parentName:"p"},"can")," do. These are the logs I usually see during the integration testing, and show off just what is capable in terms of the metadata captured on requests."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://ogma-docs-images.s3-us-west-2.amazonaws.com/ogma-interceptor.gif",alt:"Ogma Interceptor Gif",width:"1200"})))}h.isMDXComponent=!0}}]);