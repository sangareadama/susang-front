import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { map } from 'rxjs';
import { Utilisateur } from '../admin/modelAdmin/Utilisateur';
import { UtilisateurImageDatailService } from '../admin/serviceAdmin/ImageService/utilisateur-image-datail.service';
import { LoginService } from '../admin/serviceAdmin/login.service';

@Component({   
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'', 
    password:''
  };

  constructor(private login:LoginService,private router:Router,
    private utilisateurImageDatailService:UtilisateurImageDatailService,private toast: NgToastService) { }

  ngOnInit(): void {
  } 

  public formSubnit(){
    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      
     alert('username requis');
     
    } 
    else if(this.loginData.password.trim()=='' || this.loginData.password==null){
      
      alert('password requis');
      
     }
    //request to server to generate token

    this.login.generateToken(this.loginData).subscribe((data:any)=>{
      console.log('sucess');
      console.log(data);
      this.toast.success({detail:"Success Message",summary:"Authentifié avec success",duration:2000})

      //login      
       this.login.loginUser(data.token);
       this.login.autoLogOut(24*60*60*1000)
       this.login.getCurrentUser()
       .pipe( 
        map(((utilisateur:Utilisateur)=>this.utilisateurImageDatailService.createImage(utilisateur)))
      )
       .subscribe((user:Utilisateur)=>{
        this.login.setUser(user); 
        console.log(user); 

            //     //redirect ...ADMIN dash
          if(this.login.getUserRole()=='ROLE_ADMIN'){
            // admin Dashboard
            // window.location.href='/admin'
            this.router.navigate(['admin'])

          }else if(this.login.getUserRole()=='ROLE_MANAGER'){
            //     //redirect Manager Dash
          // window.location.href='/accueil'
            this.router.navigate(['admin'])
            
          }else{
            // lambda
            this.login.logout();
          }
 
       })
         
     
        
      
        
      
    }, 
     (error:HttpErrorResponse)=>{  
        console.log("Error !");
        console.log(error)
       this.toast.error({detail:"Error Message",summary:"Echec d'authentification",duration:2000})

     })
  }


}
