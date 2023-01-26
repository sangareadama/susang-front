import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Atout } from 'src/app/admin/modelAdmin/Atout';
import { PageAtoutService } from 'src/app/admin/serviceAdmin/pageAtout/page-atout.service';

@Component({
  selector: 'app-atout-main',
  templateUrl: './atout-main.component.html',
  styleUrls: ['./atout-main.component.css']
})
export class AtoutMainComponent implements OnInit {
   
  
  backgroundImg : String="../../assets/images/PAGESITESUZANG-BG-05AA.png"; 
  bonhomme:String="../../assets/images/RECADRAGE-07RR.png";   

  constructor( private pageAtoutService :PageAtoutService) { }

  public atouts!: Atout[];
  message!:string;
  atoutForm!:FormGroup;
  atout:Atout= new Atout(0,"","","");
 

  ngOnInit(): void { 
    this.initForm(),
    this.onGetAtout()
  } 


  initForm() {  
      this.atoutForm = new FormGroup({

      id: new FormControl(),
      titre1:new FormControl(null, Validators.required) ,
      contenu1:new FormControl(null, Validators.required) ,
      contenu2:new FormControl(null, Validators.required) ,

    });
  }

  public onGetAtout(){
    this.pageAtoutService.getAtout().subscribe(
      (response:Atout[])=>{
        this.atouts=response;
        console.log(this.atouts)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 

  saveOrUpdateAtout(){
    this.pageAtoutService.addAtout(this.atoutForm.value).subscribe(
      (response)=>{
        this.onGetAtout();
        this.message="operation effectuée avec succès !"
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
      }
    ) 
  }
 
  onLoadAtout(atoutLorded:any){
    this.atoutForm.patchValue({
      id: atoutLorded.id
    });

    this.atout.titre1 = atoutLorded.titre1;
    this.atout.contenu1 = atoutLorded.contenu1;
    this.atout.contenu2 = atoutLorded.contenu2;
    
  }

}
