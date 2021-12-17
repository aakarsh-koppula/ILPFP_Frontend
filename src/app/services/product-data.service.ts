import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) {}

  public getTopProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3600/products/top-products');
  }
}
