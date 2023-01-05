"use strict";(self.webpackChunkProjectBases=self.webpackChunkProjectBases||[]).push([[634],{2634:(E,c,s)=>{s.r(c),s.d(c,{UtilisateurRoutingModule:()=>Q});var d=s(6217),o=s(433);class b{constructor(l,t){this.id=l,this.libelle=t}}var e=s(1571),v=s(2340),_=s(529),U=s(6214);let p=(()=>{class r{constructor(t,i){this.http=t,this.login=i,this.apiServerUrl=v.N.apiBaseUrl}getRoles(){return this.http.get(`${this.apiServerUrl}/api/role/liste`)}addRole(t){return alert("on "+t.libelle),this.http.post(`${this.apiServerUrl}/api/role/save`,t)}updateRole(t){return this.http.post(`${this.apiServerUrl}/api/user/updaterole`,t)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(_.eN),e.LFG(U.r))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),Z=(()=>{class r{constructor(t){this.roleService=t,this.roleShema=[],this.role=new b(0,"")}ngOnInit(){this.initForm(),this.getRole()}initForm(){this.roleForm=new o.cw({id:new o.NI,libelle:new o.NI(null,o.kI.required)})}getRole(){this.roleService.getRoles().subscribe(t=>{this.roles=t,console.log(this.roles),t.length>0&&Object.keys(t[0]).forEach(i=>{this.roleShema.push({header:i,field:i})})},t=>{alert(t.message)})}openNew(){this.submitted=!1,this.roleDialog=!0}hideDialog(){this.roleDialog=!1,this.submitted=!1}saveRole(){this.submitted=!0,this.roleService.addRole(this.roleForm.value).subscribe(t=>{this.getRole(),this.message="operation effectu\xe9e avec succ\xe8s !"},t=>{console.log("Une erreure \xe0 survenue: "+t)})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-roles"]],decls:7,vars:0,consts:[[1,"main"],[1,"p-float-label"],["id","float-input","type","text","pInputText",""],["for","float-input"]],template:function(t,i){1&t&&(e.TgZ(0,"p"),e._uU(1,"roles works!"),e.qZA(),e.TgZ(2,"div",0)(3,"span",1),e._UZ(4,"input",2),e.TgZ(5,"label",3),e._uU(6,"Username"),e.qZA()()())}}),r})();var C=s(4004);class T{constructor(l,t,i,n,a,u,m){this.id=l,this.nom=t,this.prenom=i,this.username=n,this.password=a,this.utilisateurImage=u,this.roles=m}}class M{constructor(l,t){this.username=l,this.libelle=t}}var F=s(6917),w=s(1481),y=s(2984),R=s(8768),g=s(6895),h=s(7676),I=s(284),f=s(782);function q(r,l){if(1&r&&(e.TgZ(0,"div",58)(1,"a",59),e._UZ(2,"img",60),e.qZA()()),2&r){const t=l.$implicit;e.xp6(2),e.Q6J("src",t.url,e.LSH)}}function x(r,l){if(1&r&&(e.TgZ(0,"div",41)(1,"p",42),e._uU(2),e.qZA()()),2&r){const t=l.$implicit;e.xp6(2),e.Oqu(t.libelle)}}function A(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"div",37)(1,"div",38)(2,"div",39),e.YNc(3,q,3,1,"div",40),e.TgZ(4,"div",41)(5,"h5"),e._uU(6),e.qZA(),e.TgZ(7,"p",42),e._uU(8),e.qZA()()(),e.TgZ(9,"ul",43)(10,"li",44),e._UZ(11,"i",45),e._uU(12,"Email : "),e.TgZ(13,"a",46),e._uU(14),e.qZA()(),e.TgZ(15,"li",44),e._UZ(16,"i",47),e._uU(17),e.qZA()(),e.YNc(18,x,3,1,"div",48),e.TgZ(19,"div",49)(20,"div",50)(21,"a",51),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.onLoadUtilisateur(a))}),e._UZ(22,"i",52),e.qZA(),e.TgZ(23,"a",53),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.deleteUtilisateur(a))}),e._UZ(24,"i",54),e.qZA()(),e.TgZ(25,"div",55)(26,"a",56),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.onLoadUtilisateurRole(a))}),e._UZ(27,"i",57),e.qZA()()()()()}if(2&r){const t=l.$implicit;e.xp6(3),e.Q6J("ngForOf",t.utilisateurImage),e.xp6(3),e.Oqu(t.nom),e.xp6(2),e.Oqu(t.prenom),e.xp6(6),e.Oqu(t.username),e.xp6(3),e.Oqu(t.password),e.xp6(1),e.Q6J("ngForOf",t.roles)}}function N(r,l){if(1&r&&(e.TgZ(0,"div",8)(1,"span",61),e._uU(2),e.qZA()()),2&r){const t=e.oxw();e.xp6(2),e.Oqu(t.message)}}function S(r,l){if(1&r){const t=e.EpF();e.TgZ(0,"mat-grid-tile")(1,"div",62)(2,"span",63),e.NdJ("click",function(){const a=e.CHM(t).index,u=e.oxw();return e.KtG(u.removeImage(a))}),e._uU(3,"X"),e.qZA(),e._UZ(4,"img",64),e.qZA()()}if(2&r){const t=l.$implicit;e.xp6(4),e.Q6J("src",t.url,e.LSH)}}function J(r,l){if(1&r&&(e.TgZ(0,"div",8)(1,"span",61),e._uU(2),e.qZA()()),2&r){const t=e.oxw();e.xp6(2),e.Oqu(t.message)}}function O(r,l){if(1&r&&(e.TgZ(0,"option",65),e._uU(1),e.qZA()),2&r){const t=l.$implicit;e.Q6J("ngValue",t.libelle),e.xp6(1),e.Oqu(t.libelle)}}const k=[{path:"roles",component:Z},{path:"liste",component:(()=>{class r{constructor(t,i,n,a,u,m,Y){this.roleService=t,this.utilisateurService=i,this.formBuilder=n,this.sanitazer=a,this.utilisateurImageDatailService=u,this.toast=m,this.router=Y,this.utilisateur=new T(0,"","","","",[],[]),this.utilisateurRole=new M("","")}ngOnInit(){this.getRole(),this.getUtilisateur(),this.initForm(),this.initFormUR()}getRole(){this.roleService.getRoles().subscribe(t=>{this.roles=t,console.log(this.roles)},t=>{alert(t.message)})}getUtilisateur(){this.utilisateurService.getUtilisateurs().pipe((0,C.U)((t,i)=>t.map(n=>this.utilisateurImageDatailService.createImage(n)))).subscribe(t=>{this.utilisateurs=t,console.log(this.utilisateurs)},t=>{})}initForm(){this.utilisateurForm=new o.cw({id:new o.NI,nom:new o.NI(null,o.kI.required),prenom:new o.NI(null,o.kI.required),username:new o.NI(null,o.kI.required),password:new o.NI(null,o.kI.required)})}initFormUR(){this.utilisateurRoleForm=new o.cw({username:new o.NI(null,o.kI.required),libelle:new o.NI(null,o.kI.required)})}saveOrUpdateUtilisateur(){const t=this.prepareFormData(this.utilisateur);this.utilisateurService.addUtilisateur(t).subscribe(i=>{this.getUtilisateur(),this.utilisateur.utilisateurImage=[],this.toast.success({detail:"Success Message",summary:"operation effectu\xe9e avec succ\xe8s !",duration:2e3})},i=>{console.log("Une erreure \xe0 survenue: "+i),this.toast.error({detail:"Error Message",summary:"Une erreure \xe0 survenue: "+i,duration:2e3})})}onLoadUtilisateur(t){console.log("voici "+t),this.utilisateurForm.patchValue({id:t.id}),this.utilisateur.nom=t.nom,this.utilisateur.prenom=t.prenom,this.utilisateur.username=t.username,this.utilisateur.password=t.password}deleteUtilisateur(t){this.utilisateurService.deleteUtilisateur(t).subscribe(i=>{console.warn(i),this.getUtilisateur(),this.toast.success({detail:"Success Message",summary:"operation effectu\xe9e avec succ\xe8s !",duration:2e3})},i=>{this.toast.error({detail:"Error Message",summary:"summary:Une erreure \xe0 survenue: "+i,duration:2e3})})}onLoadUtilisateurRole(t){this.utilisateurRoleForm.patchValue({id:t.id}),this.utilisateurRole.username=t.username,this.utilisateurRole.libelle=t.libelle}onSaveUtilisateurRole(){this.utilisateurService.saveUtilisateurRole(this.utilisateurRole).subscribe(t=>{this.toast.success({detail:"Success Message",summary:"operation effectu\xe9e avec succ\xe8s !",duration:2e3})},t=>{this.toast.error({detail:"Error Message",summary:"summary:Une erreure \xe0 survenue: "+t,duration:2e3})})}removeImage(t){this.utilisateur.utilisateurImage.splice(t,1)}prepareFormData(t){const i=new FormData;i.append("utilisateur",new Blob([JSON.stringify(t)],{type:"application/json"}));for(var n=0;n<t.utilisateurImage.length;n++)i.append("imageFile",t.utilisateurImage[n].file,t.utilisateurImage[n].file.name);return i}onFileSelected(t){if(t.target.files){const i=t.target.files[0],n={file:i,url:this.sanitazer.bypassSecurityTrustUrl(window.URL.createObjectURL(i))};this.utilisateur.utilisateurImage.push(n)}}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(p),e.Y36(F.y),e.Y36(o.qu),e.Y36(w.H7),e.Y36(y.w),e.Y36(R.s),e.Y36(d.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-utilisateur"]],decls:70,vars:13,consts:[["id","main-container",1,"container"],[1,"container"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-primary",3,"click"],[1,"row"],["class","col-md-6 col-xl-3",4,"ngFor","ngForOf"],["id","exampleModal","aria-labelledby","exampleModalLabel",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["class","modal-header",4,"ngIf"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"formGroup","ngSubmit"],["appearance","outline",1,"full-width"],["name","nom","formControlName","nom","matInput","","required","","placeholder","Entrer ici",3,"ngModel","ngModelChange"],["name","prenom","formControlName","prenom","matInput","","required","","placeholder","Entrer ici",3,"ngModel","ngModelChange"],["name","username","formControlName","username","matInput","","required","","placeholder","Entrer email",3,"ngModel","ngModelChange"],["name","password","formControlName","password","matInput","","type","password","placeholder","Entrer password",3,"ngModel","ngModelChange"],[1,"form-group","col-md-12"],["for","Image"],["type","file","multiple","","value","#selectFile","accept","image/*",1,"validate",3,"change"],["fileInput",""],[1,"mt-5"],["cols","3","rowHeight","1:1"],[4,"ngFor","ngForOf"],["id","btnSend","type","submit",1,"btn","btn-primary",3,"disabled"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["id","addRoleToUser","aria-labelledby","addRoleToUser",1,"modal","fade"],["id","addRoleToUser",1,"modal-title","fs-5"],[1,"form-group"],[1,"control-label"],["id","libelle","aria-placeholder","selectionner Role","formControlName","libelle","required","",1,"form-control",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["data-bs-dismiss","modal","id","btnSend","type","submit",1,"btn","btn-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary",3,"click"],[1,"col-md-6","col-xl-3"],[1,"card","m-b-30"],[1,"card-body","row"],["class","col-6",4,"ngFor","ngForOf"],[1,"col-6","card-title","align-self-center","mb-0"],[1,"m-0"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"fa","fa-envelope","float-right"],["href","#"],[1,"fa","fa-phone","float-right"],["class","col-6 card-title align-self-center mb-0",4,"ngFor","ngForOf"],[1,"card-body"],[1,"float-right","btn-group","btn-group-sm"],["data-placement","top","type","button","data-bs-toggle","modal","data-bs-target","#exampleModal","data-original-title","Edit",1,"btn","btn-primary","tooltips",3,"click"],[1,"fa","fa-pencil"],["data-placement","top","type","button","data-bs-toggle","modal","data-original-title","Delete",1,"btn","btn-secondary","tooltips",3,"click"],[1,"fa","fa-times"],[1,"float-left","btn-group","btn-group-sm"],["data-placement","top","type","button","data-bs-target","#addRoleToUser","data-bs-toggle","modal","data-original-title","Delete",1,"btn","btn-warning","tooltips",3,"click"],[1,"fa","fa-edit"],[1,"col-6"],["href",""],["alt","",1,"img-fluid","rounded-circle",3,"src"],[1,"alert","alert-info"],[2,"position","relative"],[1,"btn-remove-image",3,"click"],["alt","image","width","100px","height","100px",3,"src"],[3,"ngValue"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return i.initForm()}),e._uU(3," Add User "),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,A,28,6,"div",4),e.qZA()(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8),e.YNc(10,N,3,1,"div",9),e.TgZ(11,"h1",10),e._uU(12,"Add User"),e.qZA(),e._UZ(13,"button",11),e.qZA(),e.TgZ(14,"div",12)(15,"form",13),e.NdJ("ngSubmit",function(){return i.saveOrUpdateUtilisateur()}),e.TgZ(16,"div",3)(17,"mat-form-field",14)(18,"input",15),e.NdJ("ngModelChange",function(a){return i.utilisateur.nom=a}),e.qZA(),e.TgZ(19,"mat-label"),e._uU(20,"Nom"),e.qZA()()(),e.TgZ(21,"div",3)(22,"mat-form-field",14)(23,"input",16),e.NdJ("ngModelChange",function(a){return i.utilisateur.prenom=a}),e.qZA(),e.TgZ(24,"mat-label"),e._uU(25,"Prenom"),e.qZA()()(),e.TgZ(26,"div",3)(27,"mat-form-field",14)(28,"input",17),e.NdJ("ngModelChange",function(a){return i.utilisateur.username=a}),e.qZA(),e.TgZ(29,"mat-label"),e._uU(30,"Username(Email)"),e.qZA()()(),e.TgZ(31,"div",3)(32,"mat-form-field",14)(33,"input",18),e.NdJ("ngModelChange",function(a){return i.utilisateur.password=a}),e.qZA(),e.TgZ(34,"mat-label"),e._uU(35,"Password"),e.qZA()()(),e.TgZ(36,"div",19)(37,"label",20),e._uU(38,"Photo"),e.qZA(),e.TgZ(39,"input",21,22),e.NdJ("change",function(a){return i.onFileSelected(a)}),e.qZA()(),e.TgZ(41,"div",23)(42,"div",3)(43,"mat-grid-list",24),e.YNc(44,S,5,1,"mat-grid-tile",25),e.qZA()()(),e.TgZ(45,"button",26),e._uU(46,"Enregistrer"),e.qZA()()(),e.TgZ(47,"div",27)(48,"button",28),e.NdJ("click",function(){return i.initForm()}),e._uU(49,"Close"),e.qZA()()()()(),e.TgZ(50,"div",29)(51,"div",6)(52,"div",7)(53,"div",8),e.YNc(54,J,3,1,"div",9),e.TgZ(55,"h1",30),e._uU(56,"Add User"),e.qZA(),e._UZ(57,"button",11),e.qZA(),e.TgZ(58,"div",12)(59,"form",13),e.NdJ("ngSubmit",function(){return i.onSaveUtilisateurRole()}),e.TgZ(60,"div",31)(61,"label",32),e._uU(62,"Role:"),e.qZA(),e.TgZ(63,"select",33),e.NdJ("ngModelChange",function(a){return i.utilisateurRole.libelle=a}),e.YNc(64,O,2,2,"option",34),e.qZA()(),e.TgZ(65,"button",35),e._uU(66,"Enregistrer"),e.qZA()()(),e.TgZ(67,"div",27)(68,"button",36),e.NdJ("click",function(){return i.initForm()}),e._uU(69,"Close"),e.qZA()()()()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",i.utilisateurs),e.xp6(5),e.Q6J("ngIf",i.message),e.xp6(5),e.Q6J("formGroup",i.utilisateurForm),e.xp6(3),e.Q6J("ngModel",i.utilisateur.nom),e.xp6(5),e.Q6J("ngModel",i.utilisateur.prenom),e.xp6(5),e.Q6J("ngModel",i.utilisateur.username),e.xp6(5),e.Q6J("ngModel",i.utilisateur.password),e.xp6(11),e.Q6J("ngForOf",i.utilisateur.utilisateurImage),e.xp6(1),e.Q6J("disabled",i.utilisateurForm.invalid),e.xp6(9),e.Q6J("ngIf",i.message),e.xp6(5),e.Q6J("formGroup",i.utilisateurRoleForm),e.xp6(4),e.Q6J("ngModel",i.utilisateurRole.libelle),e.xp6(1),e.Q6J("ngForOf",i.roles))},dependencies:[g.sg,g.O5,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,o.sg,o.u,h.KE,h.hX,I.Nt,f.Il,f.DX],styles:[".modal-header[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]{background-color:#fff}.full-width[_ngcontent-%COMP%]{color:gray}.img-fluid[_ngcontent-%COMP%]{width:7em;height:7em}.modal-body[_ngcontent-%COMP%]{background-color:#381e06}#btnSend[_ngcontent-%COMP%]{height:7vh;width:100%;font-size:1.5vw;margin-top:1vw;border-radius:.3em;background:rgb(21,21,21);background:linear-gradient(to top,rgb(72,72,72),rgb(72,72,72));color:#fff;border:1px solid rgb(72,72,72)}#btnSend[_ngcontent-%COMP%]:hover{border:1px solid black;background:white;color:#333}.float-left[_ngcontent-%COMP%]{margin-left:5em}mat-grid-tile[_ngcontent-%COMP%]{border:2px dashed white}.btn-remove-image[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:-5px;right:-5px;background-color:red;color:#fff;border-radius:50%;width:20px;height:auto;text-align:center}"]}),r})(),data:{title:"Liste",breadcrumb:[{label:"Dashboard",url:"/admin"},{label:"Utilisateur/Liste",url:""}]}}];let Q=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.Bz.forChild(k),d.Bz]}),r})()}}]);