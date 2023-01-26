import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from 'src/app/model/ForgotPassword';
import { Newsletter } from 'src/app/model/Newsletter';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';

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

  public deleteNewsletter(newsletter:Newsletter):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/newsletter/supprimer`,newsletter);
  }  

}
