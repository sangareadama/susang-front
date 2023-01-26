import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Atout } from '../../modelAdmin/Atout';
import { Client } from '../../modelAdmin/Client';

@Injectable({
  providedIn: 'root'
})
export class PageAtoutService {


  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
  }   

  
  public getAtout():Observable<Atout[]>{  
    return this.http.get<any>(`${this.apiServerUrl}/api/atoutPage`);
  }
  // public addUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
  //   return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/users/save`,utilisateur);
  // }  

  public addAtout(atout:Atout):Observable<Atout>{
    if(atout.id=== null){     
      console.warn(atout) 
  
      return this.http.post<Atout>( `${this.apiServerUrl}/api/atoutPage/save`,atout);
    }else{
      const formDonnee = new FormData();      
      const donnee=atout; 
      console.warn(atout) 
      formDonnee.append('utilisateur',JSON.stringify(donnee));
      return this.http.post<Atout>(`${this.apiServerUrl}/api/atoutPage/update`,atout);
    }  

  }
}
