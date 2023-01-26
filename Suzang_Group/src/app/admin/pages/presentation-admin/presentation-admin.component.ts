import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Presentation } from '../../modelAdmin/Presentation';
import { PresentationService } from '../../serviceAdmin/presentation.service';

@Component({
  selector: 'app-presentation-admin',
  templateUrl: './presentation-admin.component.html',
  styleUrls: ['./presentation-admin.component.css']
})
export class PresentationAdminComponent implements OnInit {

  constructor( private presentationService:PresentationService) { }

  public presentations!: Presentation[];
  message!:string;
  presentationForm!:FormGroup;
  presentation:Presentation= new Presentation(0,"","");

  
  backgroundImg : String="../../assets/images/PAGESITESUZANG-BG-05A.png"; 
  bonhomme:String="../../assets/images/RECADRAGE-08.png";  
  // homeimage2:String="../../assets/images/nav_home2.png";   
  // homeimage3:String="../../assets/images/nav_home3.png";
  // homeimage4:String="../../assets/images/nav_home4.png"; 

  ngOnInit(): void { 
    this.initForm(),
    this.onGetPresentation()
  } 


  initForm() {  
    this.presentationForm = new FormGroup({

      id: new FormControl(),
      titre1:new FormControl(null, Validators.required) ,
      contenu1:new FormControl(null, Validators.required) ,

    });
  }

  public onGetPresentation(){
    this.presentationService.getPresentation().subscribe(
      (response:Presentation[])=>{
        this.presentations=response;
        console.log(this.presentations)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  }

  saveOrUpdatePresentation(){
    this.presentationService.addPresentation(this.presentationForm.value).subscribe(
      (response)=>{
        
        this.message="operation effectuée avec succès !"
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
      }
    )
  }

  onLoadPresentation(presentationLorded:any){

    this.presentationForm.patchValue({
      id: presentationLorded.id
    });

    this.presentation.titre1 = presentationLorded.titre1;
    this.presentation.contenu1 = presentationLorded.contenu1;
    
  }

}
