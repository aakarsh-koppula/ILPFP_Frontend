import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public newProduct: Product;
  public productsSubscription: Subscription;

  constructor(private productsAPI:ProductApiService) { 
    this.newProduct = {};
    this.productsSubscription = {} as Subscription;
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    // add to database
    this.productsAPI.postProducts(this.newProduct).subscribe();
    this.newProduct = {};
  }
}
