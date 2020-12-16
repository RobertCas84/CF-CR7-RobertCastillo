import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }
  addToCart(destinations) {
    this.items.push(destinations);
  }
 
  getItems() {
    return this.items;
  }
 
  clearCart() {
    this.items = [];
    return this.items;
  }
}
