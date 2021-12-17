import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFoodItem } from 'src/app/models/foodItem.model';
import { IProductDetails } from 'src/app/models/products';
import { GetProductsService } from 'src/app/services/get-products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public itemDetails: IProductDetails[];
  public itemDataLength: Number;
  public hidden: Boolean;
  public query: string;

  constructor(private activateRoute: ActivatedRoute, private searchResults: GetProductsService)
  {
    this.itemDetails = [];
    this.itemDataLength = 0;
    this.hidden = false;
    this.query = '';
  }

  ngOnInit(): void
  {
    this.activateRoute.queryParamMap.subscribe((queryParams:any) =>{
      this.query = queryParams.get('query');
      console.log(this.query);
    })
    this.getSearchResults();
  }

  public getSearchResults()
  {

    let body = new HttpParams()
      .set('category', this.query);

    console.log(body.toString());

    // get users from json-server
    this.searchResults.searchProducts(body.toString()).toPromise()
      .then( (data: IProductDetails[]) =>
      {
        this.itemDetails = data;
        console.log(data);
      })
      .catch(message => console.log('Error: ' + message.status + ' ' + message.statusText));
  }
}
