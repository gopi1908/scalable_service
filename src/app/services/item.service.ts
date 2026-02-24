import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'Smart watch', price: 50000, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop', description: 'Advanced fitness tracking and health monitoring on your wrist' },
    { id: 2, name: 'Portable SSD', price: 500, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop', description: '1TB portable solid-state drive with USB-C connectivity' },
    { id: 3, name: 'Wireless Mouse', price: 2000, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop', description: 'Comfortable ergonomic wireless mouse with precision tracking' },
    { id: 4, name: 'USB Hub', price: 15000, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop', description: '7-in-1 USB-C hub with multiple ports for connectivity' },
    { id: 5, name: 'Headphones', price: 3000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop', description: 'Noise cancelling' },
    { id: 6, name: 'Webcam', price: 5000, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop', description: '1080p webcam' }
  ];

  list(query: string = ''): Item[] {
    if (!query) return this.items;
    return this.items.filter(i => i.name.toLowerCase().includes(query.toLowerCase()) || i.description.toLowerCase().includes(query.toLowerCase()));
  }

  get(id: number): Item | undefined {
    return this.items.find(i => i.id === id);
  }
}
