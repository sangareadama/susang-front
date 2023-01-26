import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from 'src/app/admin/serviceAdmin/login.service';

@Component({
  selector: 'app-navbar-shared',
  templateUrl: './navbar-shared.component.html',
  styleUrls: ['./navbar-shared.component.css']   
})
export class NavbarSharedComponent implements OnInit {

  constructor(private toast: NgToastService,public login:LoginService, private router : Router ) { }

  splitted!:string[];

  ngOnInit(): void {
    const navlinks = document.querySelectorAll('.nav-link').forEach(link =>{
      this.splitted= window.location.href.split("#",2); 
      if(this.splitted[1]==link.getAttribute("routerLink")){
        link.setAttribute('class','nav-link active')
      }
    }
   )
   
  }

  public logout(){
    this.login.logout();
     if(!this.login.isLoggedIn()){
       this.toast.info({detail:"Loged out Message",summary:"vous etes déconnecté avec succès !",duration:2000})
     }else{
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: ',duration:2000})
     }
     this.router.navigate(['login'])
  }

}
