import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {Component} from '@angular/core';

@Component({
    selector: 'paybycard-header',
    standalone: true,
    templateUrl: './header.component.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
    styleUrl: './header.component.css'
  }
)
export class HeaderComponent {
  constructor(router: Router) {
  }

  protected readonly sessionStorage = sessionStorage;
}
