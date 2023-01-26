import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgToastService } from 'ng-angular-popup';
import { Atout } from '../../modelAdmin/Atout';
import { PageAtoutService } from '../../serviceAdmin/pageAtout/page-atout.service';

@Component({
  selector: 'app-page-atout',
  templateUrl: './page-atout.component.html',
  styleUrls: ['./page-atout.component.css']
})
export class PageAtoutComponent implements OnInit {

  constructor(private toast: NgToastService, private pageAtoutService :PageAtoutService) { }


  message!:string;
  atoutPageUpdateForm!:FormGroup;
  atoutPage:Atout= new Atout(0,"","","");
  public atoutPages!: Atout[];
  UpdateatoutPagesDialog!: boolean;
  visibiliteDialogue!: boolean;
  submitted!:boolean;


  ngOnInit(): void { 
    this.initFormAtoutPage(),
    this.onGetAtoutPage()
  } 


  initFormAtoutPage() {  
      this.atoutPageUpdateForm = new FormGroup({

      id: new FormControl(),
      titre1:new FormControl(null, Validators.required) ,
      contenu1:new FormControl(null, Validators.required) ,
      contenu2:new FormControl(null, Validators.required) ,

    });
  }

  public onGetAtoutPage(){
    this.pageAtoutService.getAtout().subscribe(
      (response:Atout[])=>{
        this.atoutPages=response;
        console.log(this.atoutPages)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 

  UpdateAtoutPage(){
    this.pageAtoutService.addAtout(this.atoutPageUpdateForm.value).subscribe(
      (response)=>{
        this.onGetAtoutPage();
        this.message="operation effectuée avec succès !"
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
    ) 
  }
 
  onLoadAtout(atoutLorded:any){
    this.atoutPageUpdateForm.patchValue({
      id: atoutLorded.id
    });

    this.atoutPage.titre1 = atoutLorded.titre1;
    this.atoutPage.contenu1 = atoutLorded.contenu1;
    this.atoutPage.contenu2 = atoutLorded.contenu2;
    
  }

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
