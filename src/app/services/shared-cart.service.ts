import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SharedCartService {
  public cart:Product[] = [];
  constructor() { 
      let thisCart = localStorage.getItem('cart');

      this.cart = JSON.parse(thisCart as string);
      if(this.cart==null) this.cart=[];
  }

  public addProduct(prod:Product){
    this.cart.push(prod);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  public deleteProduct(prod:Product){
    this.cart.forEach( (item, index) => {
      if(item === prod) this.cart.splice(index,1);
    });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getProducts() {
    return this.cart;
  }

  clearCart(){
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
