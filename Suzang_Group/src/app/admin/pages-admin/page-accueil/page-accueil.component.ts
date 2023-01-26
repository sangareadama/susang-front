import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgToastService } from 'ng-angular-popup';
import { Accueil } from '../../modelAdmin/Accueil';
import { Atout } from '../../modelAdmin/Atout';
import { ContenusDePage } from '../../modelAdmin/ContenusDePage';
import { PageAccueil } from '../../modelAdmin/PageAccueil';
import { PageB1 } from '../../modelAdmin/PageB1';
import { Reference } from '../../modelAdmin/Reference';
import { PageAccueilService } from '../../serviceAdmin/PageAccueil/accueil-service.service';
import { ReferenceService } from '../../serviceAdmin/ReferenceService/reference.service';


@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {
 

  constructor(private toast: NgToastService, public referenceService:ReferenceService,private router:Router, public pageAccueilService :PageAccueilService) { }

  public references!:any;
  public  accueils!:any;
  public pageAccueils!: PageAccueil[];
  public pageAccueilBlocs!: any[];
  pageAccueilForm!:FormGroup;
  ReferenceForm!:FormGroup;
  Reference:Reference= new Reference(0,"",""); 
  pageAccueilFormUpdate!:FormGroup;
  pageAccueil:PageAccueil= new PageAccueil(0,0,"","",[]); 
  pageAccueilUpdate:PageAccueil= new PageAccueil(0,0,"","",[]);
  PageAccueil:Accueil= new Accueil(0,"","",0,0,"","","",0,0,"","","",0,0,);
  accueilFormUpdate!:FormGroup;
  contenusDePages!: any[];
  contenusDePagesTemp!: any[];
  contenusDePage:ContenusDePage=new ContenusDePage(0,"",0,0);
  contenusDePageUpdate:ContenusDePage=new ContenusDePage(0,"",0,0);
  contenusDePageForm!:FormGroup;  
  contenusDePageFormUpdate!:FormGroup; 
 

  contenus:any[]=[];

  submitted!: boolean;
  pageAccueilDialog!: boolean;  
  viewDialogVisible!: boolean;      
  AddContenuDialog!: boolean;
  AddContenuToBlocDialog!:boolean;
  UpdatePageAccueilDialog!: boolean; 
  UpdateContenuDialog!:boolean;
  AddContenuReelDialog!:boolean;
  userFile!:any;
  imgUrl:any=[];
  public imagePath:any;

  //static update
  UpdateB1PageAccueilDialog!:boolean;
  UpdateB2PageAccueilDialog!:boolean;
  UpdateB3PageAccueilDialog!:boolean;
  visibiliteB1Dialogue!:boolean;
  visibiliteB2Dialogue!:boolean;
  visibiliteB3Dialogue!:boolean;

  showUpdatB1Dialog(pageBlocSelected:any) {
    this.submitted = false;
    this.initB1FormUpdate();
    this.accueilFormUpdate.patchValue({
      id: pageBlocSelected.id
    });
   
    this.PageAccueil.titre11 = pageBlocSelected.titre11;
    this.PageAccueil.contenu11= pageBlocSelected.contenu11;
    this.PageAccueil.decalageHaut1 = pageBlocSelected.decalageHaut1;
    this.PageAccueil.decalageGauche1 = pageBlocSelected.decalageGauche1;
    this.PageAccueil.titre22 = pageBlocSelected.titre22;
    this.PageAccueil.contenu21 = pageBlocSelected.contenu21;
    this.PageAccueil.contenu22= pageBlocSelected.contenu22;
    this.PageAccueil.decalageHaut2 = pageBlocSelected.decalageHaut2;
    this.PageAccueil.decalageGauche2 = pageBlocSelected.decalageGauche2;
    this.PageAccueil.titre33 = pageBlocSelected.titre33;
    this.PageAccueil.contenu31 = pageBlocSelected.contenu31;
    this.PageAccueil.contenu32 = pageBlocSelected.contenu32;
    this.PageAccueil.decalageHaut3 = pageBlocSelected.decalageHaut3;
    this.PageAccueil.decalageGauche3 = pageBlocSelected.decalageGauche3;
  }

  

  initB1FormUpdate() {  
    
    this.accueilFormUpdate = new FormGroup({

    id: new FormControl(),
    titre11:new FormControl(null, Validators.required) ,
    contenu11:new FormControl(null, Validators.required) ,
    decalageHaut1:new FormControl(null, Validators.required) ,
    decalageGauche1:new FormControl(null, Validators.required) ,
    titre22:new FormControl(null, Validators.required) ,
    contenu21:new FormControl(null, Validators.required) ,
    contenu22:new FormControl(null, Validators.required) ,
    decalageHaut2:new FormControl(null, Validators.required) ,
    decalageGauche2:new FormControl(null, Validators.required) ,
    titre33:new FormControl(null, Validators.required) ,
    contenu31:new FormControl(null, Validators.required) ,
    contenu32:new FormControl(null, Validators.required) ,  
    decalageHaut3:new FormControl(null, Validators.required) ,
    decalageGauche3:new FormControl(null, Validators.required) ,
    })  
}        

   
UpdateAccueilPage(){ 
    this.pageAccueilService.addAccueil(this.accueilFormUpdate.value).subscribe(
      (response)=>{
        this.onGetAccueil();
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
        
      },
      (error)=>{ 
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
        console.log('Une erreure à survenue: '+ error);
      }
    ) 
  }


  ngOnInit(): void { 
    this.onGetAccueil()
    this.initForm(),
    this.initFormContenusDePage()
    this.onGetReference();
    this.onGetPageAccueil()
    this.onGetContenusdePage();
    this.onGetContenusdePageTemp();
    this.initFormUpdate();
  } 

openNew() {  
  this.submitted = false;
  this.pageAccueilDialog = true;
}

openView() {
  this.viewDialogVisible = true;
} 
openContenusDePage() {
  this.initFormContenusDePage(); 
  
  this.submitted = false;
  this.AddContenuDialog = true;
}

openAddContenusPageReel() {
  this.initFormContenusDePage(); 
  this.submitted = false;
  this.AddContenuReelDialog = true;
}

public onGetAccueil(){
  this.pageAccueilService.getAccueil().subscribe(
    (response:any[])=>{   
      this.accueils=response;
      console.log(this.accueils)
    },
    (error:HttpErrorResponse)=>{
        // alert(error.message);
    }
  );
} 

hideDialog() {
  this.initForm();
  // this.pageAccueilDialog = false;
  this.submitted = false;
  this.AddContenuDialog=false;
  

 this.UpdatePageAccueilDialog=false;
}
hideDialogReel(){
  this.UpdateContenuDialog=false;
  this.AddContenuReelDialog=false;
}

addData(){
  console.log(this.pageAccueilForm.value)
  this.submitted = true;  
  const formData = new FormData();
  const pageAc =this.pageAccueilForm.value;
  formData.append('pageAccueil',JSON.stringify(pageAc));
  formData.append('file',this.userFile);
  for(var i=0;i<this.contenusDePagesTemp.length;i++){
    this.contenus.push(this.contenusDePagesTemp[i].id)
  }
  formData.append('contenus',JSON.stringify(this.contenus));
   this.contenus=[];
  this.pageAccueilService.createData(formData).subscribe(
    (response)=>{
      this.initForm()
      this.onGetPageAccueil();
      this.onGetContenusdePageTemp();
      this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
    },
    (error)=>{ 
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      console.log('Une erreure à survenue: '+ error);
    }
  ) 
}


updateData(){
  this.submitted = true;  
  const formData = new FormData();
  const pageAc =this.pageAccueilFormUpdate.value;
  formData.append('pageAccueil',JSON.stringify(pageAc));
  formData.append('file',this.userFile);
  // if(this.userFile==null){
  //   this.onSelectImage(this.pageAccueilService.apiServerUrl+'/api/imagePageAccueil/'+pageAccueilUpdate.id)
    
  //   this.toast.error({detail:"PAS d'image",summary:'Une erreure à survenue: ',duration:2000})
  // } 
  
  this.pageAccueilService.updateData(formData).subscribe(
    (response)=>{
      this.initForm()
      this.onGetPageAccueil();
      this.onGetContenusdePageTemp();
      this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
    },
    (error)=>{  
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      console.log('Une erreure à survenue: '+ error);
    }   
  ) 
}


   
// onAddContenuToBloc(){
//   this.submitted = true;  
//   const formData = new FormData();
//   const contPage=this.contenusDePage;
//   formData.append('contenuPage',JSON.stringify(contPage))
//   for(var i=0;i<this.selectedBlocs.length;i++){
//     formData.append(
//       'selectedBlocs',
//       this.selectedBlocs[i]

//     );  
//   }

//   this.pageAccueilService.addContenuToBloc(formData).subscribe(
//     (response)=>{
//       this.initForm()
//       this.onGetPageAccueil();
//       this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
//     },
//     (error)=>{ 
//       this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
//       console.log('Une erreure à survenue: '+ error);
//     }
//   ) 

// }



onSelectImage(event:any){

  if(event.target.files.length>0){
    const file = event.target.files[0];
    this.userFile=file;
    var mimeType=event.target.files[0].type;
    if(mimeType.match(/image\/*/)==null){
      this.toast.error({detail:"Error Message",summary:'Seules les images sont autorisés: ',duration:2000});
      return;         
    }
    var reader = new FileReader();   
    this.imagePath=file;
    reader.readAsDataURL(file);
     reader.onload = (_event)=>{
    this.imgUrl=reader.result;

    }
  }
  
}


  initForm() {  
      this.pageAccueilForm = new FormGroup({

      id: new FormControl(),
      ordre:new FormControl(null, Validators.required) ,
      titre:new FormControl(null, Validators.required) ,
      })  
      this.imgUrl=[];
  }  
  
  initFormUpdate() {  
    
    this.pageAccueilFormUpdate = new FormGroup({

    id: new FormControl(),
    ordre:new FormControl(null, Validators.required) ,
    titre:new FormControl(null, Validators.required) ,
    })  
}        

  public onGetPageAccueil(){
    this.pageAccueilService.getPageAccueil().subscribe(
      (response:any[])=>{
        this.pageAccueils=response;
        console.log(this.pageAccueils)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 

  public saveOrUpdatePageAccueil(){
    this.submitted = true;  
    this.pageAccueilService.addPageAccueil(this.pageAccueilForm.value).subscribe(
      (response)=>{
        this.onGetPageAccueil();
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
        console.log('Une erreure à survenue: '+ error);
      }
    ) 
  }

   onLoadAccueil(PageAccueilLorded:any){
    this.openView();
    this.pageAccueilForm.patchValue({
      id: PageAccueilLorded.id
    });
    this.pageAccueil.id = PageAccueilLorded.id;
    this.pageAccueil.ordre = PageAccueilLorded.ordre;  
    this.pageAccueil.titre = PageAccueilLorded.titre;    
  }

  //contenus de pages
 
initFormContenusDePage() {  
    this.contenusDePageForm = new FormGroup({

    id: new FormControl(), 
    libelle:new FormControl(null, Validators.required) ,
    decalageHaut:new FormControl(null, Validators.required) ,
    decalageGauche:new FormControl(null, Validators.required) ,
    })  
} 

public onGetContenusdePage(){
  this.pageAccueilService.getContenusDePage().subscribe(
    (response:any[])=>{
      this.contenusDePages=response;
      console.log(this.contenusDePages)
    },
    (error:HttpErrorResponse)=>{
        // alert(error.message);
    }
  );
} 

public onGetContenusdePageTemp(){
  this.pageAccueilService.getContenusDePageTemp().subscribe(
    (response:any[])=>{  
      this.contenusDePagesTemp=response;
      console.log(this.contenusDePagesTemp)
    },
    (error:HttpErrorResponse)=>{
        // alert(error.message);
    }
  );
} 

public saveContenusdePage(){  
  this.submitted = true;  
  this.pageAccueilService.addContenusDePage(this.contenusDePageForm.value).subscribe(
    (response)=>{
      this.onGetPageAccueil()
      this.initFormContenusDePage()
      this.onGetContenusdePageTemp();
      this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
    },  
    (error)=>{ 
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      console.log('Une erreure à survenue: '+ error);
    }
  ) 
}



public onDeleteContenuPageTemp(contenusDePage:any){
  this.pageAccueilService.deleteContenuTemp(contenusDePage).subscribe(
      (response)=>{
        this.onGetContenusdePageTemp();
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
  );
}

showUpdatDialog(pageBlocSelected:any) {

  this.submitted = false;
  this.UpdatePageAccueilDialog = true;

  this.pageAccueilFormUpdate.patchValue({
    id: pageBlocSelected.id
  });
 
  this.pageAccueilUpdate.id = pageBlocSelected.id;
  this.pageAccueilUpdate.ordre = pageBlocSelected.ordre;
  this.pageAccueilUpdate.titre = pageBlocSelected.titre;
  this.pageAccueilUpdate.contenus= pageBlocSelected.contenus; 
  
}

showUpdatDialogRev(pageBlocSelected:any) {

  this.pageAccueilFormUpdate.patchValue({
    id: pageBlocSelected.id
  });
  this.pageAccueilUpdate.id = pageBlocSelected.id;
  this.pageAccueilUpdate.ordre = pageBlocSelected.ordre;
  this.pageAccueilUpdate.titre = pageBlocSelected.titre;
  this.pageAccueilUpdate.contenus= pageBlocSelected.contenus; 
   
}

UpdatecontenusDePage(contenusDePageSelected:any){

  this.submitted = false;
  this.UpdateContenuDialog=true;
  this.initFormContenuUpdate();
  this.contenusDePageFormUpdate.patchValue({
    id: contenusDePageSelected.id
  });
  this.contenusDePageUpdate.libelle = contenusDePageSelected.libelle;
  this.contenusDePageUpdate.decalageHaut = contenusDePageSelected.decalageHaut;
  this.contenusDePageUpdate.decalageGauche = contenusDePageSelected.decalageGauche;
}

initFormContenuUpdate() {  
    
  this.contenusDePageFormUpdate = new FormGroup({

  id: new FormControl(),
  libelle:new FormControl(null, Validators.required),
  decalageHaut:new FormControl(null, Validators.required),
  decalageGauche:new FormControl(null, Validators.required),
  })  
}

initFormContenu() {  
    
  this.contenusDePageForm = new FormGroup({

  id: new FormControl(), 
  libelle:new FormControl(null, Validators.required) ,
  decalageHaut:new FormControl(null, Validators.required) ,
  decalageGauche:new FormControl(null, Validators.required) ,
  })  
}

public OnUdpateContenusdePage(){  
  this.submitted = true;  
  this.pageAccueilService.updateContenusDePage(this.contenusDePageFormUpdate.value).subscribe(
    (response:any)=>{
      //recuperer le bloc et afficher les modifs
      this.showUpdatDialogRev(response)
      this.onGetPageAccueil();
      this.initFormContenuUpdate(); 
      this.onGetContenusdePage();
      this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
    },  
    (error)=>{ 
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      console.log('Une erreure à survenue: '+ error);
    }
  ) 
}

public onDeleteContenuPage(contenusDePage:any){
  this.pageAccueilService.deleteContenuReel(contenusDePage).subscribe(
      (response:any)=>{
        //recuperer le bloc et afficher les modifs
        this.showUpdatDialogRev(response) 
        this.onGetPageAccueil()
        this.onGetContenusdePageTemp();
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
  );
}

public deleteBloc(pageBloc:any){
  this.pageAccueilService.deletePageBloc(pageBloc).subscribe(
      (response:any)=>{
        //recuperer le bloc et afficher les modifs
        this.onGetPageAccueil()
        this.onGetContenusdePageTemp();
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
  );
}
  
public saveContenusdePageReel(){    
  this.submitted = true;  
  this.pageAccueilService.addContenusDePageReel(this.pageAccueilFormUpdate.value,this.contenusDePageForm.value).subscribe(
    (response)=>{
      this.showUpdatDialogRev(response)
      this.onGetPageAccueil()  
      // this.initFormContenusDePage();
      // this.onGetContenusdePageTemp();  
      this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
    },  
    (error)=>{   
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      console.log('Une erreure à survenue: '+ error);
    }
  ) 
}

public onGetReference(){
  this.referenceService.getReferences().subscribe(
    (response:any)=>{
      this.references=response;
      console.log(this.references)
      this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
    }, 
    (error:HttpErrorResponse)=>{
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
        // alert(error.message);
    }
  );
}

addReference(){
  console.log(this.ReferenceForm.value)
  this.submitted = true;  
  const formData = new FormData();
  const Ref =this.ReferenceForm.value;
  formData.append('Reference',JSON.stringify(Ref));
  formData.append('file',this.userFile);
 
  this.referenceService.AddReference(formData).subscribe(
    (response)=>{
      this.initForm()
      this.onGetPageAccueil();
      this.initReferenceForm();
      this.onGetContenusdePageTemp();
      this.onGetReference()
      this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
    },
    (error)=>{   
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      console.log('Une erreure à survenue: '+ error);
    }
  )   
}

initReferenceForm() {  
  this.ReferenceForm = new FormGroup({
  id: new FormControl(),
  nom:new FormControl(null, Validators.required) ,
  })  
  this.imgUrl=[];
} 
referenceDialog!:boolean;

openNewReference(){
  this.referenceDialog=true;
  this.initReferenceForm();
}


public deleteReference(ref:any){
  this.referenceService.deleteReference(ref).subscribe(
      (response:any)=>{
        //recuperer le bloc et afficher les modifs
        this.onGetPageAccueil()
        this.onGetReference();
        this.initReferenceForm();
        this.onGetContenusdePageTemp();
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
  );
}


// onLoadAddContenuToBloc(contenusDePageLoded:any) {
//   this.AddContenuToBlocDialog = true;

//   this.contenusDePageForm.patchValue({
//     id: contenusDePageLoded.id
//   });
//   this.contenusDePage.id = contenusDePageLoded.id;
//   this.contenusDePage.designation = contenusDePageLoded.designation;
//   this.contenusDePage.libelle = contenusDePageLoded.libelle;

// } 

// multileSelected(){
//   console.log(this.selectedBlocs)
// }









  // public accueils!: Accueil[]; 
  // message!:string;
  // accueilForm!:FormGroup;
  // accueil:Accueil= new Accueil(0,"","","","","","","","");


  // ngOnInit(): void { 
  //   this.initForm(),
  //   this.onGetAccueil()
  // } 


  // initForm() {  
  //     this.accueilForm = new FormGroup({

  //     id: new FormControl(),
  //     titre11:new FormControl(null, Validators.required) ,
  //     contenu11:new FormControl(null, Validators.required) ,
  //     titre22:new FormControl(null, Validators.required) ,
  //     contenu21:new FormControl(null, Validators.required) ,
  //     contenu22:new FormControl(null, Validators.required) ,
  //     titre33:new FormControl(null, Validators.required) ,
  //     contenu31:new FormControl(null, Validators.required) ,
  //     contenu32:new FormControl(null, Validators.required) ,

  //   });
  // }

  // public onGetAccueil(){
  //   this.pageAccueilService.getAccueil().subscribe(
  //     (response:Accueil[])=>{
  //       this.accueils=response;
  //       console.log(this.accueils)
  //     },
  //     (error:HttpErrorResponse)=>{
  //         // alert(error.message);
  //     }
  //   );
  // } 

  // saveOrUpdateAtout(){
  //   this.pageAccueilService.addAccueil(this.accueilForm.value).subscribe(
  //     (response)=>{
  //       this.onGetAccueil();
  //       this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
  //       this.message="operation effectuée avec succès !"
  //     },
  //     (error)=>{ 
  //       this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
  //       console.log('Une erreure à survenue: '+ error);
  //     }
  //   ) 
  // }
 
  // onLoadAccueil(accueilLorded:any){
  //   this.accueilForm.patchValue({
  //     id: accueilLorded.id
  //   });

  //   this.accueil.titre11 = accueilLorded.titre11;
  //   this.accueil.contenu11 = accueilLorded.contenu11;
  //   this.accueil.titre22 = accueilLorded.titre22;
  //   this.accueil.contenu21 = accueilLorded.contenu21;
  //   this.accueil.contenu22= accueilLorded.contenu22;
  //   this.accueil.titre33 = accueilLorded.titre33;
  //   this.accueil.contenu31 = accueilLorded.contenu31;
  //   this.accueil.contenu32 = accueilLorded.contenu32;
    
  // }

  // editorConfig: AngularEditorConfig = {
  //   editable: true,
  //     spellcheck: true,
  //     height: 'auto',
  //     minHeight: '0', 
  //     maxHeight: 'auto',
  //     width: 'auto',
  //     minWidth: '0',  
  //     translate: 'yes',
  //     enableToolbar: true,
  //     showToolbar: true, 
  //     placeholder: 'Enter text here...',
  //     defaultParagraphSeparator: '',
  //     defaultFontName: '',
  //     defaultFontSize: '',
  //     fonts: [
  //       {class: 'arial', name: 'Arial'},
  //       {class: 'times-new-roman', name: 'Times New Roman'},
  //       {class: 'calibri', name: 'Calibri'},
  //       {class: 'comic-sans-ms', name: 'Comic Sans MS'}
  //     ],
  //     customClasses: [
  //     {
  //       name: 'quote',
  //       class: 'quote',
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: 'titleText',
  //       class: 'titleText',
  //       tag: 'h1',
  //     },
  //   ],
  //   uploadUrl: 'v1/image',
  // }


}
