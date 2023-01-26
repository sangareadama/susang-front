import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atout } from 'src/app/admin/modelAdmin/Atout';
import { LoginService } from 'src/app/admin/serviceAdmin/login.service';
import { ForgotPassword } from 'src/app/model/ForgotPassword';
import { PasswordResetModel } from 'src/app/model/PasswordResetModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' 
})
export class ResetPasswordServiceService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient,private login: LoginService) { 
  }   


  public RequestToresetPassword(forgotPasswordForm:ForgotPassword):Observable<ForgotPassword>{
  
      return this.http.post<ForgotPassword>( `${this.apiServerUrl}/home/forgotPassword`,forgotPasswordForm);
  }


  public requestToVerifyResetPassword(token : string ) : Observable<any> {

    //deconnecter l'utilisateur
    this.login.logout();

    return this.http.get<any>( `${this.apiServerUrl}/home/resetPassword/${token}`);

  }   

  resetPassword(passwordReset : PasswordResetModel ,token : string) : Observable<any> {

    return this.http.post<PasswordResetModel>( `${this.apiServerUrl}/home/resetPassword/${token}`,passwordReset);

  }
  
} 
 