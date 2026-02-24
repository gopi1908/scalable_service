import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styles: [`.center {display:flex; align-items:center; justify-content:center; height:60vh}`]
})
export class SplashComponent {
  constructor(private router: Router) {
    setTimeout(() => this.router.navigate(['/login']), 1200);
  }
}
