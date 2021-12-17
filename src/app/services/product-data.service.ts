import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductDetails } from '../models/products';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) {}

  public getTopProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3600/api/v1/products/top-products');
  }
}
