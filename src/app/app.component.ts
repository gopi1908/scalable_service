import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container container-tight py-4">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
