(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(152),o=a(35),i=a.n(o),c=a(7),s=a.n(c),u=a(168),m=a.n(u),d=a(4),p=a.n(d),f=function(e){return e.children},h=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(i()(t)),t}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){m.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,l=this.props,n=l.type,r=l.element,o=l.offset,i=l.timeout;if(n&&r)switch(n){case"class":a=!!(t=document.getElementsByClassName(r)[0]);break;case"id":a=!!(t=document.getElementById(r))}a?this.scrollTo(t,o,i):console.log("Element not found: "+r)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var l=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout(function(){window.scroll({top:l+t,left:0,behavior:"smooth"})},a):window.scroll({top:l+t,left:0,behavior:"smooth"})},a.render=function(){return n.a.createElement(f,null,"object"==typeof this.props.children?n.a.cloneElement(this.props.children,{onClick:this.handleClick}):n.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(n.a.Component);h.propTypes={type:p.a.string,element:p.a.string,offset:p.a.number,timeout:p.a.number,children:p.a.node.isRequired};var E=h,g=a(156),v=a.n(g),b=a(157),y=a.n(b),N=a(158),w=a.n(N),q=a(149),T=a.n(q);t.default=function(){return n.a.createElement(r.a,null,n.a.createElement("section",{id:"banner"},n.a.createElement("div",{className:"inner"},n.a.createElement("h2",null,T.a.heading),n.a.createElement("p",null,T.a.subHeading),n.a.createElement("ul",{className:"actions special"},n.a.createElement("li",null,n.a.createElement(E,{type:"id",element:"one"},n.a.createElement("a",{href:"/#",className:"button primary"},"Explore"))))),n.a.createElement(E,{type:"id",element:"one"},n.a.createElement("a",{href:"#one",className:"more"},"Learn More"))),n.a.createElement("section",{id:"one",className:"wrapper style1 special"},n.a.createElement("div",{className:"inner"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"Arcu aliquet vel lobortis ata nisl",n.a.createElement("br",null),"eget augue amet aliquet nisl cep donec"),n.a.createElement("p",null,"Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend",n.a.createElement("br",null),"fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.")),n.a.createElement("ul",{className:"icons major"},n.a.createElement("li",null,n.a.createElement("span",{className:"icon fa-gem major style1"},n.a.createElement("span",{className:"label"},"Lorem"))),n.a.createElement("li",null,n.a.createElement("span",{className:"icon fa-heart major style2"},n.a.createElement("span",{className:"label"},"Ipsum"))),n.a.createElement("li",null,n.a.createElement("span",{className:"icon solid fa-code major style3"},n.a.createElement("span",{className:"label"},"Dolor")))))),n.a.createElement("section",{id:"two",className:"wrapper alt style2"},n.a.createElement("section",{className:"spotlight"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:v.a,alt:""})),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Magna primis lobortis",n.a.createElement("br",null),"sed ullamcorper"),n.a.createElement("p",null,"Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula."))),n.a.createElement("section",{className:"spotlight"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:y.a,alt:""})),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Tortor dolore feugiat",n.a.createElement("br",null),"elementum magna"),n.a.createElement("p",null,"Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula."))),n.a.createElement("section",{className:"spotlight"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:w.a,alt:""})),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Augue eleifend aliquet",n.a.createElement("br",null),"sed condimentum"),n.a.createElement("p",null,"Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.")))),n.a.createElement("section",{id:"three",className:"wrapper style3 special"},n.a.createElement("div",{className:"inner"},n.a.createElement("header",{className:"major"},n.a.createElement("h2",null,"Accumsan mus tortor nunc aliquet"),n.a.createElement("p",null,"Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend",n.a.createElement("br",null),"fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.")),n.a.createElement("ul",{className:"features"},n.a.createElement("li",{className:"icon fa-paper-plane"},n.a.createElement("h3",null,"Arcu accumsan"),n.a.createElement("p",null,"Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.")),n.a.createElement("li",{className:"icon solid fa-laptop"},n.a.createElement("h3",null,"Ac Augue Eget"),n.a.createElement("p",null,"Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.")),n.a.createElement("li",{className:"icon solid fa-code"},n.a.createElement("h3",null,"Mus Scelerisque"),n.a.createElement("p",null,"Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.")),n.a.createElement("li",{className:"icon solid fa-headphones-alt"},n.a.createElement("h3",null,"Mauris Imperdiet"),n.a.createElement("p",null,"Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.")),n.a.createElement("li",{className:"icon fa-heart"},n.a.createElement("h3",null,"Aenean Primis"),n.a.createElement("p",null,"Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.")),n.a.createElement("li",{className:"icon fa-flag"},n.a.createElement("h3",null,"Tortor Ut"),n.a.createElement("p",null,"Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat."))))),n.a.createElement("section",{id:"cta",className:"wrapper style4"},n.a.createElement("div",{className:"inner"},n.a.createElement("header",null,n.a.createElement("h2",null,"Arcue ut vel commodo"),n.a.createElement("p",null,"Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.")),n.a.createElement("ul",{className:"actions stacked"},n.a.createElement("li",null,n.a.createElement("a",{href:"/#",className:"button fit primary"},"Activate")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#",className:"button fit"},"Learn More"))))))}},148:function(e,t,a){var l;e.exports=(l=a(151))&&l.default||l},149:function(e,t){e.exports={siteTitle:"Gatsby Starter Spectral",manifestName:"Spectral",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/gatsby-starter-spectral/",heading:"Anubhav Srivastava",subHeading:"Full time Web Developer. Part time Open source contributor  ",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/anubhavsrivastava"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/onlyanubhav"},{icon:"fa-facebook",name:"Facebook",url:"https://facebook.com/theanubhav"}]}},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Spectral"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var l=a(0),n=a.n(l),r=a(4),o=a.n(r),i=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){"use strict";var l=a(7),n=a.n(l),r=a(150),o=a(0),i=a.n(o),c=a(4),s=a.n(c),u=a(153),m=a.n(u),d=a(33),p=a.n(d),f=(a(148),i.a.createContext({})),h=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(154),a(155);var E=a(149),g=a.n(E);function v(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("ul",{className:"icons"},g.a.socialLinks.map(function(e){var t=e.icon,a=e.name,l=e.url;return i.a.createElement("li",{key:l},i.a.createElement("a",{href:l,className:"icon brands "+t},i.a.createElement("span",{className:"label"},a)))})),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"© Spectral"),i.a.createElement("li",null,"Design: ",i.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))}function b(e){var t=e.onMenuToggle,a=void 0===t?function(){}:t;return i.a.createElement("nav",{id:"nav"},i.a.createElement("ul",null,i.a.createElement("li",{className:"special"},i.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),a()},className:"menuToggle"},i.a.createElement("span",null,"Menu")),i.a.createElement("div",{id:"menu"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(p.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(p.a,{to:"/Generic"},"Generic Page")),i.a.createElement("li",null,i.a.createElement(p.a,{to:"/Elements"},"Elements"))),i.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),a()},href:"#menu"},"")))))}function y(e){var t=e.fullMenu,a=Object(o.useState)(!1),l=a[0],n=a[1];return i.a.createElement("header",{id:"header",className:t?"":"alt"},i.a.createElement("h1",null,i.a.createElement(p.a,{to:"/"},"Spectral")),i.a.createElement("div",{className:l?"is-menu-visible":" "},i.a.createElement(b,{onMenuToggle:function(){return n(!l)}})))}var N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isPreloaded:!0},a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props,t=e.children,a=e.fullMenu,l=this.state.isPreloaded;return i.a.createElement(h,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Spectral"},{name:"keywords",content:"site, web"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{className:l?"landing main-body landing is-preload":"landing main-body"},i.a.createElement("div",{id:"page-wrapper"},i.a.createElement(y,{fullMenu:a}),t,i.a.createElement(v,null))))},data:r})},t}(o.Component);N.propTypes={children:s.a.node.isRequired};t.a=N},156:function(e,t,a){e.exports=a.p+"static/pic01-4ee3b098fd62d110863ed47d7cabaf13.jpg"},157:function(e,t,a){e.exports=a.p+"static/pic02-c917e815ac575fb9428a796ad2150bc9.jpg"},158:function(e,t,a){e.exports=a.p+"static/pic03-998b37fb4269d5bd6f6de7702d19d95c.jpg"},168:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var a,l=e.HTMLElement||e.Element,n=468,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:l.prototype.scroll||c,scrollIntoView:l.prototype.scrollIntoView},o=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var a=function(e){for(;e!==t.body&&!1===d(e);)e=e.parentNode||e.host;return e}(this),l=a.getBoundingClientRect(),n=this.getBoundingClientRect();a!==t.body?(f.call(this,a,a.scrollLeft+n.left-l.left,a.scrollTop+n.top-l.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function m(t,a){var l=e.getComputedStyle(t,null)["overflow"+a];return"auto"===l||"scroll"===l}function d(e){var t=u(e,"Y")&&m(e,"Y"),a=u(e,"X")&&m(e,"X");return t||a}function p(t){var a,l,r,i,c=(o()-t.startTime)/n;i=c=c>1?1:c,a=.5*(1-Math.cos(Math.PI*i)),l=t.startX+(t.x-t.startX)*a,r=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,l,r),l===t.x&&r===t.y||e.requestAnimationFrame(p.bind(e,t))}function f(a,l,n){var i,s,u,m,d=o();a===t.body?(i=e,s=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,m=r.scroll):(i=a,s=a.scrollLeft,u=a.scrollTop,m=c),p({scrollable:i,method:m,startTime:d,startX:s,startY:u,x:l,y:n})}}}}()}}]);
//# sourceMappingURL=component---src-pages-index-js-c2c64682049081cfe462.js.map