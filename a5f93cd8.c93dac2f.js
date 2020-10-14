(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(88)),i={id:"project-structure",title:"Project structure",sidebar_label:"Project structure"},c={unversionedId:"project-structure",id:"project-structure",isDocsHomePage:!1,title:"Project structure",description:"This project has following structure",source:"@site/docs/project-structure.md",slug:"/project-structure",permalink:"/myze-docs/docs/project-structure",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project-structure.md",version:"current",sidebar_label:"Project structure",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/myze-docs/docs/"},next:{title:"Components Overview",permalink:"/myze-docs/docs/components-overview"}},s=[{value:"This project has following structure",id:"this-project-has-following-structure",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"this-project-has-following-structure"},"This project has following structure"),Object(a.b)("p",null,"Below you will find a list of all folders with short description"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"_",Object(a.b)("strong",{parentName:"li"},"_tests__")," - This folder contains test files."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"android")," - This folder contains all android native files"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"app")," - This is main project folder",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"components")," - This is main folder for all components")),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"atoms - Smallest building blocks"),Object(a.b)("li",{parentName:"ul"},"molecules - Blocks which uses few atoms "),Object(a.b)("li",{parentName:"ul"},"organisms - Blocks which uses other atoms and molecules"),Object(a.b)("li",{parentName:"ul"},"templates - UI wrappers")),Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"constants")," - This folder contains all defined constants"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"fixtures")," - This folder contains mocked data for components"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"images")," - All images used in project"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"navigation")," - This folder contains configs, components and stuff related to navigation"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"screens")," - All screens defined in the project"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"services")," - All helpers and usefull functions "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"theme")," - Files containing settings regarding fonts, colors, metrics etc."))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"assets")," - Fonts and bootsplash files"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"ios")," - This folder contains all ios native files"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"storybook")," - This folder contains storybook config")))}p.isMDXComponent=!0},88:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);