import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedCartService } from 'src/app/services/shared-cart.service';
import { Order } from 'src/app/models/order';
import { OrderAPIService } from 'src/app/services/order-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart:Product[];
  public payed: boolean;
  public deleted: boolean;

  constructor(private activateRoute: ActivatedRoute, private sharedCart:SharedCartService, private orderAPI:OrderAPIService) { 
    this.payed = false;
    this.deleted = false;
    this.cart = [];
  }

  ngOnInit(): void {
    this.loadCart();
  }

  public onCheckout(){
    // get email from cookie
    const email = document.cookie.split("email=")[1];

    // create order
    var order:Order={
      "user": email,
      "isDelivered": false,
      "cart":this.cart
    }
    this.orderAPI.postOrder(order).subscribe();
    this.sharedCart.clearCart();
    this.cart = this.sharedCart.getProducts();
  }

  public loadCart(): void{
    this.cart = this.sharedCart.getProducts();
  }

  public deleteProduct(pro:Product){
    this.sharedCart.deleteProduct(pro);
    this.cart = this.sharedCart.getProducts();
  }

  public addProduct(){
    var product:Product={
      "name": "item1",
      "category": "phone",
      "price": 8964,
      "image": "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg",
      "description": "a phone",
      "isTopProduct": true
    };
    this.sharedCart.addProduct(product);
  }
}
