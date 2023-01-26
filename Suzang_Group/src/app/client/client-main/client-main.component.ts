import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/app/admin/modelAdmin/Client';
import { Presentation } from 'src/app/admin/modelAdmin/Presentation';
import { PageClientService } from 'src/app/admin/serviceAdmin/pageClient/page-client.service';

declare var window:any;

@Component({
  selector: 'app-client-main',
  templateUrl: './client-main.component.html',
  styleUrls: ['./client-main.component.css']
})
export class ClientMainComponent implements OnInit {
             

  backgroundImg : String="../../assets/images/PAGESITESUZANG-BG-05C.png";
  bonhomme:String="../../assets/images/RECADRAGE-08.png"; 
   
  formModal:any;

  constructor( private pageClientService :PageClientService) { }

  public clients!: Client[];
  message!:string;
  clientForm!:FormGroup;
  client:Client= new Client(0,"","");


  ngOnInit(): void { 
    this.initForm(),
    this.onGetClient()
  } 


  initForm() {  
    this.clientForm = new FormGroup({

      id: new FormControl(),
      titre1:new FormControl(null, Validators.required) ,
      contenu1:new FormControl(null, Validators.required) ,

    });
  }

  public onGetClient(){
    this.pageClientService.getClient().subscribe(
      (response:Presentation[])=>{
        this.clients=response;
        console.log(this.clients)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 

  saveOrUpdateClient(){
    this.pageClientService.addClient(this.clientForm.value).subscribe(
      (response)=>{
        this.onGetClient();
        this.message="operation effectuée avec succès !"
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
      }
    ) 
  }
 
  onLoadClient(clientLorded:any){

    this.clientForm.patchValue({
      id: clientLorded.id
    });

    this.client.titre1 = clientLorded.titre1;
    this.client.contenu1 = clientLorded.contenu1;
    
  }
  // openModal(){
  //   this.formModal.show();
  // }
  //  closeModal(){
  //   this.formModal.hide();
  // }
  
}
