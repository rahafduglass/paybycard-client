import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaymentService} from '../../services/payment-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-otp',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './send-otp.component.html',
  styleUrl: './send-otp.component.css'
})
export class SendOtpComponent {

  constructor(private paymentService: PaymentService, private router: Router) {
  }

  sendOtp() {
    this.paymentService.sendOtp().subscribe({
      next: (res) => {
        console.log('Otp sent successfully', res);
        alert('Otp sent successfully')
        this.router.navigate(['/submit-otp']);
      },
      error: (err) => {
        console.error('failed to send Otp', err);
        alert('failed to send Otp');
      }
    });
  }

  goToPreviousPage() {
    this.router.navigate(['/initiate-payment'])
  }
  goToNextPage(){
    this.router.navigate(['/submit-otp'])
  }
}
