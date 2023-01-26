import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
  }

  public getUtilisateurs():Observable<Utilisateur[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/user`);
  }
  public addUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/user/addUtilisateur`,utilisateur);
  }
  public updateUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/user/updateUtilisateur`,utilisateur);
  }
}
