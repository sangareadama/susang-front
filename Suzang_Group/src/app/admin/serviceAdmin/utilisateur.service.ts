import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../modelAdmin/Utilisateur';
import { UtilisateurRole } from '../modelAdmin/UtilisateurRole';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
  }   

  
  public getUtilisateurs():Observable<Utilisateur[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/users`);
  }
  // public addUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
  //   return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/users/save`,utilisateur);
  // }  

  public addUtilisateur(utilisateur:FormData):Observable<Utilisateur>{
    // if(this.utilisateur.id=== null){       
    //   console.warn(utilisateur) 

      return this.http.post<Utilisateur>( `${this.apiServerUrl}/api/users/save`,utilisateur);
    // }else{  
    //   const formDonnee = new FormData();      
    //   const donnee=utilisateur; 
    //   console.warn(utilisateur) 
    //   formDonnee.append('utilisateur',JSON.stringify(donnee));
    //   return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/users/update`,utilisateur);
    // }  
  }  
 
  public deleteUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/users/delete`,utilisateur);
  }  

  public saveUtilisateurRole(utilisateurRole:UtilisateurRole):Observable<UtilisateurRole>{

    console.log(utilisateurRole)
    return this.http.post<UtilisateurRole>(`${this.apiServerUrl}/api/users/role/addtoUser`,utilisateurRole);
  }  

   
}
  