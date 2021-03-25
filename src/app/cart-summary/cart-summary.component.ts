import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  @Input() subTotal: number;
  @Input() tax: number;
  @Input() discount: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
