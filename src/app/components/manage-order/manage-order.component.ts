import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {

  public orders:any[]=[];

  constructor() { 
  }

  ngOnInit(): void {
    //dummy data, should read from database
    this.orders=[
      {
        id:123451234500001,
        email:'dummy@test.com',
        status:'In-process'
      },
      {
        id:1234512345008964,
        email:'dummy@test.com',
        status:'Delivered'
      },
      {
        id:123451234500002,
        email:'dummy@test.com',
        status:'In-process'
      },
      {
        id:123451234500003,
        email:'dummy@test.com',
        status:'In-process'
      },
      {
        id:123451234500004,
        email:'dummy@test.com',
        status:'Delivered'
      }
    ];

    this.orders.sort((a:any, b:any)=> (a.status > b.status? -1 : 1));
  }

  process(product:any){
    product.status='Delivered';
    this.orders.sort((a:any, b:any)=> (a.status > b.status? -1 : 1));
  }

  delete(product:any){
    let id = product.id;
    this.orders.forEach((order,index)=>{
      if(order.id==id) this.orders.splice(index,1);
    });
  }

}
