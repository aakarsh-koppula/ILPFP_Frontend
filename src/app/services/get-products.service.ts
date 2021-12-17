import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductDetails } from '../models/products'; 

@Injectable({
  providedIn: 'root'
})
export class GetProductsService 
{

  constructor(public http: HttpClient) 
  {
    
  }

  public getProducts(): Observable<any>
  {
    return this.http.get<any>('http://localhost:3600/api/v1/products');
  }

  public searchProducts(body: any): Observable<any>
  {
    return this.http.post<any>('http://localhost:3600/api/v1/products/category', body, {headers: new HttpHeaders( { 'Content-Type': 'application/x-www-form-urlencoded' } )});
  }
}
