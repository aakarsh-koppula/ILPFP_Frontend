import { Component, OnInit } from '@angular/core';
import { IProductDetails } from 'src/app/models/products';

//import { ShareDataService } from '../../../services/share-data.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public newProduct: IProductDetails;

  //private SharedData:ShareDataService
  constructor() { 
    this.newProduct = {};
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    // add to database
    this.newProduct = {};
    //console.log(this.SharedData.products);
  }
}
