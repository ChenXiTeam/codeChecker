(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{1041:function(e,t,n){var o=n(662),r=n(1042);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},l=(o(r,a),r.locals?r.locals:{});e.exports=l},1042:function(e,t,n){(t=n(663)(!1)).push([e.i,".code-snippet{background:#e6e6e6;border-radius:3px}.code-snippet pre{padding:8px 16px;border-right:1px solid hsla(0,0%,78.4%,.5);overflow-y:hidden;overflow-x:auto}.code-snippet>button{height:auto;border:0;border-radius:0;background:transparent;padding:8px}.code-snippet>button:active,.code-snippet>button:focus,.code-snippet>button:hover{background-color:hsla(0,0%,78.4%,.5);color:#236a97}",""]),e.exports=t},2192:function(e,t,n){"use strict";n.r(t);var o=n(13),r=n(683),a=n(176),l=n(49),s=n(673);function c(e){return Object(l.postJSON)("/api/webhooks/create",e).catch(s.a)}function i(e){return Object(l.post)("/api/webhooks/delete",e).catch(s.a)}function u(e){return Object(l.getJSON)("/api/webhooks/list",e).catch(s.a)}function p(e){return Object(l.post)("/api/webhooks/update",e).catch(s.a)}function d(e){return Object(l.getJSON)("/api/webhooks/deliveries",e).catch(s.a)}function h(e){return Object(l.getJSON)("/api/webhooks/delivery",e).catch(s.a)}var m,f=n(686),b=n(661),y=n(666),v=n.n(y),g=n(2125),k=n.n(g),w=n(2127),O=n.n(w),E=n(779),_=(m=function(e,t){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}m(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleCancelClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClose()},t.handleValidate=function(e){var t=e.name,n=e.secret,o=e.url,r={};return t.trim()||(r.name=Object(a.translate)("webhooks.name.required")),o.trim()?o.startsWith("http://")||o.startsWith("https://")?Object(E.isWebUri)(o)||(r.url=Object(a.translate)("webhooks.url.bad_format")):r.url=Object(a.translate)("webhooks.url.bad_protocol"):r.url=Object(a.translate)("webhooks.url.required"),n&&n.length>200&&(r.secret=Object(a.translate)("webhooks.secret.bad_format")),r},t}return _(t,e),t.prototype.render=function(){var e=this.props.webhook,t=!!e,n=t?Object(a.translate)("webhooks.update"):Object(a.translate)("webhooks.create"),r=t?Object(a.translate)("update_verb"):Object(a.translate)("create");return o.createElement(O.a,{confirmButtonText:r,header:n,initialValues:{name:e&&e.name||"",secret:e&&e.secret||"",url:e&&e.url||""},isInitialValid:t,onClose:this.props.onClose,onSubmit:this.props.onDone,size:"small",validate:this.handleValidate},(function(e){var t=e.dirty,n=e.errors,r=e.handleBlur,l=e.handleChange,s=e.isSubmitting,c=e.touched,i=e.values;return o.createElement(o.Fragment,null,o.createElement(k.a,{autoFocus:!0,dirty:t,disabled:s,error:n.name,id:"webhook-name",label:o.createElement("label",{htmlFor:"webhook-name"},Object(a.translate)("webhooks.name"),o.createElement("em",{className:"mandatory"},"*")),name:"name",onBlur:r,onChange:l,touched:c.name,type:"text",value:i.name}),o.createElement(k.a,{description:Object(a.translate)("webhooks.url.description"),dirty:t,disabled:s,error:n.url,id:"webhook-url",label:o.createElement("label",{htmlFor:"webhook-url"},Object(a.translate)("webhooks.url"),o.createElement("em",{className:"mandatory"},"*")),name:"url",onBlur:r,onChange:l,touched:c.url,type:"text",value:i.url}),o.createElement(k.a,{description:Object(a.translate)("webhooks.secret.description"),dirty:t,disabled:s,error:n.secret,id:"webhook-secret",label:o.createElement("label",{htmlFor:"webhook-secret"},Object(a.translate)("webhooks.secret")),name:"secret",onBlur:r,onChange:l,touched:c.secret,type:"password",value:i.secret}))}))},t}(o.PureComponent),C=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={openCreate:!1},t.handleCreateClose=function(){t.mounted&&t.setState({openCreate:!1})},t.handleCreateOpen=function(){t.setState({openCreate:!0})},t.renderCreate=function(){return t.props.webhooksCount>=10?o.createElement(v.a,{overlay:Object(a.translateWithParameters)("webhooks.maximum_reached",10)},o.createElement(b.Button,{className:"js-webhook-create disabled"},Object(a.translate)("create"))):o.createElement(o.Fragment,null,o.createElement(b.Button,{className:"js-webhook-create",onClick:t.handleCreateOpen},Object(a.translate)("create")),t.state.openCreate&&o.createElement(j,{onClose:t.handleCreateClose,onDone:t.props.onCreate}))},t}return C(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return this.props.loading?null:o.createElement("div",{className:"page-actions"},this.renderCreate())},t}(o.PureComponent),N=n(668),P=n(665);function D(e){var t=e.children,n=e.loading;return o.createElement("header",{className:"page-header"},o.createElement("h1",{className:"page-title"},Object(a.translate)("webhooks.page")),n&&o.createElement("i",{className:"spinner"}),t,o.createElement("p",{className:"page-description"},o.createElement(N.FormattedMessage,{defaultMessage:Object(a.translate)("webhooks.description"),id:"webhooks.description",values:{url:o.createElement(P.c,{to:"/documentation/project-administration/webhooks/"},Object(a.translate)("webhooks.documentation_link"))}})))}var x=n(680),U=n.n(x),M=n(736),W=n.n(M),A=n(679),B=n.n(A),J=n(667),L=n.n(J);function F(e){var t=e.onClose,n=e.onSubmit,r=e.webhook,l=Object(a.translate)("webhooks.delete");return o.createElement(B.a,{header:l,onClose:t,onSubmit:n},(function(e){var t=e.onCloseClick,n=e.onFormSubmit,s=e.submitting;return o.createElement("form",{onSubmit:n},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,l)),o.createElement("div",{className:"modal-body"},Object(a.translateWithParameters)("webhooks.delete.confirm",r.name)),o.createElement("footer",{className:"modal-foot"},o.createElement(L.a,{className:"spacer-right",loading:s}),o.createElement(b.SubmitButton,{className:"button-red",disabled:s},Object(a.translate)("delete")),o.createElement(b.ResetButtonLink,{disabled:s,onClick:t},Object(a.translate)("cancel"))))}))}var I=n(696),R=n.n(I),V=n(678),q=n.n(V),H=n(943),z=n.n(H),T=n(814),G=n.n(T),K=n(791),Q=n.n(K),X=n(713),Y=n.n(X),Z=n(669),$=n(780);function ee(e){var t=e.className,n=e.delivery,r=e.loading,l=e.payload;return o.createElement("div",{className:t},o.createElement("p",{className:"spacer-bottom"},Object(a.translateWithParameters)("webhooks.delivery.response_x",n.httpStatus||Object(a.translate)("webhooks.delivery.server_unreachable"))),o.createElement("p",{className:"spacer-bottom"},Object(a.translateWithParameters)("webhooks.delivery.duration_x",Object(Z.formatMeasure)(n.durationMs,"MILLISEC"))),o.createElement("p",{className:"spacer-bottom"},Object(a.translate)("webhooks.delivery.payload")),o.createElement(L.a,{className:"spacer-left spacer-top",loading:r},l&&o.createElement($.a,{noCopy:!0,snippet:te(l)})))}function te(e){try{return JSON.stringify(JSON.parse(e),void 0,2)}catch(t){return e}}var ne=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),oe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,open:!1},t.fetchPayload=function(e){var n=(void 0===e?t.props:e).delivery;return t.setState({loading:!0}),h({deliveryId:n.id}).then((function(e){var n=e.delivery;t.mounted&&t.setState({payload:n.payload,loading:!1})}),(function(){t.mounted&&t.setState({loading:!1})}))},t.formatPayload=function(e){try{return JSON.stringify(JSON.parse(e),void 0,2)}catch(t){return e}},t.handleClick=function(){t.state.payload||t.fetchPayload(),t.setState((function(e){return{open:!e.open}}))},t}return ne(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.delivery,t=this.state,n=t.loading,r=t.open,a=t.payload;return o.createElement(z.a,{onClick:this.handleClick,open:r,renderHeader:function(){return e.success?o.createElement(Q.a,{className:"pull-right js-success"}):o.createElement(G.a,{className:"pull-right js-error"})},title:o.createElement(Y.a,{date:e.at})},o.createElement(ee,{className:"big-spacer-left",delivery:e,loading:n,payload:a}))},t}(o.PureComponent),re=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ae=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var a=arguments[t],l=0,s=a.length;l<s;l++,r++)o[r]=a[l];return o},le=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={deliveries:[],loading:!0},t.fetchDeliveries=function(e){d({webhook:(void 0===e?t.props:e).webhook.key,ps:10}).then((function(e){var n=e.deliveries,o=e.paging;t.mounted&&t.setState({deliveries:n,loading:!1,paging:o})}),t.stopLoading)},t.fetchMoreDeliveries=function(e){var n=(void 0===e?t.props:e).webhook,o=t.state.paging;o&&(t.setState({loading:!0}),d({webhook:n.key,p:o.pageIndex+1,ps:10}).then((function(e){var n=e.deliveries,o=e.paging;t.mounted&&t.setState((function(e){return{deliveries:ae(e.deliveries,n),loading:!1,paging:o}}))}),t.stopLoading))},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t}return re(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchDeliveries()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.webhook,t=this.state,n=t.deliveries,r=t.loading,l=t.paging,s=Object(a.translateWithParameters)("webhooks.deliveries_for_x",e.name);return o.createElement(q.a,{contentLabel:s,onRequestClose:this.props.onClose},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,s)),o.createElement("div",{className:"modal-body modal-container"},n.map((function(e){return o.createElement(oe,{delivery:e,key:e.id})})),o.createElement("div",{className:"text-center"},o.createElement(L.a,{loading:r})),void 0!==l&&o.createElement(R.a,{className:"little-spacer-bottom",count:n.length,loadMore:this.fetchMoreDeliveries,ready:!r,total:l.total})),o.createElement("footer",{className:"modal-foot"},o.createElement(b.ResetButtonLink,{className:"js-modal-close",onClick:this.props.onClose},Object(a.translate)("close"))))},t}(o.PureComponent),se=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ce=function(){return(ce=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},ie=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={deleting:!1,deliveries:!1,updating:!1},t.handleDelete=function(){return t.props.onDelete(t.props.webhook.key)},t.handleDeleteClick=function(){t.setState({deleting:!0})},t.handleDeletingStop=function(){t.mounted&&t.setState({deleting:!1})},t.handleDeliveriesClick=function(){t.setState({deliveries:!0})},t.handleDeliveriesStop=function(){t.setState({deliveries:!1})},t.handleUpdate=function(e){return t.props.onUpdate(ce(ce({},e),{webhook:t.props.webhook.key}))},t.handleUpdateClick=function(){t.setState({updating:!0})},t.handleUpdatingStop=function(){t.setState({updating:!1})},t}return se(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.webhook;return o.createElement(o.Fragment,null,o.createElement(W.a,{className:"big-spacer-left"},o.createElement(M.ActionsDropdownItem,{className:"js-webhook-update",onClick:this.handleUpdateClick},Object(a.translate)("update_verb")),e.latestDelivery&&o.createElement(M.ActionsDropdownItem,{className:"js-webhook-deliveries",onClick:this.handleDeliveriesClick},Object(a.translate)("webhooks.deliveries.show")),o.createElement(M.ActionsDropdownDivider,null),o.createElement(M.ActionsDropdownItem,{className:"js-webhook-delete",destructive:!0,onClick:this.handleDeleteClick},Object(a.translate)("delete"))),this.state.deliveries&&o.createElement(le,{onClose:this.handleDeliveriesStop,webhook:e}),this.state.updating&&o.createElement(j,{onClose:this.handleUpdatingStop,onDone:this.handleUpdate,webhook:e}),this.state.deleting&&o.createElement(F,{onClose:this.handleDeletingStop,onSubmit:this.handleDelete,webhook:e}))},t}(o.PureComponent),ue=n(966),pe=n.n(ue),de=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),he=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.fetchPayload=function(e){return h({deliveryId:(void 0===e?t.props:e).delivery.id}).then((function(e){var n=e.delivery;t.mounted&&t.setState({payload:n.payload,loading:!1})}),(function(){t.mounted&&t.setState({loading:!1})}))},t.formatPayload=function(e){try{return JSON.stringify(JSON.parse(e),void 0,2)}catch(t){return e}},t}return de(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchPayload()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.delivery,n=e.webhook,r=this.state,l=r.loading,s=r.payload,c=Object(a.translateWithParameters)("webhooks.latest_delivery_for_x",n.name);return o.createElement(q.a,{contentLabel:c,onRequestClose:this.props.onClose},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,c)),o.createElement(ee,{className:"modal-body modal-container",delivery:t,loading:l,payload:s}),o.createElement("footer",{className:"modal-foot"},o.createElement(b.ResetButtonLink,{className:"js-modal-close",onClick:this.props.onClose},Object(a.translate)("close"))))},t}(o.PureComponent),me=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),fe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleClick=function(){t.setState({modal:!0})},t.handleModalClose=function(){t.mounted&&t.setState({modal:!1})},t}return me(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.webhook;if(!e.latestDelivery)return o.createElement("span",null,Object(a.translate)("webhooks.last_execution.none"));var t=this.state.modal;return o.createElement(o.Fragment,null,e.latestDelivery.success?o.createElement(Q.a,{className:"text-text-top"}):o.createElement(G.a,{className:"text-text-top"}),o.createElement("span",{className:"spacer-left display-inline-flex-center"},o.createElement(Y.a,{date:e.latestDelivery.at}),o.createElement(b.ButtonIcon,{className:"button-small little-spacer-left",onClick:this.handleClick},o.createElement(pe.a,null))),t&&o.createElement(he,{delivery:e.latestDelivery,onClose:this.handleModalClose,webhook:e}))},t}(o.PureComponent);function be(e){var t=e.onDelete,n=e.onUpdate,r=e.webhook;return o.createElement("tr",null,o.createElement("td",null,r.name),o.createElement("td",null,r.url),o.createElement("td",null,r.secret?Object(a.translate)("yes"):Object(a.translate)("no")),o.createElement("td",null,o.createElement(fe,{webhook:r})),o.createElement("td",{className:"thin nowrap text-right"},o.createElement(ie,{onDelete:t,onUpdate:n,webhook:r})))}var ye=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ve=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderHeader=function(){return o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,Object(a.translate)("name")),o.createElement("th",null,Object(a.translate)("webhooks.url")),o.createElement("th",null,Object(a.translate)("webhooks.secret_header")),o.createElement("th",null,Object(a.translate)("webhooks.last_execution")),o.createElement("th",null)))},t}return ye(t,e),t.prototype.render=function(){var e=this,t=this.props.webhooks;return t.length<1?o.createElement("p",null,Object(a.translate)("webhooks.no_result")):o.createElement("table",{className:"data zebra"},this.renderHeader(),o.createElement("tbody",null,U()(t,(function(e){return e.name.toLowerCase()})).map((function(t){return o.createElement(be,{key:t.key,onDelete:e.props.onDelete,onUpdate:e.props.onUpdate,webhook:t})}))))},t}(o.PureComponent),ge=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ke=function(){return(ke=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},we=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var a=arguments[t],l=0,s=a.length;l<s;l++,r++)o[r]=a[l];return o},Oe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0,webhooks:[]},t.fetchWebhooks=function(){return u(t.getScopeParams()).then((function(e){var n=e.webhooks;t.mounted&&t.setState({loading:!1,webhooks:n})}),(function(){t.mounted&&t.setState({loading:!1})}))},t.getScopeParams=function(e){var n=(void 0===e?t.props:e).component;return{project:n&&n.key}},t.handleCreate=function(e){return c(ke(ke({name:e.name,url:e.url},e.secret&&{secret:e.secret}),t.getScopeParams())).then((function(e){var n=e.webhook;t.mounted&&t.setState((function(e){var t=e.webhooks;return{webhooks:we(t,[n])}}))}))},t.handleDelete=function(e){return i({webhook:e}).then((function(){t.mounted&&t.setState((function(t){return{webhooks:t.webhooks.filter((function(t){return t.key!==e}))}}))}))},t.handleUpdate=function(e){return p(ke({webhook:e.webhook,name:e.name,url:e.url},e.secret&&{secret:e.secret})).then((function(){t.mounted&&t.setState((function(t){return{webhooks:t.webhooks.map((function(t){return t.key===e.webhook?ke(ke({},t),{name:e.name,secret:e.secret,url:e.url}):t}))}}))}))},t}return ge(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchWebhooks()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.state,t=e.loading,n=e.webhooks;return o.createElement(o.Fragment,null,o.createElement(f.a,{suggestions:"webhooks"}),o.createElement(r.a,{defer:!1,title:Object(a.translate)("webhooks.page")}),o.createElement("div",{className:"page page-limited"},o.createElement(D,{loading:t},o.createElement(S,{loading:t,onCreate:this.handleCreate,webhooksCount:n.length})),!t&&o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement(ve,{onDelete:this.handleDelete,onUpdate:this.handleUpdate,webhooks:n}))))},t}(o.PureComponent);t.default=Oe},686:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o,r=n(13),a=n(720),l=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function s(e){var t=e.suggestions;return r.createElement(a.a.Consumer,null,(function(e){var n=e.addSuggestions,o=e.removeSuggestions;return r.createElement(c,{addSuggestions:n,removeSuggestions:o,suggestions:t})}))}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(r.PureComponent)},780:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(660),r=n(13),a=n(715),l=n(742);n(1041);function s(e){var t,n=e.isOneLine,s=e.noCopy,c=e.snippet,i=r.useRef(null);return t=Array.isArray(c)?c.filter((function(e){return Object(l.isDefined)(e)})).join(n?" ":" \\\n  "):c,r.createElement("div",{className:o("code-snippet spacer-top spacer-bottom display-flex-row",{})},r.createElement("pre",{className:"flex-1",ref:i},t),!s&&r.createElement(a.ClipboardButton,{copyValue:t}))}}}]);
//# sourceMappingURL=340.1615388947784.chunk.js.map