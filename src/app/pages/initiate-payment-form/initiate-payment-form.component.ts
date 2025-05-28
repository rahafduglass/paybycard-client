import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {PaymentService} from '../../services/payment-service.service';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-initiate-payment-form',
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  standalone: true,
  templateUrl: './initiate-payment-form.component.html',
  styleUrl: './initiate-payment-form.component.css'
})
export class InitiatePaymentFormComponent {

  constructor(private paymentService: PaymentService, private router: Router) {
  }

  protected message: string = '';
  protected messageClass: string = '';

  form = {
    card: {
      cardNumber: '',
      cvv: '',
      expiryDate: ''
    },
    items: '',
    clientName: '',
    amount: '',
  }

  submitForm() {
    this.paymentService.initiatePayment(this.form).subscribe({
      next: (res) => {
        this.paymentService.setReferenceNumber(res.referenceNumber);
        console.log('Payment initiated successfully:', res);
        alert('Payment initiated successfully!');
        this.router.navigate(['/send-otp']);

      },
      error: (err) => {
        console.error('Payment failed:', err);
        if (err.status == 400) {
          this.message = "please fill all empty fields";
          this.messageClass = 'error-message';
        }else if (err.status == 422) {
          this.message = "invalid card";
          this.messageClass = 'error-message';
        }
        else {
          // status 0 often means server is unreachable (network error)
          this.message = 'Server error. Please check your connection.';
          this.messageClass = 'error-message';
        }
      }
    });
  }


  goToNextPage() {
    this.router.navigate(['/send-otp'])
  }
}
