import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgToastService } from 'ng-angular-popup';
import { Contact } from '../../modelAdmin/Contact';
import { ContactServiceService } from '../../serviceAdmin/pageContact/contact-service.service';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent implements OnInit {

  constructor(private toast: NgToastService, private contactServiceService :ContactServiceService) { }

  public contacts!: Contact[];  
  message!:string;
  contactForm!:FormGroup;
  contact:Contact= new Contact(0,"","","","","","");
  UpdateContactPagesDialog!: boolean;
  visibiliteDialogue!: boolean;
  submitted!:boolean;

  ngOnInit(): void { 
    this.initForm(),
    this.onGetContact()
  }  


  initForm() {  
      this.contactForm = new FormGroup({

      id: new FormControl(),
      adresseTitre:new FormControl(null, Validators.required) ,
      adresse:new FormControl(null, Validators.required) ,
      telephoneTitre:new FormControl(null, Validators.required) ,
      telephone:new FormControl(null, Validators.required) ,
      emailTitre:new FormControl(null, Validators.required) ,
      email:new FormControl(null, Validators.required) ,

    });
  }

  public onGetContact(){
    this.contactServiceService.getContact().subscribe(
      (response:Contact[])=>{
        this.contacts=response;
        console.log(this.contacts) 
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 

  saveOrUpdateContact(){
    this.contactServiceService.addContact(this.contactForm.value).subscribe(
      (response)=>{
        this.onGetContact();

        this.toast.success({detail:"Success Message",summary:"Operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
    )   
  }
 
  onLoadContact(contactLorded:any){
    this.contactForm.patchValue({
      id: contactLorded.id
    });

    this.contact.adresseTitre = contactLorded.adresseTitre;
    this.contact.adresse = contactLorded.adresse;
    this.contact.telephoneTitre = contactLorded.telephoneTitre;
    this.contact.telephone = contactLorded.telephone;
    this.contact.emailTitre = contactLorded.emailTitre;
    this.contact.email = contactLorded.email;
    
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
