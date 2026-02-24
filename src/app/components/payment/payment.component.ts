import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent {
  item: any = history.state.item || null;
  cart: any[] | null = history.state.cart || null;
  name = '';
  card = '';
  constructor(private orders: OrderService, private router: Router) {}

  get cartTotal(): number {
    if (this.cart) return this.cart.reduce((s, a) => s + (a.price * (a.qty || 1)), 0);
    if (this.item) return this.item.price;
    return 0;
  }

  pay() {
    if (!this.item && !this.cart) return;
    // dummy gateway: simple validation
    if (this.name.trim().length < 3 || this.card.trim().length < 12) {
      alert('Enter valid payer details');
      return;
    }
    const date = new Date().toISOString();
    if (this.cart) {
      this.orders.place({ cart: this.cart, payer: this.name, date });
    } else {
      this.orders.place({ item: this.item, payer: this.name, date });
    }
    // clear cart if used
    if (this.cart) localStorage.removeItem('cart');
    this.router.navigate(['/orders']);
  }
}
