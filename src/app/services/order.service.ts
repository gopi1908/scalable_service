import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderService {
  place(order: any) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
  }
  list() { return JSON.parse(localStorage.getItem('orders') || '[]'); }
}
