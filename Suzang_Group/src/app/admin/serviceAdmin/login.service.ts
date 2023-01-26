import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../modelAdmin/Utilisateur';

@Injectable({
  providedIn: 'root'
})   
export class LoginService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient,private toast: NgToastService,private router : Router) { }

  //current user 
  public getCurrentUser():Observable<any>{ 
    let UserToken=this.getToken();
    //  let Head_object= new HttpHeaders().set("Authorization","Bearer "+UserToken)
    //  alert('voila '+Head_object.get("Authorization"))
    // return this.http.get(`${this.apiServerUrl}/api/current_user`,{headers:Head_object})
    return this.http.get<any>(`${this.apiServerUrl}/api/current_user`)
  } 
  //generate token   
  public  generateToken(loginData:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/generateToken`,loginData)
  }


  public Login(loginData:any):Observable<any>{
    console.log(loginData); 
    this.autoLogOut(200);
    return this.http.post<any>(`${this.apiServerUrl}/login`,loginData)
  }   
 
  //login user: set token in localStorage
  public loginUser(token: any){
    localStorage.setItem('token',token)
    return true;
  }
    
  //islogin user is logged or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token")
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
      return false;   
    }else{  
      return true;
    }

  }

  //auto log aout if time expired
  public autoLogOut(expirationDate:number){
    setTimeout(()=>{
      this.logout()
      this.toast.info({detail:"Expiration ",summary:"veillez vous re-connecter svp.",duration:5000})
      this.router.navigate(['login'])
    },expirationDate )
  }

  //logout : remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem('token');
  }

  // set userDetail 
  public setUser(user:Utilisateur){
      localStorage.setItem('user', JSON.stringify(user));
  }

  // get user
  public getUser(){
    
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
    
   
  }

  //get userRole
  public getUserRole(){ 
    let user = this.getUser();
    return user.roles[0].libelle;
  }
} 
