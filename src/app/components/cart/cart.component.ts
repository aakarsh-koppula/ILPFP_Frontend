import { Component, OnInit } from '@angular/core';
import {IFoodItem} from 'src/app/models/foodItem.model'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public itemDetails: IFoodItem;
  public payed: boolean;
  public deleted: boolean;
  constructor(private activateRoute: ActivatedRoute, private router: Router) { 
    this.itemDetails = {} as IFoodItem;
    this.payed = false;
    this.deleted = false;
  }

  ngOnInit(): void {
    this.getDetails();
  }



  public onCheckout(){
    this.payed=true;
  }
  public getDetails(): void{
    this.activateRoute.queryParamMap.subscribe((queryParams:any)=>{
      this.itemDetails.id = queryParams.get('id');
      this.itemDetails.restaurant = queryParams.get('restaurant');
      this.itemDetails.dishName = queryParams.get('dishName');
      this.itemDetails.description = queryParams.get('description');
      this.itemDetails.rating = queryParams.get('rating');
      this.itemDetails.cost = queryParams.get('cost');
      this.itemDetails.imageUrl = queryParams.get('imageUrl');
    })
  }

  public onCartClick():void{
    this.router.navigate(['/track'],{
      queryParams:{
        id: this.itemDetails.id,
        restaurant: this.itemDetails.restaurant,
        dishName: this.itemDetails.dishName,
        description: this.itemDetails.description,
        rating: this.itemDetails.rating,
        cost: this.itemDetails.cost,
        imageUrl: this.itemDetails.imageUrl
      }
    })
  }
public hideorder(){
  this.deleted = true;
}

}
