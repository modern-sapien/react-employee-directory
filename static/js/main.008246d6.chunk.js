(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{43:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(2),l=c.n(s),r=c(17),n=c.n(r),i=c(8),o=c.n(i),d=c(18),j=c(3),h=c(4),b=c(6),m=c(5),u=function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"bg-dark",children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12 text-center",children:Object(a.jsx)("h1",{className:"my-3 text-white",children:"Employee Directory"})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12 text-center",children:Object(a.jsx)("p",{className:"font-weight-bolder text-white",children:"Click on carrots to filter by heading or use the search box to narrow your results."})})})]}),Object(a.jsx)("div",{className:"bg-warning container-fluid border-break",children:" "})]})}}]),c}(s.Component),p=function(e){var t=e.employee,c=t.name,s=t.email,l=t.picture,r=t.phone,n=t.dob;return Object(a.jsxs)("div",{className:"row my-3 py-2 border border-secondary",children:[Object(a.jsx)("div",{className:"col-2 d-flex align-content-center",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6"}),Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)("img",{className:"rounded ",src:l.thumbnail,alt:"",style:{width:"50px"}})})]})}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsxs)("h5",{children:[c.first," ",c.last]})}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("h5",{children:r})}),Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)("h5",{children:Object(a.jsx)("a",{href:s,children:s})})}),Object(a.jsx)("div",{className:"col-1",children:Object(a.jsx)("h4",{children:n.age})})]})},O=function(e){var t=e.filteredEmployees,c=e.handleEmailSort;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"row bg-warning",children:[Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("h2",{children:"Image"})}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("h2",{children:"Name"})}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("h2",{children:"Phone"})}),Object(a.jsx)("div",{className:"col-4",onClick:c,children:Object(a.jsx)("h2",{children:"Email"})}),Object(a.jsx)("div",{className:"col-1",children:Object(a.jsx)("h2",{children:"Age"})})]}),t.map((function(e){return Object(a.jsx)(p,{employee:e},e.login.uuid)}))]})},x=function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(h.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row"}),Object(a.jsx)("div",{className:"col-12 container-fluid",children:Object(a.jsx)("input",{onChange:function(t){return e.props.handleSearch(t)}})})]})}}]),c}(s.Component),f=c(19),v=c.n(f),y=function(e){Object(b.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(j.a)(this,c);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],filteredEmployees:[],alphabetical:!1,loading:!1},e.handleSearch=function(t){var c=t.target.value,a=e.state.filteredEmployees.filter((function(e){return-1!==e.email.indexOf(c)}));e.setState({filteredEmployees:a})},e.handleEmailSort=function(t){if(console.log("clicked within app.js"),0==e.state.alphabetical){var c=e.state.alphabetical?e.state.filteredEmployees:e.state.filteredEmployees.sort((function(e,t){return e.email>t.email?1:-1}));e.setState({filteredEmployees:c,alphabetical:!e.state.alphabetical}),console.log(e.state.filteredEmployees)}else{console.log("You lose");var a=e.state.alphabetical?e.state.filteredEmployees.sort((function(e,t){return e.email<t.email?1:-1})):e.state.filteredEmployees;e.setState({filteredEmployees:a,alphabetical:!e.state.alphabetical})}},e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://randomuser.me/api/?results=20");case 2:t=e.sent,this.setState({employees:t.data.results,filteredEmployees:t.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{}),Object(a.jsx)(x,{handleSearch:this.handleSearch}),Object(a.jsx)(O,{handleEmailSort:this.handleEmailSort,filteredEmployees:this.state.filteredEmployees})]})}}]),c}(s.Component);n.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.008246d6.chunk.js.map