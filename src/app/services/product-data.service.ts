import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductDetails } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) {}

  public getTopProducts(): Observable<IProductDetails[]>{
    return this.http.get<IProductDetails[]>('http://localhost:3600/products/top-products');
  }
}
