import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Presentation } from '../../modelAdmin/Presentation';
import { PresentationService } from '../../serviceAdmin/presentation.service';
import {Message} from 'primeng/api';

import {MenuItem} from 'primeng/api';
import { NgToastService } from 'ng-angular-popup';
import { PageAccueil } from '../../modelAdmin/PageAccueil';
import { ContenusDePage } from '../../modelAdmin/ContenusDePage';
import { PageBloc } from '../../modelAdmin/PageBloc';



@Component({  
  selector: 'app-page-presentation',
  templateUrl: './page-presentation.component.html',
  styleUrls: ['./page-presentation.component.css',],
  // encapsulation:ViewEncapsulation.None
})
export class PagePresentationComponent implements OnInit {

  items!: MenuItem[];  

  constructor(private toast: NgToastService, private primengConfig: PrimeNGConfig,public presentationService:PresentationService) { }
 
  public presentationPages!: Presentation[];
  public presentations!: Presentation[];
  UpdatePresentationDialog!: boolean;
  visibiliteDialogue!: boolean;
  message!:string;
  presentationForm!:FormGroup;
  pageBlocForm!:FormGroup;
  pageBlocFormUpdate!:FormGroup;
  pageBloc:PageBloc= new PageBloc(0,"","",[]);
  presentationPage:Presentation= new Presentation(0,"","");
  pageBlocUpdate:PageBloc= new PageBloc(0,"","",[]);
  contenusDePages!: any[];
  contenusDePagesTemp!: any[];
  contenusDePage:ContenusDePage=new ContenusDePage(0,"",0,0);
  contenusDePageUpdate:ContenusDePage=new ContenusDePage(0,"",0,0);
  contenusDePageForm!:FormGroup;  
  contenusDePageFormUpdate!:FormGroup; 
  contenus:any[]=[];
  userFile!:any;
  imgUrl:any=[];
  public imagePath:any;

  submitted!: boolean;
  AddBlocDialog!: boolean;  
  viewDialogVisible!: boolean;      
  AddContenuDialog!: boolean;
  AddContenuToBlocDialog!:boolean;
  UpdatePageBlocDialog!: boolean; 
  UpdateContenuDialog!:boolean;
  AddContenuReelDialog!:boolean;

  ngOnInit(): void { 
    // this.primengConfig.ripple = true;
    this.initFormPresentationPage();
    this.initForm(),
    this.onGetPresentation(),
    this.onGetPresentationPage()
    this.initFormContenusDePage();
    this.onGetContenusdePageTemp();
    this.onGetContenusdePage();
    this.initFormUpdate();
  }   


