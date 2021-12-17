import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService 
{

  constructor(public http: HttpClient) 
  {
    
  }

  public verifyUser(body: any): Observable<any>
  {
    return this.http.post<any>('http://localhost:3600/users', body, {headers: new HttpHeaders( { 'Content-Type': 'application/x-www-form-urlencoded' } )});
  }

  public createUser(body: any): Observable<any>
  {
    return this.http.post<any>('http://localhost:3600/users/add-user', body, {headers: new HttpHeaders( { 'Content-Type': 'application/x-www-form-urlencoded' } )});
  }
}
