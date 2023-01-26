import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';


import { Presentation } from 'src/app/admin/modelAdmin/Presentation';
import { PresentationService } from 'src/app/admin/serviceAdmin/presentation.service';

@Component({
  selector: 'app-presentation-main',
  templateUrl: './presentation-main.component.html',
  styleUrls: ['./presentation-main.component.css']
})
export class PresentationMainComponent implements OnInit {

  constructor( public presentationService:PresentationService) { }

  public presentations!: Presentation[];

  public blocPresentations!: any[]; 

  public PageUrl='/api/imagePagePresentation/';

  backgroundImg : String="../../assets/images/PAGESITESUZANG-BG-05A.png"; 
  bonhomme:String="../../assets/images/RECADRAGE-08.png";  
  // homeimage2:String="../../assets/images/nav_home2.png";   
  // homeimage3:String="../../assets/images/nav_home3.png";
  // homeimage4:String="../../assets/images/nav_home4.png"; 

  ngOnInit(): void { 
    this.onGetPresentation()
    this.onGetPagePresentation()
  } 


  public onGetPagePresentation(){
    this.presentationService.getPresentation().subscribe(
      (response:any[])=>{
        this.blocPresentations=response;
        console.log(this.blocPresentations)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
    
  } 

  

  public onGetPresentation(){
    this.presentationService.getPresentationPage().subscribe(
      (response:Presentation[])=>{
        this.presentations=response;
        console.log(this.presentations)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  }   

}
