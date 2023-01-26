import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Client } from '../../modelAdmin/Client';
import { ServicesItem } from '../../modelAdmin/ServicesItem';
import { ServicePage } from '../../modelAdmin/SevicePage';
import { PageClientService } from '../../serviceAdmin/pageClient/page-client.service';
import { PageServicesItemService } from '../../serviceAdmin/pageServiceItem/page-services.service';

@Component({
  selector: 'app-page-service-item',
  templateUrl: './page-service-item.component.html',
  styleUrls: ['./page-service-item.component.css']
})
export class PageServiceItemComponent implements OnInit {

  constructor(private toast: NgToastService, private pageServicesItemService :PageServicesItemService) { }

  servicePageForm!:FormGroup;
  public servicePages!:ServicePage[];
  servicePage:ServicePage= new ServicePage(0,"","");

  visibiliteDialogue!:boolean;
  UpdatePageServiceDialog!:boolean;
  submitted!:boolean;

  public servicesItems!: ServicesItem[];
  message!:string;
  servicesItemForm!:FormGroup;
  servicesItem:ServicesItem= new ServicesItem(0,"","");
 

  ngOnInit(): void { 
    this.initForm(),
    this.initServicePageForm()
    this.onGetServicesItem()
    this.onGetServicePage()
  } 


  initForm() {  
    this.message="";
    this.servicesItemForm = new FormGroup({

      id: new FormControl(),
      titre1:new FormControl(null, Validators.required) ,
      contenu1:new FormControl(null, Validators.required) ,

    });
  }

  public onGetServicesItem(){
    this.pageServicesItemService.getServicesItem().subscribe(
      (response:Client[])=>{
        this.servicesItems=response;
        console.log(this.servicesItems)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 

  saveOrUpdateServicesItem(){
    this.pageServicesItemService.addServicesItem(this.servicesItemForm.value).subscribe(
      (response)=>{
        this.onGetServicesItem(); this.toast.success({detail:"Success Message",summary:"Operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
    ) 
  }
  
  onLoadServicesItem(servicesItemLorded:any){

    this.servicesItemForm.patchValue({
      id: servicesItemLorded.id
    });

    this.servicesItem.titre1 = servicesItemLorded.titre1;
    this.servicesItem.contenu1 = servicesItemLorded.contenu1;
    
  }

 
  initServicePageForm() {  
    this.servicesItemForm = new FormGroup({

      id: new FormControl(),
      titre1:new FormControl(null, Validators.required) ,
      contenu1:new FormControl(null, Validators.required) ,
  
    });
  }

  public onGetServicePage(){
  this.pageServicesItemService.getServicePage().subscribe(
    (response:Client[])=>{
      this.servicePages=response;
      console.log(this.servicePages)
    },
    (error:HttpErrorResponse)=>{
        // alert(error.message);
    }
  );
} 


onUpdateServicePage(){
  this.pageServicesItemService.addServicesPage(this.servicesItemForm.value).subscribe(
    (response)=>{
      this.onGetServicePage();
      this.toast.success({detail:"Success Message",summary:"Operation effectuée avec succès !",duration:2000})
    },
    (error)=>{ 
      console.log('Une erreure à survenue: '+ error);
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
    }
  ) 
} 

onLoadServicePage(servicesLorded:any){

  this.servicesItemForm.patchValue({
    id: servicesLorded.id
  });

  this.servicePage.titre1 = servicesLorded.titre1;
  this.servicePage.contenu1 = servicesLorded.contenu1;
  
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
