(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{2105:function(e,t,n){var o=n(662),r=n(2106);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},2106:function(e,t,n){(t=n(663)(!1)).push([e.i,".login-page{padding-top:10vh;max-width:300px;margin:0 auto}.login-title{line-height:1.5;font-size:24px;font-weight:300}",""]),e.exports=t},2107:function(e,t,n){var o=n(662),r=n(2108);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},2108:function(e,t,n){(t=n(663)(!1)).push([e.i,".login-form{width:300px;margin-left:auto;margin-right:auto}.login-input{width:100%!important;height:auto!important;padding:5px 12px!important;font-size:20px;font-weight:300}.login-label{display:none;margin-bottom:8px;font-size:15px}",""]),e.exports=t},2109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(660),r=n(13),i=n(1032),a=n(691);n(2110),t.default=function(e){var t=e.backgroundColor,n=e.children,l=e.className,s=e.iconPath,c=e.name,p=e.onClick,u=e.small,d=e.url,h=u?14:20;return r.createElement("a",{className:o("identity-provider-link",{"dark-text":!i.isDarkColor(t),small:u},l),href:d,onClick:p,style:{backgroundColor:t}},r.createElement("img",{alt:c,height:h,src:a.getBaseUrl()+s,width:h}),n)}},2110:function(e,t,n){var o=n(662),r=n(2111);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},2111:function(e,t,n){(t=n(663)(!1)).push([e.i,'a.identity-provider-link{display:block;width:auto;line-height:22px;padding:8px 12px;border:1px solid rgba(0,0,0,.15);border-radius:2px;box-sizing:border-box;background-color:#236a97;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}a.identity-provider-link.small{line-height:14px;padding:4px 8px}a.identity-provider-link:focus,a.identity-provider-link:hover{box-shadow:inset 0 0 0 100px hsla(0,0%,100%,.1)}a.identity-provider-link.dark-text{color:#777}a.identity-provider-link.dark-text:focus,a.identity-provider-link.dark-text:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,.1)}a.identity-provider-link>img{padding-right:12px}a.identity-provider-link.small>img{padding-right:8px}a.identity-provider-link>span:before{content:"";opacity:.4;border-left:1px solid #b4b4b4;margin-right:12px}',""]),e.exports=t},2112:function(e,t,n){var o=n(662),r=n(2113);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},2113:function(e,t,n){(t=n(663)(!1)).push([e.i,".oauth-providers>ul{width:200px;margin-left:auto;margin-right:auto}.oauth-providers>ul>li{position:relative;margin-bottom:30px}.oauth-providers-help{position:absolute;top:15px;right:-24px}.oauth-providers+.login-form{padding-top:30px;border-top:1px solid #e6e6e6}",""]),e.exports=t},2216:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginContainer",(function(){return P}));var o,r=n(13),i=n(674),a=n(691),l=n(794),s=n(846),c=n(671),p=n(176),u=n(1106),d=(n(2105),n(661)),h=n(667),m=n.n(h),g=(n(2107),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(t){var n=e.call(this,t)||this;return n.stopLoading=function(){n.setState({loading:!1})},n.handleSubmit=function(e){e.preventDefault(),n.setState({loading:!0}),n.props.onSubmit(n.state.login,n.state.password).then(n.stopLoading,n.stopLoading)},n.handleMoreOptionsClick=function(e){e.preventDefault(),n.setState({collapsed:!1})},n.handleLoginChange=function(e){return n.setState({login:e.currentTarget.value})},n.handlePwdChange=function(e){return n.setState({password:e.currentTarget.value})},n.state={collapsed:Boolean(t.collapsed),loading:!1,login:"",password:""},n}return g(t,e),t.prototype.render=function(){return this.state.collapsed?r.createElement("div",{className:"text-center"},r.createElement("a",{className:"small text-muted js-more-options",href:"#",onClick:this.handleMoreOptionsClick},Object(p.translate)("login.more_options"))):r.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},r.createElement("div",{className:"big-spacer-bottom"},r.createElement("label",{className:"login-label",htmlFor:"login"},Object(p.translate)("login")),r.createElement("input",{autoFocus:!0,className:"login-input",id:"login",maxLength:255,name:"login",onChange:this.handleLoginChange,placeholder:Object(p.translate)("login"),required:!0,type:"text",value:this.state.login})),r.createElement("div",{className:"big-spacer-bottom"},r.createElement("label",{className:"login-label",htmlFor:"password"},Object(p.translate)("password")),r.createElement("input",{className:"login-input",id:"password",name:"password",onChange:this.handlePwdChange,placeholder:Object(p.translate)("password"),required:!0,type:"password",value:this.state.password})),r.createElement("div",null,r.createElement("div",{className:"text-right overflow-hidden"},r.createElement(m.a,{className:"spacer-right",loading:this.state.loading}),r.createElement(d.SubmitButton,{disabled:this.state.loading},Object(p.translate)("sessions.log_in")),r.createElement("a",{className:"spacer-left",href:Object(a.getBaseUrl)()+"/"},Object(p.translate)("cancel")))))},t}(r.PureComponent),v=n(660),b=n(672),y=n.n(b),x=n(2109),w=n.n(x);n(2112);function E(e){var t=e.formatLabel||O;return r.createElement("section",{className:v("oauth-providers",e.className)},r.createElement("ul",null,e.identityProviders.map((function(n){return r.createElement(_,{format:t,identityProvider:n,key:n.key,returnTo:e.returnTo})}))))}function _(e){var t=e.format,n=e.identityProvider,o=e.returnTo;return r.createElement("li",null,r.createElement(w.a,{backgroundColor:n.backgroundColor,iconPath:n.iconPath,name:n.name,url:Object(a.getBaseUrl)()+"/sessions/init/"+n.key+"?return_to="+encodeURIComponent(o)},r.createElement("span",null,t(n.name))),n.helpMessage&&r.createElement(y.a,{className:"oauth-providers-help",overlay:n.helpMessage}))}function O(e){return Object(p.translateWithParameters)("login.login_with_x",e)}var k=Object(i.b)((function(e){return{authorizationError:e.appState.authorizationError,authenticationError:e.appState.authenticationError}}))((function(e){var t=e.authorizationError,n=e.authenticationError,o=e.identityProviders,i=e.returnTo,a=t||n;return r.createElement("div",{className:"login-page",id:"login_form"},r.createElement("h1",{className:"login-title text-center huge-spacer-bottom"},Object(p.translate)("login.login_to_sonarqube")),a&&r.createElement(c.Alert,{className:"huge-spacer-bottom",display:"block",variant:"error"},Object(p.translate)("login.unauthorized_access_alert")),o.length>0&&r.createElement(E,{identityProviders:o,returnTo:i}),r.createElement(f,{collapsed:o.length>0,onSubmit:e.onSubmit,returnTo:i}),r.createElement(u.a,null))})),j=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t.handleSuccessfulLogin=function(){window.location.href=Object(a.getReturnUrl)(t.props.location)},t.handleSubmit=function(e,n){return t.props.doLogin(e,n).then(t.handleSuccessfulLogin,(function(){}))},t}return j(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,Object(l.d)().then((function(t){var n=t.identityProviders;e.mounted&&e.setState({identityProviders:n})}),(function(){}))},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.location,t=this.state.identityProviders;return t?r.createElement(k,{identityProviders:t,onSubmit:this.handleSubmit,returnTo:Object(a.getReturnUrl)(e)}):null},t}(r.PureComponent),S={doLogin:s.a};t.default=Object(i.b)(null,S)(P)},672:function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(660),a=n(13),l=n(721),s=n(687);n(688);var c=n(666);function p(e){var t=e.size,n=void 0===t?12:t,o=r(e,["size"]);return a.createElement("div",{className:i("help-tooltip",o.className)},a.createElement(c.default,{mouseLeaveDelay:.25,onShow:o.onShow,overlay:o.overlay,placement:o.placement},a.createElement("span",{className:"display-inline-flex-center"},o.children||a.createElement(s.ThemeConsumer,null,(function(e){return a.createElement(l.default,{fill:e.colors.gray71,size:n})})))))}t.default=p,t.DarkHelpTooltip=function(e){var t=e.size,n=void 0===t?12:t,i=r(e,["size"]);return a.createElement(p,o({},i),a.createElement(s.ThemeConsumer,null,(function(e){var t=e.colors;return a.createElement(l.default,{fill:t.transparentBlack,fillInner:t.white,size:n})})))}},688:function(e,t,n){var o=n(662),r=n(689);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},689:function(e,t,n){(t=n(663)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t}}]);
//# sourceMappingURL=309.1615388947784.chunk.js.map