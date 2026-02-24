import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../../services/item.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
  query = '';

  constructor(private itemService: ItemService, private cart: CartService, private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.items = this.itemService.list(this.query);
  }

  search() {
    this.loadItems();
  }

  view(id: number) {
    this.router.navigate(['/detail', id]);
  }

  addToCart(item: Item) {
    this.cart.add(item, 1);
    alert('Added to cart');
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
