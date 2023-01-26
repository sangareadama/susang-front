import { HttpRequest } from '@angular/common/http';
import { splitNsName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from 'src/app/admin/serviceAdmin/login.service';
import { navbarDataAdmin } from 'src/app/admin/sidenav/nav-data';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  constructor( private toast: NgToastService,public login:LoginService, private router : Router ) { }
  
  navData=navbarDataAdmin; 
  
  splitted!:string[];

  

  public logout(){
    this.login.logout();
     if(!this.login.isLoggedIn()){
       this.toast.info({detail:"Loged out Message",summary:"vous etes déconnecté avec succès !",duration:2000})
     }else{
      this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: ',duration:2000})
     }
     this.router.navigate(['login'])
  }
  
  ngOnInit(): void {
    this.navData=navbarDataAdmin;
  }  

  activePage= window.location.pathname;

  
 

}
