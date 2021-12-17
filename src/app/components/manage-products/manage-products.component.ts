import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ShareDataService } from 'src/app/services/share-data.service';
import { IProductDetails } from 'src/app/models/products';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  public products:any[]=[];

  constructor( private route: ActivatedRoute,) {
    //private sharedData:ShareDataService
  }

  ngOnInit(): void {
    // dummy data, should load from database
    this.products=[
      {
        name: "prod1",
        id: 1,
        price:100
      },
      {
        name: "prod2",
        id: 2,
        price:200
      },
      {
        name: "prod3",
        id: 3,
        price:300
      },
      {
        name: "prod4",
        id: 4,
        price:400
      }
    ]
  }


}
