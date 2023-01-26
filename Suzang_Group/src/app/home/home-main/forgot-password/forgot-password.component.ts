import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ForgotPassword } from 'src/app/model/ForgotPassword';
import { ResetPasswordServiceService } from 'src/app/service/resetPasswordService/reset-password-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor( private resetPasswordServiceService: ResetPasswordServiceService
    ,private toast: NgToastService,private router:Router,) { }

  forgotPasswordForm!:FormGroup;
  forgotPassword:ForgotPassword= new ForgotPassword("");

  ngOnInit(): void {

    this.initForm();
  }


  initForm() {  
    this.forgotPasswordForm = new FormGroup({

      username:new FormControl(null, Validators.required) ,
    });
  }

  onRequestToResetPassword() {
     
    this.resetPasswordServiceService.RequestToresetPassword(this.forgotPasswordForm.value).subscribe(

      (response:any) => {  

        this.initForm() ;   
        this.toast.info({detail:"Info password",summary:"Mail envoyé veillez consulter vos emails",duration:5000})
        this.router.navigate(['accueil'])
      },

      (error:any) => {
        this.toast.warning({detail:"Info password",summary:"Erreur ! Email non envoyé veillez réessaiyer",duration:5000})
        console.log(error);
        
      } 
      
    )
   

  }

}


