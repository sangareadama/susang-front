import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from 'src/app/model/ForgotPassword';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class StatNewsletterServiceService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient,private login: LoginService) { 
  }   

  public getStatNewsletters():Observable<any>{
  
      return this.http.get<any>( `${this.apiServerUrl}/api/statNewsletter`);

  }  

  public getStatNewsletterParJour(jour : string ) : Observable<any> {

    return this.http.get<any>( `${this.apiServerUrl}/api/statNewsletterParJour/${jour}`);

  } 
  
  public getStatNewsletterParMois(mois : string ) : Observable<any> {

    return this.http.get<any>( `${this.apiServerUrl}/api/statNewsletterParMois/${mois}`);

  }
  public getStatNewsletterParInterval(deb : string,fin : string) : Observable<any> {

    return this.http.get<any>( `${this.apiServerUrl}/api/statNewsletterParInterval/${deb}/${fin}`);

  }
  
  public getStatNewsletterParAn(annee : string ) : Observable<any> {

    return this.http.get<any>( `${this.apiServerUrl}/api/statNewsletterParMois/${annee}`);

  }

}
