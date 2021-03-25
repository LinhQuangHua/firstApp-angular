import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { Product } from './product.model';
import { PromoCode } from './promo-code.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  products: Product[] = [
    {
      id: 2,
      name: 'Vũ trụ màu qua đôi mắt',
      description: 'Tác phẩm nghệ thuật xuất chúng của Wang-kun!',
      thumbnail: '/assets/image/space.jpg',
      price: 5.99,
      quantity: 20,
    }, 
    // {
    //   id: 2,
    //   name: 'Bí ẩn của đại dương',
    //   description: 'Một tác phẩm nghệ thuật với cảm hứng đến từ rãnh Maria của Wang-kun tiên sinh! ',
    //   thumbnail: '/assets/image/dive.jpg',
    //   price: 9.99,
    //   quantity: 20,
    // }, 
    // {
    //   id: 3,
    //   name: 'Vũ trụ màu qua đôi mắt',
    //   description: 'Tác phẩm nghệ thuật xuất chúng của Wang-kun!',
    //   thumbnail: '/assets/image/space.jpg',
    //   price: 5.99,
    //   quantity: 20,
    // }, 
  ]
  promoCodes: PromoCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10
    },
    {
      code: 'WINTER',
      discountPercent: 20
    }
  ];

  numberItems: number = 0;
  subTotal: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number = 0;


  ngDoCheck() {
    this.numberItems = 0;
    this.subTotal = 0;
    

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }

  handleUpdateQuantity(p: { id: number; quantity: number }) {
    const product = this.products.find(product => product.id === p.id);
    if (product) {
      product.quantity = p.quantity || 0;
    }
  }

  handleRemoveProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  handleApplyPromoCode(code: string) {
    const promoCode = this.promoCodes.find(
      promoCode => promoCode.code === code
    );
    this.discountPercent = promoCode ? promoCode.discountPercent : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert(`The promotional code was applied.`);
    } else {
      alert(
        'Sorry, the promotional code you entered is not valid! Try code "AUTUMN" (discount 10% to all cart items) or "WINTER" (discount 20% to all cart items).'
      );
    }
  }
}
