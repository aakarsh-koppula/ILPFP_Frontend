import { Component, OnInit } from '@angular/core';
import {IFoodItem} from 'src/app/models/foodItem.model'
import { Router } from '@angular/router';
import { IProductDetails } from 'src/app/models/products';
import {ProductDataService} from 'src/app/services/product-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public fooditems: IFoodItem;
  public filteritem: string;
  public topProducts: IProductDetails[];

  constructor( private router: Router, private topProductService:  ProductDataService) {
    this.fooditems = {} as IFoodItem;
    this.topProducts = []
    this.filteritem="";
   }
   //[(NgModel)] ="filteritem"
   //| foodItemFilter : filteritem

  ngOnInit(): void {
    //this.initializeItems();
    this.initializeTopProducts()
  }

  /* public initializeItems(){
    this.menuservice.getProducts().subscribe((response:IFoodItem[])=>{
      this.itemarray = response;
    })
  } */

  /* public goToCart(item : IFoodItem):void{
    this.router.navigate(['/cart'],{
      queryParams:{
        id: item.id,
        restaurant: item.restaurant,
        dishName: item.dishName,
        description: item.description,
        rating: item.rating,
        cost: item.cost,
        imageUrl: item.imageUrl
      }
    })
  }

  public onCartClick():void{
    this.router.navigate(['/cart'],{
      queryParams:{
        id: 5,
        restaurant: "KFC",
        dishName: "KFC chicken bucket",
        description: "American Restaurant",
        rating: 3.9,
        cost: 260,
        imageUrl: "http://dummyimage.com/128x100.png/ff4444/ffffff"
      }
    })
  } */

  public initializeTopProducts(){
    this.topProductService.getTopProducts().subscribe((response:IProductDetails[])=>{
      this.topProducts = response;
      console.log(this.topProducts)
    })

  }
}
