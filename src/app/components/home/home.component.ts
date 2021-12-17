import { Component, OnInit } from '@angular/core';
import {IFoodItem} from 'src/app/models/foodItem.model'
import { Router } from '@angular/router';
import { IProductDetails } from 'src/app/models/products';
import {ProductDataService} from 'src/app/services/product-data.service';
import { Product } from 'src/app/models/product';
import { GetProductsService } from 'src/app/services/get-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public filteritem: string;
  public topProducts: Product[];
  public itemarray: IProductDetails[];
  public category: String;

  constructor( private router: Router, private topProductService:  ProductDataService, private menuservice: GetProductsService) {

    this.topProducts = []
    this.filteritem="";
    this.itemarray = [];
    this.category = "";    
   }
   //[(NgModel)] ="filteritem"
   //| foodItemFilter : filteritem

  ngOnInit(): void {
    this.initializeItems();
    this.initializeTopProducts()
  }

  public initializeItems(){
    this.menuservice.getProducts().subscribe((response:IProductDetails[])=>{
      this.itemarray = response;
    })
  }

  public initializeTopProducts(){
    this.topProductService.getTopProducts().subscribe((response:Product[])=>{
      this.topProducts = response;
      console.log(this.topProducts)
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
