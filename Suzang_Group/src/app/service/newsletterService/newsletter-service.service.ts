import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/admin/serviceAdmin/login.service';
import { ForgotPassword } from 'src/app/model/ForgotPassword';
import { Newsletter } from 'src/app/model/Newsletter';
import { PasswordResetModel } from 'src/app/model/PasswordResetModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsletterServiceService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient,private login: LoginService) { 
  }   

  public getNewsletters():Observable<any>{
  
      return this.http.get<ForgotPassword>( `${this.apiServerUrl}/api/newsletter`);

  }


  // public requestToVerifyResetPassword(token : string ) : Observable<any> {

  //   //deconnecter l'utilisateur
  //   this.login.logout();

  //   return this.http.get<any>( `${this.apiServerUrl}/home/resetPassword/${token}`);

  // }   

  saveNewsletter(newsletter : Newsletter) : Observable<any> {

     return this.http.post<Newsletter>( `${this.apiServerUrl}/api/newsletter/save`,newsletter);

  }

  sendDessouscrirEmail(newsletter : any) : Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/newsletter/dessouscrir`,newsletter);
  }
  
}
