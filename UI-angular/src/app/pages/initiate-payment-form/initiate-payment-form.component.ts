import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {PaymentService} from '../../services/payment-service.service';

@Component({
  selector: 'app-initiate-payment-form',
  imports: [
    FormsModule
  ],
  standalone:true,
  templateUrl: './initiate-payment-form.component.html',
  styleUrl: './initiate-payment-form.component.css'
})
export class InitiatePaymentFormComponent {

  constructor(private paymentService:PaymentService, private router: Router) {
  }

  form={
    card: {
      cardNumber: '',
      cvv: '',
      expiryDate: ''
    },
    items:'',
    clientName:'',
    amount:'',
  }

  submitForm(){
    this.paymentService.initiatePayment(this.form).subscribe({
      next: (res) => {
        this.paymentService.setReferenceNumber(res.referenceNumber);
        console.log('Payment initiated successfully:', res);
        alert('Payment initiated successfully!');
        this.router.navigate(['/send-otp']);

      },
      error: (err) => {
        console.error('Payment failed:', err);
        alert('Payment failed.');
      }
    });
  }




  goToNextPage() {
    this.router.navigate(['/send-otp'])
  }
}
