import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  items: any[] = [];
  total = 0;
  constructor(private cart: CartService, private router: Router) {}
  ngOnInit() { this.reload(); }
  reload() { this.items = this.cart.list(); this.total = this.cart.total(); }
  remove(id: number) { this.cart.remove(id); this.reload(); }
  changeQty(id: number, q: string) { const qty = Number(q) || 1; this.cart.updateQty(id, qty); this.reload(); }
  checkout() { this.router.navigate(['/payment'], { state: { cart: this.items } }); }
}
