import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Presentation } from '../modelAdmin/Presentation';
import { Utilisateur } from '../modelAdmin/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  
  public apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
  }   

  public createBloc(formData:any) :Observable<any> {  

    return this.http.post<any>( `${this.apiServerUrl}/api/pagePresentation/save`,formData);
  }

  public updateBloc(formData:any) :Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/pagePresentation/update`,formData);
  }

 
  //contenu page 
  public getPresentation():Observable<Presentation[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/pagePresentation`);
  }

  public getContenusDePage():Observable<any[]>{

    return this.http.get<any>(`${this.apiServerUrl}/api/pageAccueil/contenus`);
  }
  public getContenusDePageTemp():Observable<any[]>{

    return this.http.get<any>(`${this.apiServerUrl}/api/pageAccueil/contenusTemp`);
  }
  
  public addContenusDePage(contenusDePage:any) :Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/pageAccueil/contenus/save`,contenusDePage);
  }
  public addContenusDePageReel(pagebloc:any,contenusDePageReel:any) :Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/pagePresentation/contenusReel/save/${pagebloc.id}`,contenusDePageReel);
  }
  public updateContenusDePage(contenusDePageUpdate:any) :Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/pagePresentation/contenus/update`,contenusDePageUpdate);
  }

  public addContenuToBloc(formData:any) :Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/pageAccueil/contenus/addContenuToBloc`,formData);
  }

  public deleteContenuTemp(contenusDePage:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/pageAccueil/contenusTemp/supprimer`,contenusDePage);
  } 
  public deleteContenuReel(contenusDePage:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/pagePresentation/contenus/supprimer`,contenusDePage);
  } 
  public deletePageBloc(pageBloc:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/pagePresentation/supprimer`,pageBloc);
  }
  








  public getPresentationPage():Observable<any[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/presentation`);
  }
  // public addUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
  //   return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/users/save`,utilisateur);
  // }  

  public addPresentation(presentation:Presentation):Observable<Presentation>{
    if(presentation.id=== null){     
      console.warn(presentation) 
 
      return this.http.post<Presentation>( `${this.apiServerUrl}/api/presentation/save`,presentation);
    }else{
      const formDonnee = new FormData();      
      const donnee=presentation; 
      console.warn(presentation) 
      formDonnee.append('utilisateur',JSON.stringify(donnee));
      return this.http.post<Presentation>(`${this.apiServerUrl}/api/presentation/update`,presentation);
    }  
  }  
  
 
}
