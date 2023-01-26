import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/admin/modelAdmin/Contact';
import { ContactServiceService } from 'src/app/admin/serviceAdmin/pageContact/contact-service.service';

import { SendEmailModel } from 'src/app/admin/modelAdmin/SendEmailModel';
import { Loader } from '@googlemaps/js-api-loader';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css']
})    
export class ContactMainComponent implements OnInit {

  constructor( private toast: NgToastService, private contactServiceService :ContactServiceService) { }


  public contacts!: Contact[];  
  message!:string;
  contactForm!:FormGroup;
  contact:Contact= new Contact(0,"","","","","","");
  sendEmailModel:SendEmailModel=new SendEmailModel ("","","","","","");
  sendEmailModelform!:FormGroup;
  submitted!: boolean;

  ngOnInit(): void { 

    // let loader : new Loader({
    //   apikey:''

    // }); 

    this.initForm(),
    this.initContactForm(),
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

  initContactForm() {  
    this.submitted = false;
    this.sendEmailModelform = new FormGroup({

      nom:new FormControl(null, Validators.required) ,
      prenom:new FormControl(null, Validators.required) ,
      contact:new FormControl(null, Validators.required) ,
      email:new FormControl(null, Validators.required) ,
      objet:new FormControl(null, Validators.required) ,
      commentaire:new FormControl(null, Validators.required) ,
     

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
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
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

  onSendEmail(){
    
    this.submitted = true;

    alert(this.submitted)

    if(this.sendEmailModel.nom && this.sendEmailModel.prenom&&this.sendEmailModel.contact && this.sendEmailModel.email && this.sendEmailModel.commentaire){

      this.contactServiceService.sendEmail(this.sendEmailModelform.value).subscribe(
        (response)=>{
          this.onGetContact(); 
          this.initContactForm();
          this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
        },
        (error)=>{    
          console.log('Une erreure à survenue: '+ error);
          this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
        }
      )   
    }
   

  }


}
