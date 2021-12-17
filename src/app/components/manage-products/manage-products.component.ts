import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ShareDataService } from 'src/app/services/share-data.service';
import { IProductDetails } from 'src/app/models/products';
import { ProductApiService } from 'src/app/services/product-api.service'
import { Subscription } from 'rxjs';
// import { Product } from '../../models/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  public products:IProductDetails[];
  public productsSubscription: Subscription;

  constructor(private productsAPI:ProductApiService) {
    this.productsSubscription = {} as Subscription;
    this.products = [];
  }

  ngOnInit(): void {
    this.productsAPI.getProducts().subscribe((response:IProductDetails[])=>{
      this.products = response;
    })
  }

  deleteProduct(id:String|undefined){
    if(id){
      this.productsAPI.deleteProduct(id).subscribe();
    }
  }
}
