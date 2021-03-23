import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products;
  @Output() onRemoveProduct = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(productID: string):void
  {
    this.onRemoveProduct.emit(productID);

   
  }

}
