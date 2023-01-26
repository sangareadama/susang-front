import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from 'src/app/model/ForgotPassword';
import { environment } from 'src/environments/environment';
import { Newsletter } from '../../modelAdmin/Newsletter';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {  

  public apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient,private login: LoginService) { 
  }   

  public getReferences():Observable<any>{
  
      return this.http.get<any>( `${this.apiServerUrl}/api/reference`);

  }
  public AddReference(reference:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/reference/save`,reference);
  } 

  public deleteReference(reference:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/reference/supprimer`,reference);
  }  
}
