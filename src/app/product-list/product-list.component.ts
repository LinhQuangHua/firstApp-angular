import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }  
  ngOnInit(): void {
  }

  @Input() products;
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();
  

  removeProduct(id: number) {
    this.onRemoveProduct.emit(id);
  }

  
  inputQuantity(id: number, inputElement: HTMLInputElement) {
    const value = inputElement.value;
    const intValue = parseInt(value);

    if (intValue < 1) {
      inputElement.value = -intValue + '';
    } else if (value.length > 2) {
      inputElement.value = value.slice(0, 2);
    }

    this.onUpdateQuantity.emit({ id, quantity: parseInt(inputElement.value) || '' });
  }

}
