import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Accueil } from '../../modelAdmin/Accueil';
import { Client } from '../../modelAdmin/Client';

@Injectable({
  providedIn: 'root'
})
export class PageAccueilService {
 
  public apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
  } 

  public createData(formData:any) :Observable<any> {  

    return this.http.post<any>( `${this.apiServerUrl}/api/pageAccueil/save`,formData);
  }

  public updateData(formData:any) :Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/pageAccueil/update`,formData);
  }

  uploaFile(file:File):Observable<HttpEvent<{}>>{

    const formData: FormData = new FormData(); 
    
    formData.append('file',file);

    const req = new HttpRequest('POST','<Le serveur URL du fichier upload>',formData,{
      reportProgress:true,
      responseType:'text'
    })

    return this.http.request(req);

  }


  public getPageAccueil():Observable<any[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/pageAccueil`);
  }

  //Contenus Pages

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

    return this.http.post<any>( `${this.apiServerUrl}/api/pageAccueil/contenusReel/save/${pagebloc.id}`,contenusDePageReel);
  }
  public updateContenusDePage(contenusDePageUpdate:any) :Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/pageAccueil/contenus/update`,contenusDePageUpdate);
  }
   
  public addContenuToBloc(formData:any) :Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/pageAccueil/contenus/addContenuToBloc`,formData);
  }

  public deleteContenuTemp(contenusDePage:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/pageAccueil/contenusTemp/supprimer`,contenusDePage);
  } 
  public deleteContenuReel(contenusDePage:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/pageAccueil/contenus/supprimer`,contenusDePage);
  } 
  public deletePageBloc(pageBloc:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/pageAccueil/supprimer`,pageBloc);
  } 
  



  public addPageAccueil(accueil:any):Observable<any>{
    if(accueil.id=== null){       
      console.warn(accueil) 
      return this.http.post<any>( `${this.apiServerUrl}/api/pageAccueil/save`,accueil);
    }else{ 
      // const formDonnee = new FormData();      
      // const donnee=accueil; 
      // console.warn(accueil) 
      // formDonnee.append('utilisateur',JSON.stringify(donnee));
      return this.http.post<any>(`${this.apiServerUrl}/api/pageAccueil/update`,accueil);
    }  

  }


  
  public getAccueil():Observable<Accueil[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/accueilPage`);
  }
      
  // getLocation(){  
  //   return this.http.get('https://ipapi.co/json/');
  // }
  // public addUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
  //   return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/users/save`,utilisateur);
  // }  
    
  public addAccueil(accueil:Accueil):Observable<Accueil>{
    if(accueil.id=== null){         
      console.warn(accueil)  
      return this.http.post<Accueil>( `${this.apiServerUrl}/api/accueilPage/save`,accueil);
    }else{
      const formDonnee = new FormData();      
      const donnee=accueil;   
      console.warn(accueil) 
      formDonnee.append('utilisateur',JSON.stringify(donnee));
      return this.http.post<Accueil>(`${this.apiServerUrl}/api/accueilPage/update`,accueil);
    }  

  }
}
