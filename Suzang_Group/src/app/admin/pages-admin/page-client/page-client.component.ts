import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgToastService } from 'ng-angular-popup';
import { Client } from '../../modelAdmin/Client';
import { Presentation } from '../../modelAdmin/Presentation';
import { PageClientService } from '../../serviceAdmin/pageClient/page-client.service';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.css']
})
export class PageClientComponent implements OnInit {

  constructor(private toast: NgToastService, private pageClientService :PageClientService) { }

  public clients!: Client[];
  message!:string;
  clientFormUpdate!:FormGroup;
  pageClient:Client= new Client(0,"","");
  submitted!:boolean;
  visibiliteDialogue!:boolean;
  UpdatePageAccueilDialog!:boolean;


  ngOnInit(): void { 
    this.initFormUpdate(),
    this.onGetClient()
  } 


  initFormUpdate() {  
    this.clientFormUpdate = new FormGroup({

      id: new FormControl(),
      titre1:new FormControl(null, Validators.required) ,
      contenu1:new FormControl(null, Validators.required) ,

    });
  }

  public onGetClient(){
    this.pageClientService.getClient().subscribe(
      (response:Client[])=>{
        this.clients=response;
        console.log(this.clients)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 

  onUpdateClientPage(){
    this.pageClientService.addClient(this.clientFormUpdate.value).subscribe(
      (response)=>{
        this.onGetClient();
        this.message="operation effectuée avec succès !"
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
    ) 
  }
 
  onLoadClient(clientLorded:any){
    this.submitted = false;
    this.clientFormUpdate.patchValue({
      id: clientLorded.id
    });

    this.pageClient.titre1 = clientLorded.titre1;
    this.pageClient.contenu1 = clientLorded.contenu1;
    
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
