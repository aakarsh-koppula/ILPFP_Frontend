import { Component, OnInit } from '@angular/core';
import { OrderAPIService } from 'src/app/services/order-api.service';
import { Subscription } from 'rxjs';
import { Order } from '../../models/order';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

  public orders:Order[];
  public ordersSubscription: Subscription;
  

  constructor(private ordersAPI:OrderAPIService) { 
    this.ordersSubscription = {} as Subscription;
    this.orders=[];
  }

  ngOnInit(): void {
    // get orders from database
    this.ordersAPI.getOrders().subscribe((response:Order[])=>{
      this.orders = response;
      // sort
      this.orders.sort((a:Order, b:Order)=> (a.isDelivered === b.isDelivered)? 0 : a.isDelivered? 1 : -1);
    })

  }

  process(id:string|undefined){
    if(id)
      this.ordersAPI.processOrder(id).subscribe();
    
    window.location.reload();
  }

  delete(id:string|undefined){
    if(id)
      this.ordersAPI.deleteOrder(id).subscribe();
    window.location.reload();
  }

}
