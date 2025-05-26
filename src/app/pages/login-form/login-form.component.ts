import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth-service.service';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-initiate-payment-form',
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  form = {
    username: '',
    password: ''
  }
  protected message: string = '';
  protected messageClass: string = '';

  submitForm() {
    this.authService.login(this.form).subscribe({
        next: (res) => {
          this.authService.setToken(res.token);
          console.log('authenticated successfully');
          this.router.navigate(['/initiate-payment']);
        },
        error: (err) => {
          console.error('bad credentials:', err);
          if (err.status == 404 || err.status==401) {
            this.message = "bad credentials";
            this.messageClass = 'error-message';
          } else {
            // status 0 often means server is unreachable (network error)
            this.message = 'Server error. Please check your connection.';
            this.messageClass = 'error-message';
          }
        }
      }
    );
  }
}
