(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(5),s=a.n(o),i=(a(15),a(6)),r=a(7),d=a(8),b=a(10),l=a(9),u=a(0),j=function(e){var t=e.title,a=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),a]})},h=a(4),p=a.n(h),O=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(u.jsx)("div",{className:p.a.opptions,children:t.map((function(e){return Object(u.jsx)("button",{className:p.a.button,type:"button","data-feedbak":e,onClick:a,kay:e,children:e})}))})},k=a(2),v=a.n(k);function f(e){var t=e.message;return Object(u.jsx)("p",{children:t})}var x=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,o=e.positiveFeedbackPercentage;return Object(u.jsx)(u.Fragment,{children:c?Object(u.jsxs)("ul",{className:v.a.box,children:[Object(u.jsxs)("li",{className:v.a.options,children:[" Good:",t," "]}),Object(u.jsxs)("li",{className:v.a.options,children:[" Neutral:",a," "]}),Object(u.jsxs)("li",{className:v.a.options,children:[" Bad:",n," "]}),Object(u.jsxs)("li",{className:v.a.options,children:[" Total:",c," "]}),Object(u.jsxs)("li",{className:v.a.options,children:["Positive feedback: ",o,"%"]})]}):Object(u.jsx)(f,{message:"No feedback given"})})},g=["good","bad","neutral"],m=function(e){Object(b.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state,a=t.good,n=t.neutral;return a+t.bad+n},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),a=e.state.good;return t?Math.round(a/t*100):0},e.handleFeedback=function(t){var a=t.target.dataset.feedback;e.setState((function(e){return Object(i.a)({},a,e[a]+1)}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{title:"Please leve feedback",children:Object(u.jsx)(O,{options:g,onLeaveFeedback:this.handleFeedback})}),Object(u.jsx)(j,{title:"Statistics",children:Object(u.jsx)(x,{good:t,neutral:a,bad:n,total:c,positiveFeedbackPercentage:o})})]})}}]),a}(n.Component);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))},2:function(e,t,a){},4:function(e,t,a){e.exports={options:"FeedbackOptions_options__27Pox",button:"FeedbackOptions_button__2cqG3"}}},[[17,1,2]]]);
//# sourceMappingURL=main.0249f48c.chunk.js.map