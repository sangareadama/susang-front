import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Atout } from '../../modelAdmin/Atout';
import { Contact } from '../../modelAdmin/Contact';
import { SendEmailModel } from '../../modelAdmin/SendEmailModel';

@Injectable({
  providedIn: 'root' 
})
export class ContactServiceService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
  }   
 
  
  public getContact():Observable<Contact[]>{  
    return this.http.get<any>(`${this.apiServerUrl}/api/contactPage`);
  }
  public getNombreMessage():Observable<any>{    
    return this.http.get<any>(`${this.apiServerUrl}/api/nombreMessage`);
  }
  public ouvertureMessage(nosContactloded:any):Observable<any>{  
    return this.http.post<any>(`${this.apiServerUrl}/api/messageOuvert`,nosContactloded);
  }

  public getNosContacts():Observable<any[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/contactPage/nousContacter`);
  }

  public sendEmail(SendEmailModel:SendEmailModel):Observable<SendEmailModel>{  
    alert("okk "+SendEmailModel.nom)


    console.log(SendEmailModel);
    return this.http.post<SendEmailModel>( `${this.apiServerUrl}/api/contactPage/sendEmail`,SendEmailModel);
  }

  public addContact(contact:Contact):Observable<Contact>{
    if(contact.id=== null){     
      console.warn(contact)   
      return this.http.post<Contact>( `${this.apiServerUrl}/api/contactPage/save`,contact);
    }else{
      const formDonnee = new FormData();      
      const donnee=contact; 
      console.warn(contact) 
      formDonnee.append('utilisateur',JSON.stringify(donnee));
      return this.http.post<Contact>(`${this.apiServerUrl}/api/contactPage/update`,contact);
    }  

  }
}
