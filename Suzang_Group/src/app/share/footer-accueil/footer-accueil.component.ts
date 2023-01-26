import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Contact } from 'src/app/admin/modelAdmin/Contact';
import { ContactServiceService } from 'src/app/admin/serviceAdmin/pageContact/contact-service.service';
import { DessoucrirNews } from 'src/app/model/DessouscrirNews';
import { Newsletter } from 'src/app/model/Newsletter';
import { NewsletterServiceService } from 'src/app/service/newsletterService/newsletter-service.service';


@Component({
  selector: 'app-footer-accueil',
  templateUrl: './footer-accueil.component.html',
  styleUrls: ['./footer-accueil.component.css']
})
export class FooterAccueilComponent implements OnInit {

  constructor( private toast: NgToastService,private contactServiceService :ContactServiceService, private newsletterServiceService:NewsletterServiceService) { }
  public contacts!: Contact[]; 
  newsletter:Newsletter= new Newsletter(0,"","");
  newsletterForm!:FormGroup;
  message!:string;

  options: any;
  overlays!: any[];


  dialogDessoucrir!: boolean;
  submitted!: boolean;
  dessoucrirNews:DessoucrirNews = new DessoucrirNews("");
  dessoucrirNewsForm!:FormGroup;


  ngOnInit(): void {
   this. onGetContact();
   this.initForm();
   this.initDessouscrirForm();

   this.options = {
    center: {lat: 5.398340, lng:-3.970894},
    zoom: 18 
    };  

    this.overlays = [
      new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
      new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
      new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
      new google.maps.Polygon({paths: [
          {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
      ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
      }),
      new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
      new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
  ];  
 }

  initForm() {  
    this.newsletterForm = new FormGroup({
    id: new FormControl(),
    nom:new FormControl(null, Validators.required),
    email:new FormControl(null, Validators.required) ,
  });
}

initDessouscrirForm() {  
  this.dessoucrirNewsForm = new FormGroup({

    username:new FormControl(null, Validators.required) ,

  });
}

hideDialog() {
  this.dialogDessoucrir = false;
  this.submitted = false;
}

openNew() {
  this.submitted = false;
  this.dialogDessoucrir = true;
}


onsendDessoucrirMail() {
  this.submitted = true;  

  this.newsletterServiceService.sendDessouscrirEmail(this.dessoucrirNewsForm.value).subscribe(
    (response)=>{
      this.toast.info({detail:"Success Message",summary:"Vous avez effectuée avec succès !",duration:5000})
      this.initDessouscrirForm();
    },
    (error)=>{ 
      console.log('Une erreure à survenue: '+ error);
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
    }
  )
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

  

  public onSaveNewsletter(){
    this.newsletterServiceService.saveNewsletter(this.newsletterForm.value).subscribe(
      (response)=>{
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
        this.initForm();
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
    ) 
  }
 
}
