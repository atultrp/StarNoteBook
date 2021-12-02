(this.webpackJsonpstarnotebook=this.webpackJsonpstarnotebook||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(12),l=a.n(n),r=(a(17),a(3)),i=(a(18),a(6)),o=a(2),d=a(0),j=function(){var e=Object(o.e)(),t=Object(o.f)();return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Star Notebook"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link ".concat("/"===e.pathname?"active":""),"aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link ".concat("/about"===e.pathname?"active":""),to:"/about",children:"About"})})]}),localStorage.getItem("token")?Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"btn btn-light mx-2",onClick:function(){localStorage.removeItem("token"),t("/login")},children:"Logout"})}):Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)(i.b,{className:"btn btn-outline-light mx-2",to:"/login",role:"button",children:"Login"}),Object(d.jsx)(i.b,{className:"btn btn-light mx-2",to:"/signup",role:"button",children:"Signup"})]})]})]})})})},b=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsxs)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",children:[Object(d.jsx)("div",{className:"col-md-4 d-flex align-items-center",children:Object(d.jsx)("span",{className:"text-muted",children:"\xa9 2021 Star Industries"})}),Object(d.jsxs)("ul",{className:"nav col-md-4 justify-content-end list-unstyled d-flex",children:[Object(d.jsx)("li",{className:"ms-3",children:Object(d.jsx)("a",{className:"text-muted",href:"https://twitter.com/atultrp_",children:Object(d.jsx)("i",{className:"fab fa-twitter fa-lg social-icons"})})}),Object(d.jsx)("li",{className:"ms-3",children:Object(d.jsx)("a",{className:"text-muted",href:"https://github.com/atultrp",children:Object(d.jsx)("i",{className:"fab fa-github fa-lg social-icons"})})}),Object(d.jsx)("li",{className:"ms-3",children:Object(d.jsx)("a",{className:"text-muted",href:"https://instagram.com/atultrp",children:Object(d.jsx)("i",{className:"fab fa-instagram fa-lg social-icons"})})}),Object(d.jsx)("li",{className:"ms-3",children:Object(d.jsx)("a",{className:"text-muted",href:"https://www.linkedin.com/in/atultrp-",children:Object(d.jsx)("i",{className:"fab fa-linkedin fa-lg social-icons"})})}),Object(d.jsx)("li",{className:"ms-3",children:Object(d.jsx)("a",{className:"text-muted",href:"mailto: atul31815@gmail.com",children:Object(d.jsx)("i",{className:"fas fa-envelope fa-lg social-icons"})})})]})]})})})},m=a(8),h=a(7),u=Object(s.createContext)(),x=function(e){var t=Object(s.useContext)(u).deleteNote,a=e.note,c=e.updateNote;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"col-md-3 mx-3",children:Object(d.jsx)("div",{className:"card my-3",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("span",{className:"position-absolute top-0 translate-middle badge rounded-pill bg-danger",style:{left:"50%",zIndex:"1"},children:Object(d.jsx)("small",{children:a.tag})}),Object(d.jsx)("h5",{className:"card-title",children:a.title}),Object(d.jsx)("p",{className:"card-text",children:a.description}),Object(d.jsx)("i",{className:"far fa-edit",onClick:function(){c(a)}}),Object(d.jsx)("i",{className:"far fa-trash-alt mx-3",onClick:function(){t(a._id),e.showAlert("Note Deleted Successfully","success")}})]})})})})},p=function(e){var t=Object(s.useContext)(u).addNote,a=Object(s.useState)({title:"",description:"",tag:""}),c=Object(r.a)(a,2),n=c[0],l=c[1],i=function(e){l(Object(h.a)(Object(h.a)({},n),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h2",{children:"Add a note"}),Object(d.jsxs)("form",{className:"my-3 row g-3",children:[Object(d.jsxs)("div",{className:"mb-3 col-md-8",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",value:n.title,"aria-describedby":"emailHelp",minLength:5,required:!0,onChange:i})]}),Object(d.jsxs)("div",{className:"mb-3 col-md-4",children:[Object(d.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"tag",name:"tag",value:n.tag,onChange:i})]}),Object(d.jsxs)("div",{className:"mb-3 col-12",children:[Object(d.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(d.jsx)("textarea",{type:"text",className:"form-control",id:"description",name:"description",rows:"3",value:n.description,minLength:5,required:!0,onChange:i})]}),Object(d.jsx)("div",{className:"col-md-2",children:Object(d.jsx)("button",{disabled:n.title.length<5||n.description.length<5,type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault(),t(n.title,n.description,n.tag),l({title:"",description:"",tag:""}),e.showAlert("Note Added Successfully","success")},children:"Add Note"})})]})]})})},O=function(e){var t=Object(s.useContext)(u),a=t.notes,c=t.getAllNote,n=t.editNote,l=Object(o.f)();Object(s.useEffect)((function(){localStorage.getItem("token")?c():l("/")}),[]);var i=Object(s.useRef)(null),j=Object(s.useRef)(null),b=Object(s.useState)({id:"",etitle:"",edescription:"",tag:""}),O=Object(r.a)(b,2),g=O[0],f=O[1],N=function(e){i.current.click(),f({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},v=function(e){f(Object(h.a)(Object(h.a)({},g),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{showAlert:e.showAlert}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{ref:i,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Launch demo modal"}),Object(d.jsx)("div",{className:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(d.jsx)("div",{className:"modal-dialog",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Modal title"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(d.jsx)("div",{className:"modal-body",children:Object(d.jsxs)("form",{className:"my-3 row g-3",children:[Object(d.jsxs)("div",{className:"mb-3 col-md-6",children:[Object(d.jsx)("label",{htmlFor:"etitle",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"etitle",name:"etitle","aria-describedby":"emailHelp",value:g.etitle,minLength:5,required:!0,onChange:v})]}),Object(d.jsxs)("div",{className:"mb-3 col-md-6",children:[Object(d.jsx)("label",{htmlFor:"etag",className:"form-label",children:"Tag"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:g.etag,onChange:v})]}),Object(d.jsxs)("div",{className:"mb-3 col-12",children:[Object(d.jsx)("label",{htmlFor:"edescription",className:"form-label",children:"Description"}),Object(d.jsx)("textarea",{type:"text",className:"form-control",id:"edescription",name:"edescription",rows:"3",value:g.edescription,minLength:5,required:!0,onChange:v})]})]})}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("button",{ref:j,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(d.jsx)("button",{disabled:g.etitle.length<5||g.edescription.length<5,type:"button",className:"btn btn-primary",onClick:function(t){n(g.id,g.etitle,g.edescription,g.etag),j.current.click(),e.showAlert("Note Updated Successfully","success")},children:"Update Note"})]})]})})})]}),Object(d.jsxs)("div",{className:"row my-3",children:[Object(d.jsx)("h2",{className:"mt-3",children:"Your notes"}),Object(d.jsx)("div",{className:"container mx-2",children:0===a.length&&"No notes to display."}),a.map((function(t){return Object(d.jsx)(x,{updateNote:N,showAlert:e.showAlert,note:t},t._id)}))]})]})},g=a.p+"static/media/Background1.a261abe4.svg",f=a.p+"static/media/Background3.819d3355.svg",N=a.p+"static/media/Background4.043df16e.svg",v=function(e){var t=e.showAlert;return Object(d.jsx)(d.Fragment,{children:localStorage.getItem("token")?Object(d.jsx)(O,{showAlert:t}):Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"my-4 text-center",children:"Welcome to Star Notebook"}),Object(d.jsx)("p",{className:"mx-5 text-center lead",children:"Star Notebook is the best word processing app for all your works, from taking down quick notes to writing your books, eBooks, organizing your documents and daily tasks."}),Object(d.jsxs)("div",{className:"my-5 row g-3",children:[Object(d.jsxs)("div",{className:"card my-4 col-md-3 mx-auto ",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:N,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Register/Login"}),Object(d.jsx)("p",{className:"card-text lead",children:Object(d.jsx)("small",{children:" The most beautiful note taking app across devices. If you are new in this app then please register your id and enjoy writing notes. And if are the existing user, welcome back!"})})]})]}),Object(d.jsxs)("div",{className:"card my-4 col-md-3 mx-auto ",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:f,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Your Notes"}),Object(d.jsx)("p",{className:"card-text lead",children:Object(d.jsx)("small",{children:" This is the Notebook you'll never lose because it syncs to the cloud and across your devices. It's always backed-up and always up to date."})})]})]}),Object(d.jsxs)("div",{className:"card my-4 col-md-3 mx-auto ",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:g,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Security"}),Object(d.jsx)("p",{className:"card-text lead",children:Object(d.jsx)("small",{children:" We don't sell your info. We don't do ads. Our business model ensures our ability to act in your best interest while storing and securing your data."})})]})]})]})]})})},y=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"mt-3 bd-title text-center",children:"About Us"}),Object(d.jsxs)("p",{className:"lead text-center mb-3",children:["Learn more about the ",Object(d.jsx)("strong",{children:"Star Notebook"}),", who created this, what's its features are and what techs are included."]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"my-3",children:"Introduction"}),Object(d.jsxs)("p",{className:"lead ",children:["Basically, ",Object(d.jsx)("strong",{children:"Star Notebook"})," is the best word processing app for all your works, from taking down quick notes to writing your books, eBooks, organizing your documents and daily tasks. This is the Notebook you'll never lose because it syncs to the cloud and across your devices. It's always backed-up and always up to date."]}),Object(d.jsx)("p",{className:"lead",children:"We don't sell your info. We don't do ads. Our business model ensures our ability to act in your best interest while storing and securing your data. No one have access to read, update and delete. Only logged in person can perform CRUD (means create, read, update, delete) only on their notes."}),Object(d.jsx)("p",{className:"lead",children:"The most beautiful note taking app across devices. If you are new in this app then please register your id and enjoy writing notes. And if are the existing user, welcome back!"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"my-3",children:"Tech Included"}),Object(d.jsx)("p",{className:"lead ",children:Object(d.jsxs)("ul",{className:"row g-3",children:[Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("li",{children:"HTML"}),Object(d.jsx)("li",{children:"CSS"}),Object(d.jsx)("li",{children:"JavaScript"})]}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("li",{children:"Bootstrap"}),Object(d.jsx)("li",{children:"React"}),Object(d.jsx)("li",{children:"React Router"})]}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("li",{children:"Context API"}),Object(d.jsx)("li",{children:"NodeJs"}),Object(d.jsx)("li",{children:"Mongodb"})]})]})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"my-3",children:"Creator"}),Object(d.jsxs)("p",{className:"lead",children:["Hey there, I'm ",Object(d.jsx)("strong",{children:"Atul Tripathi"})," from India. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.",Object(d.jsx)("br",{}),"I am also an ",Object(d.jsx)("strong",{children:"open-source"})," enthusiast and maintainer. I learned a lot from the open-source community and I love how ",Object(d.jsx)("strong",{children:"collaboration and knowledge sharing"})," happened through open-source."]})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"my-3",children:"Some Lines from Creator"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{className:"blockquote",children:Object(d.jsx)("p",{className:"lead",children:"A person can ruin or succeed you, but it all depends on you what you wants to be. So always choose your best, because that's your life and you have to be perfect for yourself."})}),Object(d.jsx)("figcaption",{className:"blockquote-footer text-end",children:"Atul Tripathi"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{className:"blockquote",children:Object(d.jsx)("p",{className:"lead",children:"If you find a person who actually cares you, don't leave him/her because he/she is the one who really wants to give you the real happiness."})}),Object(d.jsx)("figcaption",{className:"blockquote-footer text-end",children:"Atul Tripathi"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{className:"blockquote",children:Object(d.jsx)("p",{className:"lead",children:"Always remember that, the right time never comes because right time in present to do something for yourself is now. So, use it and do your best to achieve your goals."})}),Object(d.jsx)("figcaption",{className:"blockquote-footer text-end",children:"Atul Tripathi"})]})})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"my-3",children:"Last but not Least!"}),Object(d.jsxs)("p",{className:"lead",children:["How to reach me - If you are still reading then you should visit my accounts (in footer section) and say hello to me.",Object(d.jsxs)("p",{className:"lead mt-3",children:["Created by using coding skills with love \ud83d\udc99\ufe0f by - ",Object(d.jsx)("a",{href:"https://github.com/atultrp",children:Object(d.jsx)("button",{type:"button",class:"btn btn-dark",children:"Atul Tripathi"})})]})]})]})]})})},w=a(4),k=a.n(w),S=a(9),C=function(e){var t="http://localhost:4000",a=Object(s.useState)([]),c=Object(r.a)(a,2),n=c[0],l=c[1],i=function(){var e=Object(S.a)(k.a.mark((function e(a,s,c){var r,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnotes"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:s,tag:c})});case 2:return r=e.sent,e.next=5,r.json();case 5:i=e.sent,l(n.concat(i));case 7:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),o=function(){var e=Object(S.a)(k.a.mark((function e(){var a,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/getnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,l(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(S.a)(k.a.mark((function e(a){var s,c,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenotes/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:s=e.sent,c=s.json(),console.log(c),r=n.filter((function(e){return e._id!==a})),l(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(S.a)(k.a.mark((function e(a,s,c,r){var i,o,d,j;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenotes/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:s,description:c,tag:r})});case 2:i=e.sent,o=i.json(),console.log(o),d=JSON.parse(JSON.stringify(n)),j=0;case 7:if(!(j<d.length)){e.next=17;break}if(d[j]._id!==a){e.next=14;break}return d[j].title=s,d[j].description=c,d[j].tag=r,e.abrupt("break",17);case 14:j++,e.next=7;break;case 17:l(d);case 18:case"end":return e.stop()}}),e)})));return function(t,a,s,c){return e.apply(this,arguments)}}();return Object(d.jsx)(u.Provider,{value:{notes:n,setNotes:l,addNote:i,deleteNote:j,editNote:b,getAllNote:o},children:e.children})};function A(e){return e.alert&&Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsx)("strong",{children:function(e){"danger"===e&&(e="error");var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})})}var I=a.p+"static/media/profilePicture.6e86c8be.png",T=function(e){var t=Object(s.useState)({email:"",password:""}),a=Object(r.a)(t,2),c=a[0],n=a[1],l=Object(o.f)(),i=function(){var t=Object(S.a)(k.a.mark((function t(a){var s,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("http://localhost:4000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c.email,password:c.password})});case 3:return s=t.sent,t.next=6,s.json();case 6:n=t.sent,console.log(n),n.success?(localStorage.setItem("token",n.authToken),e.showAlert("Logged in Successfully","success"),l("/")):e.showAlert("Invalid Credential","danger");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(e){n(Object(h.a)(Object(h.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(d.jsx)("div",{class:"text-center",children:Object(d.jsx)("main",{class:"form-signin mt-5",children:Object(d.jsxs)("form",{onSubmit:i,children:[Object(d.jsx)("img",{class:"mb-4",src:I,alt:"",style:{width:"30%"}}),Object(d.jsx)("h1",{class:"h3 mb-3 fw-normal",children:"Please log in"}),Object(d.jsxs)("div",{class:"form-floating",children:[Object(d.jsx)("input",{type:"email",class:"form-control",value:c.email,name:"email",id:"email",placeholder:"name@example.com",onChange:j}),Object(d.jsx)("label",{for:"floatingInput",children:"Email address"})]}),Object(d.jsxs)("div",{class:"form-floating",children:[Object(d.jsx)("input",{type:"password",class:"form-control",value:c.password,name:"password",id:"password",placeholder:"Password",onChange:j}),Object(d.jsx)("label",{for:"password",children:"Password"})]}),Object(d.jsx)("div",{class:"checkbox mb-3",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",value:"remember-me"})," Remember me"]})}),Object(d.jsx)("button",{class:"w-100 btn btn-lg btn-primary",type:"submit",children:"Log in"})]})})})},F=function(e){var t=Object(s.useState)({name:"",username:"",email:"",password:"",cpassword:""}),a=Object(r.a)(t,2),c=a[0],n=a[1],l=Object(o.f)(),i=function(){var t=Object(S.a)(k.a.mark((function t(a){var s,n,r,i,o,d,j;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),s=c.name,n=c.username,r=c.email,i=c.password,o=c.cpassword,i===o){t.next=6;break}return e.showAlert("Please match your password and confirm password","danger"),l("/signup"),t.abrupt("return");case 6:return t.next=8,fetch("http://localhost:4000/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,username:n,email:r,password:i})});case 8:return d=t.sent,t.next=11,d.json();case 11:j=t.sent,console.log(j),j.success?(localStorage.setItem("token",j.authToken),l("/"),e.showAlert("Account Created Successfully","success")):e.showAlert("Invalid Details","danger");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(e){n(Object(h.a)(Object(h.a)({},c),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{className:"mt-4",children:"Register Account"}),Object(d.jsx)("p",{className:"mb-4 lead",children:"Please SignUp to use Star Notebook"}),Object(d.jsxs)("form",{className:"row g-3",onSubmit:i,children:[Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("label",{htmlFor:"name",className:"form-label",children:"Full Name"}),Object(d.jsx)("input",{type:"text",className:"form-control is-valid",id:"name",name:"name",onChange:j,value:c.name,required:!0}),Object(d.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(d.jsxs)("div",{className:"input-group has-validation",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroupPrepend3",children:"@"}),Object(d.jsx)("input",{type:"text",className:"form-control is-valid",id:"username",name:"username",onChange:j,value:c.username,minLength:5,required:!0})]})]}),Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(d.jsxs)("div",{className:"input-group has-validation",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroupPrepend3",children:"@"}),Object(d.jsx)("input",{type:"email",className:"form-control is-valid",id:"email",name:"email",onChange:j,value:c.email,required:!0})]})]}),Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control is-invalid",id:"password",name:"password",onChange:j,value:c.password,minLength:5,"aria-describedby":"validationServer03Feedback",required:!0}),Object(d.jsx)("div",{id:"validationServer03Feedback",className:"invalid-feedback",children:"Must be 8-20 characters long."})]}),Object(d.jsxs)("div",{className:"col-md-4",children:[Object(d.jsx)("label",{htmlFor:"cpassword",className:"form-label",children:"Confirm Password"}),Object(d.jsx)("input",{type:"password",className:"form-control is-invalid",id:"cpassword",name:"cpassword",onChange:j,value:c.cpassword,minLength:5,"aria-describedby":"validationServer03Feedback",required:!0})]}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{className:"form-check-input ",type:"checkbox",value:"",id:"invalidCheck3","aria-describedby":"invalidCheck3Feedback",required:!0}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"invalidCheck3",children:"Agree to terms and conditions"})]})}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Sign Up"})})]})]})};var L=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1],n=function(e,t){c({msg:e,type:t}),setTimeout((function(){c(null)}),1500)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"body",children:Object(d.jsx)(C,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(A,{alert:a}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",element:Object(d.jsx)(v,{showAlert:n})}),Object(d.jsx)(o.a,{exact:!0,path:"/about",element:Object(d.jsx)(y,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/login",element:Object(d.jsx)(T,{showAlert:n})}),Object(d.jsx)(o.a,{exact:!0,path:"/signup",element:Object(d.jsx)(F,{showAlert:n})})]})}),Object(d.jsx)(b,{})]})})})})};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.625fd6ea.chunk.js.map