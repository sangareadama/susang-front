import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../../modelAdmin/Client';
import { ServicesItem } from '../../modelAdmin/ServicesItem';
import { ServicePage } from '../../modelAdmin/SevicePage';

@Injectable({
  providedIn: 'root'
})
export class PageServicesItemService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
  }   

  
  public getServicePage():Observable<ServicePage[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/servicePage`);
  }
  
  public addServicesPage(serviceItem:ServicePage):Observable<ServicePage>{
    if(serviceItem.id=== null){     
      console.warn(serviceItem)   
  
      return this.http.post<ServicePage>( `${this.apiServerUrl}/api/servicePage/save`,serviceItem);
    }else{
      const formDonnee = new FormData();      
      const donnee=serviceItem; 
      console.warn(serviceItem) 
      formDonnee.append('utilisateur',JSON.stringify(donnee));
      return this.http.post<ServicePage>(`${this.apiServerUrl}/api/servicePage/update`,serviceItem);
    }  

  }

  // items

  public getServicesItem():Observable<ServicesItem[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/serviceItem`);
  }
  
  public addServicesItem(serviceItem:ServicesItem):Observable<ServicesItem>{
    if(serviceItem.id=== null){     
      console.warn(serviceItem)  
  
      return this.http.post<ServicesItem>( `${this.apiServerUrl}/api/serviceItem/save`,serviceItem);
    }else{
      const formDonnee = new FormData();      
      const donnee=serviceItem; 
      console.warn(serviceItem) 
      formDonnee.append('utilisateur',JSON.stringify(donnee));
      return this.http.post<ServicesItem>(`${this.apiServerUrl}/api/serviceItem/update`,serviceItem);
    }  

  }
}
