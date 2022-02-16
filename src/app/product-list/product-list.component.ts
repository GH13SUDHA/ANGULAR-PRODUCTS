import { Component, OnInit } from '@angular/core';
import { productsFromFile } from '../productsFile';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products = productsFromFile;
  constructor() {}

  ngOnInit() {}
}