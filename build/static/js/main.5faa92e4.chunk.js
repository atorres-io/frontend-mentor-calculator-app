(this["webpackJsonpfrontend-mentor-calculator-app"]=this["webpackJsonpfrontend-mentor-calculator-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(8),c=n.n(o),u=(n(14),n(2)),s=n(3),i=n(5),l=n(4),p=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("colorScheme");return null!==t?t:e?"dark":"neutral"},_=function(e){var t;document.documentElement.setAttribute("data-theme",e),t=e,localStorage.setItem("colorScheme",t)},d=n(0),b=["neutral","light","dark"],h=["#3a4764","#e6e6e6","#160628"],m=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).meta=document.querySelector('meta[name="theme-color"]'),e.state={colorScheme:"neutral"},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=p();this.setState({colorScheme:e},_(e))}},{key:"handleColorScheme",value:function(e){var t=e.target.value,n=b[t-1],a=h[t-1];this.setState({colorScheme:n},_(n)),this.meta.setAttribute("content",a)}},{key:"render",value:function(){return Object(d.jsx)("input",{type:"range",min:"1",max:"3",step:"1",value:b.indexOf(this.state.colorScheme)+1,onChange:this.handleColorScheme.bind(this)})}}]),n}(r.a.Component),v=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("section",{className:"wrapper-header",children:[Object(d.jsx)("h1",{className:"logotype",children:"calc"}),Object(d.jsx)(m,{})]})}}]),n}(r.a.Component),j=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("section",{className:"screen"})}}]),n}(r.a.Component),O=n(7),y=n(9),f=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).customAttribute={"data-code":a.props.code},a}return Object(s.a)(n,[{key:"bigButton",value:function(){return"reset"===this.props.type||"result"===this.props.type?"big":""}},{key:"pulse",value:function(e){var t=e.target.dataset.code;new y.a(t)}},{key:"render",value:function(){return Object(d.jsx)("div",Object(O.a)(Object(O.a)({className:"button ".concat(this.props.type," ").concat(this.bigButton()).trim(),onClick:this.pulse.bind(this)},this.customAttribute),{},{children:this.props.value}))}}]),n}(r.a.Component),k=[{type:"number",code:"7",value:"7"},{type:"number",code:"8",value:"8"},{type:"number",code:"9",value:"9"},{type:"delete",code:"del",value:"del"},{type:"number",code:"4",value:"4"},{type:"number",code:"5",value:"5"},{type:"number",code:"6",value:"6"},{type:"operation",code:"+",value:"+"},{type:"number",code:"1",value:"1"},{type:"number",code:"2",value:"2"},{type:"number",code:"3",value:"3"},{type:"operation",code:"-",value:"-"},{type:"number",code:".",value:"."},{type:"number",code:"0",value:"0"},{type:"operation",code:"/",value:"/"},{type:"operation",code:"*",value:"x"},{type:"reset",code:"C",value:"reset"},{type:"result",code:"=",value:"="}],C=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"keypad",children:k.map((function(e){var t=e.type,n=e.code,a=e.value;return Object(d.jsx)(f,{type:t,code:n,value:a},a)}))})}}]),n}(r.a.Component),x=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(C,{})]})}}]),n}(r.a.Component),S=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"calculator",children:[Object(d.jsx)(v,{}),Object(d.jsx)(x,{})]})}}]),n}(r.a.Component);var g=function(){return Object(d.jsx)(S,{})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),M()},9:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_atorres_Documents_FrontendMentor_frontend_mentor_calculator_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_home_atorres_Documents_FrontendMentor_frontend_mentor_calculator_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),OperationsService=function(){function OperationsService(e){Object(_home_atorres_Documents_FrontendMentor_frontend_mentor_calculator_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,OperationsService),this.operator=e,this.display=document.querySelector(".screen"),this.operation()}return Object(_home_atorres_Documents_FrontendMentor_frontend_mentor_calculator_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(OperationsService,[{key:"operation",value:function(){switch(this.operator){case"=":this.result();break;case"del":this.delete();break;case"C":this.reset();break;default:this.default()}}},{key:"result",value:function result(){""!==this.display.textContent&&(this.display.textContent=eval(this.display.textContent))}},{key:"delete",value:function(){this.display.textContent=this.display.textContent.slice(0,-1)}},{key:"reset",value:function(){this.display.textContent=""}},{key:"default",value:function(){this.display.textContent+=this.operator}}]),OperationsService}();__webpack_exports__.a=OperationsService}},[[16,1,2]]]);
//# sourceMappingURL=main.5faa92e4.chunk.js.map