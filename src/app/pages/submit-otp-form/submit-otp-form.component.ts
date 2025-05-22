import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaymentService} from '../../services/payment-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submit-otp-form',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './submit-otp-form.component.html',
  styleUrl: './submit-otp-form.component.css'
})
export class SubmitOtpFormComponent {

  constructor(private router:Router,private paymentService: PaymentService) {
  }

  form = {
    otp: ''
  }

  submitOtp() {
    this.paymentService.submitOtp(this.form.otp).subscribe({
      next: (res) => {
        console.log('payment completed successfully', res);
        alert('payment completed successfully')
      },
      error: (err) => {
        console.error('failed complete payment', err);
        alert('failed complete payment');
      }
    });
  }

  goToPreviousPage() {
    this.router.navigate(['/send-otp'])
  }
}
