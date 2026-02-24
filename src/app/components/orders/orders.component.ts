import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  constructor(private ordersSvc: OrderService) {}
  ngOnInit() {
    this.orders = this.ordersSvc.list();
    // compute totals for cart orders
    this.orders.forEach(o => {
      if (o.cart) o._total = o.cart.reduce((s: number, a: any) => s + (a.price * (a.qty || 1)), 0);
      else if (o.item) o._total = o.item.price;
    });
  }
}
