import { Injectable } from '@angular/core';
import { Item } from './item.service';

export interface CartItem extends Item { qty: number }

@Injectable({ providedIn: 'root' })
export class CartService {
  private key = 'cart';

  private read(): CartItem[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }
  private write(items: CartItem[]) { localStorage.setItem(this.key, JSON.stringify(items)); }

  list(): CartItem[] { return this.read(); }

  add(item: Item, qty = 1) {
    const items = this.read();
    const found = items.find(i => i.id === item.id);
    if (found) found.qty += qty; else items.push({ ...item, qty });
    this.write(items);
  }

  remove(id: number) {
    const items = this.read().filter(i => i.id !== id);
    this.write(items);
  }

  updateQty(id: number, qty: number) {
    const items = this.read();
    const it = items.find(i => i.id === id);
    if (it) it.qty = qty; this.write(items);
  }

  clear() { localStorage.removeItem(this.key); }

  total(): number { return this.read().reduce((s, i) => s + i.price * (i.qty || 1), 0); }
}
