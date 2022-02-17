import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() productInside: product  | undefined
  @Output() notify= new EventEmitter

  constructor() { }

  ngOnInit() {
  }

}
