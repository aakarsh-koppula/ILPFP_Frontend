import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3600/api/v1/products');
  }

  public getProduct(id:String):Observable<Product>{
    return this.http.get<Product>('http://localhost:3600/api/v1/products/' + id);
  }

  public postProducts(pro:Product):Observable<void>{
    return this.http.post<void>('http://localhost:3600/api/v1/admin/products', pro);
  }

  public patchProduct(id:String, pro:Product):Observable<void>{
    return this.http.patch<void>('http://localhost:3600/api/v1/admin/products/' + id, pro);
  }

  public deleteProduct(id:String):Observable<void>{
    return this.http.delete<void>('http://localhost:3600/api/v1/admin/products/' + id);
  }
}

