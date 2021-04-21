(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(660),a=n(13),o=n(666),i=n.n(o),l=n(176);function s(e){var t=e.className;return a.createElement(i.a,{overlay:Object(l.translate)("quality_gates.built_in.help")},a.createElement("div",{className:r("badge",t)},Object(l.translate)("quality_gates.built_in")))}},2220:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(176),o=n(833),i=n(775),l=n(972),s=n(683),c=n(661),u=n(672),p=n.n(u),d=n(738),f=n.n(d),h=n(693),m=n.n(h),y=n(671),b=n(710),v=n(686),g=n(1142);function _(e){var t=e.allQualityGates,n=e.currentQualityGate,o=e.loading,i=e.selectedQualityGateId,l=e.submitting,u=null==t?void 0:t.find((function(e){return e.isDefault}));if(o)return r.createElement("i",{className:"spinner"});if(void 0===t||void 0===u||void 0===n)return null;var d="-1"===i,h=d?u.id!==n.id:i!==n.id,_=t.map((function(e){return{label:e.name,value:e.id}}));return r.createElement("div",{className:"page page-limited",id:"project-quality-gate"},r.createElement(v.a,{suggestions:"project_quality_gate"}),r.createElement(s.a,{defer:!1,title:Object(a.translate)("project_quality_gate.page")}),r.createElement(b.a,{anchor:"qg_main"}),r.createElement("header",{className:"page-header"},r.createElement("div",{className:"page-title display-flex-center"},r.createElement("h1",null,Object(a.translate)("project_quality_gate.page")),r.createElement(p.a,{className:"spacer-left",overlay:r.createElement("div",{className:"big-padded-top big-padded-bottom"},Object(a.translate)("quality_gates.projects.help"))}))),r.createElement("div",{className:"boxed-group"},r.createElement("h2",{className:"boxed-group-header"},Object(a.translate)("project_quality_gate.subtitle")),r.createElement("form",{className:"boxed-group-inner",onSubmit:function(t){t.preventDefault(),e.onSubmit()}},r.createElement("p",{className:"big-spacer-bottom"},Object(a.translate)("project_quality_gate.page.description")),r.createElement("div",{className:"big-spacer-bottom"},r.createElement(f.a,{className:"display-flex-start",checked:d,disabled:l,onCheck:function(){return e.onSelect("-1")},value:"-1"},r.createElement("div",{className:"spacer-left"},r.createElement("div",{className:"little-spacer-bottom"},Object(a.translate)("project_quality_gate.always_use_default")),r.createElement("div",{className:"display-flex-center"},r.createElement("span",{className:"text-muted little-spacer-right"},Object(a.translate)("current_noun"),":"),u.name,u.isBuiltIn&&r.createElement(g.a,{className:"spacer-left"}))))),r.createElement("div",{className:"big-spacer-bottom"},r.createElement(f.a,{className:"display-flex-start",checked:!d,disabled:l,onCheck:function(t){return e.onSelect(t)},value:d?n.id:i},r.createElement("div",{className:"spacer-left"},r.createElement("div",{className:"little-spacer-bottom"},Object(a.translate)("project_quality_gate.always_use_specific")),r.createElement("div",{className:"display-flex-center"},r.createElement(m.a,{className:"abs-width-300",clearable:!1,disabled:l||d,onChange:function(t){var n=t.value;return e.onSelect(n)},options:_,optionRenderer:function(e){return r.createElement("span",null,e.label)},value:i})))),h&&r.createElement(y.Alert,{className:"big-spacer-top",variant:"warning"},Object(a.translate)("project_quality_gate.requires_new_analysis"))),r.createElement("div",null,r.createElement(c.SubmitButton,{disabled:l},Object(a.translate)("save")),l&&r.createElement("i",{className:"spinner spacer-left"})))))}var k,O=(k=function(e,t){return(k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}k(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),j=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))},w=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0,selectedQualityGateId:"-1",submitting:!1},t.checkPermissions=function(){var e=t.props.component.configuration;return!!(e&&e.showQualityGates)},t.isUsingDefault=function(e){return j(t,void 0,void 0,(function(){var t;return w(this,(function(n){switch(n.label){case 0:return t=this.props.component,e.isDefault?[4,Object(o.n)({gateName:e.name,query:t.key}).then((function(e){var n,r=e.results;return Boolean(null===(n=r.find((function(e){return e.key===t.key})))||void 0===n?void 0:n.selected)})).catch((function(){return!1}))]:[2,!1];case 1:return[2,!n.sent()]}}))}))},t.fetchQualityGates=function(){return j(t,void 0,void 0,(function(){var e,t,n,r,a;return w(this,(function(i){switch(i.label){case 0:return e=this.props.component,this.setState({loading:!0}),[4,Promise.all([Object(o.i)().then((function(e){return e.qualitygates})),Object(o.k)({project:e.key})]).catch((function(){return[]}))];case 1:return t=i.sent(),n=t[0],r=t[1],n&&r?[4,this.isUsingDefault(r)]:[3,3];case 2:return a=i.sent(),this.mounted&&this.setState({allQualityGates:n,currentQualityGate:r,selectedQualityGateId:a?"-1":r.id,loading:!1}),[3,4];case 3:this.mounted&&this.setState({loading:!1}),i.label=4;case 4:return[2]}}))}))},t.handleSelect=function(e){t.setState({selectedQualityGateId:e})},t.handleSubmit=function(){return j(t,void 0,void 0,(function(){var e,t,n,r,l,s;return w(this,(function(c){switch(c.label){case 0:return e=this.props.component,t=this.state,n=t.allQualityGates,r=t.currentQualityGate,l=t.selectedQualityGateId,void 0===n||void 0===r?[2]:(this.setState({submitting:!0}),"-1"!==l?[3,2]:[4,Object(o.g)({gateId:r.id,projectKey:e.key}).catch((function(){}))]);case 1:return c.sent(),[3,4];case 2:return[4,Object(o.a)({gateId:l,projectKey:e.key}).catch((function(){}))];case 3:c.sent(),c.label=4;case 4:return this.mounted&&(Object(i.a)(Object(a.translate)("project_quality_gate.successfully_updated")),(s="-1"===l?n.find((function(e){return e.isDefault})):n.find((function(e){return e.id===l})))&&(this.setState({currentQualityGate:s,submitting:!1}),this.props.onComponentChange({qualityGate:s}))),[2]}}))}))},t}return O(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchQualityGates():Object(l.a)()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){if(!this.checkPermissions())return null;var e=this.state,t=e.allQualityGates,n=e.currentQualityGate,a=e.loading,o=e.selectedQualityGateId,i=e.submitting;return r.createElement(_,{allQualityGates:t,currentQualityGate:n,loading:a,onSubmit:this.handleSubmit,onSelect:this.handleSelect,selectedQualityGateId:o,submitting:i})},t}(r.PureComponent);t.default=E},672:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(660),i=n(13),l=n(721),s=n(687);n(688);var c=n(666);function u(e){var t=e.size,n=void 0===t?12:t,r=a(e,["size"]);return i.createElement("div",{className:o("help-tooltip",r.className)},i.createElement(c.default,{mouseLeaveDelay:.25,onShow:r.onShow,overlay:r.overlay,placement:r.placement},i.createElement("span",{className:"display-inline-flex-center"},r.children||i.createElement(s.ThemeConsumer,null,(function(e){return i.createElement(l.default,{fill:e.colors.gray71,size:n})})))))}t.default=u,t.DarkHelpTooltip=function(e){var t=e.size,n=void 0===t?12:t,o=a(e,["size"]);return i.createElement(u,r({},o),i.createElement(s.ThemeConsumer,null,(function(e){var t=e.colors;return i.createElement(l.default,{fill:t.transparentBlack,fillInner:t.white,size:n})})))}},686:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(13),o=n(720),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function l(e){var t=e.suggestions;return a.createElement(o.a.Consumer,null,(function(e){var n=e.addSuggestions,r=e.removeSuggestions;return a.createElement(s,{addSuggestions:n,removeSuggestions:r,suggestions:t})}))}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(a.PureComponent)},688:function(e,t,n){var r=n(662),a=n(689);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},689:function(e,t,n){(t=n(663)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t},710:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,a=n(13),o=n(176),i=n(771),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function c(e){return a.createElement(i.a.Consumer,null,(function(t){var n=t.addA11ySkipLink,r=t.removeA11ySkipLink;return a.createElement(u,s({addA11ySkipLink:n,removeA11ySkipLink:r},e))}))}var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getLink=function(){var e=t.props,n=e.anchor,r=e.label;return{key:n,label:void 0===r?Object(o.translate)("skip_to_content"):r,weight:e.weight}},t}return l(t,e),t.prototype.componentDidMount=function(){this.props.addA11ySkipLink(this.getLink())},t.prototype.componentWillUnmount=function(){this.props.removeA11ySkipLink(this.getLink())},t.prototype.render=function(){var e=this.props.anchor;return a.createElement("span",{id:"a11y_target__"+e})},t}(a.PureComponent)},738:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(660),i=n(13);n(744);var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),t.props.disabled||t.props.onCheck(t.props.value)},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.checked,r=e.children,a=e.disabled;return i.createElement("a",{"aria-checked":n,className:o("display-inline-flex-center link-radio",t,{disabled:a}),href:"#",onClick:this.handleClick,role:"radio"},i.createElement("i",{className:o("icon-radio","spacer-right",{"is-checked":n})}),r)},t}(i.PureComponent);t.default=l},744:function(e,t,n){var r=n(662),a=n(751);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},751:function(e,t,n){(t=n(663)(!1)).push([e.i,'.icon-radio{position:relative;display:inline-block;vertical-align:top;width:14px;height:14px;margin:1px;border:1px solid #cdcdcd;border-radius:12px;box-sizing:border-box;transition:border-color .3s ease;flex-shrink:0}.icon-radio:after{position:absolute;top:2px;left:2px;display:block;width:8px;height:8px;border-radius:8px;background-color:#236a97;content:"";opacity:0;transition:opacity .3s ease}.link-radio .icon-radio.is-checked:after{opacity:1}.link-radio{border-bottom:none}.link-radio,.link-radio:not(.disabled):active,.link-radio:not(.disabled):focus,.link-radio:not(.disabled):hover{color:inherit}.link-radio:not(.disabled):hover>.icon-radio{border-color:#4b9fd5}.link-radio.disabled,.link-radio.disabled:hover,.link-radio.disabled label{color:#bbb;cursor:not-allowed}.link-radio.disabled .icon-radio:after{background-color:#ebebeb}',""]),e.exports=t},775:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(754),a=n(753);function o(e){Object(a.default)().dispatch(r.b(e))}},972:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(181),a=n.n(r),o=n(901),i=n(753);function l(){var e=Object(i.default)(),t=a()(),n=window.location.pathname+window.location.search+window.location.hash;e.dispatch(Object(o.c)()),t.replace({pathname:"/sessions/new",query:{return_to:n}})}}}]);
//# sourceMappingURL=312.1615388947784.chunk.js.map