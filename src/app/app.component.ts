import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  products: Product[] = [
    {
      id: '1',
      name: 'Vũ trụ màu qua đôi mắt',
      description: 'Tác phẩm nghệ thuật xuất chúng của Wang-kun!',
      thumbnail: '/assets/image/space.jpg',
      price: 5.99,
      quantity: 20,
    }, 
    {
      id: '2',
      name: 'Bí ẩn của đại dương',
      description: 'Một tác phẩm nghệ thuật với cảm hứng đến từ rãnh Maria của Wang-kun tiên sinh! ',
      thumbnail: '/assets/image/dive.jpg',
      price: 9.99,
      quantity: 20,
    }, 
    {
      id: '3',
      name: 'Vũ trụ màu qua đôi mắt',
      description: 'Tác phẩm nghệ thuật xuất chúng của Wang-kun!',
      thumbnail: '/assets/image/space.jpg',
      price: 5.99,
      quantity: 20,
    }, 
  ]
  items: number = 1;
  numberItems: number = this.products.length;
  subTotal: number = this.items * this.products[0].price;
  tax: number = 5;
  total: number = this.subTotal + this.tax;

  RemoveProduct(productID: string)
  {
    alert("Sản phẩm này đã bị xóa" + productID);
    // Remove product
    const index = this.products.findIndex(product => product.id == productID);
    if(index !== -1)
    {
      this.products.splice(index,1)
    }
    
    // Calculator money after remove product
    let numberItems = 0;
    let subTotal = 0;
    let total = 0;


    for(const product of this.products)
    {
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
      total += subTotal;

    }

    this.subTotal = subTotal;
    this.numberItems = numberItems; 
    this.total = total;
    this.total === 0 ? this.tax = 0: this.tax = 5;
  }
}
