import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NosContact } from '../../modelAdmin/NosContact';
import { ContactServiceService } from '../../serviceAdmin/pageContact/contact-service.service';

@Component({
  selector: 'app-nos-contacts',
  templateUrl: './nos-contacts.component.html',
  styleUrls: ['./nos-contacts.component.css']
})
export class NosContactsComponent implements OnInit {

  constructor(private contactServiceService :ContactServiceService) { }

  nosContacts!: any[]; 
  noscontact!:NosContact;

  dialogVisible!: boolean;  

  nosContact:NosContact = new NosContact(0,"","","","","");
  nosContactForm!:FormGroup;
 
  ngOnInit(): void { 
     
   this.onGetnosContact();
   this.initForm();   
  }

  public onGetnosContact(){
    this.contactServiceService.getNosContacts().subscribe(
      (response:any)=>{
        this.nosContacts=response;
        console.log(this.nosContacts) 
      },    
      (error:HttpErrorResponse)=>{   
        console.log(error.message);
      }  
    );
  }     

  public onOuvrirMessage(nosContactloded:any){
    this.contactServiceService.ouvertureMessage(nosContactloded).subscribe(
      (response:any)=>{
        this.onGetnosContact();
        console.log(this.nosContacts) 
      },    
      (error:HttpErrorResponse)=>{   
        console.log(error.message);
      }  
    );
  } 

  onLoadUtilisateur(UtilisateurLorded:any){

    
  }

  initForm() {
    this.nosContactForm = new FormGroup({

      id: new FormControl(),
      nom:new FormControl(null, Validators.required) ,
      prenom:new FormControl(null, Validators.required) ,
      contact:new FormControl(null, Validators.required) ,
      email:new FormControl(null, Validators.required) ,   
      commentaire:new FormControl(null, Validators.required) ,   
 
    });
  }

  showDialog(nosContactloded:any) {

    this.dialogVisible = true;

    this.nosContactForm.patchValue({
      id: nosContactloded.id
    });

    this.nosContact.nom = nosContactloded.nom;
    this.nosContact.prenom = nosContactloded.prenom;
    this.nosContact.contact= nosContactloded.contact; 
    this.nosContact.email= nosContactloded.email; 
    this.nosContact.commentaire= nosContactloded.commentaire; 

    this.onOuvrirMessage(nosContactloded);
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
