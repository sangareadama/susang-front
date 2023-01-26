import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Accueil } from 'src/app/admin/modelAdmin/Accueil';
import { Contact } from 'src/app/admin/modelAdmin/Contact';
import { PageAccueil } from 'src/app/admin/modelAdmin/PageAccueil';
import { PageAccueilService } from 'src/app/admin/serviceAdmin/PageAccueil/accueil-service.service';
import { ContactServiceService } from 'src/app/admin/serviceAdmin/pageContact/contact-service.service';
import { ReferenceService } from 'src/app/admin/serviceAdmin/ReferenceService/reference.service';
 
@Component({
  selector: 'app-slide-home',
  templateUrl: './slide-home.component.html', 
  styleUrls: ['./slide-home.component.css']
})    
export class SlideHomeComponent implements OnInit {

  homeimage:String="../../assets/images/bg_home11.png"; 
  homeimage1:String="../../assets/images/nav_home12.png"; 
  homeimage2:String="../../assets/images/nav_home2.png"; 
  homeimage3:String="../../assets/images/nav_home3.png";  
  homeimage4:String="../../assets/images/nav_home4.png";  
  animation:String="../../assets/images/animation.gif";
  bonhome:String="../../assets/images/bonhome.png";   
  bonhome2:String="../../assets/images/RECADRAGE-07_BLANC.png";   
  logo_oneci:String="../../assets/images/oneci.jpg";
  logo_aziko:String="../../assets/images/aziko.jpg";  
  logo_cnam:String="../../assets/images/cnam.jpg";
  logo_adicom:String="../../assets/images/adicom.jpg"; 
  logo_ibis:String="../../assets/images/ibis.jpg";
  logo_prosuma:String="../../assets/images/prosuma.jpg"; 
  logo_event225:String="../../assets/images/event225.jpg";
  domainDeCompetence:String="../../assets/images/RECADRAGE-14.png";
  
  

  constructor( public pageAccueilService :PageAccueilService, public referenceService:ReferenceService,
    private contactServiceService :ContactServiceService) { }

  public references!:any;
  public accueils!: Accueil[]; 
  message!:string;
  accueilForm!:FormGroup;
  // accueil:Accueil= new Accueil(0,"","","","","","","","");
  public pageAccueils!: PageAccueil[];

  public PageUrl='/api/imagePageAccueil/';

  public marge="200px";

  location:any;

  ngOnInit(): void { 
    this.onGetlocations();
    this.initForm(),
    this.onGetAccueil();
    this.onGetReference();
    this.onGetPageAccueil();
    
  }

 getScaledDimension( imgSize:any, boundary:any) {

  var original_width:any = imgSize.width;
  var original_height:any  = imgSize.height;
  var bound_width:any  = boundary.width;
  var  bound_height:any  = boundary.height;
  var new_width:any  = original_width;
  var  new_height:any  = original_height;

    // first check if we need to scale width
    if (original_width > bound_width) {
        //scale width to fit
        new_width = bound_width;
        //scale height to maintain aspect ratio
        new_height = (new_width * original_height) / original_width;
    }

    // then check if we need to scale even with the new height
    if (new_height > bound_height) {
        //scale height to fit instead
        new_height = bound_height;
        //scale width to maintain aspect ratio
        new_width = (new_height * original_width) / original_height;
    }
   // return new Dimension(new_width, new_height);
}


  initForm() {  
      this.accueilForm = new FormGroup({

      id: new FormControl(),
      titre11:new FormControl(null, Validators.required) ,
      contenu11:new FormControl(null, Validators.required) ,
      titre22:new FormControl(null, Validators.required) ,
      contenu21:new FormControl(null, Validators.required) ,
      contenu22:new FormControl(null, Validators.required) ,
      titre33:new FormControl(null, Validators.required) ,
      contenu31:new FormControl(null, Validators.required) ,
      contenu32:new FormControl(null, Validators.required) ,

    });
  }

  public onGetAccueil(){
    this.pageAccueilService.getAccueil().subscribe(
      (response:Accueil[])=>{
        this.accueils=response;
        console.log(this.accueils)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  }  

  saveOrUpdateAtout(){
    this.pageAccueilService.addAccueil(this.accueilForm.value).subscribe(
      (response)=>{
        this.onGetAccueil();
        this.message="operation effectuée avec succès !"
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
      }
    ) 
  }
 
  // onLoadAccueil(accueilLorded:any){
  //   this.accueilForm.patchValue({
  //     id: accueilLorded.id
  //   });
    
  //   this.accueil.titre11 = accueilLorded.titre11;
  //   this.accueil.contenu11 = accueilLorded.contenu11;
  //   this.accueil.titre22 = accueilLorded.titre22;
  //   this.accueil.contenu21 = accueilLorded.contenu21;
  //   this.accueil.contenu22= accueilLorded.contenu22;
  //   this.accueil.titre33 = accueilLorded.titre33;
  //   this.accueil.contenu31 = accueilLorded.contenu31;
  //   this.accueil.contenu32 = accueilLorded.contenu32;
    
  // }

  class="col-4"
  public onGetPageAccueil(){
    this.pageAccueilService.getPageAccueil().subscribe(
      (response:any[])=>{
        this.pageAccueils=response;
        console.log(this.pageAccueils)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
    
  } 

  public onGetReference(){
    this.referenceService.getReferences().subscribe(
      (response:any)=>{
        this.references=response;
        console.log(this.references)
       
      }, 
      (error:HttpErrorResponse)=>{
      
          // alert(error.message);
      }
    );
  }
     
  public onGetlocations(){
    // this.pageAccueilService.getLocation().subscribe(
    //   (response:any)=>{
    //     this.location=response;
    //     console.log(this.location)
       
    //   }, 
    //   (error:HttpErrorResponse)=>{
      
    //       // alert(error.message);
    //   }
    // );
  }

  
   
}
