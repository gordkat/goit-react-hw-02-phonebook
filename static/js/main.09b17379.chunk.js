(this["webpackJsonpreact-lesson-1"]=this["webpackJsonpreact-lesson-1"]||[]).push([[0],{13:function(e,t,n){e.exports={contact__item:"ContactList_contact__item__1DBOu"}},14:function(e,t,n){e.exports={contact:"ContactItem_contact__rh_7-"}},2:function(e,t,n){e.exports={form__label:"ContactForm_form__label__3zp3R",form__input:"ContactForm_form__input__3fZhp"}},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=n(15),s=n(4),l=n(5),u=n(7),m=n(6),b=n(11),d=n.n(b),f=n(12),h=n(2),j=n.n(h),_=n(0),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget.name,a=t.currentTarget.value;e.setState(Object(f.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.props.onSubmit(a,r),e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(_.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(_.jsxs)("label",{className:j.a.form__label,children:["Name",Object(_.jsx)("input",{className:j.a.form__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:t,onChange:this.handleChange})]}),Object(_.jsxs)("label",{className:j.a.form__label,children:["Number",Object(_.jsx)("input",{className:j.a.form__input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange})]}),Object(_.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=n(13),v=n.n(O),x=n(14),C=n.n(x),g=function(e){var t=e.name,n=e.number,a=e.id,r=e.onDelete;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("span",{className:C.a.contact,children:[t,": ",n]}),Object(_.jsx)("button",{type:"button",onClick:function(){return r(a)},children:"Delete"})]})},y=function(e){var t=e.contacts,n=e.onDelete;return Object(_.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(_.jsx)("li",{className:v.a.contact__item,children:Object(_.jsx)(g,{name:a,number:r,id:t,onDelete:n})},t)}))})},S=n(8),N=n.n(S),A=function(e){var t=e.value,n=e.onChange;return Object(_.jsxs)("label",{className:N.a.filter__label,children:["Find contacts by name",Object(_.jsx)("input",{className:N.a.filter__input,type:"text",name:"filter",value:t,onChange:n})]})},F=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t,n){if(e.state.contacts.find((function(e){return e.name===t})))alert("".concat(t," is already in contacts"));else{var a={id:d.a.generate(),name:t,number:n};e.setState((function(e){var t=e.contacts;return{contacts:[a].concat(Object(o.a)(t))}}))}},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLocaleLowerCase();return a.filter((function(e){return e.name.toLocaleLowerCase().includes(r)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.getVisibleContacts(),t=this.state.filter;return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(p,{onSubmit:this.addContact}),Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(A,{value:t,onChange:this.changeFilter}),Object(_.jsx)(y,{contacts:e,onDelete:this.deleteContact})]})}}]),n}(a.Component);n(29),n(30);i.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(F,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={filter__label:"Filter_filter__label__2O-YO",filter__input:"Filter_filter__input__3Zcoh"}}},[[31,1,2]]]);
//# sourceMappingURL=main.09b17379.chunk.js.map