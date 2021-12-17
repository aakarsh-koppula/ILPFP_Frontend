import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public id: string;
  public product: Product;
  public productsSubscription: Subscription;

  constructor(private productsAPI:ProductApiService, private route: ActivatedRoute) { 
    this.product = {};
    this.productsSubscription = {} as Subscription;
    this.id="";
   }

  ngOnInit(): void {
    // get id
    this.id = this.route.snapshot.paramMap.get('id') as string;
    // get product from API
    this.productsAPI.getProduct(this.id).subscribe((response:Product)=>{
      this.product = response;
    })
  }

  onSubmit():void{
    // edit
    console.log("id: "+this.id);
    this.productsAPI.patchProduct(this.id, this.product).subscribe();
    this.product = {};
  }
}
