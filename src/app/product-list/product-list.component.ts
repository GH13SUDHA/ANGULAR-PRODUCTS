import { Component, OnInit } from '@angular/core';
import { productFromList } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.ts']
})
export class ProductListComponent implements OnInit {
  products = productFromList;

  addToCart() {
    window.alert('The product has been added!');
  }
  onnotify(){
    window.alert('Notify me')
  }
  constructor() { }

  ngOnInit() {
  }

}