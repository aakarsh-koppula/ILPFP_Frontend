import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserData } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) {}

  public getUserData(em: String): Observable<any>{
    return this.http.get<any>('http://localhost:3600/users/user-data/'+em);
  }

  public updateUser(user: any): Observable<IUserData>{
    return this.http.post<any>('http://localhost:3600/users/update-user', user)
  }
}
