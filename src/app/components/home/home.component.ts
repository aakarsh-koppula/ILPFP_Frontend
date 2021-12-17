import { Component, OnInit } from '@angular/core';
import {IFoodItem} from 'src/app/models/foodItem.model'
import { Router } from '@angular/router';
import { GetProductsService } from 'src/app/services/get-products.service';
import { IProductDetails } from 'src/app/models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public fooditems: IFoodItem;
  public filteritem: string;
  public itemarray: IProductDetails[];
  public category: String;

  constructor( private router: Router, private menuservice: GetProductsService ) {
    this.fooditems = {} as IFoodItem;
    this.itemarray = [];
    this.filteritem="";
    this.category = "";
   }

   //[(NgModel)] ="filteritem"
   //| foodItemFilter : filteritem

  ngOnInit(): void {
    this.initializeItems();
  }

  public initializeItems(){
    this.menuservice.getProducts().subscribe((response:IProductDetails[])=>{
      this.itemarray = response;
    })
  }

  public goToCart(item : IFoodItem):void{
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
  }


  public navigateToResultsPage(query: String)
  {
    // we need to typecast to make typescript happy
    this.category = query;
    this.router.navigate(['searchresults'],
      {
        queryParams:
        {
          query: this.category
        }
      }
    );
  }
}
