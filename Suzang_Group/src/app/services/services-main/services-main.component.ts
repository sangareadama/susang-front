import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/app/admin/modelAdmin/Client';
import { ServicesItem } from 'src/app/admin/modelAdmin/ServicesItem';
import { ServicePage } from 'src/app/admin/modelAdmin/SevicePage';
import { PageServicesItemService } from 'src/app/admin/serviceAdmin/pageServiceItem/page-services.service';

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.css']
})
export class ServicesMainComponent implements OnInit {
 
 
  constructor( private pageServicesItemService :PageServicesItemService) { }

  
  backgroundImg : String="../../assets/images/PAGESITESUZANG-BG-05S.png"; 
  bonhomme:String="../../assets/images/RECADRAGE-07.png";

  public servicesItems!: ServicesItem[];
  message!:string;
  servicesItemForm!:FormGroup;
  servicesItem:ServicesItem= new ServicesItem(0,"","");
  servicePage: any;
  
  servicesPerPage:number=9;
  public selectedPage=1;
  services:any[]=[];
  public servicePages!:ServicePage[];
  
  ngOnInit(): void { 
    this.initForm(), 
    this.onGetServicesItem() 
    this.onGetServicePage()
    this.changePage(1);
    let pageIndex=(this.selectedPage-1)*this.servicesPerPage;
    this.services=this.servicesItems.slice(pageIndex,this.servicesPerPage)
  } 

  changePageSize(event:Event){
    const newSize = (event.target as HTMLInputElement).value
    this.servicesPerPage=Number(newSize);
    this.changePage(1);
  } 
  get pageNumbers():number[]{
    return Array(Math.ceil(this.servicesItems.length/this.servicesPerPage))
    .fill(0).map((x,i)=>i+1);
  }

  changePage(page:any){

    this.selectedPage=page; 
    this.slicedProducts();    
  }
  slicedProducts(){ 
    let pageIndex=(this.selectedPage-1)*this.servicesPerPage;
    let endIndes=(this.selectedPage-1)*this.servicesPerPage+this.servicesPerPage;
    this.services=[]; 
    this.services=this.servicesItems.slice(pageIndex,endIndes);
  }

  initForm() {  
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
      (response: any)=>{
        this.onGetServicesItem();
        this.message="operation effectuée avec succès !"
      },
      (error: string)=>{ 
        console.log('Une erreure à survenue: '+ error);
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

 
  initPageForm() {  
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


saveOrUpdateServicePage(){
  this.pageServicesItemService.addServicesPage(this.servicesItemForm.value).subscribe(
    (response: any)=>{
      this.onGetServicePage();
      this.message="operation effectuée avec succès !"
    },
    (error: string)=>{ 
      console.log('Une erreure à survenue: '+ error);
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

 
}
