import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../model/Role';
import { environment } from 'src/environments/environment';

@Injectable({ 
  providedIn: 'root'
})
export class RoleService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
  }

  public getRoles():Observable<Role[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/role/liste`); 
  }  
  public addRole(role:Role):Observable<Role>{
    return this.http.post<Role>(`${this.apiServerUrl}/api/user/addrole`,role);
  }
  public updateRole(role:Role):Observable<Role>{
    return this.http.post<Role>(`${this.apiServerUrl}/api/user/updaterole`,role);
  }
 // public deleteRole(roleId:number):Observable<void>{
 //   return this.http.post<void>(`${this.apiServerUrl}/api/user/deleterole/${roleId}`);
  //}
}
