import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderAPIService {

  constructor(private http: HttpClient) { }

  // used to checkout
  public postOrder(order:Order):Observable<void>{
    return this.http.post<void>('http://localhost:3600/api/v1/checkout', order);
  }

  // get all orders
  public getOrders():Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:3600/api/v1/orders');
  }

  // process order by id
  public processOrder(id:String):Observable<void>{
    return this.http.patch<void>('http://localhost:3600/api/v1/orders/' + id, id);
  }

  // delete order by id
  public deleteOrder(id:String):Observable<void>{
    return this.http.delete<void>('http://localhost:3600/api/v1/orders/' + id);
  }
}
