import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { PasswordResetModel } from 'src/app/model/PasswordResetModel';
import { ResetPasswordServiceService } from 'src/app/service/resetPasswordService/reset-password-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(  private route : ActivatedRoute,private router : Router,
    private resetPasswordServiceService: ResetPasswordServiceService,private toast: NgToastService) { }

     token!: string ;
    PasswordResetModelForm!:FormGroup;
    PasswordResetModel:PasswordResetModel= new PasswordResetModel("","");
  ngOnInit(): void {
    this.getToken();
   this. initform();
  
  }

  initform(){
    this.PasswordResetModelForm = new FormGroup({

      password:new FormControl(null, Validators.required) ,
      confirmPassword:new FormControl(null, Validators.required) ,
    },
    
    );

  }


  getToken() {

    this.route.queryParamMap.subscribe( (data:ParamMap)=>{

      const tok: string =data.get('token')|| '';
      
      this.token=tok;

      this.verifyToken(this.token)
  
      
    }

    
    ) ;

  }
verifyToken(token:any) {

  this.resetPasswordServiceService.requestToVerifyResetPassword(token).subscribe(
    (resp)=> { 
      
      if(resp.code === 0) { 

        this.toast.success({detail:"Info lien",summary:"Lien vérifié avec succès saisissez votre mot de pass",duration:5000})

        // this.formVisible = true ;
      }else if(resp.code === 2) { 

        this.toast.error({detail:"Info lien",summary:"Lien expiré veillez reprendre le processus",duration:5000})


      }
    },
    (error)=> {

      console.log(error);
      
    }
    
  )
}

onResetPassword() {

  this.resetPasswordServiceService.resetPassword(this.PasswordResetModelForm.value, this.token).subscribe(

    (resp)=> {
      
     // console.log(resp);
      
      if(resp.code === 0) {
       this.initform();
       this.toast.success({detail:"Succes Message",summary:"Renitialisation effectuée avec succès",duration:5000})
        this.router.navigateByUrl('/login');
      }else if(resp.code === 1) {
        this.toast.error({detail:"Error Message",summary:"Erreur ! veillez reprendre le processus",duration:5000})
      }
      
    },

    (error)=> {
      console.log(error);
      
    }
  )

 }


}
function PasswordMatch(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}

