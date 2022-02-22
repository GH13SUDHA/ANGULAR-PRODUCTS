import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from './products';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: product[] = [];
  // CONSTRUCTOR BASED DEPENDENCY INJECTION
  constructor(private http: HttpClient) {}

  addToCart(product: product) {
    this.items.push(product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}