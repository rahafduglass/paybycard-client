import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';
import {HeaderComponent} from './pages/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgIf, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(public router:Router) {
  }
  title = 'angular-app-test';

  shouldShowHeader(): boolean {
    const hiddenRoutes = ['/login', '/'];
    return !hiddenRoutes.includes(this.router.url);  }
}
