import { Component, OnInit } from '@angular/core';
import {IFoodItem} from 'src/app/models/foodItem.model'
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedCartService } from 'src/app/services/shared-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public itemDetails: IFoodItem;
  public cart:Product[];
  public payed: boolean;
  public deleted: boolean;

  constructor(private activateRoute: ActivatedRoute, private sharedCart:SharedCartService) { 
    this.itemDetails = {} as IFoodItem;
    this.payed = false;
    this.deleted = false;
    this.cart = [];
  }

  ngOnInit(): void {
    this.loadCart();
  }

  public onCheckout(){
    // 
  }

  public loadCart(): void{
    this.cart = this.sharedCart.getProducts();
  }

  public deleteProduct(pro:Product){
    this.sharedCart.deleteProduct(pro);
    this.cart = this.sharedCart.getProducts();
  }

   public onCartClick():void{
  //   this.router.navigate(['/track'],{
  //     queryParams:{
  //       id: this.itemDetails.id,
  //       restaurant: this.itemDetails.restaurant,
  //       dishName: this.itemDetails.dishName,
  //       description: this.itemDetails.description,
  //       rating: this.itemDetails.rating,
  //       cost: this.itemDetails.cost,
  //       imageUrl: this.itemDetails.imageUrl
  //     }
  //   })
  }

public hideorder(){
  this.deleted = true;
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
