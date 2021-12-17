import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service'
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  public products:Product[];
  public productsSubscription: Subscription;

  constructor(private productsAPI:ProductApiService) {
    this.productsSubscription = {} as Subscription;
    this.products = [];
  }

  ngOnInit(): void {
    this.productsAPI.getProducts().subscribe((response:Product[])=>{
      this.products = response;
     })
  }

  deleteProduct(id:String|undefined){
    if(id){
      this.productsAPI.deleteProduct(id).subscribe();
    }
  }
}
