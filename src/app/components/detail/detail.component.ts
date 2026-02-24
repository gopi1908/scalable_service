import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService, Item } from '../../services/item.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  item: Item | undefined;
  constructor(private route: ActivatedRoute, private items: ItemService, private router: Router, private cart: CartService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.items.get(id);
  }

  buy() {
    if (!this.item) return;
    this.router.navigate(['/payment'], { state: { item: this.item } });
  }

  addToCart() {
    if (!this.item) return;
    this.cart.add(this.item, 1);
    alert('Added to cart');
  }
}
