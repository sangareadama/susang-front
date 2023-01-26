import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../../modelAdmin/Client';
import { Presentation } from '../../modelAdmin/Presentation';

@Injectable({
  providedIn: 'root'
})
export class PageClientService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
  }   

  
  public getClient():Observable<Client[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/clientPage`);
  }
  // public addUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
  //   return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/users/save`,utilisateur);
  // }  

  public addClient(client:Client):Observable<Client>{
    if(client.id=== null){     
      console.warn(client) 
  
      return this.http.post<Client>( `${this.apiServerUrl}/api/clientPage/save`,client);
    }else{
      const formDonnee = new FormData();      
      const donnee=client; 
      console.warn(client) 
      formDonnee.append('utilisateur',JSON.stringify(donnee));
      return this.http.post<Client>(`${this.apiServerUrl}/api/clientPage/update`,client);
    }  

  }
}
