(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{2174:function(e,n,a){"use strict";a.r(n),a.d(n,"EmptyOverview",(function(){return g}));var t=a(13),r=a(668),i=a(674),c=a(671),s=a(176),l=a(1498),o=a(677),b=a(698),m=a(675),u=a(684);function g(e){var n=e.branchLike,a=e.branchLikes,i=e.component,m=e.currentUser,g=e.hasAnalyses;if(i.qualifier===u.a.Application)return t.createElement("div",{className:"page page-limited"},t.createElement(c.Alert,{variant:"warning"},Object(s.translate)("provisioning.no_analysis.application")));if(!Object(o.f)(n))return null;var p,_=a.length>1,v=a.length>2||2===a.length&&a.some((function(e){return Object(o.f)(e)})),d=Object(o.g)(n)&&_,h=Object(o.g)(n)&&!_&&!g;return p=Object(b.b)(m)&&d&&v?t.createElement(r.FormattedMessage,{defaultMessage:Object(s.translate)("provisioning.no_analysis_on_main_branch.bad_configuration"),id:"provisioning.no_analysis_on_main_branch.bad_configuration",values:{branchName:Object(o.b)(n),branchType:Object(s.translate)("branches.main_branch")}}):t.createElement(r.FormattedMessage,{defaultMessage:Object(s.translate)("provisioning.no_analysis_on_main_branch"),id:"provisioning.no_analysis_on_main_branch",values:{branchName:Object(o.b)(n)}}),t.createElement("div",{className:"page page-limited"},Object(b.b)(m)?t.createElement(t.Fragment,null,d&&t.createElement(c.Alert,{variant:"warning"},p),h&&t.createElement(l.a,{component:i,currentUser:m})):t.createElement(c.Alert,{variant:"warning"},p))}n.default=Object(i.b)((function(e){return{currentUser:Object(m.getCurrentUser)(e)}}))(g)}}]);
//# sourceMappingURL=364.1615388947784.chunk.js.map