  public onGetPresentationPage(){
    this.presentationService.getPresentationPage().subscribe(
      (response:Presentation[])=>{
        this.presentationPages=response;
        console.log(this.presentationPage)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 

  onLoadPresentation(presentationLorded:any){

    this.presentationForm.patchValue({
      id: presentationLorded.id
    });

    this.presentationPage.titre1 = presentationLorded.titre1;
    this.presentationPage.contenu1 = presentationLorded.contenu1;
    
  }  

  initFormPresentationPage() {  
    this.presentationForm = new FormGroup({

      id: new FormControl(),
      titre1:new FormControl(null, Validators.required) ,
      contenu1:new FormControl(null, Validators.required) ,

    });
  }
  onUpdatePresentationPage(){
    this.presentationService.addPresentation(this.presentationForm.value).subscribe(
      (response)=>{
        this.onGetPresentationPage();
        this.toast.success({detail:"Success Message",summary:"Operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
    )
  }


  
initForm() {  
    this.pageBlocForm = new FormGroup({

    id: new FormControl(),
    titre:new FormControl(null, Validators.required) ,
    })  
    this.imgUrl=[];
}  


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


openAddDialog() {  
    this.submitted = false;
    this.AddBlocDialog = true;
  }

openAddContenusPageReel() {
    this.initFormContenusDePage(); 
    this.submitted = false;
    this.AddContenuReelDialog = true;
  }
openView() {
  this.viewDialogVisible = true;
}
hideDialog() {
  this.initForm();
 // this.AddBlocDialog = false;
  this.submitted = false;
  this.AddContenuDialog=false;
  

 //this.UpdatePageBlocDialog=false;
}
  
onShowUpdateDialog(pageBlocSelected:any) {

    this.submitted = false;
    this.UpdatePageBlocDialog = true;
  
    this.pageBlocFormUpdate.patchValue({
      id: pageBlocSelected.id
    });
   
    this.pageBlocUpdate.id = pageBlocSelected.id;
    this.pageBlocUpdate.titre = pageBlocSelected.titre;
    this.pageBlocUpdate.contenus= pageBlocSelected.contenus; 
    
    
  }
  
  onViewPageBlocs(PageAccueilLorded:any){
    this.openView();
    this.pageBlocForm.patchValue({
      id: PageAccueilLorded.id
    });
    this.pageBloc.id = PageAccueilLorded.id;   
  }  


  //contenu page

  openContenusDePage() {
    this.initFormContenusDePage(); 
    this.submitted = false;
    this.AddContenuDialog = true;
  }
  
  initFormUpdate() {  
    
    this.pageBlocFormUpdate = new FormGroup({

    id: new FormControl(),
    titre:new FormControl(null, Validators.required) ,
    })  
}  



  initFormContenusDePage() {  
    this.contenusDePageForm = new FormGroup({

    id: new FormControl(),
    libelle:new FormControl(null, Validators.required) ,
    decalageHaut:new FormControl(null, Validators.required) ,
    decalageGauche:new FormControl(null, Validators.required) ,
    })  
  } 
  showUpdatedDialogReturned(pageBlocSelected:any) {

    
    this.pageBlocFormUpdate.patchValue({
      id: pageBlocSelected.id
    });
    this.pageBlocUpdate.id = pageBlocSelected.id;
    this.pageBlocUpdate.titre = pageBlocSelected.titre;
    this.pageBlocUpdate.contenus= pageBlocSelected.contenus; 
     
  }

  UpdatecontenusDePage(contenusDePageSelected:any){

    this.submitted = false;
    this.UpdateContenuDialog=true;
    this.initFormContenuUpdate();
    this.contenusDePageFormUpdate.patchValue({
      id: contenusDePageSelected.id
    });
    this.contenusDePageUpdate.id = contenusDePageSelected.id;
    this.contenusDePageUpdate.libelle = contenusDePageSelected.libelle;
    this.contenusDePageUpdate.decalageHaut = contenusDePageSelected.decalageHaut;
    this.contenusDePageUpdate.decalageGauche = contenusDePageSelected.decalageGauche;
  }
  initFormContenuUpdate() {  
    this.contenusDePageFormUpdate = new FormGroup({
    id: new FormControl(),
    libelle:new FormControl(null, Validators.required) ,
    decalageHaut:new FormControl(null, Validators.required) ,
    decalageGauche:new FormControl(null, Validators.required) ,
    })  
  }  

  hideDialogReel(){
    this.UpdateContenuDialog=false;
    this.AddContenuReelDialog=false;
  }

  public onDeleteContenuPage(contenusDePage:any){
    this.presentationService.deleteContenuReel(contenusDePage).subscribe(
        (response:any)=>{
          //recuperer le bloc et afficher les modifs
          this.showUpdatedDialogReturned(response) 
          this.onGetPresentation()
          this.onGetContenusdePageTemp();
          this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
        },
        (error:any)=>{ 
          console.log('Une erreure à survenue: '+ error);
          this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
        }
    );
  }
  


public onGetContenusdePageTemp(){
  this.presentationService.getContenusDePageTemp().subscribe(
    (response:any[])=>{  
      this.contenusDePagesTemp=response;
      console.log(this.contenusDePagesTemp)
    },
    (error:HttpErrorResponse)=>{
        // alert(error.message);
    }
  );
} 

public onGetContenusdePage(){
  this.presentationService.getContenusDePage().subscribe(
    (response:any[])=>{
      this.contenusDePages=response;
      console.log(this.contenusDePages)
    },
    (error:HttpErrorResponse)=>{
        // alert(error.message);
    }
  );
}


onCreateBloc(){
  console.log(this.pageBlocForm.value)
  this.submitted = true;  
  const formData = new FormData();
  const pageAc =this.pageBlocForm.value;
  formData.append('pagePresentation',JSON.stringify(pageAc));
  formData.append('file',this.userFile);
  for(var i=0;i<this.contenusDePagesTemp.length;i++){
    this.contenus.push(this.contenusDePagesTemp[i].id)
  }
  formData.append('contenus',JSON.stringify(this.contenus));
   this.contenus=[];
  this.presentationService.createBloc(formData).subscribe(
    (response:any)=>{
      this.initForm()
      this.onGetPresentation()
      this.onGetContenusdePageTemp();
      this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
    },
    (error:any)=>{ 
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      console.log('Une erreure à survenue: '+ error);
    }
  ) 
}

public onDeleteContenuPageTemp(contenusDePage:any){
  this.presentationService.deleteContenuTemp(contenusDePage).subscribe(
      (response:any)=>{
        this.onGetContenusdePageTemp();
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },
      (error:any)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
  );
}

  public onDeleteBloc(pageBloc:any){
    this.presentationService.deletePageBloc(pageBloc).subscribe(
        (response:any)=>{
          //recuperer le bloc et afficher les modifs
          this.onGetPresentation()
          this.onGetContenusdePageTemp();
          this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
        },
        (error:any)=>{ 
          console.log('Une erreure à survenue: '+ error);
          this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
        }
    );
  }

  public saveContenusdePage(){  
    this.submitted = true;  
    this.presentationService.addContenusDePage(this.contenusDePageForm.value).subscribe(
      (response)=>{
        this.onGetPresentation()
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

  public saveContenusdePageReel(){    
    this.submitted = true;  
    this.presentationService.addContenusDePageReel(this.pageBlocFormUpdate.value,this.contenusDePageForm.value).subscribe(
      (response)=>{
        this.showUpdatedDialogReturned(response)
        this.onGetPresentation(), 
        this.initFormContenusDePage();
        this.onGetContenusdePageTemp();  
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },  
      (error)=>{   
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
        console.log('Une erreure à survenue: '+ error);
      }
    ) 
  }
  
  onUpdateData(){
    this.submitted = true;  
    const formData = new FormData();
    const pageAc =this.pageBlocFormUpdate.value;
    formData.append('pageAccueil',JSON.stringify(pageAc));
    formData.append('file',this.userFile);
    this.presentationService.updateBloc(formData).subscribe(
      (response)=>{
        this.initForm()
        this.onGetPresentation();
        this.onGetContenusdePageTemp();
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },
      (error)=>{  
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
        console.log('Une erreure à survenue: '+ error);
      }   
    ) 
  }

  public OnUdpateContenusdePage(){  
    this.submitted = true;  
    this.presentationService.updateContenusDePage(this.contenusDePageFormUpdate.value).subscribe(
      (response:any)=>{
        //recuperer le bloc et afficher les modifs
        this.showUpdatedDialogReturned(response);
        this.onGetPresentation();
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
  












  public onReady( editor: { ui: { getEditableElement: () => { (): any; new(): any; parentElement: { (): any; new(): any; insertBefore: { (arg0: any, arg1: any): void; new(): any; }; }; }; view: { toolbar: { element: any; }; }; }; } ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}

  backgroundImg : String="../../assets/images/PAGESITESUZANG-BG-05A.png"; 
  bonhomme:String="../../assets/images/RECADRAGE-08.png";  
  // homeimage2:String="../../assets/images/nav_home2.png";   
  // homeimage3:String="../../assets/images/nav_home3.png";
  // homeimage4:String="../../assets/images/nav_home4.png"; 

 
  

  public onGetPresentation(){
    this.presentationService.getPresentation().subscribe(
      (response:Presentation[])=>{
        this.presentations=response;
        console.log(this.presentations)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 

  
 

  htmlContent="";

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

 


// onconvert(textHtml:any){

// const { convert } = require('html-to-text');
// // There is also an alias to `convert` called `htmlToText`.

// const html = textHtml;
// const text = convert(html, {
//   wordwrap: 130
// });
// return text;

// }


}










