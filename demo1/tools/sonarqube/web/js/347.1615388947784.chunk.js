(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{1306:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(13),r=n(692),i=n.n(r),a=n(761);function c(e){var t=e.component,n=e.limited,r=t.name,c=void 0===r?"—":r;return o.createElement(o.Fragment,null,t.qualifier&&o.createElement(i.a,{className:"little-spacer-right",qualifier:t.qualifier}),n?Object(a.collapsePath)(c,15):c)}},1309:function(e,t,n){"use strict";var o,r=n(13),i=n(1094),a=n(661),c=n(1105),s=n.n(c),p=n(1310),l=n.n(p),u=n(1311),m=n.n(u),h=n(1312),f=n.n(h),d=n(176),w=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleDrag=function(e,n){t.props.onResize(n.deltaY)},t}return w(t,e),t.prototype.render=function(){return r.createElement("header",{className:"workspace-viewer-header"},r.createElement("h6",{className:"workspace-viewer-name"},this.props.children),r.createElement(i.DraggableCore,{offsetParent:document.body,onDrag:this.handleDrag},r.createElement("div",{className:"workspace-viewer-resize js-resize"})),r.createElement("div",{className:"workspace-viewer-actions"},r.createElement(y,{icon:f.a,onClick:this.props.onCollapse,tooltip:"workspace.minimize"}),this.props.maximized?r.createElement(y,{icon:l.a,onClick:this.props.onMinimize,tooltip:"workspace.normal_size"}):r.createElement(y,{icon:m.a,onClick:this.props.onMaximize,tooltip:"workspace.full_window"}),r.createElement(y,{icon:s.a,onClick:this.props.onClose,tooltip:"workspace.close"})))},t}(r.PureComponent);function y(e){var t=e.icon,n=e.onClick,o=e.tooltip;return r.createElement(a.ButtonIcon,{className:"workspace-header-icon",color:"#fff",onClick:n,tooltip:Object(d.translate)(o)},r.createElement(t,{fill:void 0}))}t.a=k},2170:function(e,t,n){"use strict";n.r(t),n.d(t,"WorkspaceComponentViewer",(function(){return w}));var o,r=n(724),i=n.n(r),a=n(13),c=n(674),s=n(778),p=n(718),l=n(677),u=n(846),m=n(944),h=n(1306),f=n(1309),d=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),w=function(e){function t(t){var n=e.call(this,t)||this;return n.handleClose=function(){n.props.onClose(n.props.component.key)},n.handleIssueChange=function(e){n.refreshBranchStatus()},n.handleLoaded=function(e){if(n.props.onLoad({key:n.props.component.key,name:e.path,qualifier:e.q}),n.container&&n.props.component.line){var t=n.container.querySelector('.source-line[data-line-number="'+n.props.component.line+'"]');t&&Object(s.scrollToElement)(t,{smooth:!1,parent:n.container,topOffset:50,bottomOffset:50})}},n.refreshBranchStatus=function(){var e=n.props.component,t=e.branchLike;t&&Object(l.h)(t)&&Object(p.t)(e.key).then((function(e){e&&e.length>0&&n.props.fetchBranchStatus(t,e.pop().key)}),(function(){}))},n.refreshBranchStatus=i()(n.refreshBranchStatus,1e3),n}return d(t,e),t.prototype.componentDidMount=function(){document.documentElement&&document.documentElement.classList.add("with-workspace")},t.prototype.componentWillUnmount=function(){document.documentElement&&document.documentElement.classList.remove("with-workspace")},t.prototype.render=function(){var e=this,t=this.props.component;return a.createElement("div",{className:"workspace-viewer"},a.createElement(f.a,{maximized:this.props.maximized,onClose:this.handleClose,onCollapse:this.props.onCollapse,onMaximize:this.props.onMaximize,onMinimize:this.props.onMinimize,onResize:this.props.onResize},a.createElement(h.a,{component:t})),a.createElement("div",{className:"workspace-viewer-container",ref:function(t){return e.container=t},style:{height:this.props.height}},a.createElement(m.a,{aroundLine:t.line,branchLike:t.branchLike,component:t.key,highlightedLine:t.line,onIssueChange:this.handleIssueChange,onLoaded:this.handleLoaded})))},t}(a.PureComponent),k={fetchBranchStatus:u.c};t.default=Object(c.b)(null,k)(w)},944:function(e,t,n){"use strict";var o=n(681),r=Object(o.lazyLoadComponent)((function(){return Promise.all([n.e(1),n.e(2),n.e(5),n.e(9),n.e(279)]).then(n.bind(null,1150))}),"SourceViewer");t.a=r}},0,[1,2,5,9,279]]);
//# sourceMappingURL=347.1615388947784.chunk.js.map