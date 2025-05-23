import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth-service.service';

@Component({
  selector: 'app-initiate-payment-form',
  imports: [
    FormsModule
  ],
  standalone:true,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(private authService:AuthService, private router: Router) {
  }

  form={
    username: '',
    password: ''
  }

  submitForm(){
    this.authService.login(this.form).subscribe({
      next: (res)=> {
        this.authService.setToken(res.token);
        console.log('authenticated successfully');
        alert('authenticated successfully');
        this.router.navigate(['/initiate-payment']);
      },
      error: (err)=>{
        console.error('bad credentials:', err);
        alert('bad credentials');
      }
    });
  }
}
