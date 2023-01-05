"use strict";(self.webpackChunkProjectBases=self.webpackChunkProjectBases||[]).push([[782],{1782:(st,_,a)=>{a.r(_),a.d(_,{NewslettersModule:()=>lt});var u=a(6895),t=a(1571),d=a(6217),v=a(6214),C=a(8768),N=a(2340),T=a(529);let x=(()=>{class n{constructor(e,o){this.http=e,this.login=o,this.apiServerUrl=N.N.apiBaseUrl}getNewsletters(){return this.http.get(`${this.apiServerUrl}/api/newsletter`)}deleteNewsletter(e){return this.http.post(`${this.apiServerUrl}/api/newsletter/supprimer`,e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(T.eN),t.LFG(v.r))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var m=a(5593),g=a(1740),f=a(805),h=a(1795),p=a(793);function w(n,i){1&n&&t._UZ(0,"div",7)}function A(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"th",8),t._uU(2,"Nom "),t._UZ(3,"p-sortIcon",9),t.qZA(),t.TgZ(4,"th",10),t._uU(5,"Email "),t._UZ(6,"p-sortIcon",11),t.qZA(),t.TgZ(7,"th",12),t._uU(8,"Status "),t._UZ(9,"p-sortIcon",13),t.qZA(),t.TgZ(10,"th",14),t._uU(11,"dateCreation "),t._UZ(12,"p-sortIcon",15),t.qZA()(),t.TgZ(13,"tr")(14,"th")(15,"input",16),t.NdJ("input",function(s){t.CHM(e),t.oxw();const l=t.MAs(2);return t.KtG(l.filter(s.target.value,"nom","contains"))}),t.qZA()(),t.TgZ(16,"th")(17,"input",17),t.NdJ("input",function(s){t.CHM(e),t.oxw();const l=t.MAs(2);return t.KtG(l.filter(s.target.value,"email","contains"))}),t.qZA()(),t.TgZ(18,"th")(19,"input",18),t.NdJ("input",function(s){t.CHM(e),t.oxw();const l=t.MAs(2);return t.KtG(l.filter(s.target.value,"valid","contains"))}),t.qZA()(),t.TgZ(20,"th")(21,"input",19),t.NdJ("input",function(s){t.CHM(e),t.oxw();const l=t.MAs(2);return t.KtG(l.filter(s.target.value,"dateCreation  | date: MM/dd/yyyy","contains"))}),t.qZA()()()}if(2&n){t.oxw();const e=t.MAs(2);let o,s,l,c;t.xp6(15),t.Q6J("value",null==(o=e.filters.nom)?null:o.value),t.xp6(2),t.Q6J("value",null==(s=e.filters.email)?null:s.value),t.xp6(2),t.Q6J("value",null==(l=e.filters.valid)?null:l.value),t.xp6(2),t.Q6J("value",null==(c=e.filters.dateCreation)?null:c.value)}}function b(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,l=t.oxw();return t.KtG(l.onDeleteNewsletters(s))}),t.qZA()}}function y(n,i){if(1&n&&(t.TgZ(0,"tr",20)(1,"td")(2,"span",21),t._uU(3,"Nom"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"span",21),t._uU(7,"email"),t.qZA(),t.TgZ(8,"span"),t._uU(9),t.qZA()(),t.TgZ(10,"td")(11,"span",21),t._uU(12,"Status"),t.qZA(),t.TgZ(13,"span"),t._uU(14),t.qZA()(),t.TgZ(15,"td")(16,"span",21),t._uU(17,"Date "),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.ALo(20,"date"),t.qZA()(),t.TgZ(21,"td"),t.YNc(22,b,1,0,"button",22),t.qZA()()),2&n){const e=i.$implicit,o=t.oxw();t.Q6J("pSelectableRow",e),t.xp6(4),t.hij(" ",e.nom," "),t.xp6(5),t.Oqu(e.email),t.xp6(5),t.Oqu(e.valid),t.xp6(5),t.Oqu(t.xi3(20,6,e.dateCreation,"dd/MM/yyyy")),t.xp6(3),t.Q6J("ngIf","ROLE_ADMIN"==o.login.getUserRole())}}function S(n,i){1&n&&(t.TgZ(0,"tr")(1,"td",24),t._uU(2,"Aucun Nesletter trouv\xe9."),t.qZA()())}const U=function(){return{"min-width":"50rem"}},M=function(){return[10,25,50]};let I=(()=>{class n{constructor(e,o,s,l){this.router=e,this.login=o,this.toast=s,this.newsletterServiceService=l,this.newsletterSchema=[]}ngOnInit(){this.onGetNewsletters(),this.cols=[{field:"nom",header:"Nom",customExportHeader:"Newsletter Code"},{field:"email",header:"Email"},{field:"valid",header:"Status"},{field:"dateCreation",header:"dateCreation"}],this.exportColumns=this.cols.map(e=>({title:e.header,dataKey:e.field}))}onGetNewsletters(){this.newsletterServiceService.getNewsletters().subscribe(e=>{this.newsletters=e,console.log(this.newsletters)},e=>{})}exportPdf(){}onDeleteNewsletters(e){this.newsletterServiceService.deleteNewsletter(e).subscribe(o=>{this.onGetNewsletters(),this.toast.success({detail:"Success Message",summary:"operation effectu\xe9e avec succ\xe8s !",duration:2e3})},o=>{console.log("Une erreure \xe0 survenue: "+o),this.toast.error({detail:"Error Message",summary:"Une erreure \xe0 survenue: "+o,duration:2e3})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.F0),t.Y36(v.r),t.Y36(C.s),t.Y36(x))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-newsletter"]],decls:7,vars:9,consts:[[1,"card"],["selectionMode","single","styleClass","p-datatable-sm","responsiveLayout","scroll","dataKey","id","styleClass","p-datatable-gridlines","currentPageReportTemplate","Affichage de {last} sur {totalRecords} elements","stateStorage","local","stateKey","statedemo-local",3,"value","tableStyle","rows","showCurrentPageReport","rowsPerPageOptions","selection","paginator","selectionChange"],["dt1",""],["pTemplate","caption"],["pTemplate","header","class","hd"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"flex"],["pSortableColumn","nom"],["field","nom"],["pSortableColumn","email"],["field","email"],["pSortableColumn","valid"],["field","valid"],["pSortableColumn","dateCreation"],["field","dateCreation"],["pInputText","","type","text","placeholder","Filtrer par Nom",1,"p-column-filter",3,"value","input"],["pInputText","","type","text","placeholder","Filtrer par email",1,"p-column-filter",3,"value","input"],["pInputText","","type","text","placeholder","Filtrer par validit\xe9",1,"p-column-filter",3,"value","input"],["pInputText","","type","text","placeholder","Filtrer par date",1,"p-column-filter",3,"value","input"],[2,"height","10px !important",3,"pSelectableRow"],[1,"p-column-title"],["pButton","","pRipple","","icon","pi pi-trash","class","p-button-rounded p-button-warning","style","height: 20px; width:30px;",3,"click",4,"ngIf"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",2,"height","20px","width","30px",3,"click"],["colspan","4"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"p-table",1,2),t.NdJ("selectionChange",function(l){return o.newsletter=l}),t.YNc(3,w,1,0,"ng-template",3),t.YNc(4,A,22,4,"ng-template",4),t.YNc(5,y,23,9,"ng-template",5),t.YNc(6,S,3,0,"ng-template",6),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("value",o.newsletters)("tableStyle",t.DdM(7,U))("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(8,M))("selection",o.newsletter)("paginator",!0))},dependencies:[u.O5,m.Hq,g.o,f.jx,h.H,p.iA,p.lQ,p.Ei,p.fz,u.uU]}),n})();var J=a(9764),q=a(2946),F=a(1327),O=a(2665),P=a(7772),r=a(433),G=a(2453),E=a(585),Q=a(8177),H=a(5722),R=a(4076),Z=a(1493),Y=a(666),D=a(8235);class K{constructor(i,e,o,s,l,c){this.id=i,this.nom=e,this.prenom=o,this.contact=s,this.email=l,this.commentaire=c}}var z=a(7918);function j(n,i){1&n&&t._UZ(0,"div",13)}function L(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"th",14),t._uU(2,"Nom "),t._UZ(3,"p-sortIcon",15),t.qZA(),t.TgZ(4,"th",16),t._uU(5,"Prenom "),t._UZ(6,"p-sortIcon",17),t.qZA(),t.TgZ(7,"th",18),t._uU(8,"Contact "),t._UZ(9,"p-sortIcon",19),t.qZA(),t.TgZ(10,"th",20),t._uU(11,"Email "),t._UZ(12,"p-sortIcon",21),t.qZA(),t.TgZ(13,"th",22),t._uU(14,"Message"),t._UZ(15,"p-sortIcon",23),t.qZA()(),t.TgZ(16,"tr")(17,"th")(18,"input",24),t.NdJ("input",function(s){t.CHM(e),t.oxw();const l=t.MAs(7);return t.KtG(l.filter(s.target.value,"nom","contains"))}),t.qZA()(),t.TgZ(19,"th")(20,"input",25),t.NdJ("input",function(s){t.CHM(e),t.oxw();const l=t.MAs(7);return t.KtG(l.filter(s.target.value,"prenom","contains"))}),t.qZA()(),t.TgZ(21,"th")(22,"input",26),t.NdJ("input",function(s){t.CHM(e),t.oxw();const l=t.MAs(7);return t.KtG(l.filter(s.target.value,"contact","contains"))}),t.qZA()(),t.TgZ(23,"th")(24,"input",27),t.NdJ("input",function(s){t.CHM(e),t.oxw();const l=t.MAs(7);return t.KtG(l.filter(s.target.value,"email","contains"))}),t.qZA()()()}if(2&n){t.oxw();const e=t.MAs(7);let o,s,l,c;t.xp6(18),t.Q6J("value",null==(o=e.filters.nom)?null:o.value),t.xp6(2),t.Q6J("value",null==(s=e.filters.prenom)?null:s.value),t.xp6(2),t.Q6J("value",null==(l=e.filters.contact)?null:l.value),t.xp6(2),t.Q6J("value",null==(c=e.filters.email)?null:c.value)}}function B(n,i){1&n&&t._UZ(0,"div",32)}function $(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr",28)(1,"td")(2,"span",29),t._uU(3,"Nom"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"span",29),t._uU(7,"Prenom"),t.qZA(),t.TgZ(8,"span"),t._uU(9),t.qZA()(),t.TgZ(10,"td")(11,"span",29),t._uU(12,"Contact"),t.qZA(),t.TgZ(13,"span"),t._uU(14),t.qZA()(),t.TgZ(15,"td")(16,"span",29),t._uU(17,"Email "),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.qZA()(),t.TgZ(20,"td")(21,"button",30),t.NdJ("click",function(){const l=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.showDialog(l))}),t.YNc(22,B,1,0,"div",31),t.qZA()()()}if(2&n){const e=i.$implicit;t.Q6J("pSelectableRow",e),t.xp6(4),t.hij(" ",e.nom," "),t.xp6(5),t.Oqu(e.prenom),t.xp6(5),t.Oqu(e.contact),t.xp6(5),t.Oqu(e.email),t.xp6(3),t.Q6J("ngIf",!e.vus)}}function V(n,i){1&n&&(t.TgZ(0,"tr")(1,"td",33),t._uU(2,"Aucun Nesletter trouv\xe9."),t.qZA()())}function X(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",34),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.dialogVisible=!1)}),t.qZA()}}const W=function(){return[10,25,50]},k=function(){return{width:"75vw"}},tt=function(){return{height:"300px"}};let et=(()=>{class n{constructor(e){this.contactServiceService=e,this.nosContact=new K(0,"","","","","")}ngOnInit(){this.onGetnosContact(),this.initForm()}onGetnosContact(){this.contactServiceService.getNosContacts().subscribe(e=>{this.nosContacts=e,console.log(this.nosContacts)},e=>{console.log(e.message)})}onOuvrirMessage(e){this.contactServiceService.ouvertureMessage(e).subscribe(o=>{this.onGetnosContact(),console.log(this.nosContacts)},o=>{console.log(o.message)})}onLoadUtilisateur(e){}initForm(){this.nosContactForm=new r.cw({id:new r.NI,nom:new r.NI(null,r.kI.required),prenom:new r.NI(null,r.kI.required),contact:new r.NI(null,r.kI.required),email:new r.NI(null,r.kI.required),commentaire:new r.NI(null,r.kI.required)})}showDialog(e){this.dialogVisible=!0,this.nosContactForm.patchValue({id:e.id}),this.nosContact.nom=e.nom,this.nosContact.prenom=e.prenom,this.nosContact.contact=e.contact,this.nosContact.email=e.email,this.nosContact.commentaire=e.commentaire,this.onOuvrirMessage(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(z.J))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-nos-contacts"]],decls:16,vars:17,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-md-12"],[1,"card"],["selectionMode","single","responsiveLayout","scroll","dataKey","id","styleClass","p-datatable-gridlines","currentPageReportTemplate","Affichage de {last} sur {totalRecords} elements","stateStorage","local","stateKey","statedemo-local",3,"value","rows","showCurrentPageReport","rowsPerPageOptions","selection","paginator","selectionChange"],["dt1",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["header","Message","appendTo","body",3,"resizable","modal","maximizable","visible","contentStyle","visibleChange"],[1,"sms"],["pTemplate","footer"],[1,"flex"],["pSortableColumn","nom"],["field","nom"],["pSortableColumn","prenom"],["field","prenom"],["pSortableColumn","contact"],["field","contact"],["pSortableColumn","email"],["field","email"],["pSortableColumn","commentaire"],["field","commentaire"],["pInputText","","type","text","placeholder","Filtrer par Nom",1,"p-column-filter",3,"value","input"],["pInputText","","type","text","placeholder","Filtrer par prenom",1,"p-column-filter",3,"value","input"],["pInputText","","type","text","placeholder","Filtrer par contact",1,"p-column-filter",3,"value","input"],["pInputText","","type","text","placeholder","Filtrer par email",1,"p-column-filter",3,"value","input"],[3,"pSelectableRow"],[1,"p-column-title"],["type","button","pButton","","icon","pi pi-external-link","label","View",3,"click"],["class","message-indicator",4,"ngIf"],[1,"message-indicator"],["colspan","4"],["type","button","pButton","","pRipple","","icon","pi pi-times","label","Dismiss",1,"p-button-text",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5"),t._uU(5,"Session Storage"),t.qZA(),t.TgZ(6,"p-table",4,5),t.NdJ("selectionChange",function(l){return o.noscontact=l}),t.YNc(8,j,1,0,"ng-template",6),t.YNc(9,L,25,4,"ng-template",7),t.YNc(10,$,23,6,"ng-template",8),t.YNc(11,V,3,0,"ng-template",9),t.qZA(),t.TgZ(12,"p-dialog",10),t.NdJ("visibleChange",function(l){return o.dialogVisible=l}),t.TgZ(13,"p",11),t._uU(14),t.qZA(),t.YNc(15,X,1,0,"ng-template",12),t.qZA()()()()()),2&e&&(t.xp6(6),t.Q6J("value",o.nosContacts)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(14,W))("selection",o.noscontact)("paginator",!0),t.xp6(6),t.Akn(t.DdM(15,k)),t.Q6J("resizable",!1)("modal",!0)("maximizable",!0)("visible",o.dialogVisible)("contentStyle",t.DdM(16,tt)),t.xp6(2),t.Oqu(o.nosContact.commentaire))},dependencies:[u.O5,m.Hq,g.o,f.jx,h.H,p.iA,p.lQ,p.Ei,p.fz,Z.V],styles:[".sms[_ngcontent-%COMP%]{font-size:2em;margin-top:2em;text-align:justify}.message-indicator[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;top:-2px;right:-3px;background-color:red}[_nghost-%COMP%]  .panelStyle.ng-template .ng-template-pTemplate{border-color:#f9b442;height:1em}[_nghost-%COMP%]  .panelStyle.p-table .ng-template-title{color:#f9b442}[_nghost-%COMP%]  .panelStyle.p-table .ng-template-content{border-color:#f9b442}"]}),n})();var nt=a(3831);const ot=[{path:"newsletter",component:I,data:{title:"newsletters",breadcrumb:[{label:"Dashboard",url:"/admin"},{label:"Data Liste/Newsletters",url:""}]}},{path:"nosContact",component:et,data:{title:"nosContact",breadcrumb:[{label:"Dashboard",url:"/admin"},{label:"Data Liste/Nos Contact",url:""}]}}];let lt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,m.hJ,g.j,q.L,r.u5,r.UX,J.Q,F.$9,P.$,O.O,h.T,C.XF,p.U$,E._8,Q.JH,Z.S,H.q4,R.vI,Y.kW,m.hJ,G.EV,g.j,D.q,nt.gS,d.Bz.forChild(ot),d.Bz,u.ez]}),n})()}}]);