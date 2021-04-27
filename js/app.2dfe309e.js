(function(t){function e(e){for(var n,a,c=e[0],i=e[1],u=e[2],d=0,m=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},s=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},s=[],a=r("5530"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("div",{staticClass:"main-container navbar"},[r("div",{staticClass:"navbar__brand"},[r("router-link",{staticClass:"navbar__brand-link",attrs:{to:{name:"home"}}},[t._v("Candy ")])],1),r("ul",{staticClass:"navbar__list"},[t.isLoggedIn?[r("li",{staticClass:"navbar__item"},[r("router-link",{staticClass:"navbar__link",attrs:{"active-class":"active",to:{name:"newProject"}}},[r("i",{staticClass:"ion-compose"}),t._v(" Create Project")])],1),r("li",{staticClass:"navbar__item"},[r("router-link",{staticClass:"navbar__link",attrs:{"active-class":"active",to:{name:"settings"}}},[r("i",{staticClass:"ion-gear-a"}),t._v(" Settings ")])],1),r("li",{staticClass:"navbar__item"},[r("router-link",{staticClass:"navbar__link",attrs:{"active-class":"active",to:{name:"userProfile",params:{slug:t.currentUser.email}}}},[r("img",{staticClass:"user-pic",attrs:{src:t.currentUser.image,alt:""}}),t._v(" "+t._s(t.currentUser.email)+" ")])],1)]:t._e(),t.isLoggedIn?t._e():[r("li",{staticClass:"navbar__item"},[r("router-link",{staticClass:"navbar__link",attrs:{to:{name:"login"},"active-class":"active"}},[t._v(" Sing In")])],1),r("li",{staticClass:"navbar__item"},[r("router-link",{staticClass:"navbar__link",attrs:{to:{name:"register"},"active-class":"active"}},[t._v(" Sing Up")])],1)]],2)])])},i=[],u=r("2f62"),l=r("ade3"),d=(r("d3b7"),r("bc3a")),m=r.n(d),g=function(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){return console.log("Error getting data from localStorage",e),null}},p=function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(r){console.log("Error saving data from localStorage",r)}};m.a.defaults.baseURL="http://127.0.0.1:8000",m.a.interceptors.request.use((function(t){var e=g("accessToken"),r=e?"Bearer ".concat(e):"";return t.headers.Authorization=r,console.log(t),t}));var f,h,j,_,v=m.a,b=function(t){return v.post("/sign-up",t)},C=function(t){return v.post("/auth",t)},P=function(){return v.get("api/v1/user/")},E={register:b,login:C,getCurrentUser:P},k=r("8c4f"),S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-container"},[r("h1",{staticClass:"main-h1"},[t._v("Projects")]),t.isLoading?r("div",{},[t._v("Loading...")]):t._e(),t.currentProject?r("div",{staticClass:"project"},[r("div",{staticClass:"project-list"},t._l(t.currentProject,(function(e){return r("ProjectList",{key:e.id,attrs:{project_item:e},on:{updata:function(e){return t.updata()}}})})),1)]):t._e()])},O=[],w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"project-block"},[r("div",{staticClass:"project-block__header"},[r("h1",{on:{click:function(e){return t.project_delete(t.project_item)}}},[t._v("X")])]),r("div",{staticClass:"project-block__body"},[r("div",{staticClass:"project-block__name"},[r("router-link",{staticClass:"preview-link",attrs:{to:{name:"errors",params:{slug:t.project_item.project_id}}}},[r("p",[t._v(t._s(t.project_item.name))])])],1),r("p",{staticClass:"project-block__count-error"},[r("span",[t._v(t._s(t.project_item.count_error))]),t._v(" error ")]),r("p",{staticClass:"project-block__count-transactions"},[r("span",[t._v(t._s(t.project_item.count_transaction))]),t._v(" transactions ")])]),r("div",{staticClass:"project-block__button"},[r("router-link",{staticClass:"preview-link",attrs:{to:{name:"editingProject",params:{slug:t.project_item.project_id}}}},[r("button",{staticClass:"btn-grad",on:{click:function(e){return t.editing(t.project_item)}}},[t._v(" Editing ")])])],1)])},L=[],y=(r("7db0"),r("b0c0"),g("accessToken")),U={headers:{Authorization:"".concat(y)}},A=function(){return v.get("api/v1/project/",U)},x=function(t){return v.post("api/v1/project/",{name:t})},$=function(t){return console.log(t,"запрос"),v.delete("api/v1/project/".concat(t))},F=function(t){return v.put("api/v1/project/".concat(t.baseUrl),{name:t.name})},N={getProject:A,NewProject:x,deleteProject:$,editingProject:F,config:U},I={data:null,isLoading:null,currentProject:null,allProject:null,error:null},D={getProjectStart:"[project] Get project start",getProjectSuccess:"[project] Get project success",getProjectFailure:"[project] Get project failure",NewProjectStart:"[project] New project start",NewProjectSuccess:"[project] New project success",NewProjectFailure:"[project] New project failure",deleteProjectStart:"[project] Delete project start",deleteProjectSuccess:"[project] Delete project success",deleteProjectFailure:"[project] Delete project failure",editingProjectStart:"[project] Editing project start",editingProjectSuccess:"[project] Editing project success",editingProjectFailure:"[project] Editing project failure"},T={getProject:"[project] Get Project",newProject:"[project] New Project",deleteProject:"[project] Delete Project",editingProject:"[project] Editing Project"},G=(f={},Object(l["a"])(f,D.getProjectStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(f,D.getProjectSuccess,(function(t,e){t.isLoading=!1,t.currentProject=e,t.allProject=e,t.data=e})),Object(l["a"])(f,D.getProjectFailure,(function(t){t.isLoading=!1})),Object(l["a"])(f,D.NewProjectStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(f,D.NewProjectSuccess,(function(t,e){t.isLoading=!1,t.data=e})),Object(l["a"])(f,D.NewProjectFailure,(function(t){t.isLoading=!1})),Object(l["a"])(f,D.deleteProjectStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(f,D.deleteProjectSuccess,(function(t){t.isLoading=!1})),Object(l["a"])(f,D.deleteProjectFailure,(function(t){t.isLoading=!1})),Object(l["a"])(f,D.editingProjectStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(f,D.editingProjectSuccess,(function(t,e){t.isLoading=!1,t.data=e})),Object(l["a"])(f,D.editingProjectFailure,(function(t){t.isLoading=!1})),f),M={currentProject:"[project] currentProject"},K=Object(l["a"])({},M.currentProject,(function(t){return function(e){return t.currentProject.find((function(t){return t.project_id===e}))}})),V=(h={},Object(l["a"])(h,T.getProject,(function(t,e){return new Promise((function(r){t.commit(D.getProjectStart),N.getProject(e).then((function(e){t.commit(D.getProjectSuccess,e.data),window.localStorage.setItem("currentProject",e.data),p("currentProject",e.data),r(e.data)})).catch((function(){t.commit(D.getProjectFailure)}))}))})),Object(l["a"])(h,T.newProject,(function(t,e){return new Promise((function(r){t.commit(D.NewProjectStart),N.NewProject(e,console.log(e)).then((function(e){t.commit(D.NewProjectSuccess,e.data),r(e.data)})).catch((function(){t.commit(D.NewProjectFailure)}))}))})),Object(l["a"])(h,T.deleteProject,(function(t,e){return new Promise((function(r){t.commit(D.deleteProjectStart),console.log(e),N.deleteProject(e,console.log(e)).then((function(){t.commit(D.deleteProjectSuccess),r()})).catch((function(){t.commit(D.deleteProjectFailure)}))}))})),Object(l["a"])(h,T.editingProject,(function(t,e){return new Promise((function(r){t.commit(D.editingProjectStart),N.editingProject(e).then((function(){t.commit(D.editingProjectSuccess),r()})).catch((function(){t.commit(D.editingProjectFailure)}))}))})),h),B={state:I,actions:V,mutations:G,getters:K},H={name:"AppProjectList",data:function(){return{str:""}},props:{project_item:{type:Object,default:function(){return{}}}},methods:{editing:function(t){console.log(t)},project_delete:function(t){var e=this;this.str=t.project_id,this.$store.dispatch(T.deleteProject,this.str).then((function(){e.$emit("updata"),console.log("Успешно удалено")})).catch((function(){console.log("Ошибка удаления")}))}}},J=H,q=r("2877"),z=Object(q["a"])(J,w,L,!1,null,null,null),R=z.exports,X={name:"AppProject",data:function(){return{TOKEN:""}},computed:Object(a["a"])({},Object(u["c"])({isLoading:function(t){return t.project.isLoading},currentUser:function(t){return t.auth.currentUser},currentProject:function(t){return t.project.currentProject}})),components:{ProjectList:R},methods:{updata:function(){this.TOKEN="Bearer "+this.currentUser.user_token.token,console.log(this.currentUser.user_token.token),this.$store.dispatch(T.getProject,this.TOKEN).then((function(){console.log("successful project")}))}},mounted:function(){this.updata()}},Y=X,Q=Object(q["a"])(Y,S,O,!1,null,null,null),W=Q.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-login"},[r("div",{staticClass:"login"},[r("h1",{staticClass:"title-h1"},[t._v("Sing in")]),t.validationErrors?r("AppValidationErrors",{attrs:{"validation-errors":t.validationErrors}}):t._e(),r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email",name:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{staticClass:"btn",attrs:{disabled:t.isSubmitting}},[t._v(" Sing In ")])])],1)])},tt=[],et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"error-messages"},[r("li",[t._v(" "+t._s(t.validationErrors.detail)+" ")])])},rt=[],nt={name:"AppValidationErrors",props:{validationErrors:{type:Object,required:!0}},computed:{}},ot=nt,st=Object(q["a"])(ot,et,rt,!1,null,null,null),at=st.exports,ct={name:"AppLogin",data:function(){return{username:"",password:""}},components:{AppValidationErrors:at},computed:Object(a["a"])({},Object(u["c"])({isSubmitting:function(t){return t.auth.isSubmitting},validationErrors:function(t){return t.auth.validationErrors}})),methods:{onSubmit:function(){var t=this,e=new FormData;e.append("username",this.username),e.append("password",this.password),this.$store.dispatch(me.login,e).then((function(){console.log("ответ получен"),t.$router.push({name:"home"})})).catch((function(){console.log("Ошибка")}))}}},it=ct,ut=Object(q["a"])(it,Z,tt,!1,null,null,null),lt=ut.exports,dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-login"},[r("div",{staticClass:"register"},[r("h1",{staticClass:"title-h1"},[t._v("Sing Up")]),r("p",{staticClass:"register__question"},[r("router-link",{attrs:{to:{name:"login"}}},[t._v("Have an account?")])],1),t.validationErrors?r("AppValidationErrors",{attrs:{"validation-errors":t.validationErrors}}):t._e(),r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{staticClass:"btn",attrs:{disabled:t.isSubmitting}},[t._v(" Sing Up ")])])],1)])},mt=[],gt={name:"AppRegiter",data:function(){return{email:"",password:"",name:""}},components:{AppValidationErrors:at},computed:Object(a["a"])({},Object(u["c"])({isSubmitting:function(t){return t.auth.isSubmitting},validationErrors:function(t){return t.auth.validationErrors}})),methods:{onSubmit:function(){var t=this;console.log("Submit"),this.$store.dispatch(me.register,{email:this.email,name:this.name,password:this.password}).then((function(e){console.log("successful",e),t.$router.push({name:"home"})}))}}},pt=gt,ft=Object(q["a"])(pt,dt,mt,!1,null,null,null),ht=ft.exports,jt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"create-project"},[r("h1",{staticClass:"main-h1"},[t._v("New Project")]),r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control project-create",attrs:{type:"text",placeholder:"Project Name",name:"projectname"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),r("button",{staticClass:"btn-edit"},[t._v(" Create ")])])])},_t=[],vt={name:"AppCreateProject",data:function(){return{name:""}},methods:{onSubmit:function(){var t=this;this.$store.dispatch(T.newProject,this.name).then((function(){console.log("ответ получен"),t.$router.push({name:"home"})})).catch((function(){console.log("Ошибка")}))}}},bt=vt,Ct=Object(q["a"])(bt,jt,_t,!1,null,null,null),Pt=Ct.exports,Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"create-project"},[r("h1",{staticClass:"main-h1"},[t._v("Editing")]),r("p",[t._v(" Текущее название: "),r("span",[t._v(" "+t._s(this.currentProject.name))])]),r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control project-create",attrs:{type:"text",placeholder:"Project Name",name:"projectname"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),r("button",{staticClass:"btn-edit"},[t._v(" Editing ")])])])},kt=[],St={name:"AppEditingProject",data:function(){return{name:""}},computed:{baseUrl:function(){return this.$route.params.slug},currentProject:function(){return this.$store.getters[M.currentProject](this.$route.params.slug)}},methods:{onSubmit:function(){var t=this;this.$store.dispatch(T.editingProject,{baseUrl:this.baseUrl,name:this.name}).then((function(){console.log("ответ получен"),t.$router.push({name:"home"})})).catch((function(){console.log("Ошибка")}))}}},Ot=St,wt=Object(q["a"])(Ot,Et,kt,!1,null,null,null),Lt=wt.exports,yt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-container"},[r("div",{staticClass:"breadcrumbs"},[r("router-link",{staticClass:"preview-link",attrs:{to:{name:"home"}}},[t._v(" Назад ")])],1),t.isLoadingErr?r("div",{},[t._v("Loading...")]):t._e(),t.errors?r("div",{staticClass:"error"},[r("h1",{staticClass:"main-h1"},[t._v("Issues ("+t._s(t.countErrors)+")")]),r("div",{staticClass:"error__check-all"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isCheckAll,expression:"isCheckAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isCheckAll)?t._i(t.isCheckAll,null)>-1:t.isCheckAll},on:{click:function(e){return t.checkAll()},change:function(e){var r=t.isCheckAll,n=e.target,o=!!n.checked;if(Array.isArray(r)){var s=null,a=t._i(r,s);n.checked?a<0&&(t.isCheckAll=r.concat([s])):a>-1&&(t.isCheckAll=r.slice(0,a).concat(r.slice(a+1)))}else t.isCheckAll=o}}}),t._v(" Check All ")]),r("div",{staticClass:"errors-table"},[this.checked.length?r("div",{staticClass:"toolbar"},[r("div",{staticClass:"toolbar__flex"},[r("p",[t._v("Выбрано "+t._s(t.checked.length))]),r("button",{staticClass:"btn-del",on:{click:function(e){return t.deleteError()}}},[t._v(" Удалить ошибки ")])])]):t._e(),r("div",{staticClass:"errors-table__header"}),r("div",{staticClass:"errors-table__body",class:{tool:this.checked.length}},t._l(t.errors,(function(e,n){return r("error-list",{key:e.id,attrs:{error_item:e,idx:n,currentProject_item:t.currentProjectId},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})})),1)])]):t._e()])},Ut=[],At=(r("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.currentProject_item?r("div",{staticClass:"error-block"},[r("div",{staticClass:"error-block__select"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{value:t.error_item.id_error,checked:Array.isArray(t.checked)?t._i(t.checked,t.error_item.id_error)>-1:t.checked},on:{change:[function(e){var r=t.checked,n=e.target,o=!!n.checked;if(Array.isArray(r)){var s=t.error_item.id_error,a=t._i(r,s);n.checked?a<0&&(t.checked=r.concat([s])):a>-1&&(t.checked=r.slice(0,a).concat(r.slice(a+1)))}else t.checked=o},function(e){return t.onChange()}]}})]),r("div",{staticClass:"error-block__info"},[r("router-link",{staticClass:"preview-link",attrs:{to:{name:"error-item",params:{slug:t.currentProject_item.project_id,id:t.error_item.id_error}}}},[r("div",{staticClass:"error__type"},[t._v(" "+t._s(t.error_item.type_error)+" ")])]),r("div",{staticClass:"error__description"},[t._v(" "+t._s(t.error_item.description)+" ")]),r("div",{staticClass:"error__info-block"},[r("div",{staticClass:"error__name-project"},[t._v(" "+t._s(t.currentProject_item.name)+" ")]),r("div",{staticClass:"error__time"},[t._v(" "+t._s(t.formatDate(new Date(t.error_item.date_time)))+" ")]),r("div",{staticClass:"error__time-ago"},[t._v(t._s(t.nowDay)+" days ago")])])],1)]):t._e()}),xt=[],$t=(r("a9e3"),{name:"AppErrorItem",data:function(){return{checkedP:!1,checkboxValue:[]}},props:{error_item:{type:Object,default:function(){return{}}},currentProject_item:{type:Object,default:function(){return{}}},idx:{type:Number,default:function(){return{}}},value:{type:Array,default:function(){return{}}}},computed:{baseUrl:function(){return this.$route.params.slug},nowDay:function(){var t=new Date,e=new Date(this.error_item.date_time),r=t.getTime()-e.getTime(),n=r/864e5;return Math.floor(n)},checked:{get:function(){return this.value},set:function(t){this.checkedP=t}}},methods:{formatDate:function(t){return t.getFullYear()+"."+(t.getMonth()+1)+"."+t.getDate()+"  "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},onChange:function(){this.$emit("input",this.checkedP)}}}),Ft=$t,Nt=Object(q["a"])(Ft,At,xt,!1,null,null,null),It=Nt.exports,Dt=(r("99af"),function(t){return console.log(t,"запрос"),v.get("/api/v1/errors/".concat(t))}),Tt=function(t){return console.log(t,"запрос"),v.get("/api/v1/errors/".concat(t.baseUrl,"/").concat(t.baseId))},Gt=function(t){return console.log(t,"запрос"),v.delete("/api/v1/errors/".concat(t.baseUrl,"/").concat(t.baseId))},Mt=function(t){return console.log(t.error_ids,"запрос  на удаление списка"),v.delete("/api/v1/errors/".concat(t.project),{data:{error_ids:t.error_ids}})},Kt={getErrors:Dt,getCurrentError:Tt,delError:Gt,delErrorsList:Mt},Vt={data:null,isLoading:!1,currentError:null,error:null},Bt={getErrorsStart:"[errors] Get errors start",getErrorsSuccess:"[errors] Get errors success",getErrorsFailure:"[errors] Get errors failure",delErrorStart:"[errors] Del errors start",delErrorSuccess:"[errors] Del errors success",delErrorFailure:"[errors] Del errors failure",delErrorsListStart:"[errors] Del errors list start",delErrorsListSuccess:"[errors] Del errors list success",delErrorsListFailure:"[errors] Del errors list failure",getCurrentErrorStart:"[errors] Get current errors start",getCurrentErrorSuccess:"[errors] Get current errors success",getCurrentErrorFailure:"[errors] Get current errors failure"},Ht={getErrors:"[errors] Get Errors",delError:"[errors] Delele Error",delErrorsList:"[errors] Delele list Errors",getCurrentError:"[errors] Get current Errors"},Jt=(j={},Object(l["a"])(j,Bt.getErrorsStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(j,Bt.getErrorsSuccess,(function(t,e){t.isLoading=!1,t.data=e})),Object(l["a"])(j,Bt.getErrorsFailure,(function(t){t.isLoading=!1})),Object(l["a"])(j,Bt.delErrorStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(j,Bt.delErrorSuccess,(function(t,e){t.isLoading=!1,t.data=e})),Object(l["a"])(j,Bt.delErrorFailure,(function(t){t.isLoading=!1})),Object(l["a"])(j,Bt.delErrorsListStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(j,Bt.delErrorsListSuccess,(function(t,e){t.isLoading=!1,t.data=e})),Object(l["a"])(j,Bt.delErrorsListFailure,(function(t){t.isLoading=!1})),Object(l["a"])(j,Bt.getCurrentErrorStart,(function(t){t.isLoading=!0,t.data=null})),Object(l["a"])(j,Bt.getCurrentErrorSuccess,(function(t,e){t.isLoading=!1,t.currentError=e,t.data=e})),Object(l["a"])(j,Bt.getCurrentErrorFailure,(function(t){t.isLoading=!1})),j),qt=(_={},Object(l["a"])(_,Ht.getErrors,(function(t,e){return new Promise((function(r){console.log(e),t.commit(Bt.getErrorsStart),Kt.getErrors(e).then((function(e){t.commit(Bt.getErrorsSuccess,e.data),r(e.data)})).catch((function(){t.commit(Bt.getErrorsFailure)}))}))})),Object(l["a"])(_,Ht.getCurrentError,(function(t,e){return new Promise((function(r){console.log(e),t.commit(Bt.getCurrentErrorStart),Kt.getCurrentError(e).then((function(e){t.commit(Bt.getCurrentErrorSuccess,e.data),r(e.data)})).catch((function(){t.commit(Bt.getCurrentErrorFailure)}))}))})),Object(l["a"])(_,Ht.delError,(function(t,e){return new Promise((function(r){console.log(e),t.commit(Bt.delErrorStart),Kt.delError(e).then((function(e){t.commit(Bt.delErrorSuccess,e.data),r(e.data)})).catch((function(){t.commit(Bt.delErrorFailure)}))}))})),Object(l["a"])(_,Ht.delErrorsList,(function(t,e){return new Promise((function(r){console.log(e),t.commit(Bt.delErrorsListStart),Kt.delErrorsList(e).then((function(e){t.commit(Bt.delErrorsListSuccess,e.data),r(e.data)})).catch((function(){t.commit(Bt.delErrorsListFailure)}))}))})),_),zt={state:Vt,actions:qt,mutations:Jt},Rt={name:"AppErrors",data:function(){return{checked:[],countErrors:"",arrayError:[],isCheckAll:!1}},components:{ErrorList:It},computed:Object(a["a"])(Object(a["a"])({baseUrl:function(){return this.$route.params.slug}},Object(u["c"])({isLoading:function(t){return t.project.isLoading},isLoadingErr:function(t){return t.errors.isLoading},currentUser:function(t){return t.auth.currentUser},currentProject:function(t){return t.project.currentProject},errors:function(t){return t.errors.data}})),{},{currentProjectId:function(){return this.currentProject?this.$store.getters[M.currentProject](this.baseUrl):null}}),methods:{checkAll:function(){var t=this;this.isCheckAll=!this.isCheckAll,this.checked=[],this.isCheckAll&&this.errors.forEach((function(e){t.checked.push(e.id_error)}))},deleteError:function(){var t=this;this.$store.dispatch(Ht.delErrorsList,{project:this.baseUrl,error_ids:this.checked}).then((function(){t.getProject(),t.checked=[]})).catch((function(t){console.log("Ошибка",t)}))},getProject:function(){var t=this;this.$store.dispatch(Ht.getErrors,this.baseUrl).then((function(){t.countErrors=t.errors.length})).catch((function(t){console.log("Ошибка",t)}))}},mounted:function(){this.getProject()}},Xt=Rt,Yt=Object(q["a"])(Xt,yt,Ut,!1,null,null,null),Qt=Yt.exports,Wt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-container"},[r("div",{staticClass:"breadcrumbs"},[r("router-link",{staticClass:"preview-link",attrs:{to:{name:"errors",params:{slug:this.baseUrl}}}},[t._v(" Назад ")])],1),t._l(t.currentError,(function(e){return r("div",{key:e.id_error,staticClass:"error-item"},[r("div",{staticClass:"error-item__error-type"},[t._v(" "+t._s(e.type_error)+" ")]),r("div",{staticClass:"error-item__description"},[t._v(" "+t._s(e.description)+" ")]),r("button",{staticClass:"btn-edit",on:{click:function(e){return t.deleteError()}}},[t._v("Удалить ошибку")]),r("div",{staticClass:"program-code"},[r("div",{staticClass:"program-code__name"},[r("p",[t._v(" "+t._s(e.name_py)+" in "),r("span",[t._v(t._s(e.name_function)+" at line "+t._s(e.code_of_line))])])]),r("div",{staticClass:"program-code__block"},t._l(e.program_code,(function(n){return r("div",{key:n.id,staticClass:"program-code__console",class:{activeError:e.code_of_line===n.count_str}},[r("div",{staticClass:"program-code__str"},[r("p",[t._v(t._s(n.count_str))])]),r("div",{staticClass:"program-code__value"},[r("p",{domProps:{innerHTML:t._s(n.value)}})])])})),0)]),"{}"!==e.args?r("div",{staticClass:"program-code__args"},[r("div",{staticClass:"args"},[r("div",{staticClass:"args__title"},[t._v("Args")]),r("div",{staticClass:"args__data"},[t._v(t._s(e.args))])])]):t._e(),"{}"!==e.kwargs?r("div",{staticClass:"program-code__args"},[r("div",{staticClass:"args"},[r("div",{staticClass:"args__title"},[t._v("Kwargs")]),r("div",{staticClass:"args__data"},[t._v(t._s(e.kwargs))])])]):t._e()])}))],2)},Zt=[],te={name:"AppErrorItem",computed:Object(a["a"])(Object(a["a"])({baseUrl:function(){return this.$route.params.slug}},Object(u["c"])({isLoading:function(t){return t.errors.isLoadind},currentError:function(t){return t.errors.currentError}})),{},{baseId:function(){return this.$route.params.id}}),methods:{deleteError:function(){var t=this;this.$store.dispatch(Ht.delError,{project:this.baseUrl,error_ids:this.checked}).then((function(){t.getProject(),t.checked=[]})).catch((function(t){console.log("Ошибка",t)}))}},mounted:function(){this.$store.dispatch(Ht.getCurrentError,{baseUrl:this.baseUrl,baseId:this.baseId}).then((function(t){console.log(t,"currentError")})).catch((function(){console.log("Ошибка")}))}},ee=te,re=Object(q["a"])(ee,Wt,Zt,!1,null,null,null),ne=re.exports;n["a"].use(k["a"]);var oe,se,ae,ce=[{path:"/",name:"home",component:W,meta:{Auth:!0}},{path:"/login",name:"login",component:lt,meta:{Auth:!1}},{path:"/register",name:"register",component:ht,meta:{Auth:!1}},{path:"/new-project",name:"newProject",component:Pt,meta:{Auth:!0}},{path:"/project/:slug",name:"editingProject",component:Lt,meta:{Auth:!0}},{path:"/errors/:slug",name:"errors",component:Qt,meta:{Auth:!0}},{path:"/errors/:slug/:id",name:"error-item",component:ne,meta:{Auth:!0}}],ie=new k["a"]({mode:"history",base:"/",routes:ce}),ue=ie,le={isSubmitting:!1,isLoading:!1,currentUser:null,validationErrors:null,isLoggedIn:null},de={registerStart:"[auth] registerStart",registerSuccess:"[auth] registerSuccess",registerFailure:"[auth] registerFailure",loginStart:"[auth] loginStart",loginSuccess:"[auth] loginSuccess",loginFailure:"[auth] loginFailure",getCurrentUserStart:"[auth] getCurrentUserStart",getCurrentUserSuccess:"[auth] getCurrentUserSuccess",getCurrentUserFailure:"[auth] getCurrentUserFailure"},me={register:"[auth] register",login:"[auth] login",getCurrentUser:"[auth] getCurrentUser"},ge={currentUser:"[auth] currentUser",isLoggedIn:"[auth] isLoggedIn",isAnonymuos:"[auth] isAnonymuos"},pe=(oe={},Object(l["a"])(oe,ge.currentUser,(function(t){return t.currentUser})),Object(l["a"])(oe,ge.isLoggedIn,(function(t){return Boolean(t.isLoggedIn)})),Object(l["a"])(oe,ge.isAnonymuos,(function(t){return!1===t.isLoggedIn})),oe),fe=(se={},Object(l["a"])(se,de.registerStart,(function(t){t.isSubmitting=!0,t.validationErrors=null})),Object(l["a"])(se,de.registerSuccess,(function(t,e){t.isSubmitting=!1,t.currentUser=e,t.isLoggedIn=!0})),Object(l["a"])(se,de.registerFailure,(function(t,e){t.isSubmitting=!1,t.validationErrors=e})),Object(l["a"])(se,de.loginStart,(function(t){t.isSubmitting=!0,t.validationErrors=null})),Object(l["a"])(se,de.loginSuccess,(function(t,e){t.isSubmitting=!1,t.currentUser=e,t.isLoggedIn=!0})),Object(l["a"])(se,de.loginFailure,(function(t,e){t.isSubmitting=!1,t.validationErrors=e})),Object(l["a"])(se,de.getCurrentUserStart,(function(t){t.isLoading=!0})),Object(l["a"])(se,de.getCurrentUserSuccess,(function(t,e){t.isLoading=!1,t.currentUser=e,t.isLoggedIn=!0})),Object(l["a"])(se,de.getCurrentUserFailure,(function(t){t.isLoading=!1,t.isLoggedIn=!1,t.currentUser=null})),se),he=(ae={},Object(l["a"])(ae,me.register,(function(t,e){return new Promise((function(r){t.commit(de.registerStart),E.register(e).then((function(e){t.commit(de.registerSuccess,e.data),window.localStorage.setItem("accessToken",e.data.user_token.token),p("accessToken",e.data.user_token.token),r(e.data)})).catch((function(e){t.commit(de.registerFailure,e.response.data)}))}))})),Object(l["a"])(ae,me.login,(function(t,e){return new Promise((function(r){t.commit(de.loginStart),E.login(e).then((function(e){console.log(e.data),t.commit(de.loginSuccess,e.data),window.localStorage.setItem("accessToken",e.data.user_token.token),p("accessToken",e.data.user_token.token),r(e.data)})).catch((function(e){t.commit(de.loginFailure,e.response.data,console.log("error"))}))}))})),Object(l["a"])(ae,me.getCurrentUser,(function(t){return new Promise((function(e){t.commit(de.getCurrentUserStart),E.getCurrentUser().then((function(r){t.commit(de.getCurrentUserSuccess,r.data),e(r.data)})).catch((function(){t.commit(de.getCurrentUserFailure,ue.push({name:"login"}))}))}))})),ae),je={state:le,mutations:fe,actions:he,getters:pe},_e={name:"AppTopBar",computed:Object(a["a"])({},Object(u["b"])({currentUser:ge.currentUser,isLoggedIn:ge.isLoggedIn,isAnonymous:ge.isAnonymous}))},ve=_e,be=Object(q["a"])(ve,c,i,!1,null,null,null),Ce=be.exports,Pe={name:"App",data:function(){return{TOKEN:""}},components:{Header:Ce},computed:Object(a["a"])({},Object(u["c"])({currentUser:function(t){return t.auth.currentUser},currentProject:function(t){return t.project.currentProject}})),methods:{getProject:function(){this.TOKEN="Bearer "+this.currentUser.user_token.token,console.log(this.currentUser.user_token.token),this.$store.dispatch(T.getProject,this.TOKEN).then((function(){console.log("successful project")}))}},mounted:function(){var t=this;this.$store.dispatch(me.getCurrentUser).then((function(){t.getProject()})).catch((function(){}))}},Ee=Pe,ke=(r("5c0b"),Object(q["a"])(Ee,o,s,!1,null,null,null)),Se=ke.exports;r("f27b");n["a"].use(u["a"]);var Oe=new u["a"].Store({state:{},mutations:{},actions:{},modules:{auth:je,project:B,errors:zt}});n["a"].config.productionTip=!1,new n["a"]({router:ue,store:Oe,render:function(t){return t(Se)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},f27b:function(t,e,r){}});
//# sourceMappingURL=app.2dfe309e.js.map